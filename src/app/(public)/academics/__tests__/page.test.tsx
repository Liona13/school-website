import { render, screen } from '@testing-library/react';
import AcademicsPage from '../page';

// Mock all child components
jest.mock('@/components/public/academics/AcademicsHero', () => {
  return function MockAcademicsHero() {
    return <div data-testid="mock-academics-hero">Academics Hero Section</div>;
  };
});

jest.mock('@/components/public/academics/ProgramsSection', () => {
  return function MockProgramsSection() {
    return <div data-testid="mock-programs">Programs Section</div>;
  };
});

jest.mock('@/components/public/academics/CurriculumSection', () => {
  return function MockCurriculumSection() {
    return <div data-testid="mock-curriculum">Curriculum Section</div>;
  };
});

jest.mock('@/components/public/academics/FacultySection', () => {
  return function MockFacultySection() {
    return <div data-testid="mock-faculty">Faculty Section</div>;
  };
});

describe('AcademicsPage', () => {
  it('renders all sections in correct order', () => {
    render(<AcademicsPage />);
    
    const sections = screen.getAllByTestId(/mock-/);
    expect(sections).toHaveLength(4);
    
    // Check order of sections
    expect(sections[0]).toHaveAttribute('data-testid', 'mock-academics-hero');
    expect(sections[1]).toHaveAttribute('data-testid', 'mock-programs');
    expect(sections[2]).toHaveAttribute('data-testid', 'mock-curriculum');
    expect(sections[3]).toHaveAttribute('data-testid', 'mock-faculty');
  });

  it('wraps sections in main element', () => {
    const { container } = render(<AcademicsPage />);
    const main = container.querySelector('main');
    expect(main).toBeInTheDocument();
  });

  it('maintains semantic HTML structure', () => {
    render(<AcademicsPage />);
    
    // Check if all sections are present within main
    const sections = screen.getAllByTestId(/mock-/);
    sections.forEach(section => {
      expect(section.parentElement?.tagName).toBe('MAIN');
    });
  });

  it('renders without errors', () => {
    expect(() => render(<AcademicsPage />)).not.toThrow();
  });

  it('matches snapshot', () => {
    const { container } = render(<AcademicsPage />);
    expect(container).toMatchSnapshot();
  });
}); 