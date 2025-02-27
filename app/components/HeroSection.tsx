'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center section overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary-100/40 via-accent-100/20 to-transparent" />
        <div className="absolute top-1/4 -right-64 w-[50rem] h-[50rem] bg-primary-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-full h-64 bg-gradient-to-t from-white to-transparent" />
      </div>
      
      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-center lg:text-left"
          >
            <h1 className="mb-8">
              Votre partenaire de confiance en trading quantitatif
            </h1>
            <p className="text-xl text-secondary-600 mb-12 max-w-2xl mx-auto lg:mx-0">
              Une approche systématique et sophistiquée du trading algorithmique, 
              générant des performances stables de 60% annuel avec seulement 2% de drawdown.
            </p>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <Link href="#contact" className="btn btn-primary">
                Démarrer maintenant
              </Link>
              <Link href="#about" className="btn btn-secondary">
                En savoir plus
              </Link>
            </motion.div>

            <div className="mt-16 grid grid-cols-3 gap-8 max-w-2xl mx-auto lg:mx-0">
              {[
                { value: '60%', label: 'Performance annuelle' },
                { value: '2%', label: 'Drawdown maximum' },
                { value: '24/7', label: 'Surveillance continue' }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 + index * 0.2 }}
                  className="text-center"
                >
                  <div className="text-2xl font-bold gradient-text mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm text-secondary-600">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="relative lg:h-[600px] hidden lg:block"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-primary-200/30 to-accent-200/30 rounded-3xl" />
            <div className="card absolute inset-0 overflow-hidden">
              <Image
                src="/images/trading-dashboard.jpg"
                alt="Trading Dashboard"
                fill
                className="object-cover"
                priority
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
} 