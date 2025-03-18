"use client"

import CustomCursor from "../shared/custom-cursor"

interface SiteLayoutProps {
  children: React.ReactNode
}

export default function SiteLayout({ children }: SiteLayoutProps) {
  return (
    <>
      <CustomCursor />
      {children}
    </>
  )
} 