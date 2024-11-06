'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface ScrollRevealProps {
  children: ReactNode
  direction?: 'up' | 'down' | 'left' | 'right'
  delay?: number
}

export default function ScrollReveal({ 
  children, 
  direction = 'up', 
  delay = 0 
}: ScrollRevealProps) {
  const directions = {
    up: { y: 50 },
    down: { y: -50 },
    left: { x: 50 },
    right: { x: -50 },
  }

  return (
    <motion.div
      initial={{ 
        ...directions[direction],
        opacity: 0 
      }}
      whileInView={{ 
        x: 0,
        y: 0,
        opacity: 1 
      }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ 
        duration: 0.8, 
        delay,
        ease: [0.25, 0.1, 0.25, 1] 
      }}
    >
      {children}
    </motion.div>
  )
} 