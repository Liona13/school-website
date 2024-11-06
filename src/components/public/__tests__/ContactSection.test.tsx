import { render, screen } from '@testing-library/react'
import ContactSection from '../ContactSection'

describe('ContactSection Component', () => {
  it('renders section title and description', () => {
    render(<ContactSection />)
    
    expect(screen.getByText('Get in Touch')).toBeInTheDocument()
    expect(screen.getByText(/Have questions\?/i)).toBeInTheDocument()
  })

  it('renders all contact methods', () => {
    render(<ContactSection />)
    
    // Phone section
    expect(screen.getByText('Call Us')).toBeInTheDocument()
    expect(screen.getByText('+1 (555) 123-4567')).toBeInTheDocument()
    expect(screen.getByText('Mon-Fri: 8:00 AM - 5:00 PM')).toBeInTheDocument()
    
    // Email section
    expect(screen.getByText('Email Us')).toBeInTheDocument()
    expect(screen.getByText('info@schoolms.edu')).toBeInTheDocument()
    expect(screen.getByText('admissions@schoolms.edu')).toBeInTheDocument()
    
    // Address section
    expect(screen.getByText('Visit Us')).toBeInTheDocument()
    expect(screen.getByText('123 Education Street')).toBeInTheDocument()
    expect(screen.getByText('Learning City, ED 12345')).toBeInTheDocument()
  })

  it('renders icons for each contact method', () => {
    render(<ContactSection />)
    
    // Check if all icons are present
    const icons = screen.getAllByRole('img', { hidden: true })
    expect(icons).toHaveLength(3)
  })

  it('has correct styling classes', () => {
    const { container } = render(<ContactSection />)
    
    // Check for grid layout
    const gridContainer = container.querySelector('.grid')
    expect(gridContainer).toHaveClass('md:grid-cols-3')
    
    // Check for card styling
    const cards = container.querySelectorAll('.bg-white')
    expect(cards).toHaveLength(3)
    cards.forEach(card => {
      expect(card).toHaveClass('rounded-xl')
      expect(card).toHaveClass('shadow-sm')
    })
  })
}) 