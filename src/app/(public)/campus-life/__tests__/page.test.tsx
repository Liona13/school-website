import { render, screen } from '@testing-library/react'
import CampusLifePage from '../page'

describe('CampusLifePage', () => {
  it('renders all main sections', () => {
    render(<CampusLifePage />)
    
    // Check for CampusLifeHero section
    expect(screen.getByText(/Campus Life at/i)).toBeInTheDocument()
    
    // Check for ActivitiesSection
    expect(screen.getByText(/Student Activities/i)).toBeInTheDocument()
    
    // Check for FacilitiesSection
    expect(screen.getByText(/Our Facilities/i)).toBeInTheDocument()
    
    // Check for EventsSection
    expect(screen.getByText(/Upcoming Events/i)).toBeInTheDocument()
  })
}) 