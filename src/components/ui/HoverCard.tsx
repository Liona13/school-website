'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface HoverCardProps {
  children: ReactNode
  className?: string
}

export default function HoverCard({ children, className = '' }: HoverCardProps) {
  return (
    <motion.div
      className={`relative overflow-hidden rounded-xl bg-white ${className}`}
      whileHover={{ y: -5 }}
      transition={{ duration: 0.2 }}
    >
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 opacity-0"
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      />
      {children}
    </motion.div>
  )
} 