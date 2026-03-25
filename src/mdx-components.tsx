import type { MDXComponents } from 'mdx/types'
import ArrowLink from '@/components/ArrowLink'
import ProjectBlock, { ProjectImage } from '@/components/ProjectBlock'

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
    ArrowLink,
    ProjectBlock,
    ProjectImage,
  }
}
