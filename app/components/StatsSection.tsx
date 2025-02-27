'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function StatsSection() {
  return (
    <section id="stats" className="section bg-gradient-to-b from-white to-secondary-50/50">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="mb-6">Nos Performances</h2>
          <p className="text-lg">
            Des résultats exceptionnels et constants grâce à notre approche quantitative
          </p>
        </div>

        <div className="stats-grid">
          {[
            {
              value: '60%',
              label: 'Performance Annuelle',
              description: 'Rendement moyen stable sur les dernières années'
            },
            {
              value: '2%',
              label: 'Drawdown Maximum',
              description: 'Gestion stricte des risques pour limiter les pertes'
            },
            {
              value: '95%',
              label: 'Taux de Réussite',
              description: 'Ratio de trades gagnants sur l'ensemble des opérations'
            },
            {
              value: '24/7',
              label: 'Surveillance',
              description: 'Monitoring continu des marchés et des positions'
            }
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 * index }}
              className="stats-card"
            >
              <div className="text-4xl font-bold gradient-text mb-3">
                {stat.value}
              </div>
              <div className="text-lg font-semibold text-secondary-900 mb-2">
                {stat.label}
              </div>
              <p className="text-sm text-secondary-600">
                {stat.description}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Link href="#contact" className="btn btn-primary">
            Commencer maintenant
          </Link>
        </div>
      </div>
    </section>
  )
} 