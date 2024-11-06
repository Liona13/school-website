import { render, screen } from '@testing-library/react';
import EventsSection from '../EventsSection';

// Mock framer-motion
jest.mock('framer-motion', () => ({
  motion: {
    div: ({ children, ...props }: React.PropsWithChildren<{}>) => <div {...props}>{children}</div>,
  },
}));

describe('EventsSection', () => {
  it('renders section title and description', () => {
    render(<EventsSection />);
    
    expect(screen.getByText('Upcoming Events')).toBeInTheDocument();
    expect(screen.getByText(/Join us for exciting events/)).toBeInTheDocument();
  });

  it('displays all events', () => {
    render(<EventsSection />);
    
    expect(screen.getByText('Annual Sports Day')).toBeInTheDocument();
    expect(screen.getByText('Spring Arts Festival')).toBeInTheDocument();
    expect(screen.getByText('Science Fair')).toBeInTheDocument();
    expect(screen.getByText('Cultural Day')).toBeInTheDocument();
  });

  it('shows event details correctly', () => {
    render(<EventsSection />);
    
    // Check dates
    expect(screen.getByText('April 15, 2024')).toBeInTheDocument();
    expect(screen.getByText('May 1, 2024')).toBeInTheDocument();
    expect(screen.getByText('May 10, 2024')).toBeInTheDocument();
    expect(screen.getByText('May 20, 2024')).toBeInTheDocument();
    
    // Check times
    expect(screen.getByText('9:00 AM - 4:00 PM')).toBeInTheDocument();
    expect(screen.getByText('6:00 PM - 9:00 PM')).toBeInTheDocument();
    
    // Check locations
    expect(screen.getByText('School Sports Complex')).toBeInTheDocument();
    expect(screen.getByText('School Auditorium')).toBeInTheDocument();
  });

  it('displays event categories', () => {
    render(<EventsSection />);
    
    expect(screen.getByText('Sports')).toBeInTheDocument();
    expect(screen.getByText('Arts')).toBeInTheDocument();
    expect(screen.getByText('Academic')).toBeInTheDocument();
    expect(screen.getByText('Cultural')).toBeInTheDocument();
  });

  it('renders calendar link', () => {
    render(<EventsSection />);
    
    const calendarLink = screen.getByText('View Full Calendar');
    expect(calendarLink).toBeInTheDocument();
    expect(calendarLink).toHaveAttribute('href', '/calendar');
  });

  it('shows location icons for each event', () => {
    render(<EventsSection />);
    const locationIcons = screen.getAllByRole('img', { hidden: true });
    expect(locationIcons).toHaveLength(4);
  });
}); 