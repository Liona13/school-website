import { render, screen } from '@testing-library/react'
import NewsSection from '../NewsSection'

describe('NewsSection Component', () => {
  it('renders section title and view all link', () => {
    render(<NewsSection />)
    
    expect(screen.getByText('Latest News & Updates')).toBeInTheDocument()
    expect(screen.getByText(/view all news/i)).toHaveAttribute('href', '/news')
  })

  it('renders all news items', () => {
    render(<NewsSection />)
    
    // Check if all news items are rendered
    expect(screen.getAllByRole('article')).toHaveLength(3)
    
    // Check specific news items
    expect(screen.getByText('New Academic Year Registration Open')).toBeInTheDocument()
    expect(screen.getByText('Academic Excellence Awards 2024')).toBeInTheDocument()
    expect(screen.getByText('Summer Programs Announcement')).toBeInTheDocument()
  })

  it('formats dates correctly', () => {
    render(<NewsSection />)
    
    // Check if dates are formatted properly
    expect(screen.getByText(/March 15, 2024/)).toBeInTheDocument()
    expect(screen.getByText(/March 10, 2024/)).toBeInTheDocument()
    expect(screen.getByText(/March 5, 2024/)).toBeInTheDocument()
  })

  it('renders read more links with correct hrefs', () => {
    render(<NewsSection />)
    
    const readMoreLinks = screen.getAllByText(/read more/i)
    expect(readMoreLinks).toHaveLength(3)
    
    expect(readMoreLinks[0].closest('a')).toHaveAttribute('href', '/news/registration-open')
    expect(readMoreLinks[1].closest('a')).toHaveAttribute('href', '/news/excellence-awards')
    expect(readMoreLinks[2].closest('a')).toHaveAttribute('href', '/news/summer-programs')
  })
}) 