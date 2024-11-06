import { render, screen } from '@testing-library/react'
import AdmissionsPage from '../page'

describe('AdmissionsPage', () => {
  it('renders all main sections', () => {
    render(<AdmissionsPage />)
    
    // Check for AdmissionsHero section
    expect(screen.getByText(/Join Our School Community/i)).toBeInTheDocument()
    
    // Check for ProcessSection
    expect(screen.getByText(/Admission Process/i)).toBeInTheDocument()
    
    // Check for RequirementsSection
    expect(screen.getByText(/Admission Requirements/i)).toBeInTheDocument()
    
    // Check for ApplicationSection
    expect(screen.getByText(/Apply Now/i)).toBeInTheDocument()
  })
}) 