'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

const footerLinks = [
  {
    title: "Services",
    links: [
      { name: "Market Making", href: "#market-making" },
      { name: "Trading Quantitatif", href: "#trading" },
      { name: "Analyse de Marché", href: "#analyse" },
      { name: "Solutions Sur Mesure", href: "#solutions" }
    ]
  },
  {
    title: "Informations",
    links: [
      { name: "À Propos", href: "#about" },
      { name: "Notre Équipe", href: "#equipe" },
      { name: "Performance", href: "#performance" },
      { name: "Blog", href: "#blog" }
    ]
  },
  {
    title: "Contact",
    links: [
      { name: "Démarrer", href: "#demarrer" },
      { name: "Support", href: "#support" },
      { name: "FAQ", href: "#faq" },
      { name: "Nous contacter", href: "#contact" }
    ]
  }
]

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container mx-auto px-4 py-12">
        <div className="footer-grid">
          {/* Logo et description */}
          <div className="footer-brand">
            <Link href="/" className="text-2xl font-bold">
              HyperTrading
            </Link>
            <p className="footer-description">
              Votre partenaire de confiance pour le trading quantitatif. Une expertise pointue au service de votre performance.
            </p>
          </div>

          {/* Liens */}
          {footerLinks.map((section) => (
            <div key={section.title} className="footer-section">
              <h3 className="footer-title">{section.title}</h3>
              <ul className="footer-links">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link 
                      href={link.href}
                      className="footer-link"
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
        <div className="footer-bottom">
          <p className="footer-copyright">
            © {new Date().getFullYear()} HyperTrading. Tous droits réservés.
          </p>
          <div className="footer-legal">
            <Link href="#privacy" className="footer-link">
              Politique de confidentialité
            </Link>
            <Link href="#terms" className="footer-link">
              Conditions d'utilisation
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
} 