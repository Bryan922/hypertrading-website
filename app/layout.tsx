import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const metadata: Metadata = {
  title: 'Hypertrading - Trading Quantitatif',
  description: 'Plateforme de trading quantitatif spécialisée dans le market making avec des performances stables de 60% annuel.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" className={inter.variable}>
      <body className="min-h-screen bg-secondary-900">
        {children}
      </body>
    </html>
  )
} 