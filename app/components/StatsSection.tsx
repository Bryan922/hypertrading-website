'use client'

import { motion } from 'framer-motion'

const stats = [
  {
    value: "60%",
    label: "Performance Annuelle",
    description: "Rendement stable"
  },
  {
    value: "2%",
    label: "Drawdown Maximum",
    description: "Risque maîtrisé"
  },
  {
    value: "1000+",
    label: "Actifs Analysés",
    description: "Diversification"
  },
  {
    value: "24/7",
    label: "Surveillance",
    description: "Monitoring continu"
  }
]

export default function StatsSection() {
  return (
    <section className="section bg-gradient-to-b from-secondary-50/50 to-white relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/4 w-[30rem] h-[30rem] bg-primary-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-[40rem] h-[40rem] bg-accent-500/5 rounded-full blur-3xl" />
      </div>

      <div className="container relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="mb-8">
            Performance et stabilité
          </h2>
          <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
            Notre approche quantitative génère des résultats exceptionnels 
            tout en maintenant un niveau de risque minimal
          </p>
        </motion.div>

        <div className="grid md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="card p-8 text-center group hover:bg-gradient-to-br hover:from-primary-500 hover:to-accent-500 transition-all duration-300"
            >
              <div className="transition-all duration-300 group-hover:transform group-hover:translate-y-[-0.5rem]">
                <div className="text-4xl font-bold gradient-text group-hover:text-white mb-2">
                  {stat.value}
                </div>
                <div className="text-xl font-semibold text-secondary-900 group-hover:text-white mb-2">
                  {stat.label}
                </div>
                <div className="text-secondary-600 group-hover:text-white/90">
                  {stat.description}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
} 