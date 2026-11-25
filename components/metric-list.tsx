import type { Metric } from '@/lib/case-studies'

export function MetricList({ metrics }: { metrics: Metric[] }) {
  if (metrics.length === 0) return null
  return (
    <dl className="results results-large">
      {metrics.map(metric => (
        <div key={`${metric.value}-${metric.label}`}>
          <dt className="result-value">{metric.value}</dt>
          <dd>{metric.label}</dd>
        </div>
      ))}
    </dl>
  )
}
