'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

export default function Footer() {
  return (
    <footer className="bg-secondary-900 border-t border-white/10">
      <div className="container mx-auto px-6 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <Link href="/" className="text-2xl font-bold bg-gradient-to-r from-primary-400 to-accent-400 bg-clip-text text-transparent">
            HyperTrading
          </Link>
          
          <p className="text-sm text-white/50">
            © {new Date().getFullYear()} HyperTrading. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  )
} 