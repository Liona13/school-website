'use client'

import { useState } from 'react'
import { usePathname } from 'next/navigation'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'
import Logo from '@/components/ui/Logo'

const navigation = [
  { name: 'About Us', href: '/about' },
  { name: 'Academics', href: '/academics' },
  { name: 'Admissions', href: '/admissions' },
  { name: 'Campus Life', href: '/campus-life' },
  { name: 'News', href: '/news' },
  { name: 'Contact', href: '/contact' },
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  const isActive = (href: string) => {
    if (href === '/') return pathname === href
    return pathname.startsWith(href)
  }

  return (
    <>
      {/* Spacer div to prevent content from hiding under fixed header */}
      <div className="h-[72px]" /> {/* This matches the header height */}
      
      <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm shadow-sm z-50">
        <nav className="container-wrapper flex items-center justify-between h-[72px]">
          <Logo />

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`relative group overflow-hidden ${
                  isActive(item.href) 
                    ? 'text-primary font-medium' 
                    : 'text-gray-600 hover:text-primary'
                }`}
              >
                {item.name}
                <span className={`absolute inset-x-0 bottom-0 h-0.5 gradient-bg-primary transition-transform duration-300
                  ${isActive(item.href) ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`} 
                />
              </Link>
            ))}
            <Link
              href="/login"
              className="gradient-bg-primary text-white px-6 py-2.5 rounded-lg hover:opacity-90 
                transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
            >
              Login
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            className="md:hidden p-2 rounded-md hover:bg-gray-50 transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? (
              <XMarkIcon className="h-6 w-6 text-primary" />
            ) : (
              <Bars3Icon className="h-6 w-6 text-primary" />
            )}
          </button>
        </nav>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100">
            <div className="container-wrapper py-4 space-y-1">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`block py-3 px-4 rounded-lg transition-all duration-300 hover-gradient
                    ${isActive(item.href)
                      ? 'gradient-text-primary bg-gray-50 font-medium'
                      : 'text-gray-600 hover:text-primary'
                    }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-2 pb-1">
                <Link
                  href="/login"
                  className="block w-full text-center gradient-bg-primary text-white px-6 py-3 rounded-lg 
                    hover:opacity-90 transition-all duration-300 shadow-lg hover:shadow-xl"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Login
                </Link>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  )
} 