import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import NewsletterSection from '@/components/public/news/NewsletterSection';

// Mock framer-motion
jest.mock('framer-motion', () => ({
  motion: {
    div: ({ children, ...props }: React.PropsWithChildren<object>) => <div {...props}>{children}</div>,
    form: ({ children, ...props }: React.PropsWithChildren<object>) => <form {...props}>{children}</form>,
  },
}));

describe('NewsletterSection Integration', () => {
  it('integrates with form submission flow', async () => {
    render(<NewsletterSection />);
    
    // Get form elements
    const emailInput = screen.getByPlaceholderText('Enter your email');
    const submitButton = screen.getByRole('button', { name: /subscribe/i });
    
    // Fill in email
    fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
    
    // Submit form
    fireEvent.click(submitButton);
    
    // Check loading state
    expect(submitButton).toBeDisabled();
    expect(screen.getByText('Subscribing...')).toBeInTheDocument();
    
    // Wait for success message
    await waitFor(() => {
      expect(screen.getByText('Thank you for subscribing!')).toBeInTheDocument();
    });
  });

  it('handles form validation errors correctly', async () => {
    render(<NewsletterSection />);
    
    const emailInput = screen.getByPlaceholderText('Enter your email');
    const submitButton = screen.getByRole('button', { name: /subscribe/i });
    
    // Test invalid email
    fireEvent.change(emailInput, { target: { value: 'invalid-email' } });
    fireEvent.click(submitButton);
    
    expect(screen.getByText('Please enter a valid email address')).toBeInTheDocument();
    expect(submitButton).not.toBeDisabled();
  });

  it('maintains state during user interactions', async () => {
    render(<NewsletterSection />);
    
    const emailInput = screen.getByPlaceholderText('Enter your email');
    
    // Type valid email
    fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
    expect(emailInput).toHaveValue('test@example.com');
    
    // Clear input
    fireEvent.change(emailInput, { target: { value: '' } });
    expect(emailInput).toHaveValue('');
    
    // Type invalid email and blur
    fireEvent.change(emailInput, { target: { value: 'invalid' } });
    fireEvent.blur(emailInput);
    expect(screen.getByText('Please enter a valid email')).toBeInTheDocument();
  });

  it('resets form after successful submission', async () => {
    render(<NewsletterSection />);
    
    const emailInput = screen.getByPlaceholderText('Enter your email');
    const submitButton = screen.getByRole('button', { name: /subscribe/i });
    
    // Submit valid email
    fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
    fireEvent.click(submitButton);
    
    // Wait for success state
    await waitFor(() => {
      expect(screen.getByText('Thank you for subscribing!')).toBeInTheDocument();
    });
    
    // Check form is reset
    expect(emailInput).not.toBeInTheDocument();
  });

  it('handles focus and blur events properly', () => {
    render(<NewsletterSection />);
    
    const emailInput = screen.getByPlaceholderText('Enter your email');
    
    // Focus input
    fireEvent.focus(emailInput);
    expect(emailInput).toHaveFocus();
    
    // Blur with invalid email
    fireEvent.change(emailInput, { target: { value: 'invalid' } });
    fireEvent.blur(emailInput);
    expect(screen.getByText('Please enter a valid email')).toBeInTheDocument();
    
    // Blur with valid email
    fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
    fireEvent.blur(emailInput);
    expect(screen.queryByText('Please enter a valid email')).not.toBeInTheDocument();
  });
}); 