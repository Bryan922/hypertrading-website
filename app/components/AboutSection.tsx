'use client'

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

export default function AboutSection() {
  return (
    <section id="about" className="section bg-gradient-to-b from-white to-secondary-50/50">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-gradient-to-r from-primary-500/20 to-accent-500/20 rounded-3xl blur-2xl" />
            <div className="card relative aspect-[4/3]">
              <Image
                src="/images/trading-algo.jpg"
                alt="Algorithmes de trading"
                fill
                className="object-cover"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="mb-8">
              Une approche scientifique du trading
            </h2>
            <p className="text-xl text-secondary-600 mb-12">
              Notre technologie de pointe combine l'intelligence artificielle et l'analyse quantitative 
              pour générer des performances exceptionnelles et stables.
            </p>

            <div className="space-y-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="flex gap-4"
                >
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-primary-500 to-accent-500 p-3">
                      <feature.icon className="w-full h-full text-white" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-secondary-900 mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-secondary-600">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
              className="mt-12"
            >
              <Link href="#contact" className="btn btn-primary">
                Découvrir notre technologie
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
} 