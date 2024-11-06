import '@testing-library/jest-dom'
import { render, screen, within } from '@testing-library/react'
import Home from '../page'

// Mock the components that use client-side features
jest.mock('@/components/layout/Header', () => {
  return function MockHeader() {
    return <header data-testid="mock-header">Header</header>
  }
})

jest.mock('framer-motion', () => ({
  motion: {
    div: ({ children, ...props }: React.PropsWithChildren<object>) => <div {...props}>{children}</div>,
    h1: ({ children, ...props }: React.PropsWithChildren<object>) => <h1 {...props}>{children}</h1>,
    p: ({ children, ...props }: React.PropsWithChildren<object>) => <p {...props}>{children}</p>,
  },
}))

describe('Home Page', () => {
  it('renders all main sections in correct order', () => {
    render(<Home />)
    
    const main = screen.getByRole('main')
    const sections = within(main).getAllByRole('region')
    
    // Check sections order
    expect(sections[0]).toHaveTextContent(/Empowering Education/i) // Hero
    expect(sections[1]).toHaveTextContent(/Latest News & Updates/i) // News
    expect(sections[2]).toHaveTextContent(/Get in Touch/i) // Contact
  })

  it('has working navigation links', () => {
    render(<Home />)
    
    // Check primary navigation links
    const applyButton = screen.getByRole('link', { name: /apply now/i })
    expect(applyButton).toHaveAttribute('href', '/admissions')
    
    const learnMoreButton = screen.getByRole('link', { name: /learn more/i })
    expect(learnMoreButton).toHaveAttribute('href', '/about')
    
    // Check news section links
    const readMoreLinks = screen.getAllByText(/read more/i)
    readMoreLinks.forEach(link => {
      expect(link.closest('a')).toHaveAttribute('href', expect.stringMatching(/^\/news\//))
    })
    
    // Check contact section links
    const emailLink = screen.getByText(/info@schoolms.edu/i)
    expect(emailLink).toHaveAttribute('href', 'mailto:info@schoolms.edu')
  })

  it('maintains responsive design classes', () => {
    const { container } = render(<Home />)
    
    // Check container responsiveness
    const containers = container.querySelectorAll('.container')
    containers.forEach(cont => {
      expect(cont).toHaveClass('mx-auto', 'px-4')
    })
    
    // Check grid layouts
    const grids = container.querySelectorAll('.grid')
    grids.forEach(grid => {
      expect(grid).toHaveClass(/md:grid-cols-[2-3]/)
    })
    
    // Check text responsiveness
    const headings = container.querySelectorAll('h1, h2')
    headings.forEach(heading => {
      expect(heading).toHaveClass(/text-[3-5]xl/, /md:text-[4-6]xl/)
    })
  })

  it('renders content with correct semantic structure', () => {
    render(<Home />)
    
    // Check main landmark
    expect(screen.getByRole('main')).toBeInTheDocument()
    
    // Check heading hierarchy
    const headings = screen.getAllByRole('heading')
    expect(headings[0].tagName).toBe('H1') // Main hero heading
    expect(headings.slice(1).every(h => h.tagName === 'H2')).toBe(true)
    
    // Check navigation landmarks
    expect(screen.getByTestId('mock-header')).toBeInTheDocument()
  })

  it('loads and displays dynamic content', async () => {
    render(<Home />)
    
    // Check news items
    const newsArticles = screen.getAllByRole('article')
    expect(newsArticles).toHaveLength(3)
    
    // Check news content
    expect(screen.getByText('New Academic Year Registration Open')).toBeInTheDocument()
    expect(screen.getByText('Academic Excellence Awards 2024')).toBeInTheDocument()
    expect(screen.getByText('Summer Programs Announcement')).toBeInTheDocument()
  })

  it('maintains consistent styling across sections', () => {
    const { container } = render(<Home />)
    
    // Check section padding
    const sections = container.querySelectorAll('section')
    sections.forEach(section => {
      expect(section).toHaveClass(/py-[12|16|20]/)
    })
    
    // Check consistent text colors
    const headings = container.querySelectorAll('h1, h2')
    headings.forEach(heading => {
      expect(heading).toHaveClass(/text-gray-900|text-primary/)
    })
    
    // Check button styling consistency
    const buttons = screen.getAllByRole('link', { name: /apply now|learn more|read more/i })
    buttons.forEach(button => {
      expect(button).toHaveClass(/bg-primary|text-primary/)
    })
  })
}) 