import { render, screen } from '@testing-library/react'
import HeroSection from '../HeroSection'

describe('HeroSection Component', () => {
  it('renders main heading and content', () => {
    render(<HeroSection />)
    
    // Check main heading
    expect(screen.getByText(/Empowering Education/i)).toBeInTheDocument()
    expect(screen.getByText(/Brighter Future/i)).toBeInTheDocument()
    
    // Check description
    expect(screen.getByText(/Welcome to our comprehensive/i)).toBeInTheDocument()
  })

  it('renders call-to-action buttons', () => {
    render(<HeroSection />)
    
    const applyButton = screen.getByRole('link', { name: /apply now/i })
    const learnMoreButton = screen.getByRole('link', { name: /learn more/i })
    
    expect(applyButton).toBeInTheDocument()
    expect(applyButton).toHaveAttribute('href', '/admissions')
    
    expect(learnMoreButton).toBeInTheDocument()
    expect(learnMoreButton).toHaveAttribute('href', '/about')
  })

  it('has correct styling classes', () => {
    const { container } = render(<HeroSection />)
    
    // Check for background gradient
    expect(container.firstChild).toHaveClass('bg-gradient-to-b')
    
    // Check for grid pattern
    const gridPattern = container.querySelector('.bg-grid-pattern')
    expect(gridPattern).toBeInTheDocument()
  })
}) 