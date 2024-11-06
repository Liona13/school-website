import { render, screen } from '@testing-library/react';
import ProgramsSection from '../ProgramsSection';

// Mock framer-motion
jest.mock('framer-motion', () => ({
  motion: {
    div: ({ children, ...props }: React.PropsWithChildren<{}>) => <div {...props}>{children}</div>,
    h2: ({ children, ...props }: React.PropsWithChildren<{}>) => <h2 {...props}>{children}</h2>,
  },
}));

describe('ProgramsSection', () => {
  it('renders section title correctly', () => {
    render(<ProgramsSection />);
    expect(screen.getByText('Academic Programs')).toBeInTheDocument();
  });

  it('renders all academic programs', () => {
    render(<ProgramsSection />);
    
    const programs = [
      'Primary Education',
      'Middle School',
      'High School'
    ];

    programs.forEach(program => {
      expect(screen.getByText(program)).toBeInTheDocument();
    });
  });

  it('displays grade ranges for each program', () => {
    render(<ProgramsSection />);
    
    expect(screen.getByText('Grades 1-5')).toBeInTheDocument();
    expect(screen.getByText('Grades 6-8')).toBeInTheDocument();
    expect(screen.getByText('Grades 9-12')).toBeInTheDocument();
  });

  it('shows program descriptions', () => {
    render(<ProgramsSection />);
    
    expect(screen.getByText(/Building strong foundations/)).toBeInTheDocument();
    expect(screen.getByText(/Fostering critical thinking/)).toBeInTheDocument();
    expect(screen.getByText(/Preparing students for higher education/)).toBeInTheDocument();
  });

  it('lists features for each program', () => {
    render(<ProgramsSection />);
    
    // Primary Education features
    expect(screen.getByText('Core Curriculum')).toBeInTheDocument();
    expect(screen.getByText('Arts & Music')).toBeInTheDocument();
    
    // Middle School features
    expect(screen.getByText('STEM Programs')).toBeInTheDocument();
    expect(screen.getByText('Project-Based Learning')).toBeInTheDocument();
    
    // High School features
    expect(screen.getByText('AP/IB Programs')).toBeInTheDocument();
    expect(screen.getByText('Career Guidance')).toBeInTheDocument();
  });

  it('applies correct styling classes', () => {
    const { container } = render(<ProgramsSection />);
    
    // Check section background
    expect(container.firstChild).toHaveClass('bg-gray-50');
    
    // Check grid layout
    const grid = container.querySelector('.grid');
    expect(grid).toHaveClass('md:grid-cols-3');
    
    // Check program cards
    const cards = container.querySelectorAll('.bg-white');
    cards.forEach(card => {
      expect(card).toHaveClass('rounded-lg');
      expect(card).toHaveClass('shadow-md');
    });
  });

  it('renders checkmark icons for features', () => {
    const { container } = render(<ProgramsSection />);
    
    const checkmarks = container.querySelectorAll('svg');
    expect(checkmarks.length).toBeGreaterThan(0);
    
    checkmarks.forEach(icon => {
      expect(icon).toHaveClass('text-green-500');
    });
  });
}); 