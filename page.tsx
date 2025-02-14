"use client"

import { useRef } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { Github, Linkedin, Mail } from "lucide-react"
import { Devpost } from "@/components/icons/devpost"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { CaseStudyList } from "@/components/case-study"
import { Dancing_Script, Cedarville_Cursive } from "next/font/google"
import { Timeline } from "./timeline"
import ColorfulText from "@/components/colorful-text"
import { SkillsSection } from "@/components/skills-section"
import { ThemeToggle } from "@/components/theme-toggle"
import Logo from "@/components/logo"

const dancingScript = Dancing_Script({
  subsets: ["latin"],
  variable: "--font-dancing",
})

const cedarvilleCursive = Cedarville_Cursive({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-cedarville",
})

export default function Portfolio() {
  const aboutRef = useRef<HTMLDivElement>(null)
  const experienceRef = useRef<HTMLDivElement>(null)
  const SkillsRef = useRef<HTMLDivElement>(null)
  const workRef = useRef<HTMLDivElement>(null)
  const contactRef = useRef<HTMLDivElement>(null)

  return (
    <div className={`min-h-screen bg-background ${dancingScript.variable} ${cedarvilleCursive.variable}`}>
      <div className="fixed inset-0 bg-gradient-radial from-rose-100/30 via-background to-background dark:from-rose-950/30 -z-10" />
      <header className="fixed top-0 z-50 w-full border-b bg-background/80 backdrop-blur-sm">
        <nav className="container flex h-16 items-center justify-between">
          <Logo />
          <div className="flex items-center gap-6">
            <button
              onClick={() => aboutRef.current?.scrollIntoView({ behavior: "smooth" })}
              className="nav-item text-sm font-medium text-muted-foreground transition-all duration-300 ease-in-out hover:text-primary hover:font-cedarville px-3 py-1"
              onMouseEnter={(e) => (e.currentTarget.style.fontFamily = "'Cedarville Cursive', cursive")}
              onMouseLeave={(e) => (e.currentTarget.style.fontFamily = "Arial, sans-serif")}
            >
              About
            </button>
            <button
              onClick={() => experienceRef.current?.scrollIntoView({ behavior: "smooth" })}
              className="nav-item text-sm font-medium text-muted-foreground transition-all duration-300 ease-in-out hover:text-primary hover:font-cursive px-3 py-1"
              //onMouseEnter={(e) => (e.currentTarget.style.fontFamily = "font-cursive")}
              //onMouseLeave={(e) => (e.currentTarget.style.fontFamily = "font-cursive")}
            >
              Experience
            </button>
            <button
              onClick={() => SkillsRef.current?.scrollIntoView({ behavior: "smooth" })}
              className="nav-item text-sm font-medium text-muted-foreground transition-all duration-300 ease-in-out hover:text-primary  hover:font-cedarville px-3 py-1"
              onMouseEnter={(e) => (e.currentTarget.style.fontFamily = "'Cedarville Cursive', cursive")}
              onMouseLeave={(e) => (e.currentTarget.style.fontFamily = "Arial, sans-serif")}
            >
              Skills
            </button>
            <button
              onClick={() => workRef.current?.scrollIntoView({ behavior: "smooth" })}
              className="nav-item text-sm font-medium text-muted-foreground transition-all duration-300 ease-in-out hover:text-primary  hover:font-cedarville px-3 py-1"
              onMouseEnter={(e) => (e.currentTarget.style.fontFamily = "'Cedarville Cursive', cursive")}
              onMouseLeave={(e) => (e.currentTarget.style.fontFamily = "Arial, sans-serif")}
            >
              Work
            </button>
            <button
              onClick={() => contactRef.current?.scrollIntoView({ behavior: "smooth" })}
              className="nav-item text-sm font-medium text-muted-foreground transition-all duration-300 ease-in-out hover:text-primary  hover:font-cedarville px-3 py-1"
              onMouseEnter={(e) => (e.currentTarget.style.fontFamily = "'Cedarville Cursive', cursive")}
              onMouseLeave={(e) => (e.currentTarget.style.fontFamily = "Arial, sans-serif")}
            >
              Contact
            </button>
            <ThemeToggle />
          </div>
        </nav>
      </header>

      <main className="container pt-24">
        <section ref={aboutRef} className="py-24 lg:py-32">
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex flex-col justify-center space-y-4 pl-10 "
            >
              <div className="space-y-2">
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
                  <span className="inline-flex">Hi, I'm </span>
                  <ColorfulText text=" Heral Kumar" />
                </h1>
                <p className="text-muted-foreground md:text-xl tracking-wider">
                  A UI/UX designer with 5+ years of experience creating user-centered digital experiences.
                </p>
              </div>
              <div className="space-y-2 text-muted-foreground tracking-wider">
                <p>
                  I specialize in designing intuitive interfaces that bridge the gap between user needs and business
                  goals. My approach combines strategic thinking with creative problem-solving to deliver impactful
                  digital solutions.
                </p>
                <p>
                  Currently working as a Senior Product Designer at Tech Corp, where I lead the design of their flagship
                  product used by millions of users worldwide.
                </p>
              </div>
              <div className="flex justify-start gap-4">
                <a
                  href="#"
                  className="rounded-full border border-rose-200 bg-transparent p-2 text-rose-500 transition-colors hover:border-rose-300 hover:from-rose-100 hover:to-rose-200"
                >
                  <span className="sr-only">Devpost</span>
                  <Devpost className="h-5 w-5" />
                </a>
                <a
                  href="#"
                  className="rounded-full border border-teal-200 bg-transparent p-2 text-teal-500 transition-colors hover:border-teal-300 hover:from-teal-100 hover:to-teal-200"
                >
                  <span className="sr-only">GitHub</span>
                  <Github className="h-5 w-5" />
                </a>
                <a
                  href="#"
                  className="rounded-full border border-rose-200 bg-transparent p-2 text-rose-500 transition-colors hover:border-rose-300 hover:from-rose-100 hover:to-rose-200"
                >
                  <span className="sr-only">LinkedIn</span>
                  <Linkedin className="h-5 w-5 fill-current" />
                </a>
                <a
                  href="mailto:jane@example.com"
                  className="rounded-full border border-teal-200 bg-transparent p-2 text-teal-500 transition-colors hover:border-teal-300 hover:from-teal-100 hover:to-teal-200"
                >
                  <span className="sr-only">Email</span>
                  <Mail className="h-5 w-5" />
                </a>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative mx-auto aspect-square w-full max-w-md overflow-hidden rounded-full border-4 border-rose-200 bg-gradient-to-br from-rose-100 to-teal-100 p-1 lg:aspect-[4/5] lg:rounded-2xl"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-rose-500/10 to-teal-500/10" />
              <Image
                src="/heral-pic.png"
                alt="HK"
                width={400}
                height={500}
                className="h-full w-full rounded-[inherit] object-cover"
              />
            </motion.div>
          </div>
        </section>

        <section ref={experienceRef} className="py-24 lg:py-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-2 text-center"
          >
            <h2
              className="gradient-text text-3xl font-bold tracking-tighter sm:text-4xl"
              //onMouseEnter={(e) => (e.currentTarget.style.fontFamily = "'Cedarville Cursive', cursive")}
              onMouseLeave={(e) => (e.currentTarget.style.fontFamily = "Arial, sans-serif")}
            >
              Experience
            </h2>
            <p className="text-muted-foreground">A timeline of my professional journey.</p>
          </motion.div>
          <Timeline
            data={[
              {
                year: "2023 - Present",
                title: "Senior Product Designer",
                company: "Tech Corp",
                content: (
                  <p>
                    Leading the design of flagship products and mentoring junior designers. Responsible for establishing
                    design systems, conducting user research, and implementing design thinking methodologies across
                    multiple teams.
                  </p>
                ),
                image1:
                  "https://sjc.microlink.io/kd_4jz-LD8Le8kK5mKa3kRcz_40cL4TYGJfy2NqJimsTQ-LIXeWiZsFg-TT5eaGiz86L7Yk8FYqXL8Y2fdrj7w.jpeg",
                image2: "/placeholder.svg?height=200&width=300&text=Tech+Corp+Project",
              },
              {
                year: "2021 - 2023",
                title: "UX Designer",
                company: "Design Studio Inc",
                content: (
                  <p>
                    Collaborated with cross-functional teams to deliver user-centered solutions. Led the redesign of
                    major client platforms, resulting in a 40% increase in user engagement and 25% reduction in
                    user-reported issues.
                  </p>
                ),
                image1: "/placeholder.svg?height=200&width=300&text=UX+Design+Process",
                image2: "/placeholder.svg?height=200&width=300&text=Client+Platform+Redesign",
              },
              {
                year: "2019 - 2021",
                title: "UI Designer",
                company: "Creative Agency",
                content: (
                  <p>
                    Created visually appealing interfaces for web and mobile applications. Developed and maintained
                    design systems for multiple clients, ensuring consistency across all digital touchpoints.
                  </p>
                ),
                image1: "/placeholder.svg?height=200&width=300&text=Web+App+UI",
                image2: "/placeholder.svg?height=200&width=300&text=Mobile+App+UI",
              },
              {
                year: "2018 - 2019",
                title: "Junior Designer",
                company: "Startup Hub",
                content: (
                  <p>
                    Started my journey in digital product design. Worked on various startup projects, gaining hands-on
                    experience in rapid prototyping, user testing, and iterative design processes.
                  </p>
                ),
                image1: "/placeholder.svg?height=200&width=300&text=Prototype+Sketch",
                image2: "/placeholder.svg?height=200&width=300&text=User+Testing+Session",
              },
            ]}
          />
        </section>

        <section ref={SkillsRef}>
          {" "}
          <SkillsSection />
        </section>

        <section ref={workRef} className="py-24 lg:py-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-2 text-center"
          >
            <h2
              className="gradient-text text-3xl font-bold tracking-tighter sm:text-4xl"
              onMouseEnter={(e) => (e.currentTarget.style.fontFamily = "'Cedarville Cursive', cursive")}
              onMouseLeave={(e) => (e.currentTarget.style.fontFamily = "Arial, sans-serif")}
            >
              Selected Projects
            </h2>
            <p className="text-muted-foreground">A collection of projects I've worked on.</p>
          </motion.div>
          <div className="mt-8">
            <CaseStudyList
              cases={[
                {
                  title: "FinTech App Redesign",
                  description: "A complete overhaul of a financial management application",
                  image: "/placeholder.svg",
                  challenge:
                    "The existing app had poor user engagement and confusing navigation, leading to customer frustration and increased support tickets.",
                  challengeImage: "/placeholder.svg",
                  solution:
                    "Implemented a new information architecture and streamlined navigation. Created custom visualization components.",
                  solutionImage: "/placeholder.svg",
                  result:
                    "40% reduction in support tickets, 65% increase in daily active users, and 85% positive feedback on the new interface.",
                  resultImage: "/placeholder.svg",
                  beforeImage: "/placeholder.svg",
                  afterImage: "/placeholder.svg",
                  tags: ["UX Design", "UI Design", "Financial Services", "Data Visualization"],
                  link: "#",
                },
                {
                  title: "E-commerce Platform",
                  description: "User experience design for an online marketplace",
                  image: "/placeholder.svg",
                  challenge:
                    "The client needed a scalable e-commerce platform that could handle multiple vendors while providing a seamless shopping experience.",
                  challengeImage: "/placeholder.svg",
                  solution:
                    "Designed a responsive interface with optimized checkout flow. Implemented advanced filtering and search capabilities.",
                  solutionImage: "/placeholder.svg",
                  result:
                    "28% increase in mobile conversions, 45% reduction in cart abandonment, and 60% improvement in vendor onboarding completion rate.",
                  resultImage: "/placeholder.svg",
                  beforeImage: "/placeholder.svg",
                  afterImage: "/placeholder.svg",
                  tags: ["E-commerce", "Mobile Design", "User Research", "Prototyping"],
                  link: "#",
                },
                {
                  title: "Healthcare Dashboard",
                  description: "Medical data visualization interface",
                  image: "/placeholder.svg",
                  challenge:
                    "Healthcare providers needed a more efficient way to monitor patient data and make informed decisions quickly.",
                  challengeImage: "/placeholder.svg",
                  solution:
                    "Created an intuitive dashboard with real-time data visualization. Implemented customizable views for different user roles.",
                  solutionImage: "/placeholder.svg",
                  result:
                    "50% reduction in time spent on data entry, 75% improvement in data accuracy, and 90% positive feedback from healthcare staff.",
                  resultImage: "/placeholder.svg",
                  beforeImage: "/placeholder.svg",
                  afterImage: "/placeholder.svg",
                  tags: ["Healthcare", "Dashboard Design", "Data Visualization", "UX Research"],
                  link: "#",
                },
              ]}
            />
          </div>
        </section>

        <section ref={contactRef} className="relative py-24 lg:py-32">
          <div className="absolute inset-0 bg-gradient-radial from-teal-100/30 via-background to-background dark:from-teal-950/30" />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative mx-auto max-w-md space-y-8"
          >
            <div className="space-y-2 text-center">
              <h2
                className="gradient-text text-3xl font-bold tracking-tighter sm:text-4xl"
                onMouseEnter={(e) => (e.currentTarget.style.fontFamily = "'Cedarville Cursive', cursive")}
                onMouseLeave={(e) => (e.currentTarget.style.fontFamily = "Arial, sans-serif")}
              >
                Let's Connect
              </h2>
              <p className="text-muted-foreground">Have a project in mind? Let's discuss it.</p>
            </div>
            <div className="rounded-2xl border bg-card/50 p-6 backdrop-blur-sm">
              <form action="https://formspree.io/f/mdkalqko" method="POST" className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" placeholder="Enter your name" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" placeholder="Enter your email" type="email" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea className="min-h-[100px]" id="message" placeholder="Enter your message" />
                </div>
                <Button
                  className="w-full bg-gradient-to-r from-rose-100 to-teal-100 text-rose-900 hover:from-rose-500 hover:to-teal-500 hover:text-white dark:from-rose-600 dark:to-blue-800 dark:text-rose-100 dark:hover:from-purple-700 dark:hover:to-teal-700"
                  size="lg"
                >
                  Send Message
                </Button>
              </form>
            </div>
          </motion.div>
        </section>
      </main>
    </div>
  )
}

