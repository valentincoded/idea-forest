'use client'

import { ShaderGradientCanvas, ShaderGradient } from '@shadergradient/react'

const grainSvg = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='g'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23g)'/%3E%3C/svg%3E")`

export default function GradientBackground() {
  return (
    <div className="fixed inset-0 -z-10">
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
          color1="#c8d8f0"
          color2="#e8eef8"
          color3="#a0b8e0"
          brightness={1.1}
          grain="off"
          cDistance={3.5}
          cPolarAngle={90}
          cAzimuthAngle={180}
          reflection={0.1}
        />
      </ShaderGradientCanvas>
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ backgroundImage: grainSvg, mixBlendMode: 'soft-light', opacity: 0.3 }}
      />
    </div>
  )
}
