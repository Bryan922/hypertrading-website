'use client'

import { motion } from 'framer-motion'

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-secondary-900 via-secondary-800 to-primary-900">
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px]" />
      <div className="absolute inset-0 bg-gradient-radial-dark" />
      
      <div className="relative z-10 container mx-auto px-6 py-32 flex flex-col items-center">
        <motion.div
          className="text-center max-w-5xl mx-auto w-full"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <motion.div
            className="inline-block mb-4 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <span className="text-sm font-medium text-primary-400">Trading Quantitatif de Nouvelle Génération</span>
          </motion.div>

          <motion.h1 
            className="text-5xl md:text-7xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-white via-primary-200 to-accent-200"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            Performance Exceptionnelle en Trading Automatisé
          </motion.h1>
          
          <motion.p
            className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto mb-12 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            Une approche systématique générant 60% de performance annuelle avec seulement 2% de drawdown
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <button className="px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-primary-600 to-accent-600 rounded-xl hover:from-primary-500 hover:to-accent-500 transition-all duration-300 shadow-lg hover:shadow-primary-500/25 w-full sm:w-auto">
              Commencer maintenant
            </button>
            <button className="px-8 py-4 text-lg font-semibold text-white/90 hover:text-white bg-white/5 hover:bg-white/10 rounded-xl border border-white/10 transition-all duration-300 w-full sm:w-auto">
              En savoir plus
            </button>
          </motion.div>

          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            {[
              { value: '60%', label: 'Performance annuelle' },
              { value: '2%', label: 'Drawdown maximum' },
              { value: '1000+', label: 'Actifs analysés' },
              { value: '24/7', label: 'Surveillance' }
            ].map((stat, index) => (
              <div key={index} className="text-center p-4 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm">
                <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary-400 to-accent-400 bg-clip-text text-transparent mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-white/70">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
} 