'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

export default function HeroSection() {
  return (
    <section className="relative min-h-[calc(100vh-4rem)] flex items-center py-20 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-50 to-secondary-50 opacity-70" />
        <div className="absolute inset-0 bg-[url('/images/pattern.png')] opacity-5" />
      </div>
      
      <div className="container mx-auto px-4 z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <h1 className="text-secondary-900 mb-6">
              Votre bien-être mental est notre priorité
            </h1>
            <p className="text-xl text-secondary-600 mb-8 max-w-2xl">
              Des professionnels qualifiés à votre écoute pour vous accompagner dans votre développement personnel. 
              Consultations en ligne, flexibles et adaptées à vos besoins.
            </p>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link href="#rdv" className="btn btn-primary px-8 py-3">
                Prendre rendez-vous
              </Link>
              <Link href="#services" className="btn btn-outline px-8 py-3">
                Découvrir nos services
              </Link>
            </motion.div>
            <div className="mt-12 grid grid-cols-3 gap-8">
              {[
                { value: '1000+', label: 'Patients accompagnés' },
                { value: '50+', label: 'Thérapeutes certifiés' },
                { value: '4.9/5', label: 'Note moyenne' }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 + index * 0.2 }}
                  className="text-center"
                >
                  <div className="text-2xl font-bold text-primary-600 mb-2">
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
            <div className="absolute inset-0 bg-gradient-to-tr from-primary-200/30 to-accent-200/30 rounded-2xl" />
            <Image
              src="/images/hero-image.jpg"
              alt="Thérapie en ligne"
              fill
              className="object-cover rounded-2xl shadow-xl"
              priority
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
} 