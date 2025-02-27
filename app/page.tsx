'use client'

import { motion } from 'framer-motion'
import HeroSection from './components/HeroSection'
import AboutSection from './components/AboutSection'
import StatsSection from './components/StatsSection'
import PerformanceChart from './components/PerformanceChart'
import TestimonialsSection from './components/TestimonialsSection'
import ContactSection from './components/ContactSection'

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <StatsSection />
      <PerformanceChart />
      <TestimonialsSection />
      <ContactSection />
    </>
  )
} 