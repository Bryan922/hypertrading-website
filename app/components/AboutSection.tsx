'use client'

import { motion } from 'framer-motion'

export default function AboutSection() {
  return (
    <section id="about" className="relative py-24 overflow-hidden bg-secondary-900">
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
            Notre Approche Quantitative
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            Une stratégie sophistiquée basée sur l'analyse multi-actifs et des algorithmes avancés
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
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
              className="group relative p-8 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300"
            >
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-accent-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="text-4xl mb-6 transform transition-transform duration-300 group-hover:scale-110">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold mb-4 bg-gradient-to-r from-primary-400 to-accent-400 bg-clip-text text-transparent">
                {service.title}
              </h3>
              <p className="text-white/70">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
} 