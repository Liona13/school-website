import { render, screen } from '@testing-library/react';
import AdmissionsHero from '../AdmissionsHero';

// Mock framer-motion
jest.mock('framer-motion', () => ({
  motion: {
    div: ({ children, ...props }: React.PropsWithChildren<{}>) => <div {...props}>{children}</div>,
    h1: ({ children, ...props }: React.PropsWithChildren<{}>) => <h1 {...props}>{children}</h1>,
    p: ({ children, ...props }: React.PropsWithChildren<{}>) => <p {...props}>{children}</p>,
  },
}));

describe('AdmissionsHero', () => {
  it('renders hero content correctly', () => {
    render(<AdmissionsHero />);
    
    expect(screen.getByText('Join Our School Community')).toBeInTheDocument();
    expect(screen.getByText(/Begin your journey/)).toBeInTheDocument();
  });

  it('renders call-to-action button', () => {
    render(<AdmissionsHero />);
    
    const cta = screen.getByText('Start Application');
    expect(cta).toBeInTheDocument();
    expect(cta.closest('a')).toHaveAttribute('href', '#apply-now');
  });

  it('has correct styling classes', () => {
    const { container } = render(<AdmissionsHero />);
    
    // Check section styling
    expect(container.firstChild).toHaveClass('min-h-[60vh]');
    expect(container.firstChild).toHaveClass('bg-blue-50');
    
    // Check grid pattern background
    const gridPattern = container.querySelector('.bg-grid-pattern');
    expect(gridPattern).toBeInTheDocument();
    expect(gridPattern).toHaveClass('opacity-10');
    
    // Check text container
    const textContainer = container.querySelector('.max-w-3xl');
    expect(textContainer).toHaveClass('mx-auto');
    expect(textContainer).toHaveClass('text-center');
  });

  it('maintains responsive layout', () => {
    render(<AdmissionsHero />);
    
    // Check heading responsiveness
    const heading = screen.getByRole('heading', { level: 1 });
    expect(heading).toHaveClass('text-4xl');
    expect(heading).toHaveClass('md:text-5xl');
    
    // Check description responsiveness
    const description = screen.getByText(/Begin your journey/);
    expect(description).toHaveClass('text-lg');
    expect(description).toHaveClass('md:text-xl');
  });

  it('applies correct button styling', () => {
    render(<AdmissionsHero />);
    
    const button = screen.getByText('Start Application');
    expect(button).toHaveClass('bg-primary');
    expect(button).toHaveClass('text-white');
    expect(button).toHaveClass('rounded-full');
    expect(button).toHaveClass('hover:bg-primary-dark');
    expect(button).toHaveClass('transition-colors');
  });

  it('renders with correct z-index layering', () => {
    const { container } = render(<AdmissionsHero />);
    
    const contentContainer = container.querySelector('.relative.z-10');
    expect(contentContainer).toBeInTheDocument();
  });
}); 