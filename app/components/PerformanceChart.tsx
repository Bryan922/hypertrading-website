import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'

const data = Array.from({ length: 12 }, (_, i) => ({
  month: `${i + 1}`,
  performance: Math.floor(60 * (1 - Math.random() * 0.1) * (i + 1) / 12),
  drawdown: -1 * Math.random() * 2
}))

export default function PerformanceChart() {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" />
        <XAxis 
          dataKey="month" 
          stroke="#94a3b8"
          tick={{ fill: '#94a3b8' }}
        />
        <YAxis 
          stroke="#94a3b8"
          tick={{ fill: '#94a3b8' }}
        />
        <Tooltip
          contentStyle={{
            backgroundColor: '#1e293b',
            border: 'none',
            borderRadius: '0.5rem',
            color: '#e2e8f0'
          }}
        />
        <Line
          type="monotone"
          dataKey="performance"
          stroke="#0ea5e9"
          strokeWidth={2}
          dot={false}
          name="Performance (%)"
        />
        <Line
          type="monotone"
          dataKey="drawdown"
          stroke="#ef4444"
          strokeWidth={2}
          dot={false}
          name="Drawdown (%)"
        />
      </LineChart>
    </ResponsiveContainer>
  )
} 