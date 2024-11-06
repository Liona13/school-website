import { render, screen } from '@testing-library/react';
import ContactInfo from '../ContactInfo';

// Mock framer-motion
jest.mock('framer-motion', () => ({
  motion: {
    div: ({ children, ...props }: React.PropsWithChildren<Record<string, unknown>>) => 
      <div {...props}>{children}</div>,
  },
}));

// Mock heroicons
jest.mock('@heroicons/react/24/outline', () => ({
  EnvelopeIcon: () => <div data-testid="mock-envelope-icon" />,
  PhoneIcon: () => <div data-testid="mock-phone-icon" />,
  MapPinIcon: () => <div data-testid="mock-map-icon" />,
}));

describe('ContactInfo', () => {
  it('renders all contact sections', () => {
    render(<ContactInfo />);
    
    // Check section titles
    expect(screen.getByText('Call Us')).toBeInTheDocument();
    expect(screen.getByText('Email Us')).toBeInTheDocument();
    expect(screen.getByText('Visit Us')).toBeInTheDocument();
  });

  it('displays phone contact details', () => {
    render(<ContactInfo />);
    
    expect(screen.getByText('Main Office')).toBeInTheDocument();
    expect(screen.getByText('+1 (555) 123-4567')).toBeInTheDocument();
    expect(screen.getByText('Admissions')).toBeInTheDocument();
    expect(screen.getByText('+1 (555) 234-5678')).toBeInTheDocument();
    expect(screen.getByText('Mon-Fri: 8:00 AM - 5:00 PM')).toBeInTheDocument();
  });

  it('shows email addresses', () => {
    render(<ContactInfo />);
    
    expect(screen.getByText('General Inquiries')).toBeInTheDocument();
    expect(screen.getByText('info@schoolms.edu')).toBeInTheDocument();
    expect(screen.getByText('admissions@schoolms.edu')).toBeInTheDocument();
    expect(screen.getByText('support@schoolms.edu')).toBeInTheDocument();
  });

  it('displays address information', () => {
    render(<ContactInfo />);
    
    expect(screen.getByText('123 Education Street')).toBeInTheDocument();
    expect(screen.getByText('Learning City, ED 12345')).toBeInTheDocument();
    expect(screen.getByText('United States')).toBeInTheDocument();
  });

  it('renders contact icons', () => {
    render(<ContactInfo />);
    
    expect(screen.getByTestId('mock-phone-icon')).toBeInTheDocument();
    expect(screen.getByTestId('mock-envelope-icon')).toBeInTheDocument();
    expect(screen.getByTestId('mock-map-icon')).toBeInTheDocument();
  });

  it('applies correct styling classes', () => {
    const { container } = render(<ContactInfo />);
    
    // Check section background
    expect(container.firstChild).toHaveClass('bg-white');
    
    // Check grid layout
    const grid = container.querySelector('.grid');
    expect(grid).toHaveClass('md:grid-cols-3');
    
    // Check contact cards
    const cards = container.querySelectorAll('.bg-gray-50');
    expect(cards).toHaveLength(3);
    cards.forEach(card => {
      expect(card).toHaveClass('rounded-xl');
      expect(card).toHaveClass('hover:shadow-lg');
    });
  });

  it('maintains consistent text hierarchy', () => {
    const { container } = render(<ContactInfo />);
    
    // Check section titles
    const titles = screen.getAllByRole('heading', { level: 3 });
    titles.forEach(title => {
      expect(title).toHaveClass('text-xl');
      expect(title).toHaveClass('font-semibold');
    });
    
    // Check labels
    const labels = container.querySelectorAll('.text-sm.text-gray-500');
    expect(labels).toHaveLength(9); // 3 labels per contact section
  });
}); 