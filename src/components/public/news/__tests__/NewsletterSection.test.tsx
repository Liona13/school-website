import { render, screen, fireEvent } from '@testing-library/react';
import NewsletterSection from '../NewsletterSection';

// Mock framer-motion
jest.mock('framer-motion', () => ({
  motion: {
    div: ({ children, ...props }: React.PropsWithChildren<object>) => <div {...props}>{children}</div>,
    h2: ({ children, ...props }: React.PropsWithChildren<object>) => <h2 {...props}>{children}</h2>,
    form: ({ children, ...props }: React.PropsWithChildren<object>) => <form {...props}>{children}</form>,
  },
}));

describe('NewsletterSection', () => {
  it('renders section title correctly', () => {
    render(<NewsletterSection />);
    expect(screen.getByText('Subscribe to Our Newsletter')).toBeInTheDocument();
  });

  it('displays subscription form', () => {
    render(<NewsletterSection />);
    
    // Check form elements
    expect(screen.getByPlaceholderText('Enter your email')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /subscribe/i })).toBeInTheDocument();
  });

  it('handles form submission', () => {
    const { container } = render(<NewsletterSection />);
    
    // Get form elements
    const emailInput = screen.getByPlaceholderText('Enter your email');
    const submitButton = screen.getByRole('button', { name: /subscribe/i });
    const form = container.querySelector('form');
    
    // Fill in email
    fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
    expect(emailInput).toHaveValue('test@example.com');
    
    // Submit form
    fireEvent.submit(form!);
    
    // Check if button is disabled during submission
    expect(submitButton).toBeDisabled();
  });

  it('validates email input', () => {
    render(<NewsletterSection />);
    
    const emailInput = screen.getByPlaceholderText('Enter your email');
    
    // Test invalid email
    fireEvent.change(emailInput, { target: { value: 'invalid-email' } });
    fireEvent.blur(emailInput);
    expect(screen.getByText(/Please enter a valid email/i)).toBeInTheDocument();
    
    // Test valid email
    fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
    fireEvent.blur(emailInput);
    expect(screen.queryByText(/Please enter a valid email/i)).not.toBeInTheDocument();
  });

  it('applies correct styling classes', () => {
    const { container } = render(<NewsletterSection />);
    
    // Check section background
    expect(container.firstChild).toHaveClass('bg-blue-50');
    
    // Check form styling
    const form = container.querySelector('form');
    expect(form).toHaveClass('max-w-md');
    expect(form).toHaveClass('mx-auto');
    
    // Check input styling
    const input = screen.getByPlaceholderText('Enter your email');
    expect(input).toHaveClass('rounded-lg');
    expect(input).toHaveClass('border-gray-300');
    
    // Check button styling
    const button = screen.getByRole('button');
    expect(button).toHaveClass('bg-primary');
    expect(button).toHaveClass('text-white');
    expect(button).toHaveClass('rounded-lg');
  });

  it('shows loading state during submission', () => {
    render(<NewsletterSection />);
    
    const form = screen.getByRole('form');
    fireEvent.submit(form);
    
    const button = screen.getByRole('button');
    expect(button).toBeDisabled();
    expect(button).toHaveClass('opacity-75');
    expect(screen.getByText('Subscribing...')).toBeInTheDocument();
  });

  it('displays success message after subscription', async () => {
    render(<NewsletterSection />);
    
    const emailInput = screen.getByPlaceholderText('Enter your email');
    const form = screen.getByRole('form');
    
    fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
    fireEvent.submit(form);
    
    // Success message should appear
    expect(await screen.findByText(/Thank you for subscribing!/i)).toBeInTheDocument();
  });
}); 