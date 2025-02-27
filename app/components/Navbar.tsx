'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

const navigation = [
  { name: 'Accueil', href: '/' },
  { name: 'Services', href: '#services' },
  { name: 'À propos', href: '#about' },
  { name: 'Performances', href: '#stats' },
  { name: 'Contact', href: '#contact' }
]

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header>
      <nav>
        <div className="logo">
          <Link href="/">
            HyperTrading
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="burger-menu"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className={mobileMenuOpen ? 'active' : ''}></span>
            <span className={mobileMenuOpen ? 'active' : ''}></span>
            <span className={mobileMenuOpen ? 'active' : ''}></span>
          </button>
        </div>
        <ul className={`${mobileMenuOpen ? 'active' : ''}`}>
          {navigation.map((item) => (
            <li key={item.name}>
              <Link
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            </li>
          ))}
          <li>
            <Link
              href="#contact"
              className="btn-connexion"
              onClick={() => setMobileMenuOpen(false)}
            >
              Commencer maintenant
            </Link>
          </li>
        </ul>
      </nav>

      {/* Menu mobile */}
      <motion.div
        className={`lg:hidden ${mobileMenuOpen ? 'fixed inset-0 z-50' : 'hidden'}`}
        initial={{ opacity: 0, x: "100%" }}
        animate={{ opacity: mobileMenuOpen ? 1 : 0, x: mobileMenuOpen ? "0%" : "100%" }}
        transition={{ duration: 0.3 }}
      >
        <div className="fixed inset-0 bg-black/20 backdrop-blur-sm" onClick={() => setMobileMenuOpen(false)} />
        <div className="fixed inset-y-0 right-0 w-full max-w-sm bg-white px-6 py-6">
          <div className="flex items-center justify-between">
            <Link href="/" className="logo">
              HyperTrading
            </Link>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-secondary-600"
              onClick={() => setMobileMenuOpen(false)}
            >
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <ul className="space-y-2 py-6">
              {navigation.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="py-6">
              <Link
                href="#contact"
                className="btn-connexion"
                onClick={() => setMobileMenuOpen(false)}
              >
                Commencer maintenant
              </Link>
            </div>
          </div>
        </div>
      </motion.div>
    </header>
  )
} 