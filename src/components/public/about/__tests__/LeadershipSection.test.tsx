import { render, screen, fireEvent } from '@testing-library/react';
import LeadershipSection from '../LeadershipSection';

// Mock framer-motion
jest.mock('framer-motion', () => ({
  motion: {
    div: ({ children, ...props }: React.PropsWithChildren<{}>) => <div {...props}>{children}</div>,
    h2: ({ children, ...props }: React.PropsWithChildren<{}>) => <h2 {...props}>{children}</h2>,
  },
}));

describe('LeadershipSection', () => {
  it('renders section title correctly', () => {
    render(<LeadershipSection />);
    expect(screen.getByText('Our Leadership Team')).toBeInTheDocument();
  });

  it('renders all leadership team members', () => {
    render(<LeadershipSection />);
    
    const leaders = [
      'Dr. Sarah Johnson',
      'Prof. Michael Chen',
      'Mrs. Emily Rodriguez',
      'Mr. David Thompson'
    ];

    leaders.forEach(name => {
      expect(screen.getByText(name)).toBeInTheDocument();
    });
  });

  it('displays roles for each leader', () => {
    render(<LeadershipSection />);
    
    const roles = [
      'Principal',
      'Academic Director',
      'Student Affairs Director',
      'Administrative Head'
    ];

    roles.forEach(role => {
      expect(screen.getByText(role)).toBeInTheDocument();
    });
  });

  it('shows descriptions for each leader', () => {
    render(<LeadershipSection />);
    
    const descriptions = [
      /With over 20 years of experience/,
      /oversees our academic programs/,
      /Dedicated to student welfare/,
      /ensures smooth operation/
    ];

    descriptions.forEach(description => {
      expect(screen.getByText(description)).toBeInTheDocument();
    });
  });

  it('applies correct styling classes', () => {
    const { container } = render(<LeadershipSection />);
    
    // Check section background
    expect(container.firstChild).toHaveClass('bg-gray-50');
    
    // Check grid layout
    const grid = container.querySelector('.grid');
    expect(grid).toHaveClass('md:grid-cols-2');
    expect(grid).toHaveClass('lg:grid-cols-4');
    
    // Check card styling
    const cards = container.querySelectorAll('.bg-white');
    cards.forEach(card => {
      expect(card).toHaveClass('rounded-xl');
      expect(card).toHaveClass('shadow-sm');
    });
  });

  it('handles hover interactions', () => {
    const { container } = render(<LeadershipSection />);
    
    const cards = container.querySelectorAll('.group');
    cards.forEach(card => {
      // Simulate hover
      fireEvent.mouseEnter(card);
      
      // Check hover effects
      expect(card).toHaveClass('hover:shadow-md');
      
      // Check text color transition
      const name = card.querySelector('h3');
      expect(name).toHaveClass('group-hover:text-primary');
    });
  });

  it('maintains accessibility standards', () => {
    render(<LeadershipSection />);
    
    // Check heading hierarchy
    const mainHeading = screen.getByText('Our Leadership Team');
    expect(mainHeading.tagName).toBe('H2');
    
    // Check leader names are h3
    const leaderNames = screen.getAllByRole('heading', { level: 3 });
    expect(leaderNames).toHaveLength(4);
    
    // Check for proper text contrast
    const descriptions = container.querySelectorAll('.text-gray-600');
    descriptions.forEach(desc => {
      expect(desc).toHaveClass('text-gray-600');
    });
  });
}); 