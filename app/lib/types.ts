export interface Project {
  slug: string
  title: string
  description: string
  imageUrl: string
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
} 