'use client'

import { motion } from 'framer-motion'

const stats = [
  {
    value: "98%",
    label: "Satisfaction Client",
    description: "Avis positifs"
  },
  {
    value: "24/7",
    label: "Disponibilité",
    description: "Support continu"
  },
  {
    value: "15+",
    label: "Spécialités",
    description: "Domaines d'expertise"
  },
  {
    value: "30min",
    label: "Premier RDV",
    description: "Délai moyen"
  }
]

export default function StatsSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-secondary-50 to-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-secondary-900 mb-6">
            Notre engagement pour votre bien-être
          </h2>
          <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
            Des résultats concrets et mesurables pour votre épanouissement personnel
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
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="text-4xl font-bold text-primary-600 mb-2">
                {stat.value}
              </div>
              <div className="text-xl font-semibold text-secondary-900 mb-2">
                {stat.label}
              </div>
              <div className="text-secondary-600">
                {stat.description}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
} 