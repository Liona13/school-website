import { render, screen, fireEvent } from '@testing-library/react'
import Header from '../Header'

describe('Header Component', () => {
  it('renders logo and navigation links', () => {
    render(<Header />)
    
    // Check logo
    expect(screen.getByText('SchoolMS')).toBeInTheDocument()
    
    // Check navigation links
    expect(screen.getByText('About Us')).toBeInTheDocument()
    expect(screen.getByText('Academics')).toBeInTheDocument()
    expect(screen.getByText('Admissions')).toBeInTheDocument()
    expect(screen.getByText('Campus Life')).toBeInTheDocument()
    expect(screen.getByText('News')).toBeInTheDocument()
    expect(screen.getByText('Contact')).toBeInTheDocument()
    expect(screen.getByText('Login')).toBeInTheDocument()
  })

  it('toggles mobile menu when button is clicked', () => {
    render(<Header />)
    
    // Mobile menu should be hidden initially
    expect(screen.queryByRole('button', { name: /close menu/i })).not.toBeInTheDocument()
    
    // Click hamburger menu
    const menuButton = screen.getByRole('button')
    fireEvent.click(menuButton)
    
    // Mobile menu should be visible
    const mobileNav = screen.getByRole('navigation')
    expect(mobileNav).toBeVisible()
    
    // Click again to close
    fireEvent.click(menuButton)
    expect(mobileNav).not.toBeVisible()
  })

  it('closes mobile menu when a link is clicked', () => {
    render(<Header />)
    
    // Open mobile menu
    const menuButton = screen.getByRole('button')
    fireEvent.click(menuButton)
    
    // Click a navigation link
    const aboutLink = screen.getByText('About Us')
    fireEvent.click(aboutLink)
    
    // Menu should be closed
    const mobileNav = screen.queryByRole('navigation')
    expect(mobileNav).not.toBeVisible()
  })

  it('applies hover styles to navigation links', () => {
    render(<Header />)
    
    const links = screen.getAllByRole('link')
    links.forEach(link => {
      expect(link).toHaveClass('transition-colors')
    })
  })

  it('has correct aria labels for mobile menu button', () => {
    render(<Header />)
    
    const menuButton = screen.getByRole('button')
    expect(menuButton).toHaveClass('md:hidden')
    
    // Check initial state
    fireEvent.click(menuButton)
    expect(menuButton).toHaveAttribute('aria-expanded', 'true')
    
    // Check closed state
    fireEvent.click(menuButton)
    expect(menuButton).toHaveAttribute('aria-expanded', 'false')
  })

  it('handles keyboard navigation', () => {
    render(<Header />)
    
    const links = screen.getAllByRole('link')
    links[0].focus()
    
    // Simulate Tab key press
    fireEvent.keyDown(links[0], { key: 'Tab' })
    expect(links[1]).toHaveFocus()
  })
}) 