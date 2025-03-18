"use client"

import { useEffect } from "react"

export default function CustomCursor() {
  useEffect(() => {
    const cursor = document.createElement("div")
    cursor.classList.add("custom-cursor")
    document.body.appendChild(cursor)

    const moveCursor = (e: MouseEvent) => {
      cursor.style.left = e.clientX - 8.5 + "px"
      cursor.style.top = e.clientY - 8.5 + "px"
    }

    window.addEventListener("mousemove", moveCursor)

    return () => {
      window.removeEventListener("mousemove", moveCursor)
      if (document.body.contains(cursor)) {
        document.body.removeChild(cursor)
      }
    }
  }, [])

  return null
} 