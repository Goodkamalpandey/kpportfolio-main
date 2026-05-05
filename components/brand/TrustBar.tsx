const ITEMS = [
  'Rivian Automotive',
  'IEEE Senior Member',
  'IET Senior Member',
  'SAInexus',
  'AI150 — Constellation Research',
  'Samsung · Goodyear · Merck',
  'Kentron AI',
  '21 peer-reviewed publications',
  'Agentic AI · SDV intelligence',
]

function Track({ suffix }: { suffix: string }) {
  return (
    <>
      {ITEMS.map((name) => (
        <span key={`${name}-${suffix}`}>
          <span className="ti">{name}</span>
          <span className="tdot" />
        </span>
      ))}
    </>
  )
}

export default function TrustBar() {
  return (
    <div id="trust">
      <span className="tlabel">Affiliations</span>
      <div className="ttrack">
        <div className="tinner">
          <Track suffix="a" />
          <Track suffix="b" />
        </div>
      </div>
    </div>
  )
}
