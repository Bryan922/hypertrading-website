'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-primary-600">
            HyperTrading
          </Link>
          
          <p className="text-sm text-secondary-500">
            © {new Date().getFullYear()} HyperTrading. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  )
} 