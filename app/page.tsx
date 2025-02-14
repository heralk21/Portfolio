"use client"

import { useEffect } from "react"
import Portfolio from "../page"

export default function SyntheticV0PageForDeployment() {
  useEffect(() => {
    const cursor = document.createElement("div")
    cursor.classList.add("custom-cursor")
    document.body.appendChild(cursor)

    const moveCursor = (e: MouseEvent) => {
      cursor.style.left = e.clientX - 10 + "px"
      cursor.style.top = e.clientY - 10 + "px"
    }

    window.addEventListener("mousemove", moveCursor)

    return () => {
      window.removeEventListener("mousemove", moveCursor)
      // Only remove the cursor if it still exists in the document
      if (document.body.contains(cursor)) {
        document.body.removeChild(cursor)
      }
    }
  }, [])

  return <Portfolio />
}