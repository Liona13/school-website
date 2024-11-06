import { render, screen } from '@testing-library/react';
import ProcessSection from '../ProcessSection';

// Mock framer-motion
jest.mock('framer-motion', () => ({
  motion: {
    div: ({ children, ...props }: React.PropsWithChildren<object>) => <div {...props}>{children}</div>,
    h2: ({ children, ...props }: React.PropsWithChildren<object>) => <h2 {...props}>{children}</h2>,
  },
}));

describe('ProcessSection', () => {
  it('renders section title correctly', () => {
    render(<ProcessSection />);
    expect(screen.getByText('Admission Process')).toBeInTheDocument();
  });

  it('displays all process steps in correct order', () => {
    render(<ProcessSection />);
    
    const steps = [
      {
        number: '01',
        title: 'Submit Application',
        description: 'Complete the online application form with all required personal and academic information.'
      },
      {
        number: '02',
        title: 'Document Review',
        description: 'Submit required documents including transcripts, recommendations, and test scores.'
      },
      {
        number: '03',
        title: 'Interview',
        description: 'Schedule and complete an interview with our admissions team.'
      },
      {
        number: '04',
        title: 'Decision & Enrollment',
        description: 'Receive admission decision and complete enrollment process if accepted.'
      }
    ];

    steps.forEach(step => {
      expect(screen.getByText(step.number)).toBeInTheDocument();
      expect(screen.getByText(step.title)).toBeInTheDocument();
      expect(screen.getByText(step.description)).toBeInTheDocument();
    });
  });

  it('renders step numbers in circular containers', () => {
    const { container } = render(<ProcessSection />);
    
    const numberContainers = container.querySelectorAll('.w-12.h-12.bg-primary.rounded-full');
    expect(numberContainers).toHaveLength(4);
    
    numberContainers.forEach((container, index) => {
      expect(container).toHaveClass('flex', 'items-center', 'justify-center');
      expect(container.textContent).toBe(`0${index + 1}`);
    });
  });

  it('displays icons for each step', () => {
    const { container } = render(<ProcessSection />);
    
    const icons = container.querySelectorAll('svg');
    expect(icons).toHaveLength(4);
    
    icons.forEach(icon => {
      expect(icon).toHaveClass('w-6', 'h-6');
      expect(icon).toHaveClass('text-primary');
    });
  });

  it('applies correct styling classes', () => {
    const { container } = render(<ProcessSection />);
    
    // Check section background
    expect(container.firstChild).toHaveClass('bg-white');
    
    // Check container max width
    const innerContainer = container.querySelector('.max-w-6xl');
    expect(innerContainer).toHaveClass('mx-auto');
    
    // Check step layout
    const steps = container.querySelectorAll('.flex.gap-8');
    steps.forEach(step => {
      expect(step).toHaveClass('items-start');
      expect(step).toHaveClass('mb-12');
    });
  });

  it('maintains consistent text hierarchy', () => {
    render(<ProcessSection />);
    
    // Check main heading
    const mainHeading = screen.getByText('Admission Process');
    expect(mainHeading).toHaveClass('text-3xl', 'font-bold', 'text-center');
    
    // Check step titles
    const stepTitles = screen.getAllByRole('heading', { level: 3 });
    stepTitles.forEach(title => {
      expect(title).toHaveClass('text-xl', 'font-semibold');
    });
  });
}); 