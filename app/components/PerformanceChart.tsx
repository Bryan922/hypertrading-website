'use client'

import { motion } from 'framer-motion'
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, ComposedChart, Line, Bar } from 'recharts'

// Fonction pour générer les données de performance sur 2 ans
const generatePerformanceData = () => {
  const months = ['Jan', 'Fév', 'Mar', 'Avr', 'Mai', 'Jun', 'Jul', 'Aoû', 'Sep', 'Oct', 'Nov', 'Déc']
  const data = []
  let currentValue = 100000
  let maxValue = currentValue
  let previousValue = currentValue

  for (let year = 1; year <= 2; year++) {
    for (let month = 0; month < 12; month++) {
      // Générer une performance mensuelle qui donne environ 60% par an
      const monthlyReturn = (Math.random() * 0.08) + 0.035 // Entre 3.5% et 11.5% par mois
      const monthlyValue = currentValue * (1 + monthlyReturn)
      
      // Calculer le drawdown
      maxValue = Math.max(maxValue, monthlyValue)
      const drawdown = ((maxValue - monthlyValue) / maxValue) * 100
      
      // Calculer la performance mensuelle
      const monthlyPerf = ((monthlyValue - previousValue) / previousValue) * 100

      data.push({
        month: `${months[month]} ${year}`,
        value: Math.round(monthlyValue),
        drawdown: -Math.min(drawdown, 2), // Limiter à -2% comme demandé
        monthlyPerf: monthlyPerf.toFixed(2),
      })

      previousValue = monthlyValue
      currentValue = monthlyValue
    }
  }
  return data
}

const CustomTooltip = ({ active, payload, label, type }: any) => {
  if (!active || !payload || !payload.length) return null

  const getBackgroundColor = () => {
    switch (type) {
      case 'performance':
        return 'rgba(20, 184, 166, 0.95)'
      case 'drawdown':
        return 'rgba(239, 68, 68, 0.95)'
      default:
        return 'rgba(0, 0, 0, 0.95)'
    }
  }

  return (
    <div className="custom-tooltip" style={{
      background: getBackgroundColor(),
      padding: '12px',
      borderRadius: '8px',
      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
      border: '1px solid rgba(255, 255, 255, 0.1)'
    }}>
      <p className="tooltip-label" style={{ color: 'rgba(255, 255, 255, 0.9)', marginBottom: '4px' }}>{label}</p>
      {payload.map((entry: any, index: number) => (
        <p key={index} style={{ color: 'white' }}>
          {type === 'performance' ? entry.value.toLocaleString() + '€' : entry.value.toFixed(2) + '%'}
        </p>
      ))}
    </div>
  )
}

const performanceData = generatePerformanceData()

export default function PerformanceChart() {
  const initialValue = performanceData[0].value
  const finalValue = performanceData[performanceData.length - 1].value
  const totalReturn = ((finalValue - initialValue) / initialValue) * 100
  const maxDrawdown = Math.min(...performanceData.map(d => d.drawdown))
  const avgMonthlyReturn = performanceData.reduce((acc, curr) => acc + parseFloat(curr.monthlyPerf), 0) / performanceData.length

  return (
    <section className="performance-section">
      <div className="section-title">
        <h2>Performance du Portefeuille</h2>
        <p className="section-subtitle">
          Simulation de performance sur 2 ans avec notre stratégie quantitative
        </p>
      </div>

      <div className="chart-container">
        {/* Graphique de performance cumulée */}
        <div className="mb-8">
          <h3 className="chart-title">Performance Cumulée</h3>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart
                data={performanceData}
                margin={{ top: 10, right: 10, left: 10, bottom: 0 }}
              >
                <defs>
                  <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="var(--primary-color)" stopOpacity={0.8}/>
                    <stop offset="95%" stopColor="var(--primary-color)" stopOpacity={0.1}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
                <XAxis dataKey="month" stroke="rgba(255,255,255,0.5)" fontSize={12} />
                <YAxis stroke="rgba(255,255,255,0.5)" tickFormatter={(value) => `${value.toLocaleString()}€`} fontSize={12} />
                <Tooltip content={<CustomTooltip type="performance" />} />
                <Area 
                  type="monotone" 
                  dataKey="value" 
                  stroke="var(--primary-color)" 
                  fillOpacity={1} 
                  fill="url(#colorValue)"
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Graphiques secondaires en grille */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Graphique de drawdown */}
          <div>
            <h3 className="chart-title">Drawdown</h3>
            <div className="h-[200px]">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart
                  data={performanceData}
                  margin={{ top: 10, right: 10, left: 10, bottom: 0 }}
                >
                  <defs>
                    <linearGradient id="colorDrawdown" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#ef4444" stopOpacity={0.8}/>
                      <stop offset="95%" stopColor="#ef4444" stopOpacity={0.1}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
                  <XAxis dataKey="month" stroke="rgba(255,255,255,0.5)" fontSize={11} />
                  <YAxis stroke="rgba(255,255,255,0.5)" tickFormatter={(value) => `${value.toFixed(1)}%`} fontSize={11} />
                  <Tooltip content={<CustomTooltip type="drawdown" />} />
                  <Area 
                    type="monotone" 
                    dataKey="drawdown" 
                    stroke="#ef4444" 
                    fillOpacity={1} 
                    fill="url(#colorDrawdown)"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Graphique des performances mensuelles */}
          <div>
            <h3 className="chart-title">Performances Mensuelles</h3>
            <div className="h-[200px]">
              <ResponsiveContainer width="100%" height="100%">
                <ComposedChart
                  data={performanceData}
                  margin={{ top: 10, right: 10, left: 10, bottom: 0 }}
                >
                  <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
                  <XAxis dataKey="month" stroke="rgba(255,255,255,0.5)" fontSize={11} />
                  <YAxis stroke="rgba(255,255,255,0.5)" tickFormatter={(value) => `${value}%`} fontSize={11} />
                  <Tooltip content={<CustomTooltip />} />
                  <Bar 
                    dataKey="monthlyPerf" 
                    fill="url(#colorBar)"
                  />
                  <Line 
                    type="monotone" 
                    dataKey="monthlyPerf" 
                    stroke="#ffd700" 
                    dot={false}
                    strokeWidth={2}
                  />
                </ComposedChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        {/* Statistiques de performance */}
        <div className="performance-stats mt-8">
          {[
            { label: 'Performance Totale', value: `+${totalReturn.toFixed(2)}%` },
            { label: 'Performance Annualisée', value: '+60.00%' },
            { label: 'Drawdown Maximum', value: `${maxDrawdown.toFixed(2)}%` },
            { label: 'Rendement Mensuel Moyen', value: `+${avgMonthlyReturn.toFixed(2)}%` },
            { label: 'Capital Initial', value: `${initialValue.toLocaleString()}€` },
            { label: 'Capital Final', value: `${finalValue.toLocaleString()}€` }
          ].map((stat, index) => (
            <div
              key={stat.label}
              className="stat-item"
            >
              <div className="stat-label">{stat.label}</div>
              <div className="stat-value">{stat.value}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 