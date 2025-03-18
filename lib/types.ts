export interface Project {
  slug: string
  title: string
  description: string
  fullDescription?: string
  imageUrl?: string
  heroImage?: string
  tagline?: string
  award?: string
  timeline?: string
  readTime?: string
  introduction?: string
  overview?: string
  role?: string
  team?: string
  problemStatement?: string
  solution?: string
  solutionImage?: string
  figmaEmbed?: string
  prototypeImages?: Array<{
    src: string
    alt: string
  }>
  designProcess?: Array<{
    title: string
    description: string
    image?: string
  }>
  outcome?: string
  reflection?: string
  teamMembers?: Array<{
    name: string
    role: string
    link?: string
  }>
  technologies: string[]
  liveUrl?: string
  githubUrl?: string
  featured?: boolean
  researchImages?: string[]
  processImages?: string[]
  solutionImages?: string[]
  results?: {
    title: string
    description: string
  }[]
  promptColor?: string // Main color for question mark hover and text (e.g., "#FF5733")
  promptTextColor?: string // Optional: Different color for problem statement text
  
  solutionColor?: string // Color for light bulb hover (e.g., "#facc15")
  solutionGlowColor?: string // Color for light bulb glow effect
  solutionTextColor?: string // Optional: Different color for solution text

  // Area of focus
  areaOfFocus?: string // e.g., "FinTech", "Healthcare", "Education"

  // Metric indicators for each section
  challengeMetrics?: Array<{
    number: string | number
    label: string
  }>
  solutionMetrics?: Array<{
    number: string | number
    label: string
  }>
  resultMetrics?: Array<{
    number: string | number
    label: string
  }>
}

export interface TeamMember {
  name: string
  role: string
  link?: string
}

export interface DesignProcessStep {
  title: string
  description: string
  image?: string
} 