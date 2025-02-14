import type * as React from "react"

export function Devpost(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 100 100" {...props}>
      {/* Regular hexagon with vertical sides */}
      <polygon fill="#F43F5E" points="50,100 6.7,75 6.7,25 50,0 93.3,25 93.3,75" />
      {/* Centered capital D */}
      <text
        x="50"
        y="50"
        textAnchor="middle"
        dominantBaseline="middle"
        fontFamily="sans-serif"
        fontWeight="bold"
        fontSize="50"
        fill="white"
      >
        D
      </text>
    </svg>
  )
}

