import { render, screen } from '@testing-library/react';
import CurriculumSection from '../CurriculumSection';

// Mock framer-motion
jest.mock('framer-motion', () => ({
  motion: {
    div: ({ children, ...props }: React.PropsWithChildren<{}>) => <div {...props}>{children}</div>,
    h2: ({ children, ...props }: React.PropsWithChildren<{}>) => <h2 {...props}>{children}</h2>,
    li: ({ children, ...props }: React.PropsWithChildren<{}>) => <li {...props}>{children}</li>,
    p: ({ children, ...props }: React.PropsWithChildren<{}>) => <p {...props}>{children}</p>,
  },
}));

describe('CurriculumSection', () => {
  it('renders section title correctly', () => {
    render(<CurriculumSection />);
    expect(screen.getByText('Our Curriculum')).toBeInTheDocument();
  });

  it('renders all subject categories', () => {
    render(<CurriculumSection />);
    
    const categories = [
      'Core Subjects',
      'Languages',
      'Arts & Culture',
      'Technology'
    ];

    categories.forEach(category => {
      expect(screen.getByText(category)).toBeInTheDocument();
    });
  });

  it('displays subjects under each category', () => {
    render(<CurriculumSection />);
    
    // Core Subjects
    expect(screen.getByText('Mathematics')).toBeInTheDocument();
    expect(screen.getByText('Science')).toBeInTheDocument();
    expect(screen.getByText('English Language Arts')).toBeInTheDocument();
    expect(screen.getByText('Social Studies')).toBeInTheDocument();
    
    // Languages
    expect(screen.getByText('Spanish')).toBeInTheDocument();
    expect(screen.getByText('French')).toBeInTheDocument();
    expect(screen.getByText('Mandarin')).toBeInTheDocument();
    expect(screen.getByText('Latin')).toBeInTheDocument();
    
    // Arts & Culture
    expect(screen.getByText('Visual Arts')).toBeInTheDocument();
    expect(screen.getByText('Music')).toBeInTheDocument();
    expect(screen.getByText('Drama')).toBeInTheDocument();
    expect(screen.getByText('Cultural Studies')).toBeInTheDocument();
    
    // Technology
    expect(screen.getByText('Computer Science')).toBeInTheDocument();
    expect(screen.getByText('Digital Media')).toBeInTheDocument();
    expect(screen.getByText('Robotics')).toBeInTheDocument();
    expect(screen.getByText('Web Development')).toBeInTheDocument();
  });

  it('applies correct styling classes', () => {
    const { container } = render(<CurriculumSection />);
    
    // Check section background
    expect(container.firstChild).toHaveClass('bg-white');
    
    // Check grid layout
    const grid = container.querySelector('.grid');
    expect(grid).toHaveClass('md:grid-cols-2');
    expect(grid).toHaveClass('lg:grid-cols-4');
    
    // Check category cards
    const cards = container.querySelectorAll('.bg-gray-50');
    expect(cards).toHaveLength(4);
    cards.forEach(card => {
      expect(card).toHaveClass('rounded-xl');
    });
  });

  it('renders arrow icons for subjects', () => {
    const { container } = render(<CurriculumSection />);
    
    const arrows = container.querySelectorAll('svg');
    expect(arrows.length).toBeGreaterThan(0);
    
    arrows.forEach(icon => {
      expect(icon).toHaveClass('text-primary');
    });
  });

  it('displays curriculum description', () => {
    render(<CurriculumSection />);
    
    expect(screen.getByText(/Our curriculum is designed to provide/i)).toBeInTheDocument();
    expect(screen.getByText(/critical thinking, creativity, and practical application/i)).toBeInTheDocument();
  });
}); 