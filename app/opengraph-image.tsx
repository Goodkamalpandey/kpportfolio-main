import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'Dr. Kamal Pandey | Architecting the Future of Agentic Enterprise'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '64px 72px',
          background: '#070D1C',
          color: '#F0F4FF',
          fontFamily: 'system-ui, sans-serif',
        }}
      >
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          <div
            style={{
              display: 'flex',
              fontSize: 22,
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
              color: '#93C5FD',
              fontWeight: 600,
            }}
          >
            Distinguished Engineer · Chief Architect · Rivian
          </div>
          <div
            style={{
              display: 'flex',
              fontSize: 64,
              fontWeight: 600,
              lineHeight: 1.08,
              letterSpacing: '-0.03em',
              maxWidth: 980,
            }}
          >
            Architecting the Future of Agentic Enterprise
          </div>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          <div style={{ display: 'flex', fontSize: 36, fontWeight: 600 }}>Dr. Kamal Pandey</div>
          <div style={{ display: 'flex', fontSize: 24, color: '#A1A1AA' }}>
            AI150 · IEEE Senior Member · IET Fellow · 17+ years · Four continents
          </div>
          <div style={{ display: 'flex', fontSize: 20, color: '#71717A', marginTop: 8 }}>
            drkamalpandey.com
          </div>
        </div>
      </div>
    ),
    { ...size }
  )
}
