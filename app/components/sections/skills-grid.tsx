"use client"

import { motion } from "framer-motion"
import { Palette, Code2, Figma, Layers, Users2, Lightbulb, Blocks, LineChart, Workflow, Laptop } from "lucide-react"

const skillCategories = [
  {
    title: "UI Design",
    icon: <Palette className="h-full w-full text-rose-500" />,
    href: "#ui-design",
  },
  {
    title: "Prototyping",
    icon: <Figma className="h-full w-full text-purple-500" />,
    href: "#prototyping",
  },
  {
    title: "Responsive Design",
    icon: <Laptop className="h-full w-full text-orange-500" />,
    href: "#responsive",
  },
  {
    title: "Frontend Dev",
    icon: <Code2 className="h-full w-full text-teal-500" />,
    href: "#frontend",
  },
  
  //{
  //  title: "Design Systems",
  //  icon: <Layers className="h-full w-full text-blue-500" />,
  //  href: "#design-systems",
  //},
  {
    title: "User Research",
    icon: <Users2 className="h-full w-full text-amber-500" />,
    href: "#research",
  },
  //{
  //  title: "UX Strategy",
  //  icon: <Lightbulb className="h-full w-full text-green-500" />,
  //  href: "#strategy",
  //},
  //{
  //  title: "Information Architecture",
  //  icon: <Blocks className="h-full w-full text-indigo-500" />,
  //  href: "#ia",
  //},
  //{
  //  title: "Analytics",
  //  icon: <LineChart className="h-full w-full text-red-500" />,
  //  href: "#analytics",
  //},
  //{
  //  title: "Design Ops",
  //  icon: <Workflow className="h-full w-full text-cyan-500" />,
  //  href: "#design-ops",
  //},
  
]

export function SkillsSection() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="space-y-2 text-center"
      >
        <h2 className="gradient-text text-3xl font-bold tracking-tighter sm:text-4xl"
        onMouseLeave={(e) => e.currentTarget.style.fontFamily = 'Arial, sans-serif'}>Skills & Tools</h2>
        <p className="text-muted-foreground">My toolkit, focusing on digital design.</p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="mt-8"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3 ">
            {skillCategories.map((category) => (
              <div
                key={category.title}
                id={category.href.slice(1)}
                className="rounded-2xl border bg-gradient-to-br from-rose-50 to-teal-50 p-6 dark:from-rose-600/50 dark:to-blue-800/50"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-transparent">
                  {category.icon}
                </div>
                <h3 className="font-medium text-xl gradient-text">{category.title}</h3>
                <SkillDescription category={category.title} />
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  )
}

function SkillDescription({ category }: { category: string }) {
  const descriptions: Record<string, { text: string; skills: string[] }> = {
    "UI Design": {
      text: "I turn pixels into party invites 💌",
      skills: ["Color Theory", "Typography", "Visual Hierarchy", "Micro-interactions"],
    },
    Prototyping: {
      text: "I make ideas groove with interactive magic 🪄",
      skills: ["Figma", "User Testing", "Multiple Iterations"],
    },
    "User Research": {
      text: "I get the real scoop from users 🍨, to what out what they are looking for 👀",
      skills: ["User Interviews","Surveys", "Personas"],
    },
    "Frontend Dev": {
      text: "I turn caffeine into pixel-perfect mischief on the web ☕️",
      skills: ["React", "Tailwind CSS", "Next.js"],
    },
    
    "Design Systems": {
      text: "Developing and maintaining scalable design systems that ensure consistency across products.",
      skills: ["Component Libraries", "Documentation", "Style Guides", "Design Tokens", "Version Control"],
    },
    
    "UX Strategy": {
      text: "Developing strategic approaches to solve complex design challenges and achieve business goals.",
      skills: ["Product Strategy", "User Journeys", "Competitive Analysis", "KPI Definition", "Roadmapping"],
    },
    "Information Architecture": {
      text: "Organizing and structuring content to create intuitive navigation and user flows.",
      skills: ["Site Mapping", "User Flows", "Content Strategy", "Navigation Design", "Taxonomy"],
    },
    Analytics: {
      text: "Using data to measure success, identify opportunities, and make informed design decisions.",
      skills: ["Google Analytics", "Heat Maps", "A/B Testing", "User Metrics", "Performance Tracking"],
    },
    "Design Ops": {
      text: "Streamlining design processes and workflows to improve team efficiency and output quality.",
      skills: ["Process Optimization", "Tool Management", "Resource Planning", "Quality Assurance", "Collaboration"],
    },
    "Responsive Design": {
      text: "I build sites that even Grandma’s phone loves 👵🏻 📲",
      skills: ["A11y", "Friendly","Inclusive"],
    },
  }

  const { text, skills } = descriptions[category]

  return (
    <div className="mt-2 space-y-4">
      <p className="text-sm text-muted-foreground">{text}</p>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <span
            key={skill}
            className="inline-flex items-center rounded-full bg-gray-200 px-2.5 py-0.5 text-xs font-medium text-black shadow-sm dark:bg-white-300/0 dark:text-black-300"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  )
}

