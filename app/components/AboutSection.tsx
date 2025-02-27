import { motion } from 'framer-motion'
import { ChartBarIcon, CubeTransparentIcon, ShieldCheckIcon } from '@heroicons/react/24/outline'

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

export default function AboutSection() {
  return (
    <section className="py-20 bg-secondary-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-primary-300 mb-6">L'Hypertrading Expliqué</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Notre approche quantitative utilise des stratégies de market making avancées,
            exploitant les micro-inefficiences du marché à travers un large spectre d'actifs financiers.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-secondary-800 p-8 rounded-xl"
            >
              <feature.icon className="h-12 w-12 text-primary-400 mb-6" />
              <h3 className="text-xl font-semibold text-primary-200 mb-4">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
} 