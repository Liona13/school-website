import { render, screen, fireEvent } from '@testing-library/react';
import RootLayout from '@/app/layout';
import Home from '@/app/page';

// Mock framer-motion
jest.mock('framer-motion', () => ({
  motion: {
    div: ({ children, ...props }: React.PropsWithChildren<{}>) => <div {...props}>{children}</div>,
  },
}));

// Mock next/font
jest.mock('next/font/google', () => ({
  Inter: () => ({
    className: 'inter-mock',
  }),
}));

describe('Footer Integration', () => {
  it('maintains consistent contact information across components', () => {
    render(
      <RootLayout>
        <Home />
      </RootLayout>
    );
    
    // Check if contact info in footer matches contact section
    const contactSection = screen.getByText('Get in Touch');
    expect(contactSection).toBeInTheDocument();
    
    const footerPhone = screen.getAllByText('+1 (555) 123-4567');
    expect(footerPhone).toHaveLength(2); // One in contact section, one in footer
    
    const footerEmail = screen.getAllByText('info@schoolms.edu');
    expect(footerEmail).toHaveLength(2); // One in contact section, one in footer
    
    const footerAddress = screen.getAllByText('123 Education Street');
    expect(footerAddress).toHaveLength(2); // One in contact section, one in footer
  });

  it('navigates to correct pages from quick links', () => {
    render(
      <RootLayout>
        <Home />
      </RootLayout>
    );
    
    // Check all quick links
    const links = [
      { text: 'About Us', href: '/about' },
      { text: 'Admissions', href: '/admissions' },
      { text: 'Academics', href: '/academics' },
      { text: 'Campus Life', href: '/campus-life' },
      { text: 'News & Events', href: '/news' }
    ];

    links.forEach(({ text, href }) => {
      const link = screen.getAllByText(text)[0]; // Get footer link if text appears multiple times
      expect(link.closest('a')).toHaveAttribute('href', href);
    });
  });

  it('handles newsletter form submission', () => {
    render(
      <RootLayout>
        <Home />
      </RootLayout>
    );
    
    const emailInput = screen.getByPlaceholderText('Enter your email');
    const subscribeButton = screen.getByText('Subscribe');
    
    // Type email
    fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
    expect(emailInput).toHaveValue('test@example.com');
    
    // Submit form
    fireEvent.click(subscribeButton);
    // Note: Add actual form submission test when functionality is implemented
  });

  it('maintains consistent styling with page theme', () => {
    const { container } = render(
      <RootLayout>
        <Home />
      </RootLayout>
    );
    
    // Check for consistent text colors
    const footerLinks = container.querySelectorAll('footer a');
    footerLinks.forEach(link => {
      expect(link).toHaveClass('text-gray-400');
      expect(link).toHaveClass('hover:text-white');
    });
    
    // Check for consistent grid layouts
    const grids = container.querySelectorAll('.grid');
    grids.forEach(grid => {
      expect(grid).toHaveClass(/md:grid-cols-[2-4]/);
    });
  });

  it('social media links open in same tab', () => {
    render(
      <RootLayout>
        <Home />
      </RootLayout>
    );
    
    const socialLinks = [
      { platform: 'Facebook', url: 'https://facebook.com' },
      { platform: 'Twitter', url: 'https://twitter.com' },
      { platform: 'LinkedIn', url: 'https://linkedin.com' }
    ];

    socialLinks.forEach(({ platform, url }) => {
      const link = screen.getByText(platform).closest('a');
      expect(link).toHaveAttribute('href', url);
      expect(link).not.toHaveAttribute('target'); // Should open in same tab
    });
  });

  it('updates copyright year automatically', () => {
    render(
      <RootLayout>
        <Home />
      </RootLayout>
    );
    
    const currentYear = new Date().getFullYear();
    expect(screen.getByText(`© ${currentYear} SchoolMS. All rights reserved.`)).toBeInTheDocument();
  });
}); 