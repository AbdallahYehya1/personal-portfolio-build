export function Pipeline({ steps, note, label }: { steps: string[]; note: string; label: string }) {
  return (
    <figure className="pipeline">
      <ol aria-label={label}>
        {steps.map((step, index) => (
          <li key={step}><span className="pipeline-step">{index + 1}</span>{step}</li>
        ))}
      </ol>
      <figcaption>{note}</figcaption>
    </figure>
  )
}
