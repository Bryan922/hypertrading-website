'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function HeroSection() {
  return (
    <section className="hero">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1>
          Votre partenaire de confiance en trading quantitatif
        </h1>
        <p>
          Une approche systématique et sophistiquée du trading algorithmique, 
          générant des performances stables de 60% annuel avec seulement 2% de drawdown.
        </p>
        
        <div className="urgent-banner">
          <p>
            <strong>🚀 Offre de lancement</strong> - Accès prioritaire aux premiers clients avec des frais de gestion réduits
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12"
        >
          <Link href="#contact" className="btn-primary">
            Démarrer maintenant
          </Link>
          <Link href="#about" className="btn-primary">
            En savoir plus
          </Link>
        </motion.div>

        <div className="stats-grid">
          {[
            { value: '60%', label: 'Performance annuelle' },
            { value: '2%', label: 'Drawdown maximum' },
            { value: '1000+', label: 'Actifs analysés' },
            { value: '24/7', label: 'Surveillance continue' }
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 + index * 0.2 }}
              className="stats-card"
            >
              <div className="stats-value">{stat.value}</div>
              <div className="stats-label">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
} 