import { render, screen } from '@testing-library/react';
import Loading from '../Loading';

// Mock framer-motion
jest.mock('framer-motion', () => ({
  motion: {
    div: ({ children, ...props }: React.PropsWithChildren<{}>) => <div {...props}>{children}</div>,
    p: ({ children, ...props }: React.PropsWithChildren<{}>) => <p {...props}>{children}</p>,
  },
}));

describe('Loading Component', () => {
  it('renders with default props', () => {
    const { container } = render(<Loading />);
    
    const spinner = container.querySelector('svg');
    expect(spinner).toBeInTheDocument();
    expect(spinner).toHaveClass('animate-spin');
    
    const wrapper = container.firstChild;
    expect(wrapper).toHaveClass('flex');
    expect(wrapper).toHaveClass('flex-col');
    expect(wrapper).toHaveClass('items-center');
    expect(wrapper).toHaveClass('justify-center');
  });

  it('applies correct size classes', () => {
    const { container: small } = render(<Loading size="small" />);
    expect(small.querySelector('.w-5')).toBeInTheDocument();
    expect(small.querySelector('.h-5')).toBeInTheDocument();

    const { container: medium } = render(<Loading size="medium" />);
    expect(medium.querySelector('.w-8')).toBeInTheDocument();
    expect(medium.querySelector('.h-8')).toBeInTheDocument();

    const { container: large } = render(<Loading size="large" />);
    expect(large.querySelector('.w-12')).toBeInTheDocument();
    expect(large.querySelector('.h-12')).toBeInTheDocument();
  });

  it('applies correct color classes', () => {
    const { container: primary } = render(<Loading color="primary" />);
    expect(primary.querySelector('.text-primary')).toBeInTheDocument();

    const { container: white } = render(<Loading color="white" />);
    expect(white.querySelector('.text-white')).toBeInTheDocument();
  });

  it('displays loading text when provided', () => {
    render(<Loading text="Loading..." />);
    expect(screen.getByText('Loading...')).toBeInTheDocument();
  });

  it('does not display text when not provided', () => {
    const { container } = render(<Loading />);
    expect(container.querySelector('p')).not.toBeInTheDocument();
  });

  it('has correct SVG structure', () => {
    const { container } = render(<Loading />);
    
    const svg = container.querySelector('svg');
    expect(svg).toBeInTheDocument();
    
    const circle = svg?.querySelector('circle');
    expect(circle).toHaveAttribute('cx', '12');
    expect(circle).toHaveAttribute('cy', '12');
    expect(circle).toHaveAttribute('r', '10');
    expect(circle).toHaveClass('opacity-25');
    
    const path = svg?.querySelector('path');
    expect(path).toBeInTheDocument();
    expect(path).toHaveClass('opacity-75');
  });

  it('maintains accessibility', () => {
    const { container } = render(<Loading text="Loading content" />);
    
    // The loading text should be visible for screen readers
    const loadingText = screen.getByText('Loading content');
    expect(loadingText).toBeVisible();
    
    // The spinner should be presentational
    const svg = container.querySelector('svg');
    expect(svg).toBeInTheDocument();
  });
}); 