'use client'

import { motion } from 'framer-motion'
import HeroSection from './components/HeroSection'
import AboutSection from './components/AboutSection'
import StatsSection from './components/StatsSection'
import PerformanceChart from './components/PerformanceChart'
import ContactSection from './components/ContactSection'

export default function Home() {
  return (
    <div className="bg-gradient-to-b from-secondary-50 to-secondary-100">
      <HeroSection />
      <AboutSection />
      <StatsSection />
      <PerformanceChart />
      <ContactSection />
    </div>
  )
} 