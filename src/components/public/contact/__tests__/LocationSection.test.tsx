import { render, screen } from '@testing-library/react';
import LocationSection from '../LocationSection';

// Mock framer-motion
jest.mock('framer-motion', () => ({
  motion: {
    div: ({ children, ...props }: React.PropsWithChildren<object>) => <div {...props}>{children}</div>,
  },
}));

describe('LocationSection', () => {
  it('renders section title correctly', () => {
    render(<LocationSection />);
    expect(screen.getByText('Our Location')).toBeInTheDocument();
  });

  it('displays map placeholder', () => {
    render(<LocationSection />);
    expect(screen.getByText('Map will be displayed here')).toBeInTheDocument();
  });

  it('shows getting here information', () => {
    render(<LocationSection />);
    
    // Check section title
    expect(screen.getByText('Getting Here')).toBeInTheDocument();
    
    // Check car directions
    expect(screen.getByText('By Car')).toBeInTheDocument();
    expect(screen.getByText(/Located off Main Highway/)).toBeInTheDocument();
    expect(screen.getByText(/Free parking available/)).toBeInTheDocument();
    
    // Check public transport info
    expect(screen.getByText('Public Transport')).toBeInTheDocument();
    expect(screen.getByText(/Bus routes 101, 102/)).toBeInTheDocument();
    expect(screen.getByText(/5-minute walk away/)).toBeInTheDocument();
  });

  it('displays visiting hours', () => {
    render(<LocationSection />);
    
    expect(screen.getByText('Visiting Hours')).toBeInTheDocument();
    expect(screen.getByText(/Monday - Friday:/)).toBeInTheDocument();
    expect(screen.getByText(/8:00 AM - 5:00 PM/)).toBeInTheDocument();
    expect(screen.getByText(/Saturday:/)).toBeInTheDocument();
    expect(screen.getByText(/9:00 AM - 1:00 PM/)).toBeInTheDocument();
    expect(screen.getByText(/Sunday:/)).toBeInTheDocument();
    expect(screen.getByText('Closed')).toBeInTheDocument();
  });

  it('shows facility hours notice', () => {
    render(<LocationSection />);
    expect(screen.getByText(/some facilities may have different operating hours/)).toBeInTheDocument();
  });

  it('applies correct styling classes', () => {
    const { container } = render(<LocationSection />);
    
    // Check section background
    expect(container.firstChild).toHaveClass('bg-gray-50');
    
    // Check grid layout
    const grid = container.querySelector('.grid');
    expect(grid).toHaveClass('md:grid-cols-2');
    expect(grid).toHaveClass('gap-8');
    
    // Check map container
    const mapContainer = container.querySelector('.h-[400px]');
    expect(mapContainer).toBeInTheDocument();
    expect(mapContainer).toHaveClass('bg-white', 'rounded-xl', 'shadow-sm');
  });

  it('maintains consistent text hierarchy', () => {
    render(<LocationSection />);
    
    // Check main heading
    const mainHeading = screen.getByText('Our Location');
    expect(mainHeading).toHaveClass('text-3xl', 'font-bold');
    
    // Check subheadings
    const subheadings = screen.getAllByRole('heading', { level: 3 });
    subheadings.forEach(heading => {
      expect(heading).toHaveClass('text-xl', 'font-semibold');
    });
    
    // Check transport headings
    const transportHeadings = screen.getAllByRole('heading', { level: 4 });
    transportHeadings.forEach(heading => {
      expect(heading).toHaveClass('font-medium', 'text-gray-700');
    });
  });

  it('has proper spacing between elements', () => {
    const { container } = render(<LocationSection />);
    
    // Check section padding
    expect(container.firstChild).toHaveClass('py-16');
    
    // Check content spacing
    const contentDivs = container.querySelectorAll('.space-y-4, .space-y-2');
    expect(contentDivs.length).toBeGreaterThan(0);
  });
}); 