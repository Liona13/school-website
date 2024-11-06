import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import ContactForm from '../ContactForm';

// Mock framer-motion
jest.mock('framer-motion', () => ({
  motion: {
    div: ({ children, ...props }: React.PropsWithChildren<Record<string, unknown>>) => 
      <div {...props}>{children}</div>,
    form: ({ children, ...props }: React.PropsWithChildren<Record<string, unknown>>) => 
      <form {...props}>{children}</form>,
  },
}));

describe('ContactForm', () => {
  it('renders form fields correctly', () => {
    render(<ContactForm />);
    
    // Check form fields
    expect(screen.getByLabelText(/name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/subject/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/message/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /send message/i })).toBeInTheDocument();
  });

  it('validates required fields', async () => {
    render(<ContactForm />);
    
    // Try to submit empty form
    fireEvent.click(screen.getByRole('button', { name: /send message/i }));
    
    // Check error messages
    expect(await screen.findByText(/name is required/i)).toBeInTheDocument();
    expect(await screen.findByText(/email is required/i)).toBeInTheDocument();
    expect(await screen.findByText(/message is required/i)).toBeInTheDocument();
  });

  it('validates email format', async () => {
    render(<ContactForm />);
    
    // Enter invalid email
    const emailInput = screen.getByLabelText(/email/i);
    fireEvent.change(emailInput, { target: { value: 'invalid-email' } });
    fireEvent.blur(emailInput);
    
    // Check error message
    expect(await screen.findByText(/please enter a valid email/i)).toBeInTheDocument();
  });

  it('handles form submission', async () => {
    render(<ContactForm />);
    
    // Fill form
    fireEvent.change(screen.getByLabelText(/name/i), { target: { value: 'John Doe' } });
    fireEvent.change(screen.getByLabelText(/email/i), { target: { value: 'john@example.com' } });
    fireEvent.change(screen.getByLabelText(/subject/i), { target: { value: 'Test Subject' } });
    fireEvent.change(screen.getByLabelText(/message/i), { target: { value: 'Test Message' } });
    
    // Submit form
    fireEvent.click(screen.getByRole('button', { name: /send message/i }));
    
    // Check loading state
    expect(screen.getByText(/sending/i)).toBeInTheDocument();
    expect(screen.getByRole('button')).toBeDisabled();
    
    // Check success message
    await waitFor(() => {
      expect(screen.getByText(/message sent successfully/i)).toBeInTheDocument();
    });
  });

  it('applies correct styling classes', () => {
    const { container } = render(<ContactForm />);
    
    // Check form container
    expect(container.firstChild).toHaveClass('bg-white');
    expect(container.firstChild).toHaveClass('rounded-xl');
    
    // Check input styling
    const inputs = screen.getAllByRole('textbox');
    inputs.forEach(input => {
      expect(input).toHaveClass('rounded-lg');
      expect(input).toHaveClass('border-gray-300');
      expect(input).toHaveClass('focus:ring-green-500');
    });
    
    // Check button styling
    const button = screen.getByRole('button');
    expect(button).toHaveClass('bg-green-600');
    expect(button).toHaveClass('text-white');
    expect(button).toHaveClass('rounded-lg');
  });

  it('shows error states on invalid input', async () => {
    render(<ContactForm />);
    
    // Enter invalid data
    const nameInput = screen.getByLabelText(/name/i);
    fireEvent.change(nameInput, { target: { value: 'a' } });
    fireEvent.blur(nameInput);
    
    // Check error styling
    expect(nameInput).toHaveClass('border-red-300');
    expect(await screen.findByText(/name must be at least/i)).toHaveClass('text-red-500');
  });

  it('maintains accessibility features', () => {
    render(<ContactForm />);
    
    // Check form landmarks
    expect(screen.getByRole('form')).toBeInTheDocument();
    
    // Check input labels
    const inputs = screen.getAllByRole('textbox');
    inputs.forEach(input => {
      expect(input).toHaveAccessibleName();
    });
    
    // Check error messages are associated with inputs
    fireEvent.click(screen.getByRole('button'));
    const errors = screen.getAllByRole('alert');
    errors.forEach(error => {
      expect(error).toHaveAttribute('aria-live', 'polite');
    });
  });
}); 