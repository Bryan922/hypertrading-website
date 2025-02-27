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
      <nav className="container mx-auto px-6 py-3 flex items-center justify-between">
        <Link 
          href="/" 
          className="text-xl font-bold bg-gradient-to-r from-primary-400 via-accent-400 to-primary-400 bg-clip-text text-transparent relative z-10 hover:scale-105 transition-all duration-300"
        >
          HyperTrading
        </Link>

        {/* Navigation desktop */}
        <div className="hidden lg:flex items-center gap-6">
          <div className="flex items-center gap-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="nav-link text-sm font-medium tracking-wide hover:text-primary-400"
              >
                {item.name}
              </Link>
            ))}
          </div>
          <div className="flex items-center gap-3 ml-6 border-l border-white/10 pl-6">
            <button className="px-4 py-1.5 text-sm font-medium text-white/90 hover:text-white bg-white/5 hover:bg-white/10 rounded-lg transition-all duration-300">
              Se connecter
            </button>
            <button className="px-4 py-1.5 text-sm font-medium text-white bg-gradient-to-r from-primary-600 to-accent-600 rounded-lg hover:from-primary-500 hover:to-accent-500 transition-all duration-300">
              Démarrer
            </button>
          </div>
        </div>

        {/* Bouton menu mobile */}
        <button
          type="button"
          className="lg:hidden text-white/70 hover:text-primary-400 relative z-10"
          onClick={() => setMobileMenuOpen(true)}
        >
          <Bars3Icon className="h-5 w-5" />
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
            <div className="flex items-center justify-between mb-6">
              <Link href="/" className="text-xl font-bold bg-gradient-to-r from-primary-400 via-accent-400 to-primary-400 bg-clip-text text-transparent">
                HyperTrading
              </Link>
              <button
                type="button"
                className="text-white/70 hover:text-primary-400"
                onClick={() => setMobileMenuOpen(false)}
              >
                <XMarkIcon className="h-5 w-5" />
              </button>
            </div>
            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-2">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="nav-link text-base font-medium py-2 text-center"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
              <div className="flex flex-col gap-3 pt-4 border-t border-white/10 mt-2">
                <button className="w-full py-2 text-center text-sm font-medium text-white/90 hover:text-white bg-white/5 hover:bg-white/10 rounded-lg transition-all duration-300">
                  Se connecter
                </button>
                <button className="w-full py-2 text-center text-sm font-medium text-white bg-gradient-to-r from-primary-600 to-accent-600 rounded-lg hover:from-primary-500 hover:to-accent-500 transition-all duration-300">
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