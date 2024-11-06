import { render, screen, fireEvent } from '@testing-library/react'
import AboutPage from '@/app/(public)/about/page'

describe('About Page Integration', () => {
  it('renders all sections in correct order', () => {
    render(<AboutPage />)
    
    const sections = screen.getAllByRole('region')
    expect(sections[0]).toHaveTextContent(/About Our School/i)
    expect(sections[1]).toHaveTextContent(/Our Mission & Vision/i)
    expect(sections[2]).toHaveTextContent(/Our History & Heritage/i)
    expect(sections[3]).toHaveTextContent(/Our Leadership Team/i)
  })

  it('maintains consistent styling across sections', () => {
    const { container } = render(<AboutPage />)
    
    // Check for consistent container widths
    const containers = container.querySelectorAll('.container-wrapper')
    containers.forEach(cont => {
      expect(cont).toHaveClass('max-w-[1400px]')
      expect(cont).toHaveClass('mx-auto')
    })
    
    // Check for consistent section padding
    const sections = container.querySelectorAll('section')
    sections.forEach(section => {
      expect(section).toHaveClass('section-padding')
    })
    
    // Check for consistent grid layouts
    const grids = container.querySelectorAll('.grid')
    grids.forEach(grid => {
      expect(grid).toHaveClass(/md:grid-cols-[2-4]/)
    })
  })

  it('handles hover interactions correctly', () => {
    const { container } = render(<AboutPage />)
    
    // Check mission cards hover effects
    const missionCards = container.querySelectorAll('.hover\\:shadow-lg')
    missionCards.forEach(card => {
      fireEvent.mouseEnter(card)
      expect(card).toHaveClass('hover:-translate-y-1')
      expect(card).toHaveClass('transition-all')
    })
    
    // Check leadership cards hover effects
    const leadershipCards = container.querySelectorAll('.group')
    leadershipCards.forEach(card => {
      fireEvent.mouseEnter(card)
      expect(card.querySelector('.text-black-600')).toHaveClass('group-hover:scale-110')
    })
  })

  it('maintains responsive layout across sections', () => {
    const { container } = render(<AboutPage />)
    
    // Check responsive classes
    const sections = container.querySelectorAll('section')
    sections.forEach(section => {
      expect(section.querySelector('.mx-4')).toHaveClass('md:mx-8')
      expect(section.querySelector('.text-3xl')).toHaveClass('md:text-4xl')
    })
  })

  it('has consistent spacing between sections', () => {
    const { container } = render(<AboutPage />)
    
    const sections = container.querySelectorAll('section')
    sections.forEach(section => {
      expect(section).toHaveClass('section-padding')
      expect(section.querySelector('.mb-8, .mb-16')).toBeInTheDocument()
    })
  })
}) 