import { render, screen } from '@testing-library/react';
import ContactPage from '../page';

// Mock all child components
jest.mock('@/components/public/contact/ContactHero', () => {
  return function MockContactHero() {
    return <div data-testid="mock-contact-hero">Contact Hero Section</div>;
  };
});

jest.mock('@/components/public/contact/ContactInfo', () => {
  return function MockContactInfo() {
    return <div data-testid="mock-contact-info">Contact Info Section</div>;
  };
});

jest.mock('@/components/public/contact/ContactForm', () => {
  return function MockContactForm() {
    return <div data-testid="mock-contact-form">Contact Form Section</div>;
  };
});

jest.mock('@/components/public/contact/LocationSection', () => {
  return function MockLocationSection() {
    return <div data-testid="mock-location">Location Section</div>;
  };
});

describe('ContactPage', () => {
  it('renders all sections in correct order', () => {
    render(<ContactPage />);
    
    const sections = screen.getAllByTestId(/mock-/);
    expect(sections).toHaveLength(4);
    
    // Check order of sections
    expect(sections[0]).toHaveAttribute('data-testid', 'mock-contact-hero');
    expect(sections[1]).toHaveAttribute('data-testid', 'mock-contact-info');
    expect(sections[2]).toHaveAttribute('data-testid', 'mock-contact-form');
    expect(sections[3]).toHaveAttribute('data-testid', 'mock-location');
  });

  it('wraps sections in main element', () => {
    const { container } = render(<ContactPage />);
    const main = container.querySelector('main');
    expect(main).toBeInTheDocument();
  });

  it('maintains semantic HTML structure', () => {
    render(<ContactPage />);
    
    // Check if all sections are present within main
    const sections = screen.getAllByTestId(/mock-/);
    sections.forEach(section => {
      expect(section.parentElement?.tagName).toBe('MAIN');
    });
  });

  it('renders without errors', () => {
    expect(() => render(<ContactPage />)).not.toThrow();
  });

  it('matches snapshot', () => {
    const { container } = render(<ContactPage />);
    expect(container).toMatchSnapshot();
  });
}); 