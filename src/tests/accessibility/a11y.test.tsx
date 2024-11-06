import { render } from '@testing-library/react'
import { axe, toHaveNoViolations } from 'jest-axe'
import Header from '@/components/layout/Header'
import HeroSection from '@/components/public/HeroSection'
import NewsSection from '@/components/public/NewsSection'
import ContactSection from '@/components/public/ContactSection'

expect.extend(toHaveNoViolations)

describe('Accessibility Tests', () => {
  it('Header has no accessibility violations', async () => {
    const { container } = render(<Header />)
    const results = await axe(container)
    expect(results).toHaveNoViolations()
  })

  it('HeroSection has no accessibility violations', async () => {
    const { container } = render(<HeroSection />)
    const results = await axe(container)
    expect(results).toHaveNoViolations()
  })

  it('NewsSection has no accessibility violations', async () => {
    const { container } = render(<NewsSection />)
    const results = await axe(container)
    expect(results).toHaveNoViolations()
  })

  it('ContactSection has no accessibility violations', async () => {
    const { container } = render(<ContactSection />)
    const results = await axe(container)
    expect(results).toHaveNoViolations()
  })
}) 