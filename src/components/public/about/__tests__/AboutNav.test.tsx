import { render, screen } from '@testing-library/react'
import AboutNav from '../AboutNav'

// Mock usePathname hook
jest.mock('next/navigation', () => ({
  usePathname: () => '/about',
}))

describe('AboutNav Component', () => {
  it('renders all navigation links', () => {
    render(<AboutNav />)
    
    expect(screen.getByText('Overview')).toBeInTheDocument()
    expect(screen.getByText('History')).toBeInTheDocument()
    expect(screen.getByText('Mission & Vision')).toBeInTheDocument()
    expect(screen.getByText('Leadership')).toBeInTheDocument()
  })

  it('highlights active link correctly', () => {
    render(<AboutNav />)
    
    const activeLink = screen.getByText('Overview')
    expect(activeLink).toHaveClass('border-primary')
    expect(activeLink).toHaveClass('text-primary')
    
    const inactiveLink = screen.getByText('History')
    expect(inactiveLink).toHaveClass('border-transparent')
    expect(inactiveLink).toHaveClass('text-gray-600')
  })
}) 