'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { ChartBarIcon, CubeTransparentIcon, ShieldCheckIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'
import Link from 'next/link'

const features = [
  {
    icon: ChartBarIcon,
    title: "Analyse Multi-Actifs",
    description: "Notre système analyse plus de 1000 actifs simultanément, permettant une diversification optimale et une indépendance totale vis-à-vis des conditions de marché."
  },
  {
    icon: CubeTransparentIcon,
    title: "Algorithmes Sophistiqués",
    description: "Utilisation d'algorithmes de pointe en machine learning et deep learning pour détecter les inefficiences microscopiques du marché."
  },
  {
    icon: ShieldCheckIcon,
    title: "Gestion du Risque",
    description: "Contrôle strict du risque avec des systèmes de protection avancés, maintenant un drawdown maximum de 2%."
  }
]

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="section">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="mb-6">Notre Approche Quantitative</h2>
          <p className="text-lg">
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
              description: 'Utilisation d'algorithmes de pointe pour l'analyse technique et la prise de décision.',
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
              className="feature-card"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
              <p className="text-sm text-secondary-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default AboutSection 