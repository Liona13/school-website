import { render, screen } from '@testing-library/react'
import AcademicsHero from '../AcademicsHero'

describe('AcademicsHero Component', () => {
  it('renders hero content correctly', () => {
    render(<AcademicsHero />)
    
    expect(screen.getByText('Academic')).toBeInTheDocument()
    expect(screen.getByText('Excellence')).toBeInTheDocument()
    expect(screen.getByText(/Discover our comprehensive/i)).toBeInTheDocument()
  })

  it('has correct styling classes', () => {
    const { container } = render(<AcademicsHero />)
    
    // Check section styling
    expect(container.firstChild).toHaveClass('min-h-[60vh]')
    expect(container.firstChild).toHaveClass('bg-blue-50')
    
    // Check grid pattern
    const gridPattern = container.querySelector('.bg-grid-pattern')
    expect(gridPattern).toBeInTheDocument()
    expect(gridPattern).toHaveClass('opacity-10')
    
    // Check text styling
    const heading = screen.getByRole('heading', { level: 1 })
    expect(heading).toHaveClass('heading-1')
    expect(heading).toHaveClass('mb-6')
  })

  it('maintains responsive layout', () => {
    const { container } = render(<AcademicsHero />)
    
    const contentWrapper = container.querySelector('.ml-4')
    expect(contentWrapper).toHaveClass('md:ml-8')
    
    const description = screen.getByText(/Discover our comprehensive/i)
    expect(description).toHaveClass('text-lg')
    expect(description).toHaveClass('md:text-xl')
  })
}) 