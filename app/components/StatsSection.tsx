'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function StatsSection() {
  return (
    <div className="section bg-gradient">
      {/* Background decorations */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-0 w-[40rem] h-[40rem] bg-primary-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/4 w-[50rem] h-[50rem] bg-accent-500/10 rounded-full blur-3xl" />
      </div>

      <div className="container relative z-10">
        <div className="text-center mb-20 space-y">
          <h2 className="mb-8">Nos Performances</h2>
          <p className="text-lg md:text-xl">
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
              className="stats-card glass hover-lift"
            >
              <div className="text-5xl font-bold gradient-text mb-4">
                {stat.value}
              </div>
              <div className="text-xl font-semibold text-secondary-900 mb-3">
                {stat.label}
              </div>
              <p className="text-base text-secondary-600">
                {stat.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
          className="mt-20 text-center"
        >
          <Link href="#contact" className="btn btn-primary">
            Commencer maintenant
          </Link>
        </motion.div>
      </div>
    </div>
  )
} 