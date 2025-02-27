'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

export default function Footer() {
  return (
    <footer className="relative bg-secondary-900/50 border-t border-white/10">
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px]" />
      <div className="absolute inset-0 bg-gradient-radial-dark" />
      
      <div className="relative container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <h3 className="text-xl font-bold text-white mb-6">Hypertrading</h3>
            <p className="text-white/70 mb-6">
              Solutions de trading quantitatif de nouvelle génération pour des performances exceptionnelles.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">Navigation</h4>
            <ul className="space-y-4">
              <li>
                <a href="#about" className="text-white/70 hover:text-white transition-colors">
                  À propos
                </a>
              </li>
              <li>
                <a href="#stats" className="text-white/70 hover:text-white transition-colors">
                  Performances
                </a>
              </li>
              <li>
                <a href="#contact" className="text-white/70 hover:text-white transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">Légal</h4>
            <ul className="space-y-4">
              <li>
                <a href="#" className="text-white/70 hover:text-white transition-colors">
                  Mentions légales
                </a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-white transition-colors">
                  Politique de confidentialité
                </a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-white transition-colors">
                  CGU
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">Contact</h4>
            <ul className="space-y-4">
              <li className="text-white/70">
                Paris, France
              </li>
              <li>
                <a href="mailto:contact@hypertrading.com" className="text-white/70 hover:text-white transition-colors">
                  contact@hypertrading.com
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-white/10">
          <p className="text-center text-white/50">
            © {new Date().getFullYear()} Hypertrading. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  )
} 