'use client'

import { motion } from 'framer-motion'
import { ChartBarIcon, CubeTransparentIcon, ShieldCheckIcon } from '@heroicons/react/24/outline'

export default function AboutSection() {
  return (
    <div className="section bg-gradient">
      {/* Background decorations */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 right-0 w-[40rem] h-[40rem] bg-primary-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[50rem] h-[50rem] bg-accent-500/10 rounded-full blur-3xl" />
      </div>

      <div className="container relative z-10">
        <div className="text-center mb-20 space-y">
          <h2 className="mb-8">Notre Approche Quantitative</h2>
          <p className="text-lg md:text-xl">
            Une stratégie sophistiquée basée sur l'analyse multi-actifs et des algorithmes avancés
          </p>
        </div>

        <div className="feature-grid">
          {[
            {
              title: 'Analyse Multi-Actifs',
              description: 'Surveillance continue de plus de 1000 actifs pour identifier les meilleures opportunités de trading.',
              icon: '📊'
            },
            {
              title: 'Algorithmes Sophistiqués',
              description: 'Utilisation d\'algorithmes de pointe pour l\'analyse technique et la prise de décision.',
              icon: '🤖'
            },
            {
              title: 'Gestion des Risques',
              description: 'Système robuste de gestion des risques pour maintenir un drawdown maximum de 2%.',
              icon: '🛡️'
            },
            {
              title: 'Surveillance Continue',
              description: 'Monitoring 24/7 des positions et des conditions de marché.',
              icon: '👁️'
            },
            {
              title: 'Performance Stable',
              description: 'Génération de rendements stables de 60% par an grâce à notre approche systématique.',
              icon: '📈'
            },
            {
              title: 'Adaptation Dynamique',
              description: 'Ajustement continu des stratégies en fonction des conditions de marché.',
              icon: '🔄'
            }
          ].map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 * index }}
              className="feature-card glass hover-lift"
            >
              <div className="text-5xl mb-6">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
              <p className="text-base text-secondary-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
} 