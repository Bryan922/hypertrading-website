'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

const footerLinks = [
  {
    title: "Services",
    links: [
      { name: "Market Making", href: "#market-making" },
      { name: "Analyse Quantitative", href: "#analyse" },
      { name: "Gestion des Risques", href: "#risk" },
      { name: "Performance", href: "#performance" }
    ]
  },
  {
    title: "Entreprise",
    links: [
      { name: "À Propos", href: "#about" },
      { name: "Contact", href: "#contact" },
      { name: "Carrières", href: "#careers" },
      { name: "Mentions Légales", href: "#legal" }
    ]
  },
  {
    title: "Ressources",
    links: [
      { name: "Documentation", href: "#docs" },
      { name: "Blog", href: "#blog" },
      { name: "FAQ", href: "#faq" },
      { name: "Support", href: "#support" }
    ]
  }
]

export default function Footer() {
  return (
    <footer className="bg-secondary-900 border-t border-secondary-800">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo et description */}
          <div className="space-y-4">
            <Link href="/" className="text-2xl font-bold text-primary-300">
              Hypertrading
            </Link>
            <p className="text-gray-400 text-sm">
              Solutions de trading quantitatif de pointe pour une performance optimale et maîtrisée.
            </p>
          </div>

          {/* Liens */}
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h3 className="text-primary-200 font-semibold mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link 
                      href={link.href}
                      className="text-gray-400 hover:text-primary-300 transition-colors text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Barre de copyright */}
        <div className="border-t border-secondary-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Hypertrading. Tous droits réservés.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="#privacy" className="text-gray-400 hover:text-primary-300 transition-colors text-sm">
              Politique de confidentialité
            </Link>
            <Link href="#terms" className="text-gray-400 hover:text-primary-300 transition-colors text-sm">
              Conditions d'utilisation
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
} 