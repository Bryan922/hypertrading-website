'use client'

import { motion } from 'framer-motion'
import { EnvelopeIcon, PhoneIcon, MapPinIcon } from '@heroicons/react/24/outline'

export default function ContactSection() {
  return (
    <section id="contact" className="py-20 bg-secondary-800">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-primary-300 mb-6">Contactez-nous</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Intéressé par nos solutions de trading quantitatif ? Contactez-nous pour en savoir plus sur notre approche et discuter de vos objectifs.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Formulaire */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-secondary-900 p-8 rounded-xl"
          >
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                  Nom complet
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 bg-secondary-800 border border-secondary-700 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent text-gray-100"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 bg-secondary-800 border border-secondary-700 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent text-gray-100"
                  placeholder="john@example.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-3 bg-secondary-800 border border-secondary-700 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent text-gray-100"
                  placeholder="Votre message..."
                />
              </div>
              <button
                type="submit"
                className="w-full bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
              >
                Envoyer le message
              </button>
            </form>
          </motion.div>

          {/* Informations de contact */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="flex items-start space-x-4">
              <EnvelopeIcon className="h-6 w-6 text-primary-400 mt-1" />
              <div>
                <h3 className="text-lg font-semibold text-primary-200">Email</h3>
                <p className="text-gray-400">contact@hypertrading.com</p>
                <p className="text-gray-400">support@hypertrading.com</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <PhoneIcon className="h-6 w-6 text-primary-400 mt-1" />
              <div>
                <h3 className="text-lg font-semibold text-primary-200">Téléphone</h3>
                <p className="text-gray-400">+33 (0)1 23 45 67 89</p>
                <p className="text-gray-400">Lun-Ven: 9h-18h</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <MapPinIcon className="h-6 w-6 text-primary-400 mt-1" />
              <div>
                <h3 className="text-lg font-semibold text-primary-200">Adresse</h3>
                <p className="text-gray-400">123 Avenue de la Finance</p>
                <p className="text-gray-400">75008 Paris, France</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
} 