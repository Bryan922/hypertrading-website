'use client'

import { motion } from 'framer-motion'
import PerformanceChart from './components/PerformanceChart'
import HeroSection from './components/HeroSection'
import AboutSection from './components/AboutSection'
import StatsSection from './components/StatsSection'
import ContactSection from './components/ContactSection'

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <StatsSection />
      <section className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-secondary-800 rounded-xl p-8 shadow-xl"
        >
          <h2 className="text-3xl font-bold text-primary-300 mb-6">Performance Stable et Maîtrisée</h2>
          <div className="h-[400px]">
            <PerformanceChart />
          </div>
        </motion.div>
      </section>
      <ContactSection />
    </>
  )
} 