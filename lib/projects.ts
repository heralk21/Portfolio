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

export type Metric = {
  number: string | number
  label: string
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
  promptColor?: string
  promptTextColor?: string
  areaOfFocus?: string
  challengeMetrics?: Metric[]
  solutionMetrics?: Metric[]
  resultMetrics?: Metric[]
}

export const projects: Project[] = [
  {
    slug: "Seelie",
    title: "Seelie",
    tagline: "Banking the GenZ way",
    description: "A fintech app designed to empower Gen Z through engaging financial literacy and intuitive budgeting tools",
    fullDescription:
      "Seelie is an innovative fintech platform addressing the challenges faced by Gen Z in managing their finances. In an era where traditional banking feels overwhelming, Seelie simplifies complex financial concepts through interactive tutorials, real-time budgeting tools, and gamified learning experiences.\n\nThe project was driven by extensive user research and iterative testing. We prioritized clarity, simplicity, and user engagement in our design process. With a modern aesthetic and personalized insights, Seelie aims to make financial literacy accessible and enjoyable, ultimately empowering young adults to take control of their financial future.",
    technologies: ["Figma", "FigJam", "Canva"],
    imageUrl: "/seelie-new.png",
    heroImage: "/seelie-new.png",
    liveUrl: "https://www.figma.com/proto/JST0SgsTdy6QnmFKtuA3c0/App-Design?node-id=20-9&p=f&t=d5H0H37oigekERrv-0&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=20%3A9",
    //githubUrl: "https://github.com/username/project-one",
    featured: true,
    role: "UI/UX Designer",
    timeline: "Jan 2025 - Jan 2025",
    team: "Team of 4",
    readTime: 10,
    //award: "UX Lauder 2024 Finalist & Best UI",
    introduction:
      "Financial literacy and budgeting are critical skills for building a secure financial future, yet many Gen Z users find traditional banking platforms confusing and unengaging. Seelie reimagines banking by combining interactive education with intuitive budgeting tools to empower young adults to manage their money confidently.\n\nThrough a user-centric design process, we transformed complex financial jargon into accessible, gamified lessons, making financial management both engaging and educational",
    overview:
      "Seelie is a mobile fintech application that bridges the gap between financial theory and everyday practice. The app offers a dynamic dashboard, real-time tracking of expenses and savings, and bite-sized tutorials that demystify key financial concepts. Developed over a three-month period, Seelie was born out of a commitment to making financial literacy approachable and enjoyable for Gen Z",
    problemStatement:
      "How might we reimagine digital banking services to make big banks feel approachable and transparent in their efforts to support Gen Z's financial goals and build lasting trust and loyalty?",
    solution:
      "Our solution was to build an interactive fintech app that transforms traditional banking into a user-friendly experience. Seelie breaks down financial jargon into digestible lessons, offers personalized budgeting tools, and integrates gamified elements to motivate users to build healthier financial habits. By combining education with practical tools, Seelie makes money management accessible and engaging.",
    solutionImage: "/Seelie_result.jpg",
    figmaEmbed: "https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com/proto/JST0SgsTdy6QnmFKtuA3c0/App-Design?kind=proto&node-id=20-9&page-id=0%3A1&scaling=scale-down&starting-point-node-id=20%3A9&t=d5H0H37oigekERrv-0&type=design&hide-ui=1",
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
          "We began by interviewing Gen Z users to understand their financial habits and the challenges they face with traditional banking platforms. Our research revealed that confusing financial terminology and outdated interfaces were major barriers to effective money management",
        image: "/placeholder.svg?height=800&width=1200",
      },
      {
        title: "Define",
        description:
          "Using our research insights, we defined key pain points and developed detailed user personas. We set clear success metrics focused on enhancing financial literacy, improving budgeting efficiency, and increasing user engagement.",
        image: "/placeholder.svg?height=800&width=1200",
      },
      {
        title: "Develop",
        description:
          "Our team brainstormed ideas and created low-fidelity wireframes to map out the core user flow. Through iterative usability tests and feedback sessions, we refined our concepts, ultimately developing a high-fidelity prototype that balanced functionality with a clean, modern design.",
        image: "/placeholder.svg?height=800&width=1200",
      },
      {
        title: "Deliver",
        description:
          "In the final phase, we polished the design and integrated key features such as real-time data visualization and gamified learning modules. Extensive usability testing confirmed that Seelie offers an intuitive and engaging user experience, setting the stage for future development.",
        image: "/placeholder.svg?height=800&width=1200",
      },
    ],
    outcome:
      "Seelie received enthusiastic feedback from industry experts, with many intrigued by the unique features it held. The app was recognized for its innovative approach. With its interactive features and educational focus, Seelie has the potential to redefine how Gen Z approaches personal finance and targets financial literacy.",
      reflection:
      "Enhanced Interactivity & Advanced Insights\nExpand the prototype with detailed interactions (budget alerts, goal tracking) and integrate AI-driven recommendations for smarter financial planning.\n\nMobile-First Design\nOptimize the interface for mobile users, who make up the majority of our target audience.\n\nDark Mode\nAdd a dark mode feature to enhance usability and aesthetics for Gen Z users.\n\nUsability Testing\nConduct in-depth usability testing to refine the prototype and explore its full potential.",
    teamMembers: [
      {
        name: "Heral Kumar",
        role: "UI/UX Designer",
        link: "https://heralkumar.com",
      },
      {
        name: "Ruhani Mittal",
        role: "UI/UX Designer",
        //link: "https://example.com",
      },
      {
        name: "May Kyy",
        role: "User Researcher",
        //link: "https://example.com",
      },
      {
        name: "Lydia Huang",
        role: "User Researcher",
        //link: "https://example.com",
      },
    ],
    promptColor: "#53b948",
    promptTextColor: "#53b948",
    areaOfFocus: "FinTech",
    challengeMetrics: [
      { number: "71%", label: "of Gen Z find traditional banking apps confusing" },
      { number: "68%", label: "want financial education in their banking app" },
      { number: "3.2x", label: "higher engagement with gamified financial tools" }
    ],
    solutionMetrics: [
      { number: "92%", label: "user satisfaction in prototype testing" },
      { number: "4.5x", label: "increase in financial knowledge retention" },
      { number: "87%", label: "of users found budgeting tools intuitive" }
    ],
    resultMetrics: [
      { number: "94%", label: "of test users would recommend the app" },
      { number: "32%", label: "increase in daily financial planning activity" },
      { number: "9.2/10", label: "average user experience rating" }
    ]
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

