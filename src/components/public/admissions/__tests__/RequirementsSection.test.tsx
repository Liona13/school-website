import { render, screen } from '@testing-library/react';
import RequirementsSection from '../RequirementsSection';

// Mock framer-motion
jest.mock('framer-motion', () => ({
  motion: {
    div: ({ children, ...props }: React.PropsWithChildren<object>) => <div {...props}>{children}</div>,
    h2: ({ children, ...props }: React.PropsWithChildren<object>) => <h2 {...props}>{children}</h2>,
    li: ({ children, ...props }: React.PropsWithChildren<object>) => <li {...props}>{children}</li>,
  },
}));

describe('RequirementsSection', () => {
  it('renders section title correctly', () => {
    render(<RequirementsSection />);
    expect(screen.getByText('Admission Requirements')).toBeInTheDocument();
  });

  it('displays all requirement categories', () => {
    render(<RequirementsSection />);
    
    const categories = [
      'Academic Records',
      'Personal Documents',
      'Additional Requirements'
    ];

    categories.forEach(category => {
      expect(screen.getByText(category)).toBeInTheDocument();
    });
  });

  it('shows academic record requirements', () => {
    render(<RequirementsSection />);
    
    const academicRecords = [
      'Official transcripts from previous schools',
      'Standardized test scores (if applicable)',
      'Academic recommendations',
      'School reports and grade sheets'
    ];

    academicRecords.forEach(record => {
      expect(screen.getByText(record)).toBeInTheDocument();
    });
  });

  it('displays personal document requirements', () => {
    render(<RequirementsSection />);
    
    const personalDocs = [
      'Birth certificate',
      'Passport-size photographs',
      'Proof of residence',
      'Medical records and immunization history'
    ];

    personalDocs.forEach(doc => {
      expect(screen.getByText(doc)).toBeInTheDocument();
    });
  });

  it('shows additional requirements', () => {
    render(<RequirementsSection />);
    
    const additionalReqs = [
      'Personal statement or essay',
      'Parent/guardian information',
      'Emergency contact details',
      'Previous extracurricular records'
    ];

    additionalReqs.forEach(req => {
      expect(screen.getByText(req)).toBeInTheDocument();
    });
  });

  it('applies correct styling classes', () => {
    const { container } = render(<RequirementsSection />);
    
    // Check section background
    expect(container.firstChild).toHaveClass('bg-gray-50');
    
    // Check grid layout
    const grid = container.querySelector('.grid');
    expect(grid).toHaveClass('md:grid-cols-3');
    expect(grid).toHaveClass('gap-8');
    
    // Check requirement cards
    const cards = container.querySelectorAll('.bg-white');
    cards.forEach(card => {
      expect(card).toHaveClass('rounded-lg');
      expect(card).toHaveClass('shadow-md');
    });
  });

  it('renders checkmark icons for requirements', () => {
    const { container } = render(<RequirementsSection />);
    
    const checkmarks = container.querySelectorAll('svg');
    expect(checkmarks.length).toBeGreaterThan(0);
    
    checkmarks.forEach(icon => {
      expect(icon).toHaveClass('text-primary');
    });
  });

  it('displays important notes', () => {
    render(<RequirementsSection />);
    
    expect(screen.getByText(/All documents must be submitted in English/)).toBeInTheDocument();
    expect(screen.getByText(/Additional documents may be required/)).toBeInTheDocument();
  });
}); 