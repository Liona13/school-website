import { render, screen } from '@testing-library/react'
import AboutHero from '../AboutHero'

describe('AboutHero Component', () => {
  it('renders hero content correctly', () => {
    render(<AboutHero />)
    
    expect(screen.getByText('About Our School')).toBeInTheDocument()
    expect(screen.getByText(/Discover our rich history/i)).toBeInTheDocument()
  })

  it('has correct styling classes', () => {
    const { container } = render(<AboutHero />)
    
    expect(container.firstChild).toHaveClass('relative')
    expect(container.firstChild).toHaveClass('min-h-[60vh]')
    
    const heading = screen.getByRole('heading', { level: 1 })
    expect(heading).toHaveClass('heading-1')
    expect(heading).toHaveClass('text-primary')
  })
}) 