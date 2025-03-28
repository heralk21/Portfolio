'use server'

import { getProjectBySlug } from '@/lib/projects'

export async function getProjectData(slug: string) {
  const project = getProjectBySlug(slug)
  if (!project) return null
  return project
} 