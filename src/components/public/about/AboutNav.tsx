'use client'

import { usePathname } from 'next/navigation'
import Link from 'next/link'

const aboutLinks = [
  { name: 'Overview', href: '/about' },
  { name: 'History', href: '/about/history' },
  { name: 'Mission & Vision', href: '/about/mission' },
  { name: 'Leadership', href: '/about/leadership' },
]

export default function AboutNav() {
  const pathname = usePathname()

  return (
    <nav className="bg-white border-b border-grey-200 sticky top-[72px] z-40 backdrop-blur-sm bg-white/95">
      <div className="container-wrapper">
        <div className="flex gap-8 overflow-x-auto hide-scrollbar">
          {aboutLinks.map((link) => {
            const isActive = pathname === link.href
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`py-4 border-b-2 px-1 -mb-[2px] whitespace-nowrap transition-all duration-300 hover-lift ${
                  isActive
                    ? 'border-primary text-primary font-medium'
                    : 'border-transparent text-secondary hover:text-primary'
                }`}
              >
                {link.name}
              </Link>
            )
          })}
        </div>
      </div>
    </nav>
  )
} 