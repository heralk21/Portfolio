"use client"

import { useState, useEffect, useRef } from "react"
import { notFound, useRouter } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, ExternalLink, Github, ChevronRight, Menu, X, Lightbulb } from "lucide-react"
import { getProjectData, Project } from "@/lib/projects"
import { motion, useInView } from "framer-motion"
import Logo from "../../components/shared/site-logo"
import { ThemeToggle } from "../../components/shared/theme-switcher"
import { useTheme } from "next-themes"
import dynamic from "next/dynamic"
import HighlightedText from "../../components/shared/HighlightedText"

// Dynamically import the UnderwaySign component
const UnderwaySign = dynamic(
  () => import('../../components/shared/underway-sign'),
  { ssr: false }
)

// Dynamically import the charts components to avoid SSR issues with Recharts
const SeelieResearchCharts = dynamic(
  () => import('../../components/charts/SeelieResearchCharts'),
  { ssr: false }
)

const HeartRiskResearchCharts = dynamic(
  () => import('../../components/charts/HeartRiskResearchCharts'),
  { ssr: false }
)

const RecoverEaseResearchCharts = dynamic(
  () => import('../../components/charts/RecoverEaseResearchCharts'),
  { ssr: false }
)

// Dynamically import the personas components
const HeartRiskPersonas = dynamic(
  () => import('../../components/personas/HeartRiskPersonas'),
  { ssr: false }
)

const RecoverEasePersonas = dynamic(
  () => import('../../components/personas/RecoverEasePersonas'),
  { ssr: false }
)

const MeloPersonas = dynamic(
  () => import('../../components/personas/MeloPersonas'),
  { ssr: false }
)

const SeeliePersonas = dynamic(
  () => import('../../components/personas/SeeliePersonas'),
  { ssr: false }
)

const TamagoPersonas = dynamic(
  () => import('../../components/personas/TamagoPersonas'),
  { ssr: false }
)

// Dynamically import the competitive analysis components
const HeartRiskCompetitiveAnalysis = dynamic(
  () => import('../../components/analysis/HeartRiskCompetitiveAnalysis'),
  { ssr: false }
)

const RecoverEaseCompetitiveAnalysis = dynamic(
  () => import('../../components/analysis/RecoverEaseCompetitiveAnalysis'),
  { ssr: false }
)

const SeelieCompetitiveAnalysis = dynamic(
  () => import('../../components/analysis/SeelieCompetitiveAnalysis'),
  { ssr: false }
)

const TamagoCompetitiveAnalysis = dynamic(
  () => import('../../components/analysis/TamagoCompetitiveAnalysis'),
  { ssr: false }
)

interface PrototypeImage {
  src: string
  alt: string
}

interface DesignProcessStep {
  title: string
  description: string
  image?: string
}

interface TeamMember {
  name: string
  role: string
  link?: string
}

const menuItems = [
  { label: "About", path: "about" },
  { label: "Experience", path: "experience" },
  { label: "Skills", path: "skills" },
  { label: "Work", path: "work" },
  { label: "Contact", path: "contact" },
]

// Create function to get project-specific sections
const getProjectSections = (projectSlug: string) => {
  // Default sections for most projects
  const defaultSections = [
    { id: "overview", label: "Overview" },
    { id: "challenge", label: "Challenge" },
    { id: "process", label: "Design Process" },
    { id: "solution", label: "Solution" },
    { id: "results", label: "Results" },
    { id: "reflection", label: "Reflection" },
    { id: "team", label: "Team" }
  ];
  
  // Project-specific sections
  switch(projectSlug) {
    case "HeartRisk":
      return [
        { id: "overview", label: "Overview" },
        { id: "challenge", label: "Challenge" },
        { id: "process", label: "Design Process" },
        { id: "solution", label: "AI Solution" },
        { id: "results", label: "Outcomes" },
        { id: "reflection", label: "Future Work" },
        { id: "team", label: "Team" }
      ];
    case "RecoverEase":
      return [
        { id: "overview", label: "Overview" },
        { id: "challenge", label: "Challenge" },
        { id: "process", label: "Design Process" },
        { id: "solution", label: "System Solution" },
        { id: "results", label: "Implementation Results" },
        { id: "reflection", label: "Roadmap" },
        { id: "team", label: "Team" }
      ];
    case "Seelie":
      return [
        { id: "overview", label: "Overview" },
        { id: "challenge", label: "Challenge" },
        { id: "process", label: "Design Process" },
        { id: "solution", label: "Solution" },
        { id: "results", label: "Results" },
        { id: "reflection", label: "Improvements" },
        { id: "team", label: "Team" }
      ];
    default:
      return defaultSections;
  }
};

// Create a component for area of focus with animation
const FocusArea = ({ text, color = "#f43f5e" }: { 
  text: string,
  color?: string 
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="flex flex-col items-center justify-center p-6 col-span-full"
    >
      <h3 className="text-lg font-medium mb-2 text-muted-foreground">Area of Focus</h3>
      <span 
        className="text-5xl font-bold" 
        style={{ color }}
      >
        {text}
      </span>
    </motion.div>
  );
};

// Create a reusable component for fade-in images
const FadeInImage = ({ src, alt, fill = false, className = "", width, height }: { 
  src: string, 
  alt: string, 
  fill?: boolean, 
  className?: string,
  width?: number,
  height?: number
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  
  return (
    <div ref={ref} className={`relative overflow-hidden ${className}`}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="h-full w-full"
      >
        {fill ? (
          <Image
            src={src}
            alt={alt}
            fill
            className="object-cover"
          />
        ) : (
          <Image
            src={src}
            alt={alt}
            width={width || 1200}
            height={height || 800}
            className="w-full"
          />
        )}
      </motion.div>
    </div>
  );
};

// Create a component for numbered metrics
const MetricNumber = ({ number, label, color = "#f43f5e" }: { 
  number: string | number, 
  label: string,
  color?: string 
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const [displayValue, setDisplayValue] = useState(0);
  const finalValue = typeof number === 'string' ? parseFloat(number) || 0 : number;
  const hasPercent = typeof number === 'string' && number.includes('%');
  const hasX = typeof number === 'string' && number.includes('x');
  const hasFraction = typeof number === 'string' && number.includes('/');
  
  // Format the display value based on the type of number
  const formattedValue = () => {
    if (hasFraction) {
      return number; // Don't animate fractions, just display them
    } else if (hasPercent) {
      return `${Math.round(displayValue)}%`;
    } else if (hasX) {
      return `${displayValue.toFixed(1)}x`;
    } else {
      return typeof number === 'string' && isNaN(parseFloat(number)) 
        ? number // If it's not a parseable number, just display it
        : displayValue.toFixed(1).replace(/\.0$/, ''); // Remove decimal if it's a whole number
    }
  };
  
  useEffect(() => {
    if (isInView) {
      // Don't animate if it's a fraction or non-numeric string
      if (hasFraction || (typeof number === 'string' && isNaN(parseFloat(number)))) {
        return;
      }
      
      let startTime: number;
      const duration = 2000; // 2 seconds for all animations
      
      const animateValue = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / duration, 1);
        
        // Use easeOutQuad for a nice deceleration effect
        const easeOutQuad = (t: number) => t * (2 - t);
        const easedProgress = easeOutQuad(progress);
        
        setDisplayValue(easedProgress * finalValue);
        
        if (progress < 1) {
          requestAnimationFrame(animateValue);
        }
      };
      
      requestAnimationFrame(animateValue);
    }
  }, [isInView, finalValue, number, hasFraction]);
  
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="flex flex-col items-center p-6"
    >
      <span 
        className="text-6xl font-bold mb-2" 
        style={{ color }}
      >
        {formattedValue()}
      </span>
      <span className="text-center text-sm text-muted-foreground">{label}</span>
    </motion.div>
  );
};

// Create a component for fade-in sections
const FadeInSection = ({ children, className = "" }: { 
  children: React.ReactNode,
  className?: string
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className={`transition-all duration-300 ease-in-out ${className}`}
    >
      {children}
    </motion.div>
  );
};

// Create a component for user personas
const UserPersonaCard = ({ 
  name, 
  subtitle, 
  age, 
  location, 
  occupation, 
  painPoints, 
  goals,
  imageUrl = "/placeholder.svg", 
  color = "#53b948" 
}: { 
  name: string,
  subtitle: string,
  age: string | number,
  location: string,
  occupation: string,
  painPoints: string[],
  goals: string[],
  imageUrl?: string,
  color?: string
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="p-6 rounded-lg border bg-card/30 backdrop-blur-sm relative overflow-hidden"
      style={{ 
        background: `linear-gradient(to right, rgba(${parseInt(color.slice(1, 3), 16)}, ${parseInt(color.slice(3, 5), 16)}, ${parseInt(color.slice(5, 7), 16)}, 0.05), rgba(${parseInt(color.slice(1, 3), 16)}, ${parseInt(color.slice(3, 5), 16)}, ${parseInt(color.slice(5, 7), 16)}, 0.02))` 
      }}
    >
      <div className="flex flex-col gap-6">
        {/* Header with image and name */}
        <div className="flex items-center gap-4">
          <div className="w-24 h-24 rounded-full overflow-hidden relative">
            <Image
              src={imageUrl}
              alt={name}
              fill
              className="object-cover"
            />
          </div>
          <h3 className="text-2xl font-bold">{name}</h3>
        </div>
        
        {/* Details */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-4 gap-y-3">
          <div>
            <p className="font-semibold">Age</p>
            <p className="text-muted-foreground">{age}</p>
          </div>
          <div>
            <p className="font-semibold">Location</p>
            <p className="text-muted-foreground">{location}</p>
          </div>
          <div>
            <p className="font-semibold">Occupation</p>
            <p className="text-muted-foreground">{occupation}</p>
          </div>
          <div>
            <p className="font-semibold">Context</p>
            <p className="text-muted-foreground">{subtitle}</p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-2">
          <div>
            <h4 className="font-semibold text-lg mb-3">Pain Points:</h4>
            <ul className="space-y-2">
              {painPoints.map((point, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <span className="text-red-500 flex-shrink-0 text-lg">•</span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-lg mb-3">Goals:</h4>
            <ul className="space-y-2">
              {goals.map((goal, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <span className="text-green-500 flex-shrink-0 text-lg">•</span>
                  <span>{goal}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

// Create a component for numbered design process steps
const NumberedProcessPoint = ({ number, description, color = "#53b948" }: { 
  number: number,
  description: string,
  color?: string
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  
  // Format the number to have leading zero if needed
  const formattedNumber = number < 10 ? `0${number}` : `${number}`;
  
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="mb-12 last:mb-6"
    >
      <div className="relative">
        <span 
          className="text-[90px] font-bold absolute -top-10 -left-2 opacity-20 select-none"
          style={{ color }}
        >
          {formattedNumber}
        </span>
        <div className="relative z-10 pl-20 ml-9">
          <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl">
            {description}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

// Create a component for autoplay looping video with fade-in animation
const FadeInVideo = ({ src, className = "" }: { 
  src: string,
  className?: string
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className={`relative overflow-hidden rounded-xl border ${className}`}
    >
      <video 
        autoPlay 
        loop 
        muted 
        playsInline
        className="w-full h-auto"
      >
        <source src={src} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </motion.div>
  );
};

// Create a component for competitive analysis table
const CompetitiveAnalysisTable = ({ promptColor = "#53b948" }: { promptColor?: string }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  
  // Define competitors and features for comparison
  const competitors = [
    { name: "Seelie", logo: "/competitive-analysis/seelie-logo.png" },
    { name: "Mint", logo: "/competitive-analysis/mint-competitive-analy-seelie.jpg" },
    { name: "YNAB", logo: "/competitive-analysis/ynab-competitive-analy-seelie.png" },
    { name: "PocketGuard", logo: "/competitive-analysis/pocketguard-competitive-analy-seelie.jpg" },
  ];
  
  const features = [
    { id: 1, name: "AI-Driven Finance Assistance", scores: [1, 0, 0, 0] },
    { id: 2, name: "Bill Payment Reminders", scores: [1, 1, 0, 1] },
    { id: 3, name: "Personalized Budgeting", scores: [1, 1, 1, 1] },
    { id: 4, name: "Banking Education", scores: [1, 0, 0, 0] },
    { id: 5, name: "Subscription Tracking", scores: [1, 0, 0, 1] },
    { id: 6, name: "Smart Spending Insights", scores: [1, 1, 1, 1] },
  ];
  
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="overflow-x-auto"
    >
      <table className="w-full border-collapse border">
        <thead>
          <tr className="bg-muted/30">
            <th className="p-3 text-center font-medium border-b border-r">#</th>
            <th className="p-3 text-left font-medium border-b border-r min-w-[200px]">Features</th>
            {competitors.map((competitor, index) => (
              <th key={index} className="p-3 text-center font-medium border-b border-r">
                <div className="flex flex-col items-center justify-center gap-2">
                  <div className="w-10 h-10 relative">
                    <Image 
                      src={competitor.logo} 
                      alt={competitor.name} 
                      width={40} 
                      height={40} 
                      className="object-contain"
                    />
                  </div>
                  <span className="text-sm">{competitor.name}</span>
                </div>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {features.map((feature) => (
            <tr key={feature.id} className="even:bg-muted/5">
              <td className="p-3 border-b border-r text-center">{feature.id}</td>
              <td className="p-3 border-b border-r">{feature.name}</td>
              {feature.scores.map((score, index) => (
                <td key={index} className="p-3 border-b border-r text-center">
                  {score === 1 ? (
                    <div className="inline-flex items-center justify-center">
                      <span 
                        className="w-4 h-4 rounded-full" 
                        style={{ backgroundColor: promptColor }}
                      />
                    </div>
                  ) : (
                    <div className="inline-flex items-center justify-center">
                      <span className="w-4 h-4 rounded-full border border-gray-300" />
                    </div>
                  )}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </motion.div>
  );
};

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const [project, setProject] = useState<Project | null>(null)
  const [loading, setLoading] = useState(true)
  const [activeSection, setActiveSection] = useState("overview")
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { theme } = useTheme()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isHeaderFixed, setIsHeaderFixed] = useState(false)
  const [figmaLoading, setFigmaLoading] = useState(true)
  const router = useRouter()

  useEffect(() => {
    const fetchProject = async () => {
      try {
        const projectData = await getProjectData(params.slug)
        
        if (!projectData) {
          console.error("Project not found:", params.slug)
          router.push('/404')
          return
        }
        
        setProject(projectData)
        setLoading(false)
      } catch (error) {
        console.error("Error fetching project:", error)
        router.push('/404')
      }
    }

    fetchProject()
  }, [params.slug, router])

  useEffect(() => {
    const handleScroll = () => {
      const sectionElements = getProjectSections(params.slug).map(section => ({
        id: section.id,
        element: document.getElementById(section.id)
      }))

      const currentSection = sectionElements.find(section => {
        if (!section.element) return false
        const rect = section.element.getBoundingClientRect()
        return rect.top <= 120 && rect.bottom > 120
      })

      if (currentSection) {
        setActiveSection(currentSection.id)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [params.slug])

  if (loading) {
    return (
      <div className="min-h-screen bg-background text-foreground flex items-center justify-center">
        <div className="text-xl">Loading...</div>
      </div>
    )
  }

  if (!project) {
    notFound()
  }

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault()
    const element = document.getElementById(targetId)
    if (element) {
      const headerOffset = 100
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      })
    }
  }

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const headerOffset = 100
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      })
    }
  }

  const handleNavigation = (path: string) => {
    window.location.href = `/?section=${path}`
  }

  const getButtonClassName = (path: string) => `
    nav-item text-sm font-medium transition-all duration-300 ease-in-out px-3 py-1
    ${activeSection === path 
      ? "text-primary font-semibold dark:text-rose-500" 
      : "text-muted-foreground hover:text-primary/70 dark:hover:text-rose-500"}
  `

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Main Navigation */}
      <header className="fixed top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <nav className="container flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center">
            <Logo />
          </Link>
          <div className="hidden md:flex items-center gap-6">
            {menuItems.map((item) => (
              <button
                key={item.label}
                onClick={() => handleNavigation(item.path)}
                className={`nav-item text-sm font-medium transition-all duration-300 ease-in-out px-3 py-1
                  text-muted-foreground hover:text-primary/70 dark:hover:text-rose-500`}
              >
                {item.label}
              </button>
            ))}
            <ThemeToggle />
            </div>
          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2">
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </nav>
        {isMenuOpen && (
          <div className="md:hidden bg-background border-t">
            {menuItems.map((item) => (
              <button
                key={item.label}
                onClick={() => handleNavigation(item.path)}
                className="block w-full text-left px-4 py-2 text-sm font-medium text-muted-foreground hover:text-rose-500"
              >
                {item.label}
              </button>
            ))}
            <div className="px-4 py-2">
              <ThemeToggle />
        </div>
      </div>
        )}
      </header>

      <main className="min-h-screen pt-28">
        <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_250px] gap-12">
          {/* Main Content */}
          <div>
              {/* Hero Section */}
              <section id="overview" className="space-y-8 mb-16">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="space-y-4"
                >
                  <h1 className="text-4xl font-bold tracking-tight">{project.title}</h1>
                  <p className="text-xl text-muted-foreground">{project.tagline || project.description}</p>
                </motion.div>

                <FadeInImage
                  src={project.heroImage || project.imageUrl || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className="aspect-video relative rounded-lg overflow-hidden border"
                />

                <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
                <div>
                    <h3 className="font-medium mb-1">Timeline</h3>
                    <p className="text-muted-foreground">{project.timeline || "4 weeks"}</p>
                </div>
                <div>
                    <h3 className="font-medium mb-1">Role</h3>
                    <p className="text-muted-foreground">{project.role || "UI/UX Designer"}</p>
                </div>
                <div>
                    <h3 className="font-medium mb-1">Platform</h3>
                    <p className="text-muted-foreground">
                      {project.technologies.join(", ")}
                    </p>
                </div>
                {/* <div>
                    <h3 className="font-medium mb-1">Links</h3>
                    <div className="flex gap-4">
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-muted-foreground hover:text-primary"
                        >
                          Live Demo
                        </a>
                      )}
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-muted-foreground hover:text-primary"
                        >
                          GitHub
                        </a>
                      )}
                </div> */}
                {/* </div> */}
              </div>
              </section>

              {/* Challenge Section */}
              <section id="challenge" className="space-y-8 mb-16">
                <h2 className="text-2xl font-bold">Challenge</h2>
                
                {/* Area of Focus */}
                {project.areaOfFocus ? (
                  <div className="mb-8">
                    <FocusArea 
                      text={project.areaOfFocus}
                      color={project.promptColor || "#f43f5e"}
                    />
                  </div>
                ) : null}
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                  {project.challengeMetrics?.map((metric, index) => (
                    <MetricNumber 
                      key={index}
                      number={metric.number}
                      label={metric.label}
                      color={project.promptColor || "#f43f5e"}
                    />
                  ))}
                  {!project.challengeMetrics && (
                    <>
                      <MetricNumber 
                        number="71%"
                        label="of Gen Z find traditional banking apps confusing"
                        color={project.promptColor || "#f43f5e"}
                      />
                      <MetricNumber 
                        number="68%"
                        label="want financial education in their banking app"
                        color={project.promptColor || "#f43f5e"}
                      />
                      <MetricNumber 
                        number="3.2x"
                        label="higher engagement with gamified financial tools"
                        color={project.promptColor || "#f43f5e"}
                      />
                    </>
                  )}
              </div>
                <div className="relative p-6 rounded-lg border bg-card/30 backdrop-blur-sm group transition-all duration-300">
                  <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none"
                    style={{
                      boxShadow: `0 0 15px 2px ${project.promptColor || '#f43f5e'}`,
                    }}
                  />
                  <div className="absolute -top-3 -right-3 p-2 rounded-full bg-background border">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      className="w-6 h-6"
                      fill="none"
                    >
                      <path
                        d="M8.5 9.5a3.5 3.5 0 0 1 7 0c0 3.5-3.5 3.5-3.5 6M12 19h.01"
                        className="stroke-muted-foreground transition-all duration-300"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        data-active="true"
                      />
                    </svg>
                  </div>
                  <style jsx>{`
                    .group:hover [data-active="true"] {
                      stroke: ${project.promptColor || '#f43f5e'};
                      stroke-width: 3;
                      filter: drop-shadow(0 0 8px ${project.promptColor || '#f43f5e'});
                    }
                  `}</style>
                  <div 
                    // style={{ 
                    //   color: project.promptTextColor || project.promptColor || '#f43f5e',
                    // }} 
                    className="prose prose-lg dark:prose-invert max-w-none"
                  >
                    <p className="text-lg leading-relaxed">{project.problemStatement}</p>
                  </div>
              </div>
            </section>

              {/* Research Section - removing this entire section */}
              {/* <section id="research" className="space-y-8 mb-16">
                <h2 className="text-2xl font-bold">Research</h2>
                
                {project.slug === "Seelie" && (
                  <>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                      <FadeInImage
                        src="/Seelie_research1.jpg"
                        alt="Seelie Research"
                        fill
                        className="aspect-video relative rounded-lg overflow-hidden border"
                      />
                      <FadeInImage
                        src="/Seelie_research2.jpg"
                        alt="Seelie Research"
                        fill
                        className="aspect-video relative rounded-lg overflow-hidden border"
                      />
                </div>
                    
                    <h3 className="text-xl font-semibold mt-8 mb-4">Competitive Analysis</h3>
                    <CompetitiveAnalysisTable promptColor={project.promptColor} />
                  </>
                )}
                
              </section> */}

              {/* Process Section */}
              <section id="process" className="space-y-8 mb-16">
                <h2 className="text-2xl font-bold">Design Process</h2>
                {project.slug === "Seelie" || project.slug === "Melo" ? (
                  <div className="space-y-16">
                    {project.designProcess?.map((step: DesignProcessStep, index: number) => (
                      <div key={index} className="space-y-6">
                        <h3 className="text-2xl font-semibold">{step.title}</h3>
                        {step.title === "Discover" ? (
                          <div className="mt-8">
                            {project.slug === "Melo" ? (
                              <UnderwaySign color={project.promptColor} />
                            ) : (
                              step.description.split("\n\n").map((paragraph: string, idx: number) => (
                                <NumberedProcessPoint
                                  key={idx}
                                  number={idx + 1}
                                  description={paragraph}
                                  color={project.promptColor}
                                />
                              ))
                            )}
                          </div>
                        ) : step.title === "Define" ? (
                          <>
                            <h2 className="text-xl font-semibold mt-8 mb-4">User Research</h2>
                            {project.slug === "Melo" ? (
                              <>
                                <div className="prose prose-lg dark:prose-invert max-w-none mb-8">
                                  <p>
                                    Our research revealed key insights about our target audience. We identified that {' '} 
                                    <HighlightedText color={project.promptColor}> food waste reduction </HighlightedText> {' '}
                                    and {' '}
                                    <HighlightedText color={project.promptColor}> sustainable shopping </HighlightedText> {' '}
                                    are critical pain points for environmentally conscious consumers.
                                  </p>
                                </div>
                                
                                <h3 className="text-xl font-semibold mt-8 mb-4">User Personas</h3>
                                <MeloPersonas promptColor={project.promptColor} />
                              </>
                            ) : project.slug === "Seelie" ? (
                              <>
                                <div className="prose prose-lg prose-invert max-w-none mb-8">
                                  <p>
                                    Our research revealed key insights about our target audience. We identified that {' '} 
                                    <HighlightedText color={project.promptColor}> financial literacy </HighlightedText> {' '}
                                    and {' '}
                                    <HighlightedText color={project.promptColor}> budget management </HighlightedText> {' '}
                                    are critical pain points for Gen Z users.
                                  </p>
                                  
                                  {step.description.split("\n\n").map((paragraph: string, idx: number) => (
                                    <p key={idx}>{paragraph}</p>
                                  ))}
                                </div>
                                
                                <h3 className="text-xl font-semibold mt-8 mb-4">User Personas</h3>
                                <SeeliePersonas promptColor={project.promptColor} />
                                
                                <h3 className="text-xl font-semibold mt-10 mb-4">Competitive Analysis</h3>
                                <SeelieCompetitiveAnalysis promptColor={project.promptColor} />
                                
                                {/* {step.image && (
                                  <FadeInImage
                                    src={step.image}
                                    alt={step.title}
                                    width={1200}
                                    height={800}
                                    className="rounded-xl overflow-hidden my-6"
                                  />
                                )} */}
                              </>
                            ) : project.slug === "tamago" ? (
                              <>
                                <div className="w-full space-y-8">
                                  <div className="prose prose-lg prose-invert max-w-none mb-8">
                                    <p>
                                      Our research revealed key insights about our target audience. We identified that {' '} 
                                      <HighlightedText color={project.promptColor}> authentic connection </HighlightedText> {' '}
                                      and {' '}
                                      <HighlightedText color={project.promptColor}> real-world engagement </HighlightedText> {' '}
                                      are critical needs for both artists and art enthusiasts.
                                    </p>
                                    
                                    {step.description.split("\n\n").map((paragraph: string, idx: number) => (
                                      <p key={idx}>{paragraph}</p>
                                    ))}
                                  </div>
                                  
                                  <div className="mt-8 bg-black/50 rounded-lg p-6 border border-yellow-800 flex flex-col">
                                    <h3 className="text-xl font-semibold mb-4 text-yellow-400">User Personas</h3>
                                    {/* Direct inline component as fallback */}
                                    <div className="space-y-8 mt-6">
                                      {/* Persona for a Local Artist */}
                                      <UserPersonaCard
                                        name="Lila Rivera"
                                        subtitle="Local Visual Artist"
                                        age={28}
                                        location="Vancouver, Canada"
                                        occupation="Painter & Muralist"
                                        painPoints={[
                                          "Struggles with digital algorithms that overshadow niche art.",
                                          "Finds it hard to connect with a local audience.",
                                          "Limited opportunities for live, interactive feedback.",
                                          "Overwhelmed by mass-market platforms."
                                        ]}
                                        goals={[
                                          "Build a local following without algorithm bias.",
                                          "Engage directly with art enthusiasts in real-world settings.",
                                          "Receive live feedback during interactive events.",
                                          "Create a community that appreciates niche art."
                                        ]}
                                        imageUrl="/placeholder.svg"
                                        color={project.promptColor}
                                      />
                                      
                                      {/* Persona for an Art Enthusiast */}
                                      <UserPersonaCard
                                        name="Marcus Lee"
                                        subtitle="Art Enthusiast & Community Organizer"
                                        age={26}
                                        location="Calgary, Canada"
                                        occupation="Event Coordinator"
                                        painPoints={[
                                          "Passively scrolls through digital art feeds.",
                                          "Finds it challenging to discover local art in a meaningful way.",
                                          "Frustrated with lack of interactive art experiences.",
                                          "Wants more personal, immersive art encounters."
                                        ]}
                                        goals={[
                                          "Discover and engage with local art in real-world spaces.",
                                          "Participate in interactive art events and scavenger hunts.",
                                          "Connect with artists on a more personal level.",
                                          "Transform art discovery from passive to active experience."
                                        ]}
                                        imageUrl="/placeholder.svg"
                                        color={project.promptColor}
                                      />
                                    </div>
                                  </div>
                                  
                                  <div className="mt-10 bg-black/50 rounded-lg p-6 border border-yellow-800 flex flex-col">
                                    <h3 className="text-xl font-semibold mb-4 text-yellow-400">Competitive Analysis</h3>
                                    {/* Simple inline fallback for competitive analysis */}
                                    <div className="space-y-8">
                                      <p className="text-muted-foreground mb-4">
                                        Our competitive analysis revealed that while existing platforms excel in their specific domains, none offer a comprehensive approach to connecting audiences with local art through interactive, real-world experiences.
                                      </p>
                                      <div className="overflow-x-auto">
                                        <table className="w-full border-collapse border">
                                          <thead>
                                            <tr className="bg-muted/30">
                                              <th className="p-3 text-center font-medium border-b border-r">#</th>
                                              <th className="p-3 text-left font-medium border-b border-r min-w-[200px]">Features</th>
                                              <th className="p-3 text-center font-medium border-b border-r">TamaGo</th>
                                              <th className="p-3 text-center font-medium border-b border-r">Instagram</th>
                                              <th className="p-3 text-center font-medium border-b border-r">TikTok</th>
                                              <th className="p-3 text-center font-medium border-b border-r">Eventbrite</th>
                                            </tr>
                                          </thead>
                                          <tbody>
                                            <tr className="even:bg-muted/5">
                                              <td className="p-3 border-b border-r text-center">1</td>
                                              <td className="p-3 border-b border-r">Algorithm-Free Local Discovery</td>
                                              <td className="p-3 border-b border-r text-center">✓</td>
                                              <td className="p-3 border-b border-r text-center">-</td>
                                              <td className="p-3 border-b border-r text-center">-</td>
                                              <td className="p-3 border-b border-r text-center">✓</td>
                                            </tr>
                                            <tr className="even:bg-muted/5">
                                              <td className="p-3 border-b border-r text-center">2</td>
                                              <td className="p-3 border-b border-r">Interactive Real-World Engagement</td>
                                              <td className="p-3 border-b border-r text-center">✓</td>
                                              <td className="p-3 border-b border-r text-center">-</td>
                                              <td className="p-3 border-b border-r text-center">-</td>
                                              <td className="p-3 border-b border-r text-center">-</td>
                                            </tr>
                                            <tr className="even:bg-muted/5">
                                              <td className="p-3 border-b border-r text-center">3</td>
                                              <td className="p-3 border-b border-r">Community Building for Niche Artists</td>
                                              <td className="p-3 border-b border-r text-center">✓</td>
                                              <td className="p-3 border-b border-r text-center">-</td>
                                              <td className="p-3 border-b border-r text-center">-</td>
                                              <td className="p-3 border-b border-r text-center">-</td>
                                            </tr>
                                          </tbody>
                                        </table>
                                      </div>
                                    </div>
                                  </div>
                                  
                                  {step.image && (
                                    <FadeInImage
                                      src={step.image}
                                      alt={step.title}
                                      width={1200}
                                      height={800}
                                      className="rounded-xl overflow-hidden my-6"
                                    />
                                  )}
                                </div>
                              </>
                            ) : project.slug === "HeartRisk" ? (
                              <HeartRiskResearchCharts promptColor={project.promptColor || "#e11d48"} />
                            ) : project.slug === "RecoverEase" ? (
                              <RecoverEaseResearchCharts promptColor={project.promptColor || "#0891b2"} />
                            ) : (
                              <div className="grid md:grid-cols-2 gap-8">
                                {project.researchImages?.map((image, index) => (
                                  <FadeInImage
                                    key={index}
                                    src={image}
                                    alt={`Research ${index + 1}`}
                                    fill
                                    className="aspect-video relative rounded-lg overflow-hidden border"
                                  />
                                ))}
                              </div>
                            )}
                          </>
                        ) : step.title === "Deliver" ? (
                          <>
                            {project.slug === "Melo" ? (
                              <UnderwaySign color={project.promptColor} />
                            ) : (
                              <>
                                <div className="prose prose-lg prose-invert max-w-none">
                                  {step.description.split("\n\n").map((paragraph: string, idx: number) => (
                                    <p key={idx}>{paragraph}</p>
                                  ))}
                                </div>
                                
                                {/* Project-specific content for Deliver step */}
                                {project.slug === "Seelie" && (
                                  <>
                                    <FadeInVideo 
                                      src="/seelie-video.mp4" 
                                      className="my-6 aspect-video"
                                    />
                                    <p 
                                      className="text-center text-lg mt-4 font-medium"
                                      style={{ color: project.promptColor || "#53b948" }}
                                    >
                                      Check out this video, highlighting my favourite and most GenZ feature of Seelie!
                                    </p>
                                  </>
                                )}
                                
                                {/* Tamago-specific content for Deliver step */}
                                {project.slug === "tamago" && (
                                  <>
                                    <div className="grid md:grid-cols-2 gap-8 mt-8">
                                      <FadeInImage
                                        src="/tamago/final-design-1.png"
                                        alt="Final Design - Artist View"
                                        width={600}
                                        height={400}
                                        className="rounded-xl overflow-hidden border"
                                      />
                                      <FadeInImage
                                        src="/tamago/final-design-2.png"
                                        alt="Final Design - User View"
                                        width={600}
                                        height={400}
                                        className="rounded-xl overflow-hidden border"
                                      />
                                    </div>
                                  </>
                                )}
                                
                                {step.image && project.slug !== "Seelie" && project.slug !== "tamago" ? (
                                  <FadeInImage
                                    src={step.image}
                                    alt={step.title}
                                    width={1200}
                                    height={800}
                                    className="rounded-xl overflow-hidden my-6"
                                  />
                                ) : null}
                              </>
                            )}
                          </>
                        ) : (
                          <>
                            {project.slug === "Melo" ? (
                              <UnderwaySign color={project.promptColor} />
                            ) : (
                              <>
                                <div className="prose prose-lg prose-invert max-w-none">
                                  {step.description.split("\n\n").map((paragraph: string, idx: number) => (
                                    <p key={idx}>{paragraph}</p>
                                  ))}
                                </div>
                                {step.image && (
                                  <FadeInImage
                                    src={step.image || "/placeholder.svg"}
                                    alt={step.title}
                                    width={1200}
                                    height={800}
                                    className="rounded-xl overflow-hidden my-6"
                                  />
                                )}
                              </>
                            )}
                          </>
                        )}
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="space-y-16">
                    {project.designProcess?.map((step: DesignProcessStep, index: number) => (
                      <div key={index} className="space-y-6">
                        <h3 className="text-2xl font-semibold">{step.title}</h3>
                        <div className="prose prose-lg prose-invert max-w-none">
                          {step.description.split("\n\n").map((paragraph: string, idx: number) => (
                            <p key={idx}>{paragraph}</p>
                          ))}
                        </div>
                        {step.image && (
                          <FadeInImage
                            src={step.image}
                            alt={step.title}
                            width={1200}
                            height={800}
                            className="rounded-xl overflow-hidden my-6"
                          />
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </section>

              {/* Solution Section */}
              <section id="solution" className="space-y-8 mb-16">
                <h2 className="text-2xl font-bold">
                  {project.slug === "HeartRisk" ? "AI Solution" : 
                   project.slug === "RecoverEase" ? "System Solution" : 
                   "Solution"}
                </h2>
                <div className="relative p-6 rounded-lg border bg-card/30 backdrop-blur-sm group transition-all duration-300">
                  <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none"
                    style={{
                      boxShadow: `0 0 15px 2px #facc15`,
                    }}
                  />
                  <div className="absolute -top-3 -right-3 p-2 rounded-full bg-background border">
                    <Lightbulb 
                      strokeWidth={1.5}
                      style={{
                        transition: 'all 0.3s ease',
                      }}
                      className="w-6 h-6 stroke-muted-foreground fill-none 
                        group-hover:stroke-yellow-300 
                        group-hover:fill-yellow-300 
                        group-hover:drop-shadow-[0_0_8px_#fef08a]"
                    />
                  </div>
                  <div 
                    className="prose prose-lg dark:prose-invert max-w-none"
                  >
                    <p className="text-lg leading-relaxed">{project.solution}</p>
                  </div>
                  {project.solutionImages && project.solutionImages.length > 0 && (
                    <div className="grid md:grid-cols-2 gap-8 mt-8">
                      {project.solutionImages.map((image, index) => (
                        <FadeInImage
                          key={index}
                          src={image}
                          alt={`Solution ${index + 1}`}
                          fill
                          className="aspect-video relative rounded-lg overflow-hidden border"
                        />
                      ))}
                    </div>
                  )}
                </div>
                
                {project.figmaEmbed && (
                  <div className="mt-8 space-y-4">
                    <h3 className="text-xl font-semibold">Interactive Prototype</h3>
                    <FadeInSection className="rounded-lg border overflow-hidden bg-card/30 aspect-video relative group">
                      <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none"
                        style={{
                          boxShadow: `0 0 15px 2px ${project.solutionColor || '#facc15'}`,
                        }}
                      />
                      {figmaLoading && (
                        <div className="absolute inset-0 flex items-center justify-center bg-card/50 z-10 animate-pulse">
                          <div className="text-center">
                            <div className="inline-block p-3 rounded-full bg-background border">
                              <svg className="w-6 h-6 animate-spin" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                              </svg>
                            </div>
                            <p className="mt-2 text-sm">Loading Figma Prototype...</p>
                          </div>
                        </div>
                      )}
                      <iframe 
                        src={project.figmaEmbed}
                        allowFullScreen
                        className="w-full h-full absolute inset-0 z-0 border-0"
                        style={{ background: 'transparent' }}
                        title="Figma Design Prototype"
                        onLoad={() => setFigmaLoading(false)}
                      />
                    </FadeInSection>
                  </div>
                )}
              </section>

              {/* Results Section */}
              <section id="results" className="space-y-8 mb-16">
                <h2 className="text-2xl font-bold">
                  {project.slug === "HeartRisk" ? "Outcomes" : 
                   project.slug === "RecoverEase" ? "Implementation Results" : 
                   "Results"}
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                  {project.resultMetrics?.map((metric, index) => (
                    <MetricNumber 
                      key={index}
                      number={metric.number}
                      label={metric.label}
                      color={project.promptColor || "#f43f5e"}
                    />
                  ))}
                  {!project.resultMetrics && (
                    <>
                      <MetricNumber 
                        number="94%"
                        label="of test users would recommend the app"
                        color="#3b82f6"
                      />
                      <MetricNumber 
                        number="32%"
                        label="increase in daily financial planning activity"
                        color="#3b82f6"
                      />
                      <MetricNumber 
                        number="9.2/10"
                        label="average user experience rating"
                        color="#3b82f6"
                      />
                    </>
                  )}
                </div>
                <div className="grid md:grid-cols-3 gap-8">
                  {project.results?.map((result, index) => (
                    <div
                      key={index}
                      className="p-6 rounded-lg border bg-card/30 backdrop-blur-sm"
                    >
                      <h3 className="font-medium text-xl mb-2">{result.title}</h3>
                      <p className="text-muted-foreground">{result.description}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* Reflection Section */}
            {project.reflection && (
                <section id="reflection" className="space-y-8 mb-16">
                  <h2 className="text-2xl font-bold">
                    {project.slug === "HeartRisk" ? "Future Work" : 
                     project.slug === "RecoverEase" ? "Roadmap" : 
                     "Improvements & Next Steps"}
                  </h2>
                  <div className="space-y-8 max-w-none">
                    {project.slug === "Melo" && project.reflection.includes("Under Development") ? (
                      <UnderwaySign color={project.promptColor} />
                    ) : (
                      project.reflection.split("\n\n").map((item, idx) => {
                        // Check if item contains a title (the first line before a newline)
                        const parts = item.split("\n");
                        const title = parts[0];
                        const content = parts.slice(1).join("\n").trim();
                        
                        return (
                          <div key={idx} className="flex items-start gap-5">
                            <span className="text-xl flex-shrink-0 mt-1">🟢</span>
                            <div>
                              <h3 className="text-xl font-bold mb-1">{title}</h3>
                              <p className="text-base text-muted-foreground leading-relaxed">{content}</p>
                            </div>
                          </div>
                        );
                      })
                    )}
                </div>
              </section>
            )}

              {/* Team Section */}
            {project.teamMembers && project.teamMembers.length > 0 && (
                <section id="team" className="space-y-8">
                  <h2 className="text-2xl font-bold">Team</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {project.teamMembers.map((member, index) => (
                      <div
                        key={index}
                        className="p-6 rounded-lg border bg-card/30 backdrop-blur-sm"
                      >
                        <h3 className="font-medium text-xl mb-2">{member.name}</h3>
                        <p className="text-muted-foreground mb-4">{member.role}</p>
                      {member.link && (
                        <a
                          href={member.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-primary hover:underline inline-flex items-center"
                          style={{ color: project.promptColor || '#f43f5e' }}
                        >
                          View Profile <ChevronRight className="w-4 h-4 ml-1" />
                        </a>
                      )}
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Next Project */}
              <div className="mt-16 pt-8 border-t">
              <Link
                  href="/?section=work"
                  className="inline-flex items-center text-muted-foreground hover:text-foreground transition-colors mb-8"
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to all projects
              </Link>
            </div>
          </div>

          {/* Table of Contents Sidebar */}
          <div className="hidden lg:block">
              <div className="sticky top-24">
                <div className="bg-card/30 border rounded-xl p-6">
                <h3 className="text-lg font-semibold mb-4">On This Page</h3>
                  <style jsx>{`
                    .nav-link:hover {
                      color: ${project.promptColor || '#f43f5e'};
                    }
                  `}</style>
                <nav className="space-y-2">
                    {getProjectSections(params.slug).map((section) => (
                      <a 
                        key={section.id}
                        href={`#${section.id}`}
                        onClick={(e) => handleSmoothScroll(e, section.id)}
                        className={`block text-sm font-medium transition-all duration-300 ease-in-out py-1 nav-link ${
                          activeSection === section.id 
                            ? "text-primary font-semibold" 
                            : "text-muted-foreground"
                        }`}
                        style={{
                          color: activeSection === section.id 
                            ? project.promptColor || undefined
                            : undefined
                        }}
                      >
                        {section.label}
                      </a>
                    ))}
                </nav>
              </div>

                <div className="mt-6 bg-card/30 border rounded-xl p-6">
                <h3 className="text-lg font-semibold mb-4">Technologies</h3>
                <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech: string) => (
                      <span key={tech} className="px-4 py-1.5 bg-gray-100 dark:bg-gray-800 rounded-full text-xs font-medium text-gray-800 dark:text-gray-200">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {(project.liveUrl || project.githubUrl) && (
                  <div className="mt-6 bg-card/30 border rounded-xl p-6">
                  <h3 className="text-lg font-semibold mb-4">Links</h3>
                  <div className="space-y-3">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                          className="flex items-center text-muted-foreground hover:text-foreground transition-colors"
                      >
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Live Demo
                      </a>
                    )}

                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                          className="flex items-center text-muted-foreground hover:text-foreground transition-colors"
                      >
                        <Github className="mr-2 h-4 w-4" />
                        View Code
                      </a>
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      </main>
    </div>
  )
}