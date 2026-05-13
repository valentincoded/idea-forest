'use client'

import { ShaderGradientCanvas, ShaderGradient } from '@shadergradient/react'

const grainSvg = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='g'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.80' numOctaves='4' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='200' height='200' filter='url(%23g)'/%3E%3C/svg%3E")`

export default function GradientBackground() {
  return (
    <div className="fixed inset-0 -z-10" style={{ backgroundColor: '#2255b0' }}>
      <div style={{ position: 'absolute', inset: 0, mixBlendMode: 'soft-light' }}>
      <ShaderGradientCanvas
        style={{ width: '100%', height: '100%' }}
        pointerEvents="none"
      >
        <ShaderGradient
          type="waterPlane"
          animate="on"
          uSpeed={0.15}
          uStrength={2.5}
          uDensity={1.2}
          uFrequency={5.5}
          color1="#f0ece5"
          color2="#e8e3da"
          color3="#f5f1eb"
          brightness={0.95}
          grain="off"
          cDistance={3.5}
          cPolarAngle={90}
          cAzimuthAngle={180}
          reflection={0.1}
        />
      </ShaderGradientCanvas>
      </div>
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ backgroundImage: grainSvg, mixBlendMode: 'overlay', opacity: 0.55 }}
      />
    </div>
  )
}
