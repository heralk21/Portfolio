import { getAllProjectSlugs } from "@/lib/projects"

export function generateStaticParams() {
  const slugs = getAllProjectSlugs()
  return slugs.map((slug) => ({ slug }))
}

export default function ProjectLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
} 