'use client'

import { motion } from 'framer-motion'
import { StarIcon } from '@heroicons/react/24/solid'

const testimonials = [
  {
    name: "Marie L.",
    role: "Cliente depuis 6 mois",
    content: "Les séances en ligne m'ont permis de retrouver un équilibre dans ma vie. L'accompagnement est professionnel et bienveillant.",
    rating: 5
  },
  {
    name: "Thomas B.",
    role: "Client depuis 1 an",
    content: "Grâce à MentalPlus, j'ai pu travailler sur mes anxiétés tout en respectant mon emploi du temps chargé. Une vraie solution moderne.",
    rating: 5
  },
  {
    name: "Sophie M.",
    role: "Cliente depuis 3 mois",
    content: "L'approche personnalisée et la flexibilité des rendez-vous en ligne ont fait toute la différence dans mon parcours thérapeutique.",
    rating: 5
  }
]

export default function TestimonialsSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-secondary-900 mb-6">
            Ce que disent nos patients
          </h2>
          <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
            Découvrez les expériences de personnes qui ont choisi MentalPlus pour leur parcours thérapeutique
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-secondary-50 p-8 rounded-2xl"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <StarIcon key={i} className="h-5 w-5 text-primary-500" />
                ))}
              </div>
              <p className="text-secondary-600 mb-6">
                "{testimonial.content}"
              </p>
              <div className="border-t border-secondary-200 pt-4">
                <div className="font-semibold text-secondary-900">
                  {testimonial.name}
                </div>
                <div className="text-sm text-secondary-600">
                  {testimonial.role}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
} 