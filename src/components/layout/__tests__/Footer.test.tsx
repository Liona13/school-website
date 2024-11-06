import { render, screen, fireEvent } from '@testing-library/react';
import Footer from '../Footer';

// Mock framer-motion
jest.mock('framer-motion', () => ({
  motion: {
    div: ({ children, ...props }: React.PropsWithChildren<{}>) => <div {...props}>{children}</div>,
  },
}));

describe('Footer', () => {
  it('renders school info section', () => {
    render(<Footer />);
    
    expect(screen.getByText('SchoolMS')).toBeInTheDocument();
    expect(screen.getByText(/Empowering education for a brighter future/)).toBeInTheDocument();
  });

  it('renders social media links', () => {
    render(<Footer />);
    
    const facebook = screen.getByText('Facebook');
    const twitter = screen.getByText('Twitter');
    const linkedin = screen.getByText('LinkedIn');

    expect(facebook).toBeInTheDocument();
    expect(twitter).toBeInTheDocument();
    expect(linkedin).toBeInTheDocument();

    expect(facebook.closest('a')).toHaveAttribute('href', 'https://facebook.com');
    expect(twitter.closest('a')).toHaveAttribute('href', 'https://twitter.com');
    expect(linkedin.closest('a')).toHaveAttribute('href', 'https://linkedin.com');
  });

  it('renders quick links section', () => {
    render(<Footer />);
    
    const links = [
      { text: 'About Us', href: '/about' },
      { text: 'Admissions', href: '/admissions' },
      { text: 'Academics', href: '/academics' },
      { text: 'Campus Life', href: '/campus-life' },
      { text: 'News & Events', href: '/news' },
    ];

    links.forEach(({ text, href }) => {
      const link = screen.getByText(text);
      expect(link).toBeInTheDocument();
      expect(link.closest('a')).toHaveAttribute('href', href);
    });
  });

  it('renders contact info section', () => {
    render(<Footer />);
    
    expect(screen.getByText('123 Education Street')).toBeInTheDocument();
    expect(screen.getByText('Learning City, ED 12345')).toBeInTheDocument();
    expect(screen.getByText(/Phone: \+1 \(555\) 123-4567/)).toBeInTheDocument();
    expect(screen.getByText(/Email: info@schoolms.edu/)).toBeInTheDocument();
  });

  it('renders newsletter section', () => {
    render(<Footer />);
    
    expect(screen.getByText('Stay Updated')).toBeInTheDocument();
    expect(screen.getByText(/Subscribe to our newsletter/)).toBeInTheDocument();
    
    const emailInput = screen.getByPlaceholderText('Enter your email');
    expect(emailInput).toBeInTheDocument();
    expect(emailInput).toHaveAttribute('type', 'email');
    
    const subscribeButton = screen.getByText('Subscribe');
    expect(subscribeButton).toBeInTheDocument();
    expect(subscribeButton).toHaveAttribute('type', 'submit');
  });

  it('renders copyright notice with current year', () => {
    render(<Footer />);
    
    const currentYear = new Date().getFullYear();
    expect(screen.getByText(`© ${currentYear} SchoolMS. All rights reserved.`)).toBeInTheDocument();
  });

  it('has correct styling classes', () => {
    const { container } = render(<Footer />);
    
    // Check footer background
    expect(container.firstChild).toHaveClass('bg-gray-900');
    expect(container.firstChild).toHaveClass('text-white');
    
    // Check grid layout
    const grid = container.querySelector('.grid');
    expect(grid).toHaveClass('md:grid-cols-4');
  });

  it('handles newsletter form submission', () => {
    render(<Footer />);
    
    const emailInput = screen.getByPlaceholderText('Enter your email');
    const subscribeButton = screen.getByText('Subscribe');
    
    // Type email
    fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
    expect(emailInput).toHaveValue('test@example.com');
    
    // Submit form
    fireEvent.click(subscribeButton);
    // Note: Add actual form submission test when functionality is implemented
  });
}); 