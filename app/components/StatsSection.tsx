import { motion } from 'framer-motion'

const stats = [
  {
    value: "60%",
    label: "Performance Annuelle",
    description: "Rendement stable et constant"
  },
  {
    value: "2%",
    label: "Drawdown Maximum",
    description: "Gestion stricte du risque"
  },
  {
    value: "1000+",
    label: "Actifs Analysés",
    description: "Diversification optimale"
  },
  {
    value: "24/7",
    label: "Surveillance",
    description: "Monitoring continu"
  }
]

export default function StatsSection() {
  return (
    <section className="py-20 bg-secondary-800">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="text-4xl font-bold text-primary-300 mb-2">
                {stat.value}
              </div>
              <div className="text-xl font-semibold text-primary-100 mb-2">
                {stat.label}
              </div>
              <div className="text-gray-400">
                {stat.description}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
} 