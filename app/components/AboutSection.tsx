'use client'

import { motion } from 'framer-motion'

export default function AboutSection() {
  return (
    <section id="about" className="services-section">
      <div className="section-title">
        <h2>Notre Approche Quantitative</h2>
        <p>
          Une stratégie sophistiquée basée sur l'analyse multi-actifs et des algorithmes avancés
        </p>
      </div>

      <div className="services-grid">
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
        ].map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 * index }}
            className="service-card"
          >
            <div className="text-4xl mb-4">{service.icon}</div>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
} 