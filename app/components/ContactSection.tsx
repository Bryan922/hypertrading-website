'use client'

import { motion } from 'framer-motion'
import { EnvelopeIcon, PhoneIcon, MapPinIcon } from '@heroicons/react/24/outline'

export default function ContactSection() {
  return (
    <section id="contact" className="contact-section">
      <div className="section-title">
        <h2>Contactez-nous</h2>
        <p>
          Intéressé par nos solutions de trading quantitatif ? Contactez-nous pour en savoir plus sur notre approche et discuter de vos objectifs.
        </p>
      </div>

      <div className="contact-grid">
        {/* Formulaire */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="contact-form"
        >
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="form-label">
                Nom complet
              </label>
              <input
                type="text"
                id="name"
                className="form-input"
                placeholder="John Doe"
              />
            </div>
            <div>
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="form-input"
                placeholder="john@example.com"
              />
            </div>
            <div>
              <label htmlFor="message" className="form-label">
                Message
              </label>
              <textarea
                id="message"
                rows={4}
                className="form-input"
                placeholder="Votre message..."
              />
            </div>
            <button
              type="submit"
              className="btn-primary w-full"
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
          className="contact-info"
        >
          <div className="contact-item">
            <EnvelopeIcon className="contact-icon" />
            <div>
              <h3>Email</h3>
              <p>contact@hypertrading.com</p>
              <p>support@hypertrading.com</p>
            </div>
          </div>
          <div className="contact-item">
            <PhoneIcon className="contact-icon" />
            <div>
              <h3>Téléphone</h3>
              <p>+33 (0)1 23 45 67 89</p>
              <p>Lun-Ven: 9h-18h</p>
            </div>
          </div>
          <div className="contact-item">
            <MapPinIcon className="contact-icon" />
            <div>
              <h3>Adresse</h3>
              <p>123 Avenue de la Finance</p>
              <p>75008 Paris, France</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
} 