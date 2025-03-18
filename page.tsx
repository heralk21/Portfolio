"use client";

import { useState, useRef, useEffect, useCallback, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Image from "next/image";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Menu, X } from "lucide-react";
import { SiDevpost, SiGithub, SiLinkedin, SiGmail } from "react-icons/si";
import { Devpost } from "@/components/icons/devpost";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
// import { CaseStudyList } from "@/components/case-study";
import { Dancing_Script } from "next/font/google";
import { Timeline } from "./timeline";
// import ColorfulText from "@/components/colorful-text";
// import { SkillsSection } from "@/components/skills-section";
// import { ThemeToggle } from "@/components/theme-toggle";
// import Logo from "@/components/logo";
import Link from "next/link";
import { projects } from "./lib/projects";
import Logo from "./app/components/shared/site-logo";
import { ThemeToggle } from "./app/components/shared/theme-switcher";
import ColorfulText from "./app/components/shared/gradient-text";
import { SkillsSection } from "./app/components/sections/skills-grid";


const dancingScript = Dancing_Script({
  subsets: ["latin"],
  variable: "--font-dancing",
});

// const cedarvilleCursive = Cedarville_Cursive({
//   weight: "400",
//   subsets: ["latin"],
//   variable: "--font-cedarville",
// })

// Client-side component that safely uses useSearchParams
function ClientSideNavigation({ 
  menuItems, 
  setIsScrolling, 
  setActiveSection,
  updateURL
}: { 
  menuItems: any[],
  setIsScrolling: (value: boolean) => void,
  setActiveSection: (value: string) => void,
  updateURL: (path: string) => void
}) {
  const searchParams = useSearchParams();
  
  // Handle initial section scroll from URL
  useEffect(() => {
    const section = searchParams?.get('section');
    if (section) {
      const menuItem = menuItems.find(item => item.path === section);
      if (menuItem?.ref.current) {
        setIsScrolling(true);
        menuItem.ref.current.scrollIntoView({ behavior: "smooth" });
        setActiveSection(section);
        setTimeout(() => setIsScrolling(false), 1000);
      }
    }
  }, [searchParams, menuItems, setActiveSection, setIsScrolling]);
  
  return null;
}

export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [isScrolling, setIsScrolling] = useState(false);
  const router = useRouter();
  const aboutRef = useRef<HTMLDivElement>(null);
  const experienceRef = useRef<HTMLDivElement>(null);
  const SkillsRef = useRef<HTMLDivElement>(null);
  const workRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);
  const scrollTimeout = useRef<NodeJS.Timeout>();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const menuItems = [
    { label: "About", ref: aboutRef, path: "about" },
    { label: "Experience", ref: experienceRef, path: "experience" },
    { label: "Skills", ref: SkillsRef, path: "skills" },
    { label: "Work", ref: workRef, path: "work" },
    { label: "Contact", ref: contactRef, path: "contact" },
  ];

  // Debounced URL update
  const updateURL = useCallback((path: string) => {
    if (scrollTimeout.current) {
      clearTimeout(scrollTimeout.current);
    }
    scrollTimeout.current = setTimeout(() => {
      router.push(`?section=${path}`, { scroll: false });
    }, 100);
  }, [router]);

  // Optimized Intersection Observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (isScrolling) return;

        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio > 0.1) {
            const section = menuItems.find(
              (item) => item.ref.current === entry.target
            );
            if (section && activeSection !== section.path) {
              setActiveSection(section.path);
              updateURL(section.path);
            }
          }
        });
      },
      {
        rootMargin: "-10% 0px",
        threshold: [0.1, 0.5],
      }
    );

    menuItems.forEach((item) => {
      if (item.ref.current) {
        observer.observe(item.ref.current);
      }
    });

    return () => {
      if (scrollTimeout.current) {
        clearTimeout(scrollTimeout.current);
      }
      observer.disconnect();
    };
  }, [activeSection, isScrolling, updateURL]);

  const handleNavigation = (item: typeof menuItems[0]) => {
    if (item.ref.current) {
      setIsScrolling(true);
      setActiveSection(item.path);
      updateURL(item.path);
      item.ref.current.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
      setTimeout(() => setIsScrolling(false), 1000);
    }
  };

  // Update the button className to show active state
  const getButtonClassName = (path: string) => `
    nav-item text-sm font-medium transition-all duration-300 ease-in-out px-3 py-1
    ${activeSection === path 
      ? "text-primary font-semibold dark:text-rose-500" 
      : "text-muted-foreground hover:text-primary/70 dark:hover:text-rose-500"}
  `;

  return (
    <div className={`min-h-screen bg-background ${dancingScript.variable}`}>
      {/* Wrap the component that uses useSearchParams in Suspense */}
      <Suspense fallback={null}>
        <ClientSideNavigation 
          menuItems={menuItems} 
          setIsScrolling={setIsScrolling} 
          setActiveSection={setActiveSection}
          updateURL={updateURL}
        />
      </Suspense>
      
      <div className="fixed inset-0 bg-gradient-radial from-rose-100/30 via-background to-background dark:from-rose-950/30 -z-10" />
      
      <header className="fixed top-0 z-50 w-full border-b bg-background/80 backdrop-blur-sm">
        <nav className="container flex h-16 items-center justify-between">
          <Logo />
          <div className="hidden md:flex items-center gap-6">
            {menuItems.map((item) => (
              <button
                key={item.label}
                onClick={() => handleNavigation(item)}
                className={getButtonClassName(item.path)}
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
                onClick={() => handleNavigation(item)}
                className={`block w-full text-left px-4 py-2 text-sm font-medium 
                  ${activeSection === item.path 
                    ? "text-primary bg-transparent" 
                    : "text-muted-foreground hover:bg-transparent"}`}
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
                  I'm all about smart UX, sleek interfaces, and the little details that make a big difference. Also, I have a slight obsession with cheesecake and beautifully designed websites.
                </p>
                <p>
                  Let's build something users will love.✨
                </p>
              </div>
              <div className="flex justify-start gap-4">
                <a
                  href="https://devpost.com/Heral"
                  className="clickable rounded-full border border-teal-600 bg-transparent p-2 transition-colors hover:border-[#003E54]"
                >
                  <span className="sr-only">Devpost</span>
                  <SiDevpost className="h-5 w-5 dark:text-white text-[#003E54]"/>
                </a>
                <a
                  href="https://github.com/heralk21"
                  className="clickable rounded-full border border-gray-400 bg-transparent p-2 transition-colors hover:border-gray-500"
                >
                  <span className="sr-only">GitHub</span>
                  <SiGithub className="h-5 w-5" />
                </a>
                <a
                  href="https://www.linkedin.com/in/heral-kumar/"
                  className="clickable rounded-full border border-[#006eac] bg-transparent p-2 transition-colors hover:border-[#00568C]"
                >
                  <span className="sr-only">LinkedIn</span>
                  <SiLinkedin className="h-5 w-5 text-[#006eac] dark:text-white" />
                </a>
                <a
                  href="mailto:heralkumar212@gmail.com"
                  className="clickable rounded-full border border-[#d74f42] bg-transparent p-2 transition-colors hover:border-[#CC332F]"
                >
                  <span className="sr-only">Email</span>
                  <SiGmail className="h-5 w-5 dark:text-white text-[#EA4335]" />
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

        <div ref={experienceRef} className="min-h-screen">
          <section className="py-24 lg:py-32">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="space-y-2 text-center"
            >
              <h2
                className="gradient-text text-3xl font-bold tracking-tighter sm:text-4xl"
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
                  year: "Jan 2025 - Present",
                  title: "Web Designer & Developer",
                  company: "UBC iGem (International Genetically Engineered Machine Foundation)",
                  content: (
                    <p>
                      Designing and developing the 2025 UBC iGEM wiki website, 
                      integrating a Mars-themed UI to communicate cyanobacteria research. 
                      Revamping the UBC iGEM website, enhancing accessibility and UX with Figma, 
                      wireframing, prototyping, and coding. Creating storytelling visuals for 
                      educational outreach, including children's storybooks simplifying 
                      synthetic biology concepts.
                    </p>
                  ),
                  image1: "/ubcigem1.png",
                  image2: "/ubcigem2.png",
                },
                {
                  year: "Apr 2024 - Present",
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
                  year: "Sept 2024 - Dec 2024",
                  title: "Coding and Robotics Tutor",
                  company: "Wize Computing Academy",
                  content: (
                    <p>
                      Taught 10+ students aged 10–12 using Python and LEGO
                      Education SPIKE Prime kits for hands-on coding and robotics
                      projects. Sent regular individual progress reports to
                      parents, fostering transparency and tracking improvements.
                      Cultivated problem-solving and critical-thinking skills,
                      enhancing students' confidence in technology and coding.
                    </p>
                  ),
                  image1: "/Wize_Academy3.jpg",
                  image2: "/Wize_Academy2.jpg",
                },
                {
                  year: "Jun 2023 - Apr 2024",
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
        </div>

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
                className="gradient-text text-3xl font-bold tracking-tighter sm:text-4xl mb-4"
                onMouseLeave={(e) =>
                  (e.currentTarget.style.fontFamily = "Arial, sans-serif")
                }
              >
                Projects
            </h2>
            <p className="text-muted-foreground mx-auto max-w-2xl mb-16 pb-24">
              Here's a collection of my recent work.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {projects.map((project) => (
                <Link
                  key={project.slug}
                  href={`/projects/${project.slug}`}
                  className="group relative block bg-card/50 border border-border rounded-xl overflow-hidden transition-all duration-300"
                >
                  <div 
                    className="absolute -inset-3 rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-700 pointer-events-none z-0"
                    style={{
                      boxShadow: `0 0 40px 15px ${project.promptColor || '#f43f5e'}, 0 0 80px 20px ${project.promptColor || '#f43f5e'}`,
                      filter: `blur(8px)`,
                    }}
                  />
                  <div className="aspect-video relative z-10">
                    <Image src={project.imageUrl || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
                  </div>
                  <div className="p-6 relative z-10">
                    <h2 className="text-xl font-semibold mb-2 text-foreground dark:text-foreground transition-colors duration-300"
                      style={{
                        color: 'inherit',
                        transition: 'color 0.3s ease'
                      }}
                    >
                      <span className="group-hover:text-transparent bg-clip-text bg-gradient-to-r transition-all duration-300"
                        style={{
                          backgroundImage: `linear-gradient(to right, ${project.promptColor || '#f43f5e'}, ${project.promptColor || '#f43f5e'})`,
                        }}
                      >
                        {project.title}
                      </span>
                    </h2>
                    <p className="text-muted-foreground mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span key={tech} className="px-4 py-1.5 bg-gray-100 dark:bg-gray-800 rounded-full text-xs font-medium text-gray-800 dark:text-gray-200">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </motion.div>
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
