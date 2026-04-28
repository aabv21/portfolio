import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'Andrés Buelvas — Full Stack Engineer'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          background: '#0a1628',
          padding: '72px 80px',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Radial glow top-right */}
        <div
          style={{
            position: 'absolute',
            top: -120,
            right: -80,
            width: 560,
            height: 560,
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(16,185,129,0.18) 0%, transparent 70%)',
          }}
        />
        {/* Radial glow bottom-left */}
        <div
          style={{
            position: 'absolute',
            bottom: -100,
            left: -60,
            width: 400,
            height: 400,
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(16,185,129,0.1) 0%, transparent 70%)',
          }}
        />

        {/* Logo mark */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: 64,
            height: 64,
            borderRadius: 16,
            background: 'rgba(16,185,129,0.12)',
            border: '1.5px solid rgba(16,185,129,0.3)',
            marginBottom: 40,
          }}
        >
          <span
            style={{
              fontFamily: 'system-ui, sans-serif',
              fontWeight: 900,
              fontSize: 26,
              color: '#10B981',
              letterSpacing: '-1px',
            }}
          >
            AB
          </span>
        </div>

        {/* Available badge */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 8,
            marginBottom: 20,
          }}
        >
          <div
            style={{
              width: 8,
              height: 8,
              borderRadius: '50%',
              background: '#10B981',
            }}
          />
          <span
            style={{
              fontFamily: 'system-ui, sans-serif',
              fontSize: 15,
              fontWeight: 600,
              color: '#10B981',
              letterSpacing: '0.05em',
              textTransform: 'uppercase',
            }}
          >
            Available · Full Time / Part Time
          </span>
        </div>

        {/* Name */}
        <div
          style={{
            fontFamily: 'system-ui, sans-serif',
            fontSize: 72,
            fontWeight: 900,
            color: '#ffffff',
            lineHeight: 1.05,
            letterSpacing: '-2px',
            marginBottom: 16,
          }}
        >
          Andrés Buelvas
        </div>

        {/* Title */}
        <div
          style={{
            fontFamily: 'system-ui, sans-serif',
            fontSize: 28,
            fontWeight: 600,
            color: '#10B981',
            marginBottom: 24,
          }}
        >
          Full Stack Engineer
        </div>

        {/* Description */}
        <div
          style={{
            fontFamily: 'system-ui, sans-serif',
            fontSize: 18,
            color: '#64748b',
            lineHeight: 1.6,
            maxWidth: 680,
          }}
        >
          7+ years building fintech products, distributed systems and high-availability APIs.
          Node.js · React · TypeScript · AWS
        </div>
      </div>
    ),
    { ...size },
  )
}
