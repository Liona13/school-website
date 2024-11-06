import { render, screen } from '@testing-library/react';
import MissionSection from '../MissionSection';

// Mock framer-motion
jest.mock('framer-motion', () => ({
  motion: {
    div: ({ children, ...props }: React.PropsWithChildren<{}>) => <div {...props}>{children}</div>,
    h2: ({ children, ...props }: React.PropsWithChildren<{}>) => <h2 {...props}>{children}</h2>,
  },
}));

describe('MissionSection', () => {
  it('renders section title correctly', () => {
    render(<MissionSection />);
    expect(screen.getByText('Our Mission & Vision')).toBeInTheDocument();
  });

  it('displays mission and vision content', () => {
    render(<MissionSection />);
    
    // Check mission content
    expect(screen.getByText('Mission')).toBeInTheDocument();
    expect(screen.getByText(/To provide exceptional education that empowers students/)).toBeInTheDocument();
    
    // Check vision content
    expect(screen.getByText('Vision')).toBeInTheDocument();
    expect(screen.getByText(/To be a leading educational institution/)).toBeInTheDocument();
  });

  it('renders all core values', () => {
    render(<MissionSection />);
    
    const values = [
      'Excellence in Education',
      'Innovation and Creativity',
      'Integrity and Ethics',
      'Diversity and Inclusion',
      'Community Engagement'
    ];

    values.forEach(value => {
      expect(screen.getByText(value)).toBeInTheDocument();
    });

    // Check value descriptions
    expect(screen.getByText(/Committed to the highest standards/)).toBeInTheDocument();
    expect(screen.getByText(/Fostering innovative thinking/)).toBeInTheDocument();
    expect(screen.getByText(/Building character through/)).toBeInTheDocument();
    expect(screen.getByText(/Celebrating diversity/)).toBeInTheDocument();
    expect(screen.getByText(/Actively participating/)).toBeInTheDocument();
  });

  it('applies correct styling classes', () => {
    const { container } = render(<MissionSection />);
    
    // Check section background
    expect(container.firstChild).toHaveClass('bg-gray-50');
    
    // Check grid layout
    const grid = container.querySelector('.grid');
    expect(grid).toHaveClass('md:grid-cols-2');
    
    // Check card styling
    const cards = container.querySelectorAll('.bg-white');
    cards.forEach(card => {
      expect(card).toHaveClass('rounded-xl');
      expect(card).toHaveClass('shadow-sm');
    });
  });

  it('maintains consistent text hierarchy', () => {
    const { container } = render(<MissionSection />);
    
    // Check main heading
    const mainHeading = screen.getByText('Our Mission & Vision');
    expect(mainHeading).toHaveClass('heading-2');
    expect(mainHeading).toHaveClass('text-primary');
    
    // Check subheadings
    const subheadings = container.querySelectorAll('h3');
    subheadings.forEach(heading => {
      expect(heading).toHaveClass('text-2xl');
      expect(heading).toHaveClass('font-bold');
    });
  });

  it('has proper spacing between elements', () => {
    const { container } = render(<MissionSection />);
    
    // Check section padding
    expect(container.firstChild).toHaveClass('py-16');
    
    // Check heading margin
    const heading = screen.getByText('Our Mission & Vision');
    expect(heading).toHaveClass('mb-12');
    
    // Check grid gap
    const grid = container.querySelector('.grid');
    expect(grid).toHaveClass('gap-8');
  });
}); 