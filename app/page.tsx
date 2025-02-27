'use client'

import { motion } from 'framer-motion'
import HeroSection from './components/HeroSection'
import AboutSection from './components/AboutSection'
import StatsSection from './components/StatsSection'
import PerformanceChart from './components/PerformanceChart'

export default function Home() {
  return (
    <div className="bg-gradient-to-b from-secondary-900 to-secondary-800">
      <HeroSection />
      <AboutSection />
      <StatsSection />
      <PerformanceChart />
    </div>
  )
} 