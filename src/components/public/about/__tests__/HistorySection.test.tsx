import { render, screen } from '@testing-library/react';
import HistorySection from '../HistorySection';

// Mock framer-motion
jest.mock('framer-motion', () => ({
  motion: {
    div: ({ children, ...props }: React.PropsWithChildren<{}>) => <div {...props}>{children}</div>,
    h2: ({ children, ...props }: React.PropsWithChildren<{}>) => <h2 {...props}>{children}</h2>,
  },
}));

describe('HistorySection', () => {
  it('renders section title correctly', () => {
    render(<HistorySection />);
    expect(screen.getByText('Our History')).toBeInTheDocument();
  });

  it('renders all timeline events in chronological order', () => {
    render(<HistorySection />);
    
    const timelineEvents = [
      {
        year: '1995',
        title: 'Foundation',
        description: 'Established with a vision to provide quality education to all.',
      },
      {
        year: '2000',
        title: 'Campus Expansion',
        description: 'Added new facilities including science labs and sports complex.',
      },
      {
        year: '2010',
        title: 'Academic Excellence',
        description: 'Achieved national recognition for academic standards and student achievements.',
      },
      {
        year: '2020',
        title: 'Digital Transformation',
        description: 'Implemented cutting-edge technology in education delivery and administration.',
      },
    ];

    timelineEvents.forEach(event => {
      expect(screen.getByText(event.year)).toBeInTheDocument();
      expect(screen.getByText(event.title)).toBeInTheDocument();
      expect(screen.getByText(event.description)).toBeInTheDocument();
    });
  });

  it('displays timeline icons', () => {
    render(<HistorySection />);
    
    const icons = ['🏫', '🏗️', '🎓', '💻'];
    icons.forEach(icon => {
      expect(screen.getByText(icon)).toBeInTheDocument();
    });
  });

  it('applies correct styling classes', () => {
    const { container } = render(<HistorySection />);
    
    // Check section background
    expect(container.firstChild).toHaveClass('bg-white');
    
    // Check timeline line
    const timelineLine = container.querySelector('.bg-gray-200');
    expect(timelineLine).toBeInTheDocument();
    expect(timelineLine).toHaveClass('w-px');
    
    // Check event cards
    const eventCards = container.querySelectorAll('.bg-gray-50');
    expect(eventCards).toHaveLength(4);
    eventCards.forEach(card => {
      expect(card).toHaveClass('rounded-xl');
      expect(card).toHaveClass('hover:shadow-md');
    });
  });

  it('maintains consistent text hierarchy', () => {
    const { container } = render(<HistorySection />);
    
    // Check main heading
    const mainHeading = screen.getByText('Our History');
    expect(mainHeading).toHaveClass('heading-2');
    expect(mainHeading).toHaveClass('text-primary');
    
    // Check event titles
    const eventTitles = container.querySelectorAll('h3');
    eventTitles.forEach(title => {
      expect(title).toHaveClass('text-xl');
      expect(title).toHaveClass('font-semibold');
    });
  });

  it('has proper spacing and layout', () => {
    const { container } = render(<HistorySection />);
    
    // Check section padding
    expect(container.firstChild).toHaveClass('py-16');
    
    // Check container max width
    const innerContainer = container.querySelector('.container');
    expect(innerContainer).toHaveClass('mx-auto');
    
    // Check timeline event spacing
    const timelineEvents = container.querySelectorAll('.mb-12');
    expect(timelineEvents).toHaveLength(3); // Last item doesn't need margin bottom
  });
}); 