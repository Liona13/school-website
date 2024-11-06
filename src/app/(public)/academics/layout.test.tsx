import { render, screen } from '@testing-library/react';
import AcademicsLayout from '../layout';

describe('AcademicsLayout', () => {
  it('renders children within layout', () => {
    const TestChild = () => <div data-testid="test-child">Test Content</div>;
    
    render(
      <AcademicsLayout>
        <TestChild />
      </AcademicsLayout>
    );
    
    expect(screen.getByTestId('test-child')).toBeInTheDocument();
  });

  it('maintains semantic HTML structure', () => {
    const { container } = render(
      <AcademicsLayout>
        <div>Test Content</div>
      </AcademicsLayout>
    );
    
    // Check if content is wrapped in main tag
    const main = container.querySelector('main');
    expect(main).toBeInTheDocument();
    expect(main).toHaveClass('min-h-screen');
  });

  it('applies consistent styling', () => {
    const { container } = render(
      <AcademicsLayout>
        <div>Test Content</div>
      </AcademicsLayout>
    );
    
    // Check for container classes
    const contentWrapper = container.firstChild;
    expect(contentWrapper).toHaveClass('bg-white');
    
    // Check for padding and margin classes
    const main = container.querySelector('main');
    expect(main).toHaveClass('py-8');
    expect(main).toHaveClass('md:py-12');
  });

  it('renders without errors', () => {
    expect(() => {
      render(
        <AcademicsLayout>
          <div>Test Content</div>
        </AcademicsLayout>
      );
    }).not.toThrow();
  });

  it('matches snapshot', () => {
    const { container } = render(
      <AcademicsLayout>
        <div>Test Content</div>
      </AcademicsLayout>
    );
    
    expect(container).toMatchSnapshot();
  });
}); 