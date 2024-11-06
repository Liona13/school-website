import { render, screen } from '@testing-library/react';
import AboutPage from '../page';

// Mock all child components
jest.mock('@/components/public/about/AboutHero', () => {
  return function MockAboutHero() {
    return <div data-testid="mock-about-hero">About Hero Section</div>;
  };
});

jest.mock('@/components/public/about/MissionSection', () => {
  return function MockMissionSection() {
    return <div data-testid="mock-mission">Mission Section</div>;
  };
});

jest.mock('@/components/public/about/HistorySection', () => {
  return function MockHistorySection() {
    return <div data-testid="mock-history">History Section</div>;
  };
});

jest.mock('@/components/public/about/LeadershipSection', () => {
  return function MockLeadershipSection() {
    return <div data-testid="mock-leadership">Leadership Section</div>;
  };
});

describe('AboutPage', () => {
  it('renders all sections in correct order', () => {
    render(<AboutPage />);
    
    const sections = screen.getAllByTestId(/mock-/);
    expect(sections).toHaveLength(4);
    
    // Check order of sections
    expect(sections[0]).toHaveAttribute('data-testid', 'mock-about-hero');
    expect(sections[1]).toHaveAttribute('data-testid', 'mock-mission');
    expect(sections[2]).toHaveAttribute('data-testid', 'mock-history');
    expect(sections[3]).toHaveAttribute('data-testid', 'mock-leadership');
  });

  it('wraps sections in main element', () => {
    const { container } = render(<AboutPage />);
    const main = container.querySelector('main');
    expect(main).toBeInTheDocument();
  });

  it('maintains semantic HTML structure', () => {
    render(<AboutPage />);
    
    // Check if all sections are present
    const sections = screen.getAllByTestId(/mock-/);
    sections.forEach(section => {
      expect(section.parentElement?.tagName).toBe('MAIN');
    });
  });

  it('renders without errors', () => {
    expect(() => render(<AboutPage />)).not.toThrow();
  });

  it('matches snapshot', () => {
    const { container } = render(<AboutPage />);
    expect(container).toMatchSnapshot();
  });
}); 