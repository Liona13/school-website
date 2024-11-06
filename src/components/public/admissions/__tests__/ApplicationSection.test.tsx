import { render, screen } from '@testing-library/react';
import ApplicationSection from '../ApplicationSection';

// Mock framer-motion
jest.mock('framer-motion', () => ({
  motion: {
    div: ({ children, ...props }: React.PropsWithChildren<object>) => <div {...props}>{children}</div>,
  },
}));

// Mock next/link
jest.mock('next/link', () => {
  return ({ children, href }: { children: React.ReactNode; href: string }) => (
    <a href={href}>{children}</a>
  );
});

describe('ApplicationSection', () => {
  it('renders section title correctly', () => {
    render(<ApplicationSection />);
    expect(screen.getByText('Ready to Apply?')).toBeInTheDocument();
  });

  it('displays application deadlines', () => {
    render(<ApplicationSection />);
    
    // Check deadline titles
    expect(screen.getByText('Early Decision')).toBeInTheDocument();
    expect(screen.getByText('Regular Decision')).toBeInTheDocument();
    
    // Check deadline dates
    expect(screen.getByText('November 15, 2024')).toBeInTheDocument();
    expect(screen.getByText('January 15, 2025')).toBeInTheDocument();
  });

  it('renders application buttons and links', () => {
    render(<ApplicationSection />);
    
    // Check main CTA button
    const startButton = screen.getByText('Start Application');
    expect(startButton).toBeInTheDocument();
    expect(startButton.closest('a')).toHaveAttribute('href', '/auth/register');
    
    // Check login link
    const loginLink = screen.getByText('Log in to continue');
    expect(loginLink).toBeInTheDocument();
    expect(loginLink.closest('a')).toHaveAttribute('href', '/auth/login');
  });

  it('shows help section with contact information', () => {
    render(<ApplicationSection />);
    
    expect(screen.getByText('Need Help?')).toBeInTheDocument();
    expect(screen.getByText(/Our admissions team is here to assist/)).toBeInTheDocument();
    
    // Check contact links
    const emailLink = screen.getByText('admissions@schoolms.edu');
    expect(emailLink).toHaveAttribute('href', 'mailto:admissions@schoolms.edu');
    
    const phoneLink = screen.getByText('(555) 123-4567');
    expect(phoneLink).toHaveAttribute('href', 'tel:+15551234567');
  });

  it('applies correct styling classes', () => {
    const { container } = render(<ApplicationSection />);
    
    // Check section background
    expect(container.firstChild).toHaveClass('bg-white');
    
    // Check deadline cards
    const deadlineCards = container.querySelectorAll('.bg-white.rounded-lg');
    expect(deadlineCards).toHaveLength(2);
    
    // Check help section styling
    const helpSection = container.querySelector('.bg-blue-50');
    expect(helpSection).toBeInTheDocument();
    expect(helpSection).toHaveClass('rounded-lg');
  });

  it('maintains consistent text hierarchy', () => {
    render(<ApplicationSection />);
    
    // Check main heading
    const mainHeading = screen.getByText('Ready to Apply?');
    expect(mainHeading.tagName).toBe('H2');
    expect(mainHeading).toHaveClass('text-3xl', 'font-bold');
    
    // Check subheading
    const subHeading = screen.getByText('Application Deadlines');
    expect(subHeading.tagName).toBe('H3');
    expect(subHeading).toHaveClass('text-xl', 'font-semibold');
  });

  it('has proper link styling and hover states', () => {
    render(<ApplicationSection />);
    
    // Check primary button styling
    const startButton = screen.getByText('Start Application');
    expect(startButton).toHaveClass('bg-primary', 'text-white', 'hover:bg-primary-dark');
    
    // Check contact link styling
    const contactLinks = [
      screen.getByText('admissions@schoolms.edu'),
      screen.getByText('(555) 123-4567')
    ];
    
    contactLinks.forEach(link => {
      expect(link).toHaveClass('text-primary', 'hover:underline');
    });
  });
}); 