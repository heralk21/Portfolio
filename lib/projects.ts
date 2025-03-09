export type TeamMember = {
  name: string
  role: string
  link?: string
}

export type PrototypeImage = {
  src: string
  alt?: string
}

export type DesignProcessStep = {
  title: string
  description: string
  image?: string
}

export type Project = {
  slug: string
  title: string
  description: string
  tagline?: string
  fullDescription: string
  technologies: string[]
  imageUrl: string
  heroImage?: string
  liveUrl?: string
  githubUrl?: string
  featured?: boolean
  role?: string
  timeline?: string
  team?: string
  readTime?: number
  award?: string
  introduction?: string
  overview?: string
  problemStatement?: string
  solution?: string
  solutionImage?: string
  figmaEmbed?: string
  prototypeImages?: PrototypeImage[]
  designProcess?: DesignProcessStep[]
  outcome?: string
  reflection?: string
  teamMembers?: TeamMember[]
}

export const projects: Project[] = [
  {
    slug: "project-one",
    title: "Project One",
    tagline: "Reimagining Social Interaction via Genuine Connections",
    description: "A detailed description of your first project.",
    fullDescription:
      "This is a comprehensive explanation of what the project is about, the challenges faced, and how they were overcome. You can include multiple paragraphs here to fully describe your work, the technologies used, and the problems solved.",
    technologies: ["React", "Next.js", "Tailwind CSS", "Figma", "User Research"],
    imageUrl: "/placeholder.svg?height=600&width=800",
    heroImage: "/placeholder.svg?height=1200&width=2000",
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/username/project-one",
    featured: true,
    role: "UI/UX Designer",
    timeline: "Jan 2023 - Mar 2023",
    team: "Team of 3",
    readTime: 10,
    award: "UX Lauder 2024 Finalist & Best UI",
    introduction:
      "In today's digital landscape, social media platforms often prioritize quantity over quality when it comes to connections. This project aims to reimagine social interaction by creating a platform that encourages genuine, meaningful connections between users.\n\nThe challenge was to design an intuitive interface that promotes authentic sharing while maintaining user privacy and fostering a sense of community.",
    overview:
      "Project One is a mobile application designed to help users build deeper connections through guided prompts and meaningful interactions. The app encourages users to share small, authentic moments from their daily lives rather than curated highlights.\n\nThe project was developed as part of a 48-hour designathon, where our team identified the problem of shallow social media interactions and sought to create a solution that promotes genuine human connection.",
    problemStatement:
      "How might we design a social platform that encourages authentic sharing and fosters meaningful connections in a digital world dominated by curated content and superficial interactions?",
    solution:
      "Our solution was to create a platform with two distinct sharing modes: 'My Friends Only' for sharing with existing connections, and 'Discover' for anonymous sharing with the broader community.\n\nThe app features daily prompts that encourage reflection and authentic sharing, a streak system that rewards consistent participation, and a clean, distraction-free interface that puts content first.",
    solutionImage: "/placeholder.svg?height=800&width=1200",
    figmaEmbed: "https://www.figma.com/embed?embed_host=share&url=https://www.figma.com/proto/example",
    prototypeImages: [
      {
        src: "/placeholder.svg?height=600&width=800",
        alt: "Home screen showing daily prompt",
      },
      {
        src: "/placeholder.svg?height=600&width=800",
        alt: "Discover feed with community posts",
      },
      {
        src: "/placeholder.svg?height=600&width=800",
        alt: "Profile screen showing connection stats",
      },
      {
        src: "/placeholder.svg?height=600&width=800",
        alt: "Deeper connection prompts screen",
      },
    ],
    designProcess: [
      {
        title: "Discover",
        description:
          "We began by conducting user interviews to understand how people currently connect online and what frustrations they experience with existing social platforms. We discovered that many users feel social media has become performative rather than authentic.\n\nThrough competitive analysis, we identified gaps in the market where our solution could provide unique value.",
        image: "/placeholder.svg?height=800&width=1200",
      },
      {
        title: "Define",
        description:
          "Based on our research, we defined our target users and created personas to guide our design decisions. We also established key metrics for success, including user engagement, retention, and reported feelings of connection.\n\nWe mapped the user journey to identify pain points and opportunities for creating meaningful interactions.",
        image: "/placeholder.svg?height=800&width=1200",
      },
      {
        title: "Develop",
        description:
          "We conducted a design studio session where team members sketched potential solutions. After evaluating our ideas, we created low-fidelity wireframes to test the core user flow.\n\nBased on feedback, we refined our design and developed a high-fidelity prototype with a focus on creating a calm, distraction-free environment that encourages reflection and authentic sharing.",
        image: "/placeholder.svg?height=800&width=1200",
      },
      {
        title: "Deliver",
        description:
          "We conducted usability testing with our prototype to validate our design decisions and identify areas for improvement. Based on user feedback, we made final refinements to the interface and interaction design.\n\nThe final design was presented to a panel of industry judges who awarded our project for its innovative approach to social connection and clean, intuitive interface.",
        image: "/placeholder.svg?height=800&width=1200",
      },
    ],
    outcome:
      "Our project received positive feedback from both users and judges, winning the Best UI award at the designathon. Users particularly appreciated the dual sharing modes and the focus on authentic connection.\n\nIf developed further, this platform has the potential to create a new category of social application that prioritizes depth over breadth in digital connections.",
    reflection:
      "This project taught me valuable lessons about designing for emotional needs rather than just functional requirements. I learned that creating spaces for vulnerability requires careful consideration of privacy, trust, and user comfort.\n\nIf I were to continue developing this concept, I would explore additional features for deepening connections over time and implement more robust privacy controls to ensure users feel safe sharing authentic moments.",
    teamMembers: [
      {
        name: "Heral Kumar",
        role: "UI/UX Designer",
        link: "https://heralkumar.com",
      },
      {
        name: "Team Member 2",
        role: "Product Manager",
        link: "https://example.com",
      },
      {
        name: "Team Member 3",
        role: "Developer",
        link: "https://example.com",
      },
    ],
  },
  {
    slug: "project-two",
    title: "Project Two",
    description: "A detailed description of your second project.",
    fullDescription:
      "This project involved creating a responsive web application with complex state management and API integration. I implemented features such as user authentication, real-time updates, and data visualization.",
    technologies: ["TypeScript", "Node.js", "MongoDB"],
    imageUrl: "/placeholder.svg?height=600&width=800",
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/username/project-two",
    featured: true,
  },
  // Add more projects as needed
]

export function getAllProjects() {
  return projects
}

export function getFeaturedProjects() {
  return projects.filter((project) => project.featured)
}

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug)
}

export function getAllProjectSlugs() {
  return projects.map((project) => project.slug)
}

