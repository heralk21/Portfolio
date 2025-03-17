"use client"

import { useState, useEffect } from "react"
import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, ExternalLink, Github, ChevronRight } from "lucide-react"
import { getProjectBySlug } from "@/lib/projects"
import type { Project } from "../../../lib/types"

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

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const [project, setProject] = useState<Project | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchProject = async () => {
      const projectData = await getProjectBySlug(params.slug)
      if (!projectData) {
        notFound()
      }
      setProject(projectData as Project)
      setLoading(false)
    }

    fetchProject()
  }, [params.slug])

  if (loading) {
    return (
      <div className="min-h-screen bg-[#020817] text-white flex items-center justify-center">
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
      element.scrollIntoView({ behavior: "smooth", block: "start" })
    }
  }

  return (
    <div className="min-h-screen bg-[#020817] text-white">
      {/* Hero Section */}
      <div className="w-full h-[60vh] relative">
        <Image src={project.heroImage || project.imageUrl} alt={project.title} fill className="object-cover" priority />
        <div className="absolute inset-0 bg-black/50 flex items-end">
          <div className="container mx-auto px-4 py-12 max-w-6xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">{project.title}</h1>
            <p className="text-xl md:text-2xl text-gray-200 max-w-2xl">{project.tagline || project.description}</p>
            <div className="flex items-center mt-4 text-sm text-gray-300">
              {project.award && (
                <span className="flex items-center mr-6">
                  <span className="text-yellow-400 mr-2">🏆</span> {project.award}
                </span>
              )}
              {project.timeline && <span className="mr-6">{project.timeline}</span>}
              {project.readTime && <span>{project.readTime} min read</span>}
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_250px] gap-12">
          {/* Main Content */}
          <div>
            {/* Introduction */}
            <section id="introduction" className="mb-20">
              <h2 className="text-3xl font-bold mb-6">Introduction</h2>
              <div className="prose prose-lg prose-invert max-w-none">
                {project.introduction?.split("\n\n").map((paragraph: string, idx: number) => (
                  <p key={idx}>{paragraph}</p>
                ))}
              </div>
            </section>

            {/* Overview */}
            <section id="overview" className="mb-20">
              <h2 className="text-3xl font-bold mb-6">Overview</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                <div>
                  <h3 className="text-xl font-semibold mb-3">Role</h3>
                  <p className="text-gray-300">{project.role || "UI/UX Designer"}</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3">Timeline</h3>
                  <p className="text-gray-300">{project.timeline || "4 weeks"}</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3">Team</h3>
                  <p className="text-gray-300">{project.team || "Solo project"}</p>
                </div>
              </div>
              <div className="prose prose-lg prose-invert max-w-none">
                {project.overview?.split("\n\n").map((paragraph: string, idx: number) => (
                  <p key={idx}>{paragraph}</p>
                ))}
              </div>
            </section>

            {/* Problem Statement */}
            {project.problemStatement && (
              <section id="problem" className="mb-20">
                <h2 className="text-3xl font-bold mb-6">Problem Statement</h2>
                <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-8">
                  <p className="text-xl italic text-gray-300">{project.problemStatement}</p>
                </div>
              </section>
            )}

            {/* Solution */}
            <section id="solution" className="mb-20">
              <h2 className="text-3xl font-bold mb-6">Solution</h2>
              <div className="prose prose-lg prose-invert max-w-none mb-8">
                {project.solution?.split("\n\n").map((paragraph: string, idx: number) => (
                  <p key={idx}>{paragraph}</p>
                ))}
              </div>
              {project.solutionImage && (
                <div className="rounded-xl overflow-hidden my-8">
                  <Image
                    src={project.solutionImage || "/placeholder.svg"}
                    alt="Solution visualization"
                    width={1200}
                    height={800}
                    className="w-full"
                  />
                </div>
              )}
            </section>

            {/* Prototype */}
            <section id="prototype" className="mb-20">
              <h2 className="text-3xl font-bold mb-6">Prototype</h2>
              <div className="prose prose-lg prose-invert max-w-none mb-8">
                <p>Explore the interactive prototype to see the design in action.</p>
              </div>

              {/* Figma Embed */}
              <div className="w-full aspect-[16/9] bg-black rounded-xl overflow-hidden mb-8">
                <iframe
                  className="w-full h-full"
                  src={project.figmaEmbed || "https://www.figma.com/embed?embed_host=share&url=https://www.figma.com/proto/example"}
                  allowFullScreen
                />
              </div>

              {/* Prototype Screenshots */}
              {project.prototypeImages && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
                  {project.prototypeImages.map((image: PrototypeImage, index: number) => (
                    <div key={index} className="rounded-xl overflow-hidden">
                      <Image
                        src={image.src || "/placeholder.svg"}
                        alt={image.alt || `Prototype screenshot ${index + 1}`}
                        width={600}
                        height={400}
                        className="w-full"
                      />
                    </div>
                  ))}
                </div>
              )}
            </section>

            {/* Design Process */}
            <section id="design-process" className="mb-20">
              <h2 className="text-3xl font-bold mb-6">Design Process</h2>
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
                      <div className="rounded-xl overflow-hidden my-6">
                        <Image
                          src={step.image || "/placeholder.svg"}
                          alt={step.title}
                          width={1200}
                          height={800}
                          className="w-full"
                        />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </section>

            {/* Results/Outcome */}
            {project.outcome && (
              <section id="outcome" className="mb-20">
                <h2 className="text-3xl font-bold mb-6">Outcome</h2>
                <div className="prose prose-lg prose-invert max-w-none">
                  {project.outcome.split("\n\n").map((paragraph: string, idx: number) => (
                    <p key={idx}>{paragraph}</p>
                  ))}
                </div>
              </section>
            )}

            {/* Reflection */}
            {project.reflection && (
              <section id="reflection" className="mb-20">
                <h2 className="text-3xl font-bold mb-6">Reflection</h2>
                <div className="prose prose-lg prose-invert max-w-none">
                  {project.reflection.split("\n\n").map((paragraph: string, idx: number) => (
                    <p key={idx}>{paragraph}</p>
                  ))}
                </div>
              </section>
            )}

            {/* Team Shoutout */}
            {project.teamMembers && project.teamMembers.length > 0 && (
              <section id="team" className="mb-20">
                <h2 className="text-3xl font-bold mb-6">Team Shoutout</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {project.teamMembers.map((member: TeamMember, index: number) => (
                    <div key={index} className="bg-gray-900/50 border border-gray-800 rounded-xl p-6">
                      <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                      <p className="text-gray-400 mb-4">{member.role}</p>
                      {member.link && (
                        <a
                          href={member.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-primary hover:underline inline-flex items-center"
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
            <div className="mt-16 pt-8 border-t border-gray-800">
              <Link
                href="/?section=work"
                className="inline-flex items-center text-gray-400 hover:text-white transition-colors mb-8"
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to all projects
              </Link>
            </div>
          </div>

          {/* Table of Contents Sidebar */}
          <div className="hidden lg:block">
            <div className="sticky top-8">
              <div className="bg-gray-900/30 border border-gray-800 rounded-xl p-6">
                <h3 className="text-lg font-semibold mb-4">On This Page</h3>
                <nav className="space-y-2">
                  <a 
                    href="#introduction" 
                    onClick={(e) => handleSmoothScroll(e, "introduction")}
                    className="block text-gray-300 hover:text-white py-1"
                  >
                    Introduction
                  </a>
                  <a 
                    href="#overview" 
                    onClick={(e) => handleSmoothScroll(e, "overview")}
                    className="block text-gray-300 hover:text-white py-1"
                  >
                    Overview
                  </a>
                  {project.problemStatement && (
                    <a 
                      href="#problem" 
                      onClick={(e) => handleSmoothScroll(e, "problem")}
                      className="block text-gray-300 hover:text-white py-1"
                    >
                      Problem Statement
                    </a>
                  )}
                  <a 
                    href="#solution" 
                    onClick={(e) => handleSmoothScroll(e, "solution")}
                    className="block text-gray-300 hover:text-white py-1"
                  >
                    Solution
                  </a>
                  <a 
                    href="#prototype" 
                    onClick={(e) => handleSmoothScroll(e, "prototype")}
                    className="block text-gray-300 hover:text-white py-1"
                  >
                    Prototype
                  </a>
                  <a 
                    href="#design-process" 
                    onClick={(e) => handleSmoothScroll(e, "design-process")}
                    className="block text-gray-300 hover:text-white py-1"
                  >
                    Design Process
                  </a>
                  {project.outcome && (
                    <a 
                      href="#outcome" 
                      onClick={(e) => handleSmoothScroll(e, "outcome")}
                      className="block text-gray-300 hover:text-white py-1"
                    >
                      Outcome
                    </a>
                  )}
                  {project.reflection && (
                    <a 
                      href="#reflection" 
                      onClick={(e) => handleSmoothScroll(e, "reflection")}
                      className="block text-gray-300 hover:text-white py-1"
                    >
                      Reflection
                    </a>
                  )}
                  {project.teamMembers && project.teamMembers.length > 0 && (
                    <a 
                      href="#team" 
                      onClick={(e) => handleSmoothScroll(e, "team")}
                      className="block text-gray-300 hover:text-white py-1"
                    >
                      Team Shoutout
                    </a>
                  )}
                </nav>
              </div>

              <div className="mt-6 bg-gray-900/30 border border-gray-800 rounded-xl p-6">
                <h3 className="text-lg font-semibold mb-4">Technologies</h3>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech: string) => (
                    <span key={tech} className="px-3 py-1 bg-gray-800 rounded-full text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {(project.liveUrl || project.githubUrl) && (
                <div className="mt-6 bg-gray-900/30 border border-gray-800 rounded-xl p-6">
                  <h3 className="text-lg font-semibold mb-4">Links</h3>
                  <div className="space-y-3">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-gray-300 hover:text-white transition-colors"
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
                        className="flex items-center text-gray-300 hover:text-white transition-colors"
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
    </div>
  )
}

