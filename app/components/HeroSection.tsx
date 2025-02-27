'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'

export default function HeroSection() {
  return (
    <React.Fragment>
      <div className="relative min-h-[90vh] flex items-center justify-center section overflow-hidden">
        {/* Background decorations */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-100/40 via-accent-100/20 to-transparent" />
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[50rem] h-[50rem] bg-primary-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-full h-64 bg-gradient-to-t from-white to-transparent" />
        </div>
        
        <div className="container relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              <h1 className="mb-6">
                Votre partenaire de confiance en trading quantitatif
              </h1>
              <p className="text-lg md:text-xl text-secondary-600 mb-8">
                Une approche systématique et sophistiquée du trading algorithmique, 
                générant des performances stables de 60% annuel avec seulement 2% de drawdown.
              </p>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="flex flex-col sm:flex-row gap-4 justify-center"
              >
                <Link href="#contact" className="btn btn-primary">
                  Démarrer maintenant
                </Link>
                <Link href="#about" className="btn btn-secondary">
                  En savoir plus
                </Link>
              </motion.div>

              <div className="mt-16 stats-grid">
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
                    <div className="text-3xl font-bold gradient-text mb-2">
                      {stat.value}
                    </div>
                    <div className="text-sm text-secondary-600">
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
} 