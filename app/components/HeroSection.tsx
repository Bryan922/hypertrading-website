'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-primary-500/5 via-accent-500/5 to-transparent" />
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[60rem] h-[60rem] bg-primary-500/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-32 -left-32 w-[50rem] h-[50rem] bg-accent-500/5 rounded-full blur-3xl" />
      </div>
      
      <div className="container relative z-10">
        <div className="content-wrapper">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-content"
          >
            <h1 className="mb-8">
              Votre partenaire de confiance en trading quantitatif
            </h1>
            <p className="text-lg md:text-xl mb-12">
              Une approche systématique et sophistiquée du trading algorithmique, 
              générant des performances stables de 60% annuel avec seulement 2% de drawdown.
            </p>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-24"
            >
              <Link href="#contact" className="btn btn-primary">
                Démarrer maintenant
              </Link>
              <Link href="#about" className="btn btn-secondary">
                En savoir plus
              </Link>
            </motion.div>

            <div className="stats-grid">
              {[
                { value: '60%', label: 'Performance annuelle' },
                { value: '2%', label: 'Drawdown maximum' },
                { value: '1000+', label: 'Actifs analysés' },
                { value: '24/7', label: 'Surveillance continue' }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 + index * 0.2 }}
                  className="stats-card"
                >
                  <div className="stats-value">{stat.value}</div>
                  <div className="stats-label">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
} 