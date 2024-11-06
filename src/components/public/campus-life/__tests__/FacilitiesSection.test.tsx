import { render, screen } from '@testing-library/react';
import FacilitiesSection from '../FacilitiesSection';

// Mock framer-motion
jest.mock('framer-motion', () => ({
  motion: {
    div: ({ children, ...props }: React.PropsWithChildren<{}>) => <div {...props}>{children}</div>,
  },
}));

describe('FacilitiesSection', () => {
  it('renders section title and description', () => {
    render(<FacilitiesSection />);
    
    expect(screen.getByText('Our Facilities')).toBeInTheDocument();
    expect(screen.getByText(/Experience learning in our modern/)).toBeInTheDocument();
  });

  it('displays all facility categories', () => {
    render(<FacilitiesSection />);
    
    expect(screen.getByText('Modern Classrooms')).toBeInTheDocument();
    expect(screen.getByText('Sports Complex')).toBeInTheDocument();
    expect(screen.getByText('Science Labs')).toBeInTheDocument();
    expect(screen.getByText('Library & Media Center')).toBeInTheDocument();
  });

  it('shows facility descriptions', () => {
    render(<FacilitiesSection />);
    
    expect(screen.getByText(/State-of-the-art learning spaces/)).toBeInTheDocument();
    expect(screen.getByText(/Indoor and outdoor athletic facilities/)).toBeInTheDocument();
    expect(screen.getByText(/Well-equipped laboratories/)).toBeInTheDocument();
    expect(screen.getByText(/Extensive collection of books/)).toBeInTheDocument();
  });

  it('renders icons for each facility', () => {
    render(<FacilitiesSection />);
    const icons = screen.getAllByRole('img', { hidden: true });
    expect(icons).toHaveLength(4);
  });

  it('renders virtual tour link', () => {
    render(<FacilitiesSection />);
    
    const tourLink = screen.getByText('Take a Virtual Tour');
    expect(tourLink).toBeInTheDocument();
    expect(tourLink).toHaveAttribute('href', '#virtual-tour');
  });
}); 