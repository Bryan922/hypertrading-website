'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function StatsSection() {
  return (
    <section id="stats" className="relative py-24 overflow-hidden bg-secondary-900/50">
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px]" />
      <div className="absolute inset-0 bg-gradient-radial-dark" />

      <div className="relative container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-primary-200 to-accent-200">
            Nos Performances
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            Des résultats exceptionnels et constants grâce à notre approche quantitative
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto mb-16">
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
              className="group relative p-8 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300"
            >
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-accent-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary-400 to-accent-400 bg-clip-text text-transparent">
                {stat.value}
              </div>
              <div className="text-lg font-semibold mb-3 text-white/90">
                {stat.label}
              </div>
              <p className="text-white/70">
                {stat.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="relative max-w-5xl mx-auto p-8 rounded-2xl bg-gradient-to-r from-primary-900/50 to-accent-900/50 border border-white/10"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex-1">
              <h3 className="text-2xl font-bold text-white mb-2">
                Prêt à commencer ?
              </h3>
              <p className="text-white/70">
                Découvrez comment notre approche quantitative peut transformer votre trading
              </p>
            </div>
            <Link
              href="#contact"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-primary-600 to-accent-600 rounded-xl hover:from-primary-500 hover:to-accent-500 transition-all duration-300 shadow-lg hover:shadow-primary-500/25"
            >
              Commencer maintenant
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
} 