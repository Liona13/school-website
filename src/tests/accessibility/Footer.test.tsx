import { render } from '@testing-library/react'
import { axe, toHaveNoViolations } from 'jest-axe'
import Footer from '@/components/layout/Footer'

expect.extend(toHaveNoViolations)

describe('Footer Accessibility', () => {
  it('should not have any accessibility violations', async () => {
    const { container } = render(<Footer />)
    const results = await axe(container)
    expect(results).toHaveNoViolations()
  })

  it('has proper heading hierarchy', () => {
    const { container } = render(<Footer />)
    const headings = container.querySelectorAll('h3')
    headings.forEach(heading => {
      expect(heading).toHaveAttribute('class', expect.stringContaining('text-lg'))
    })
  })

  it('has proper link contrast', () => {
    const { container } = render(<Footer />)
    const links = container.querySelectorAll('a')
    links.forEach(link => {
      expect(link).toHaveClass('text-gray-400')
      expect(link).toHaveClass('hover:text-white')
    })
  })

  it('has proper form labels and ARIA attributes', () => {
    const { container } = render(<Footer />)
    const emailInput = container.querySelector('input[type="email"]')
    expect(emailInput).toHaveAttribute('placeholder', 'Enter your email')
    expect(emailInput).toHaveAttribute('required')
  })

  it('has proper social media link accessibility', () => {
    const { container } = render(<Footer />)
    const socialLinks = container.querySelectorAll('.flex.space-x-4 a')
    socialLinks.forEach(link => {
      expect(link).toHaveAttribute('href')
      expect(link.querySelector('.sr-only')).toBeInTheDocument()
    })
  })
}) 