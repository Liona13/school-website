"use client";

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

export default function HeroSection() {
  return (
    <section className="relative min-h-[calc(100vh-72px)] flex items-center bg-gradient-to-br from-mint-50 via-mint-100/50 to-white">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('/images/grid.svg')] opacity-5" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-mint-50/50 to-mint-100/50" />
      </div>

      <div className="container mx-auto px-4 py-12 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            {/* Left Column - Content */}
            <div className="lg:col-span-7 space-y-8 text-center lg:text-left">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full border border-mint-200"
              >
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-mint-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-mint-500"></span>
                </span>
                <span className="text-sm font-medium text-mint-800">ICSE Affiliated</span>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="space-y-6"
              >
                <h1 className="text-4xl lg:text-6xl xl:text-7xl font-bold tracking-tight text-gray-900">
                  Welcome to{' '}
                  <span className="text-mint-700">Saptashri</span>{' '}
                  <span className="text-mint-800">Gyanpeeth</span>
                </h1>
                <p className="text-lg text-gray-600 max-w-2xl lg:mx-0 mx-auto">
                  Empowering young minds through holistic education, fostering innovation, 
                  and building tomorrow's leaders with values and vision.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="flex flex-wrap gap-4 justify-center lg:justify-start"
              >
                <Link
                  href="/admissions"
                  className="inline-flex items-center px-6 py-3 rounded-lg bg-mint-600 text-white 
                    shadow-lg shadow-mint-600/20 hover:shadow-xl hover:shadow-mint-600/30 
                    hover:-translate-y-0.5 transition-all duration-300"
                >
                  Apply Now
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Link>
                <Link
                  href="/login"
                  className="inline-flex items-center px-6 py-3 rounded-lg border-2 border-mint-600 
                    text-mint-700 hover:bg-mint-50 hover:-translate-y-0.5 transition-all duration-300"
                >
                  Student Login
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </motion.div>
            </div>

            {/* Right Column - Image/Stats */}
            <div className="lg:col-span-5">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="relative"
              >
                <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src="/images/hero-image.jpg"
                    alt="Students at Saptashri Gyanpeeth"
                    width={600}
                    height={400}
                    className="w-full h-auto object-cover"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-mint-900/20 to-transparent" />
                </div>

                {/* Floating Stats Cards */}
                <motion.div
                  className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-lg border border-mint-100"
                  animate={{ y: [0, -5, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-mint-100 rounded-lg">
                      <svg className="w-8 h-8 text-mint-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                          d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Years of Excellence</p>
                      <p className="text-xl font-bold text-mint-700">25+</p>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  className="absolute -top-6 -right-6 bg-white p-4 rounded-xl shadow-lg border border-mint-100"
                  animate={{ y: [0, -5, 0] }}
                  transition={{ duration: 3, repeat: Infinity, delay: 1 }}
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-mint-100 rounded-lg">
                      <svg className="w-8 h-8 text-mint-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Happy Students</p>
                      <p className="text-xl font-bold text-mint-700">1000+</p>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 