import Link from 'next/link'
import { resultsLedger } from '@/lib/portfolio-data'

export function ResultsLedger() {
  return (
    <table className="ledger">
      <caption>Selected results, each with the data it was measured on</caption>
      <thead>
        <tr>
          <th scope="col">Project</th>
          <th scope="col">Result</th>
          <th scope="col">Measured on</th>
        </tr>
      </thead>
      <tbody>
        {resultsLedger.map(row => (
          <tr key={row.slug}>
            <th scope="row"><Link href={`/projects/${row.slug}`}>{row.project}</Link></th>
            <td><span className="result-value">{row.result}</span> <span className="result-what">{row.what}</span></td>
            <td className="ledger-measured">{row.measuredOn}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}
