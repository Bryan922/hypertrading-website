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
      <nav className="container mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold bg-gradient-to-r from-primary-400 to-accent-400 bg-clip-text text-transparent relative z-10 hover:scale-105 transition-all duration-300">
          HyperTrading
        </Link>

        {/* Navigation desktop */}
        <div className="hidden lg:flex items-center gap-8">
          <div className="flex items-center gap-6">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="nav-link text-sm uppercase tracking-wider font-medium"
              >
                {item.name}
              </Link>
            ))}
          </div>
          <div className="flex items-center gap-4">
            <button className="modern-button-outline">
              Se connecter
            </button>
            <button className="modern-button">
              Démarrer
            </button>
          </div>
        </div>

        {/* Bouton menu mobile */}
        <button
          type="button"
          className="lg:hidden text-white/70 hover:text-primary-400 relative z-10 hover:scale-110 transition-all duration-300"
          onClick={() => setMobileMenuOpen(true)}
        >
          <Bars3Icon className="h-6 w-6" />
        </button>

        {/* Menu mobile */}
        <motion.div
          className={`lg:hidden fixed inset-0 z-50 ${mobileMenuOpen ? 'block' : 'hidden'}`}
          initial={{ opacity: 0, x: "100%" }}
          animate={{ opacity: mobileMenuOpen ? 1 : 0, x: mobileMenuOpen ? "0%" : "100%" }}
          transition={{ duration: 0.3 }}
        >
          <div className="fixed inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setMobileMenuOpen(false)} />
          <motion.div 
            className="fixed inset-y-0 right-0 w-full max-w-sm bg-secondary-900/95 backdrop-blur-md px-6 py-6"
            initial={{ x: "100%" }}
            animate={{ x: "0%" }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex items-center justify-between mb-8">
              <Link href="/" className="text-2xl font-bold bg-gradient-to-r from-primary-400 to-accent-400 bg-clip-text text-transparent hover:scale-105 transition-all duration-300">
                HyperTrading
              </Link>
              <button
                type="button"
                className="text-white/70 hover:text-primary-400 hover:scale-110 transition-all duration-300"
                onClick={() => setMobileMenuOpen(false)}
              >
                <XMarkIcon className="h-6 w-6" />
              </button>
            </div>
            <div className="flex flex-col gap-6">
              <div className="flex flex-col gap-4">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="nav-link text-lg uppercase tracking-wider font-medium text-center"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
              <div className="flex flex-col gap-4 pt-6 border-t border-white/10">
                <button className="modern-button-outline w-full">
                  Se connecter
                </button>
                <button className="modern-button w-full">
                  Démarrer
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </nav>
    </header>
  )
} 