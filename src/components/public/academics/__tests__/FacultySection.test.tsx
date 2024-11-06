import { render, screen } from '@testing-library/react';
import FacultySection from '../FacultySection';

// Mock framer-motion
jest.mock('framer-motion', () => ({
  motion: {
    div: ({ children, ...props }: React.PropsWithChildren<{}>) => <div {...props}>{children}</div>,
    h2: ({ children, ...props }: React.PropsWithChildren<{}>) => <h2 {...props}>{children}</h2>,
  },
}));

describe('FacultySection', () => {
  it('renders section title correctly', () => {
    render(<FacultySection />);
    expect(screen.getByText('Our Distinguished Faculty')).toBeInTheDocument();
  });

  it('renders all faculty members', () => {
    render(<FacultySection />);
    
    const facultyNames = [
      'Dr. Robert Wilson',
      'Prof. Lisa Chen',
      'Dr. Maria Garcia',
      'Prof. James Anderson'
    ];

    facultyNames.forEach(name => {
      expect(screen.getByText(name)).toBeInTheDocument();
    });
  });

  it('displays departments correctly', () => {
    render(<FacultySection />);
    
    const departments = [
      'Mathematics',
      'Science',
      'Languages',
      'Social Studies'
    ];

    departments.forEach(dept => {
      expect(screen.getByText(dept)).toBeInTheDocument();
    });
  });

  it('shows qualifications and experience details', () => {
    render(<FacultySection />);
    
    // Check qualifications
    expect(screen.getByText('Ph.D. in Mathematics')).toBeInTheDocument();
    expect(screen.getByText('Ph.D. in Physics')).toBeInTheDocument();
    expect(screen.getByText('Ph.D. in Linguistics')).toBeInTheDocument();
    expect(screen.getByText('Ph.D. in History')).toBeInTheDocument();
    
    // Check experience
    expect(screen.getByText('15+ years teaching experience')).toBeInTheDocument();
    expect(screen.getByText('12+ years teaching experience')).toBeInTheDocument();
    expect(screen.getByText('10+ years teaching experience')).toBeInTheDocument();
    expect(screen.getByText('18+ years teaching experience')).toBeInTheDocument();
  });

  it('displays specializations', () => {
    render(<FacultySection />);
    
    expect(screen.getByText('Advanced Calculus and Number Theory')).toBeInTheDocument();
    expect(screen.getByText('Quantum Mechanics and Astrophysics')).toBeInTheDocument();
    expect(screen.getByText('Comparative Literature and Spanish')).toBeInTheDocument();
    expect(screen.getByText('World History and Political Science')).toBeInTheDocument();
  });

  it('applies correct styling classes', () => {
    const { container } = render(<FacultySection />);
    
    // Check section background
    expect(container.firstChild).toHaveClass('bg-gray-50');
    
    // Check grid layout
    const grid = container.querySelector('.grid');
    expect(grid).toHaveClass('md:grid-cols-2');
    expect(grid).toHaveClass('lg:grid-cols-4');
    
    // Check faculty cards
    const cards = container.querySelectorAll('.bg-white');
    expect(cards).toHaveLength(4);
    cards.forEach(card => {
      expect(card).toHaveClass('rounded-lg');
      expect(card).toHaveClass('shadow-md');
    });
  });
}); 