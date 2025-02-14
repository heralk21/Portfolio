"use client"

import { FC, useRef, useEffect } from "react"
import confetti from "canvas-confetti"

interface SparklesCoreProps {
  background?: string
  minSize?: number
  maxSize?: number
  particleDensity?: number
  className?: string
  particleColor?: string
}

export const SparklesCore: FC<SparklesCoreProps> = ({
  background = "transparent",
  minSize = 0.1,
  maxSize = 1,
  particleDensity = 1000,
  className,
  particleColor = "#ffffff",
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const animationInstance = confetti.create(canvasRef.current!, {
      resize: true,
      useWorker: true,
    })

    animationInstance({
      particleCount: particleDensity,
      spread: 70,
      origin: { y: 0.6 },
      colors: [particleColor],
      scalar: 1,
      minSize,
      maxSize,
    })

    return () => animationInstance.reset()
  }, [particleDensity, minSize, maxSize, particleColor])

  return (
    <canvas
      ref={canvasRef}
      style={{ backgroundColor: background }}
      className={className}
    />
  )
}