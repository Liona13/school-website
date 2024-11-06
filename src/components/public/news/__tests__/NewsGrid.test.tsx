import { render, screen } from '@testing-library/react';
import NewsGrid from '../NewsGrid';

// Mock framer-motion
jest.mock('framer-motion', () => ({
  motion: {
    div: ({ children, ...props }: React.PropsWithChildren<object>) => <div {...props}>{children}</div>,
    article: ({ children, ...props }: React.PropsWithChildren<object>) => <article {...props}>{children}</article>,
  },
}));

// Mock next/link
jest.mock('next/link', () => {
  return ({ children, href }: { children: React.ReactNode; href: string }) => (
    <a href={href}>{children}</a>
  );
});

describe('NewsGrid', () => {
  it('renders all news articles', () => {
    render(<NewsGrid />);
    
    const articles = [
      'New Academic Year Registration Open',
      'Academic Excellence Awards 2024',
      'Summer Programs Announcement',
      'Science Fair Winners Announced',
      'New Sports Facilities Opening',
      'Parent-Teacher Conference Schedule'
    ];

    articles.forEach(title => {
      expect(screen.getByText(title)).toBeInTheDocument();
    });
  });

  it('displays article dates correctly', () => {
    render(<NewsGrid />);
    
    expect(screen.getByText('March 15, 2024')).toBeInTheDocument();
    expect(screen.getByText('March 10, 2024')).toBeInTheDocument();
    expect(screen.getByText('March 5, 2024')).toBeInTheDocument();
    expect(screen.getByText('March 1, 2024')).toBeInTheDocument();
    expect(screen.getByText('February 28, 2024')).toBeInTheDocument();
    expect(screen.getByText('February 25, 2024')).toBeInTheDocument();
  });

  it('shows article categories', () => {
    render(<NewsGrid />);
    
    const categories = [
      'Admissions',
      'Events',
      'Programs',
      'Achievements',
      'Facilities'
    ];

    categories.forEach(category => {
      expect(screen.getByText(category)).toBeInTheDocument();
    });
  });

  it('renders article excerpts', () => {
    render(<NewsGrid />);
    
    expect(screen.getByText(/Registration for the upcoming academic year is now open/)).toBeInTheDocument();
    expect(screen.getByText(/Annual awards ceremony celebrating outstanding student achievements/)).toBeInTheDocument();
    expect(screen.getByText(/Exciting summer learning opportunities/)).toBeInTheDocument();
  });

  it('has working read more links', () => {
    render(<NewsGrid />);
    
    const readMoreLinks = screen.getAllByText('Read more');
    expect(readMoreLinks).toHaveLength(6);
    
    readMoreLinks.forEach((link, index) => {
      expect(link.closest('a')).toHaveAttribute('href', `/news/${index + 1}`);
    });
  });

  it('applies correct styling classes', () => {
    const { container } = render(<NewsGrid />);
    
    // Check section background
    expect(container.firstChild).toHaveClass('bg-white');
    
    // Check grid layout
    const grid = container.querySelector('.grid');
    expect(grid).toHaveClass('md:grid-cols-2');
    expect(grid).toHaveClass('lg:grid-cols-3');
    
    // Check article cards
    const cards = container.querySelectorAll('article');
    cards.forEach(card => {
      expect(card).toHaveClass('bg-white');
      expect(card).toHaveClass('rounded-xl');
      expect(card).toHaveClass('shadow-sm');
      expect(card).toHaveClass('hover:shadow-lg');
    });
  });

  it('maintains consistent text hierarchy', () => {
    render(<NewsGrid />);
    
    // Check article titles
    const titles = screen.getAllByRole('heading', { level: 3 });
    titles.forEach(title => {
      expect(title).toHaveClass('text-xl');
      expect(title).toHaveClass('font-semibold');
    });
    
    // Check dates and categories
    const dates = screen.getAllByRole('time');
    dates.forEach(date => {
      expect(date).toHaveClass('text-sm');
      expect(date).toHaveClass('text-blue-600');
    });
  });

  it('has proper spacing between elements', () => {
    const { container } = render(<NewsGrid />);
    
    // Check section padding
    expect(container.firstChild).toHaveClass('py-16');
    
    // Check article card padding
    const articleContent = container.querySelectorAll('.p-6');
    expect(articleContent).toHaveLength(6);
    
    // Check gap between articles
    const grid = container.querySelector('.grid');
    expect(grid).toHaveClass('gap-8');
  });
}); 