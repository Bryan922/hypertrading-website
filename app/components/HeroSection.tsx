import { motion } from 'framer-motion'

export default function HeroSection() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-secondary-900 via-secondary-800 to-secondary-900 opacity-90" />
      </div>
      
      <div className="container mx-auto px-4 z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center"
        >
          <h1 className="text-5xl md:text-6xl font-bold text-primary-300 mb-6">
            Hypertrading Quantitatif
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Une approche systématique et sophistiquée du trading algorithmique, 
            générant des performances stables de 60% annuel avec seulement 2% de drawdown
          </p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <div className="inline-flex gap-4">
              <button className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                Découvrir notre approche
              </button>
              <button className="border border-primary-600 text-primary-300 hover:bg-primary-600/10 px-8 py-3 rounded-lg font-semibold transition-colors">
                Performances détaillées
              </button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
} 