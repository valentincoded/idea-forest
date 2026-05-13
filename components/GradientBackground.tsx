'use client'

import { ShaderGradientCanvas, ShaderGradient } from '@shadergradient/react'

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
          grain="on"
          cDistance={3.5}
          cPolarAngle={90}
          cAzimuthAngle={180}
          reflection={0.1}
        />
      </ShaderGradientCanvas>
    </div>
  )
}
