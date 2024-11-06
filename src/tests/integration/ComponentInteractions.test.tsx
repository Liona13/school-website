import { render, screen, fireEvent } from '@testing-library/react'
import Header from '@/components/layout/Header'
import HeroSection from '@/components/public/HeroSection'
import NewsSection from '@/components/public/NewsSection'
import ContactSection from '@/components/public/ContactSection'

describe('Component Interactions', () => {
  it('header stays fixed while scrolling through sections', () => {
    const { container } = render(
      <>
        <Header />
        <HeroSection />
        <NewsSection />
        <ContactSection />
      </>
    )
    
    const header = container.querySelector('header')
    expect(header).toHaveClass('fixed')
    expect(header).toHaveClass('z-50')
  })

  it('maintains consistent styling across components', () => {
    const { container } = render(
      <>
        <Header />
        <HeroSection />
        <NewsSection />
        <ContactSection />
      </>
    )
    
    // Check for consistent container widths
    const containers = container.querySelectorAll('.container-wrapper')
    containers.forEach(cont => {
      expect(cont).toHaveClass('max-w-7xl')
    })
    
    // Check for consistent heading styles
    const mainHeadings = container.querySelectorAll('.heading-1, .heading-2')
    mainHeadings.forEach(heading => {
      expect(heading).toHaveClass('font-bold')
    })
  })

  it('handles mobile responsiveness across components', () => {
    const { container } = render(
      <>
        <Header />
        <HeroSection />
        <NewsSection />
        <ContactSection />
      </>
    )
    
    // Check mobile menu
    const menuButton = screen.getByRole('button')
    fireEvent.click(menuButton)
    
    // Check grid layouts
    const grids = container.querySelectorAll('.grid')
    grids.forEach(grid => {
      expect(grid).toHaveClass(/md:grid-cols-[2-3]/)
    })
  })
}) 