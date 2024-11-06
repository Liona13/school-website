import { render, screen, fireEvent } from '@testing-library/react'
import Home from '@/app/page'

describe('Home Page Integration', () => {
  it('navigates from hero section to admissions', () => {
    render(<Home />)
    
    const applyButton = screen.getByRole('link', { name: /apply now/i })
    expect(applyButton).toHaveAttribute('href', '/admissions')
  })

  it('navigates from news section to full article', () => {
    render(<Home />)
    
    const readMoreLinks = screen.getAllByText(/read more/i)
    readMoreLinks.forEach(link => {
      expect(link.closest('a')).toHaveAttribute('href', expect.stringMatching(/^\/news\//))
    })
  })

  it('displays contact information consistently', () => {
    render(<Home />)
    
    // Check if contact info in header matches contact section
    const headerContactLink = screen.getByText('Contact')
    expect(headerContactLink).toHaveAttribute('href', '/contact')
    
    const contactSection = screen.getByText('Get in Touch')
    expect(contactSection).toBeInTheDocument()
  })
}) 