'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

const navigation = [
  { name: 'Accueil', href: '/' },
  { name: 'Services', href: '#services' },
  { name: 'Performance', href: '#stats' },
]

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="fixed w-full bg-secondary-900/80 backdrop-blur-md z-50 border-b border-white/10">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold bg-gradient-to-r from-primary-400 to-accent-400 bg-clip-text text-transparent">
            HyperTrading
          </Link>

          {/* Navigation desktop */}
          <div className="hidden lg:flex items-center gap-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-white/70 hover:text-primary-400 transition-colors text-sm uppercase tracking-wider font-medium"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Bouton menu mobile */}
          <button
            type="button"
            className="lg:hidden text-white/70 hover:text-primary-400"
            onClick={() => setMobileMenuOpen(true)}
          >
            <Bars3Icon className="h-6 w-6" />
          </button>
        </div>
      </nav>

      {/* Menu mobile */}
      <motion.div
        className={`lg:hidden ${mobileMenuOpen ? 'fixed inset-0 z-50' : 'hidden'}`}
        initial={{ opacity: 0, x: "100%" }}
        animate={{ opacity: mobileMenuOpen ? 1 : 0, x: mobileMenuOpen ? "0%" : "100%" }}
        transition={{ duration: 0.3 }}
      >
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setMobileMenuOpen(false)} />
        <div className="fixed inset-y-0 right-0 w-full max-w-sm bg-secondary-900 px-6 py-6">
          <div className="flex items-center justify-between">
            <Link href="/" className="text-2xl font-bold bg-gradient-to-r from-primary-400 to-accent-400 bg-clip-text text-transparent">
              HyperTrading
            </Link>
            <button
              type="button"
              className="text-white/70 hover:text-primary-400"
              onClick={() => setMobileMenuOpen(false)}
            >
              <XMarkIcon className="h-6 w-6" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="space-y-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block text-lg text-white/70 hover:text-primary-400 transition-colors uppercase tracking-wider font-medium"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </header>
  )
} 