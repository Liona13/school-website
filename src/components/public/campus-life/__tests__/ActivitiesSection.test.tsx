import { render, screen } from '@testing-library/react';
import ActivitiesSection from '../ActivitiesSection';

// Mock framer-motion
jest.mock('framer-motion', () => ({
  motion: {
    div: ({ children, ...props }: React.PropsWithChildren<{}>) => <div {...props}>{children}</div>,
  },
}));

describe('ActivitiesSection', () => {
  it('renders section title and description', () => {
    render(<ActivitiesSection />);
    
    expect(screen.getByText('Student Activities')).toBeInTheDocument();
    expect(screen.getByText(/Discover a world of opportunities/)).toBeInTheDocument();
  });

  it('displays all activity categories', () => {
    render(<ActivitiesSection />);
    
    expect(screen.getByText('Sports & Athletics')).toBeInTheDocument();
    expect(screen.getByText('Arts & Culture')).toBeInTheDocument();
    expect(screen.getByText('Student Clubs')).toBeInTheDocument();
    expect(screen.getByText('Community Service')).toBeInTheDocument();
  });

  it('shows activity descriptions', () => {
    render(<ActivitiesSection />);
    
    expect(screen.getByText(/Competitive sports teams/)).toBeInTheDocument();
    expect(screen.getByText(/Theater productions/)).toBeInTheDocument();
    expect(screen.getByText(/Academic clubs/)).toBeInTheDocument();
    expect(screen.getByText(/Volunteer opportunities/)).toBeInTheDocument();
  });

  it('renders icons for each activity', () => {
    render(<ActivitiesSection />);
    const icons = screen.getAllByRole('img', { hidden: true });
    expect(icons).toHaveLength(4);
  });

  it('renders call-to-action button', () => {
    render(<ActivitiesSection />);
    
    const cta = screen.getByText('View Upcoming Events');
    expect(cta).toBeInTheDocument();
    expect(cta).toHaveAttribute('href', '#events');
  });
}); 