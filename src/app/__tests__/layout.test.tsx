import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import RootLayout from '../layout'

// Mock the Inter font
jest.mock('next/font/google', () => ({
  Inter: () => ({
    className: 'inter-mock',
  }),
}))

// Mock framer-motion
jest.mock('framer-motion', () => ({
  motion: {
    div: ({ children, ...props }: React.PropsWithChildren<Record<string, unknown>>) => 
      <div {...props}>{children}</div>,
    h1: ({ children, ...props }: React.PropsWithChildren<Record<string, unknown>>) => 
      <h1 {...props}>{children}</h1>,
    p: ({ children, ...props }: React.PropsWithChildren<Record<string, unknown>>) => 
      <p {...props}>{children}</p>,
  },
}))

describe('RootLayout', () => {
  it('renders header, footer and children correctly', () => {
    const { container } = render(
      <RootLayout>
        <div data-testid="test-content">Test Content</div>
      </RootLayout>
    )

    // Check if all main components are rendered
    expect(screen.getByText('SchoolMS')).toBeInTheDocument() // Header logo
    expect(screen.getByText('Test Content')).toBeInTheDocument() // Children content
    expect(screen.getByText(/Empowering education for a brighter future/)).toBeInTheDocument() // Footer content

    // Check if the body has the Inter font class
    const body = container.querySelector('body')
    expect(body).toHaveClass('inter-mock')

    // Check if the html element is rendered with correct attributes
    const html = container.querySelector('html')
    expect(html).toBeInTheDocument()
    expect(html).toHaveAttribute('lang', 'en')
  })

  it('maintains consistent layout structure', () => {
    const { container } = render(
      <RootLayout>
        <div>Content</div>
      </RootLayout>
    )

    // Check if header is first, content is in the middle, and footer is last
    const body = container.querySelector('body')
    const children = body?.children || []
    
    expect(children[0].tagName).toBe('HEADER')
    expect(children[1].textContent).toBe('Content')
    expect(children[2].tagName).toBe('FOOTER')
  })

  it('has correct metadata', () => {
    render(
      <RootLayout>
        <div>Content</div>
      </RootLayout>
    )

    // Check for footer content
    expect(screen.getByText('Quick Links')).toBeInTheDocument()
    expect(screen.getByText('Contact Us')).toBeInTheDocument()
    expect(screen.getByText('Stay Updated')).toBeInTheDocument()

    // Check for social media links
    const socialLinks = screen.getAllByRole('link', { hidden: true })
    expect(socialLinks.some(link => link.getAttribute('href') === 'https://facebook.com')).toBe(true)
    expect(socialLinks.some(link => link.getAttribute('href') === 'https://twitter.com')).toBe(true)
    expect(socialLinks.some(link => link.getAttribute('href') === 'https://linkedin.com')).toBe(true)
  })

  it('applies consistent styling across layout', () => {
    const { container } = render(
      <RootLayout>
        <div>Content</div>
      </RootLayout>
    )

    // Check footer styling
    const footer = container.querySelector('footer')
    expect(footer).toHaveClass('bg-gray-900')
    expect(footer).toHaveClass('text-white')

    // Check container styling
    const footerContainer = footer?.querySelector('.container')
    expect(footerContainer).toHaveClass('mx-auto')
    expect(footerContainer).toHaveClass('px-4')
  })
}) 