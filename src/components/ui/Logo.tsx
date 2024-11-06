'use client'

import Link from 'next/link'
import Image from 'next/image'

export default function Logo() {
  return (
    <Link 
      href="/" 
      className="flex items-center gap-3 group"
    >
      <div className="relative w-12 h-12 overflow-hidden rounded-full">
        <Image
          src="/images/logo.jpg"
          alt="Saptashri Gyanpeeth Logo"
          fill
          className="object-contain group-hover:scale-105 transition-transform duration-300"
          priority
        />
      </div>
      <div className="flex flex-col">
        <span className="font-bold text-xl text-red-700 group-hover:text-red-800 transition-colors duration-300">
          Saptashri
        </span>
        <span className="font-bold text-lg text-red-600 group-hover:text-red-700 transition-colors duration-300">
          Gyanpeeth
        </span>
      </div>
    </Link>
  )
} 