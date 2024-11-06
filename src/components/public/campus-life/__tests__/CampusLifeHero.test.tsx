import { render, screen } from '@testing-library/react';
import CampusLifeHero from '../CampusLifeHero';

// Mock framer-motion
jest.mock('framer-motion', () => ({
  motion: {
    div: ({ children, ...props }: React.PropsWithChildren<{}>) => <div {...props}>{children}</div>,
    h1: ({ children, ...props }: React.PropsWithChildren<{}>) => <h1 {...props}>{children}</h1>,
    p: ({ children, ...props }: React.PropsWithChildren<{}>) => <p {...props}>{children}</p>,
  },
}));

describe('CampusLifeHero', () => {
  it('renders hero content correctly', () => {
    render(<CampusLifeHero />);
    
    expect(screen.getByText('Campus Life at SchoolMS')).toBeInTheDocument();
    expect(screen.getByText(/Experience a vibrant community/)).toBeInTheDocument();
  });

  it('renders call-to-action buttons', () => {
    render(<CampusLifeHero />);
    
    const exploreButton = screen.getByText('Explore Activities');
    expect(exploreButton).toHaveAttribute('href', '#activities');
    
    const eventsButton = screen.getByText('View Events');
    expect(eventsButton).toHaveAttribute('href', '#events');
  });

  it('has correct styling classes', () => {
    const { container } = render(<CampusLifeHero />);
    
    expect(container.firstChild).toHaveClass('min-h-[60vh]');
    expect(container.firstChild).toHaveClass('bg-gradient-to-b');
    
    const gridPattern = container.querySelector('.bg-grid-pattern');
    expect(gridPattern).toBeInTheDocument();
  });
}); 