'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function StatsSection() {
  return (
    <section id="stats" className="stats-section">
      <div className="section-title">
        <h2>Nos Performances</h2>
        <p>
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
            description: 'Ratio de trades gagnants sur l\'ensemble des opérations'
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
            <div className="stats-value">{stat.value}</div>
            <div className="stats-label">{stat.label}</div>
            <p>{stat.description}</p>
          </motion.div>
        ))}
      </div>

      <div className="emergency-banner">
        <div className="emergency-left">
          <strong><i className="fas fa-chart-line"></i> Performance exceptionnelle</strong>
          <span>Découvrez comment nous générons des rendements stables</span>
        </div>
        <Link href="#contact" className="btn-primary">
          Commencer maintenant
        </Link>
      </div>
    </section>
  )
} 