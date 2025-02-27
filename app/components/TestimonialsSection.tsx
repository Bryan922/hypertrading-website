'use client'

import { motion } from 'framer-motion'
import { StarIcon } from '@heroicons/react/24/solid'

const testimonials = [
  {
    name: "Jean D.",
    role: "Investisseur particulier",
    content: "Grâce à HyperTrading, j'ai pu diversifier mon portefeuille avec une stratégie quantitative performante. Les résultats sont au rendez-vous.",
    rating: 5
  },
  {
    name: "Marc B.",
    role: "Gérant de patrimoine",
    content: "La transparence et la régularité des performances sont impressionnantes. Un excellent complément pour mes clients cherchant des rendements stables.",
    rating: 5
  },
  {
    name: "Sophie L.",
    role: "Trader indépendante",
    content: "L'approche systématique et la gestion des risques sont exemplaires. Je recommande vivement à tous les investisseurs sérieux.",
    rating: 5
  }
]

export default function TestimonialsSection() {
  return (
    <section className="testimonials-section">
      <div className="section-title">
        <h2>Témoignages Clients</h2>
        <p>
          Découvrez les expériences de nos clients qui ont choisi notre approche quantitative
        </p>
      </div>

      <div className="testimonials-grid">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="testimonial-card"
          >
            <div className="quote-icon">❝</div>
            <div className="flex gap-1 mb-4">
              {[...Array(testimonial.rating)].map((_, i) => (
                <StarIcon key={i} className="h-5 w-5 text-primary-500" />
              ))}
            </div>
            <div className="testimonial-text">
              "{testimonial.content}"
            </div>
            <div className="testimonial-author">
              <div className="author-info">
                <strong>{testimonial.name}</strong>
                <span>{testimonial.role}</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
} 