'use client'

import { motion } from 'framer-motion'
import { HeartIcon, UserGroupIcon, SparklesIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'

const features = [
  {
    icon: HeartIcon,
    title: "Accompagnement Personnalisé",
    description: "Une approche sur mesure adaptée à vos besoins spécifiques, dans un cadre bienveillant et professionnel."
  },
  {
    icon: UserGroupIcon,
    title: "Thérapeutes Qualifiés",
    description: "Une équipe de professionnels certifiés et expérimentés, sélectionnés pour leurs compétences et leur empathie."
  },
  {
    icon: SparklesIcon,
    title: "Flexibilité Totale",
    description: "Des consultations en ligne accessibles où que vous soyez, adaptées à votre emploi du temps."
  }
]

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-secondary-900 mb-6">
            Une approche humaine de la thérapie
          </h2>
          <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
            Nous croyons en une approche holistique du bien-être mental, 
            où chaque personne est unique et mérite une attention particulière.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-secondary-50 p-8 rounded-2xl hover:shadow-lg transition-shadow"
            >
              <div className="bg-primary-100 w-12 h-12 rounded-xl flex items-center justify-center mb-6">
                <feature.icon className="h-6 w-6 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold text-secondary-900 mb-4">
                {feature.title}
              </h3>
              <p className="text-secondary-600">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <Link href="#contact" className="btn btn-primary px-8 py-3">
            Commencer votre parcours
          </Link>
        </motion.div>
      </div>
    </section>
  )
} 