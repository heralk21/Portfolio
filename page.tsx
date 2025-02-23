"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Menu, X } from "lucide-react";
import { Devpost } from "@/components/icons/devpost";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { CaseStudyList } from "@/components/case-study";
import { Dancing_Script } from "next/font/google";
import { Timeline } from "./timeline";
import ColorfulText from "@/components/colorful-text";
import { SkillsSection } from "@/components/skills-section";
import { ThemeToggle } from "@/components/theme-toggle";
import Logo from "@/components/logo";

const dancingScript = Dancing_Script({
  subsets: ["latin"],
  variable: "--font-dancing",
});

// const cedarvilleCursive = Cedarville_Cursive({
//   weight: "400",
//   subsets: ["latin"],
//   variable: "--font-cedarville",
// })

export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const aboutRef = useRef<HTMLDivElement>(null);
  const experienceRef = useRef<HTMLDivElement>(null);
  const SkillsRef = useRef<HTMLDivElement>(null);
  const workRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  const menuItems = [
    { label: "About", ref: aboutRef },
    { label: "Experience", ref: experienceRef },
    { label: "Skills", ref: SkillsRef },
    { label: "Work", ref: workRef },
    { label: "Contact", ref: contactRef },
  ]

  return (
    <div className={`min-h-screen bg-background ${dancingScript.variable}`}>
      <div className="fixed inset-0 bg-gradient-radial from-rose-100/30 via-background to-background dark:from-rose-950/30 -z-10" />
      <header className="fixed top-0 z-50 w-full border-b bg-background/80 backdrop-blur-sm">
        <nav className="container flex h-16 items-center justify-between">
          <Logo />
          <div className="hidden md:flex items-center gap-6">
            {menuItems.map((item) => (
              <button
                key={item.label}
                onClick={() => item.ref.current?.scrollIntoView({ behavior: "smooth" })}
                className="nav-item text-sm font-medium text-muted-foreground transition-all duration-300 ease-in-out hover:text-primary hover:font-cedarville px-3 py-1"
                onMouseEnter={(e) => (e.currentTarget.style.fontFamily = "'Cedarville Cursive', cursive")}
                onMouseLeave={(e) => (e.currentTarget.style.fontFamily = "Arial, sans-serif")}
              >
                {item.label}
              </button>
            ))}
            <ThemeToggle />
          </div>
          <div className="md:hidden">
            <button onClick={toggleMenu} className="p-2">
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </nav>
        {isMenuOpen && (
          <div className="md:hidden bg-background border-t">
            {menuItems.map((item) => (
              <button
                key={item.label}
                onClick={() => {
                  item.ref.current?.scrollIntoView({ behavior: "smooth" })
                  setIsMenuOpen(false)
                }}
                className="block w-full text-left px-4 py-2 text-sm font-medium text-muted-foreground hover:bg-muted"
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

      <main className="container pt-24">
        <section ref={aboutRef} className="py-10">
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex flex-col justify-center space-y-4 lg:pl-10 sm:pl-0 "
            >
              <div className="space-y-2">
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
                  <span className="inline-flex">Hi, I'm </span>
                  <ColorfulText text=" Heral Kumar" />
                </h1>
                <p className="text-muted-foreground md:text-xl tracking-wider">
                Math major by degree, designer at heart. I love creating clean, intuitive experiences that make users think, "This makes so much sense!”
                </p>
              </div>
              <div className="space-y-2 text-muted-foreground tracking-wider">
                <p>
                I’m all about smart UX, sleek interfaces, and the little details that make a big difference. Also, I have a slight obsession with cheesecake and beautifully designed websites.
                </p>
                <p>
                  Let's build something users will love.✨
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
                  className="rounded-full border border-rose-200 bg-transparent p-2 text-blue-500 transition-colors hover:border-rose-300 hover:from-rose-100 hover:to-rose-200"
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
              onMouseLeave={(e) =>
                (e.currentTarget.style.fontFamily = "Arial, sans-serif")
              }
            >
              Experience
            </h2>
            <p className="text-muted-foreground">
              A timeline of my professional journey.
            </p>
          </motion.div>
          <Timeline
            data={[
              {
                year: "2024 - Present",
                title: "Senior Orientation Leader",
                company: "University of British Columbia",
                content: (
                  <p>
                    Leading and mentoring a team of 10+ orientation leaders,
                    ensuring the success of 5+ major university events.
                    Organized a Transfer Student Social Meet with 100+
                    attendees, achieving a 93% positive feedback rate. Enhanced
                    team collaboration and inclusivity, driving a 19% increase
                    in event participation compared to previous years.
                  </p>
                ),
                image1: "/SeniorOL1.jpg",
                image2: "/SeniorOL2.jpg",
              },
              {
                year: "2024",
                title: "Coding and Robotics Tutor",
                company: "Wize Computing Academy",
                content: (
                  <p>
                    Taught 10+ students aged 10–12 using Python and LEGO
                    Education SPIKE Prime kits for hands-on coding and robotics
                    projects. Sent regular individual progress reports to
                    parents, fostering transparency and tracking improvements.
                    Cultivated problem-solving and critical-thinking skills,
                    enhancing students’ confidence in technology and coding.
                  </p>
                ),
                image1: "/Wize_Academy3.jpg",
                image2: "/Wize_Academy2.jpg",
              },
              {
                year: "2023 - 2023",
                title: "Orientation Leader",
                company: "University of British Columbia",
                content: (
                  <p>
                    Led orientation groups of 15+ high school students,
                    fostering a welcoming and inclusive community. Organized
                    engaging activities that boosted student satisfaction by
                    57%. Collaborated with peers and staff to deliver seamless
                    events, strengthening communication and teamwork skills.
                  </p>
                ),
                image1: "/OL1.jpg",
                image2: "/OL2.jpg",
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
              //onMouseEnter={(e) => (e.currentTarget.style.fontFamily = "'Cedarville Cursive', cursive")}
              //onMouseLeave={(e) => (e.currentTarget.style.fontFamily = "Arial, sans-serif")}
            >
              Selected Projects
            </h2>
            <p className="text-muted-foreground">
              A collection of projects I've worked on.
            </p>
          </motion.div>
          <div className="mt-8">
            <CaseStudyList
              cases={[
                {
                  title: "Seelie – Banking the GenZ Way",
                  description:
                    "A user-centric financial management app tailored for Gen Z, providing interactive tools for expense tracking, savings visualization, and financial literacy.",
                  image: "/seelie.png",
                  challenge:
                    "Many young users struggle with understanding financial concepts, leading to poor money management habits.",
                  challengeImage: "/Seelie_challenge.jpg",
                  solution: "",
                  solutionImage: "/placeholder.svg",
                  result:
                    "Improved financial awareness among users through a combination of data-driven insights and engaging educational content.",
                  resultImage: "/Seelie_result.jpg",
                  beforeImage: "",
                  afterImage: "/placeholder.svg",
                  researchImage1: "/Seelie_research1.jpg",
                  researchImage2: "/Seelie_research2.jpg",
                  researchDescription:
                    "Conducted user research with surveys and interviews to identify key pain points. Designed an interactive prototype in Figma with financial tools such as expense categorization, savings tracking, and financial literacy videos.",
                  tags: [
                    "UX Design",
                    "Financial Literacy",
                    "Figma",
                    "User Research",
                    "Prototyping",
                    "FinTech",
                  ],
                  link: "https://www.figma.com/proto/JST0SgsTdy6QnmFKtuA3c0/App-Design?node-id=20-9&t=1WSiAQHF0OU7TS85-1&starting-point-node-id=20%3A9",
                },
                {
                  title: "RecoverEase – Lost and Found Management System",
                  description:
                    "A full-stack web application designed to streamline lost-and-found item tracking for university campuses.",
                  image: "/RecoverEase.jpg",
                  challenge:
                    "Traditional lost-and-found systems were inefficient, relying on manual tracking methods that led to frequent delays, misplaced items, and a lack of transparency in the process. University staff struggled to manage high volumes of lost items effectively, and students found it difficult to retrieve their belongings in a timely manner.",
                  challengeImage: "",
                  solution:
                    "Built using Node.js, Express.js, Oracle RDBMS, HTML, CSS, and JavaScript to optimize item management. Implemented complex Oracle SQL queries supporting real-time search, aggregation, and nested grouping for better data handling.",
                  solutionImage: "",
                  result:
                    "RecoverEase significantly improved operational efficiency by automating item categorization and retrieval processes. The real-time search functionality reduced item recovery time by 40%, while automated statistical reporting provided valuable insights into lost-and-found trends. Users reported a smoother experience, reducing frustration and increasing satisfaction with the system.",
                  resultImage: "",
                  beforeImage: "",
                  afterImage: "/placeholder.svg",
                  researchImage1: "",
                  researchImage2: "",
                  researchDescription: "",
                  tags: [
                    "Node.js",
                    "Express.js",
                    "JavaScript",
                    "Oracle RDBMS",
                    "SQL",
                    "Full-Stack Development",
                    "Web Development",
                  ],
                  link: "https://github.com/heralk21/RecoverEase",
                },
                {
                  title: "Predicting Risk of a Heart Attack",
                  description:
                    "A machine learning model designed to predict heart attack risk based on large health datasets.",
                  image: "/HeartRisk.jpg",
                  challenge:
                    "Heart disease remains one of the leading causes of death worldwide, yet early risk detection is often challenging due to the complexity of medical data. Healthcare providers needed an efficient, data-driven approach to analyze large volumes of patient records, identify high-risk individuals, and provide timely interventions. Traditional diagnostic methods were time-consuming and sometimes lacked predictive accuracy.",
                  challengeImage: "",
                  solution:
                    "Developed a predictive model in R with 77% accuracy, processing and normalizing 10,000+ rows of health data. Utilized tidyverse, tidymodels, and ggplot2 for data analysis and visualization, incorporating feature engineering and exploratory data analysis (EDA) to enhance predictive performance.",
                  solutionImage: "",
                  result:
                    "The model successfully provided healthcare professionals with actionable insights, allowing for early intervention and better patient care. By identifying key risk factors, the system helped prioritize high-risk individuals, improving efficiency in heart disease prevention strategies. Visualizations generated from the data allowed for easier interpretation and understanding, making the insights more accessible to medical professionals.",
                  resultImage: "",
                  beforeImage: "",
                  afterImage: "/placeholder.svg",
                  researchImage1: "",
                  researchImage2: "",
                  researchDescription: "",
                  tags: [
                    "R",
                    "Machine Learning",
                    "Data Science",
                    "Predictive Analytics",
                    "Healthcare",
                    "Data Visualization",
                  ],
                  link: "https://github.com/heralk21/Heart-Attack-Risk-Predictor---DSCI-Project",
                },
              ]}
            />
          </div>
        </section>

        <section ref={contactRef} className="relative py-24 lg:py-32">
          <div className="absolute inset-0" />
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
                //onMouseEnter={(e) => (e.currentTarget.style.fontFamily = "'Cedarville Cursive', cursive")}
                //onMouseLeave={(e) => (e.currentTarget.style.fontFamily = "Arial, sans-serif")}
              >
                Let's Connect
              </h2>
              <p className="text-muted-foreground">
                Have a project in mind? Let's discuss it.
              </p>
            </div>
            <div className="rounded-2xl border bg-card/50 p-6 backdrop-blur-sm">
              <form
                action="https://formspree.io/f/xeoedypk"
                method="POST"
                className="space-y-4"
              >
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" name="name" placeholder="Enter your name" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    placeholder="Enter your email"
                    type="email"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    className="min-h-[100px]"
                    id="message"
                    name="message"
                    placeholder="Enter your message"
                  />
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
  );
}
