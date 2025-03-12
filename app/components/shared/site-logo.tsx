"use client"

import { useTheme } from "next-themes"
import Image from "next/image"
import type { FC } from "react"

const Logo: FC = () => {
  const { theme } = useTheme()
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  return (
    <div onClick={scrollToTop} className="py-2 px-2 cursor-pointer">
      <Image
        src={
          theme === "light"
            ? "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/light%20mode%20logo-qRMZGYDAkstFF5rLAxrdrA0h7HIja7.png"
            : "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/dark%20mode%20logo-cHmSJtBMeFjub4b5Po9yM316y183DN.png"
        }
        alt="HK Logo"
        width={40}
        height={40}
        priority
        className="h-8 w-auto"
      />
    </div>
  )
}

export default Logo

