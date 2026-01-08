import { type Metadata } from 'next'
import Image from 'next/image'

import { Card } from '@/components/Card'
import { SimpleLayout } from '@/components/SimpleLayout'

import logoPrimalKitchen from '@/images/logos/primal-kitchen.svg'
import logoPlugTech from '@/images/logos/plug-tech.svg'
import logoMiarepa from '@/images/logos/miarepa.svg'
import logoCanovation from '@/images/logos/canovation.svg'
import logoBoise from '@/images/logos/boise.svg'

const projects = [
  {
    name: 'Primal Kitchen',
    description: 'Primal Kitchen sees 40% revenue lift with site redesign.',
    link: {
      href: 'https://www.primalkitchen.com/',
      label: 'primalkitchen.com',
    },
    logo: logoPrimalKitchen,
  },
  {
    name: 'Plug Tech',
    description: 'Plug Tech sees 27% revenue lift with site redesign.',
    link: { href: 'https://www.plug.tech/', label: 'plug.tech' },
    logo: logoPlugTech,
  },
  {
    name: 'Design System',
    description:
      'Design System for E-commerce and Marketing Websites built with React and Tailwind CSS.',
    link: {
      href: 'https://component-library-khaki.vercel.app/?path=/docs/primitives-button--docs',
      label: 'miarepa.design',
    },
    logo: logoMiarepa,
  },
  {
    name: 'Canovation AR',
    description:
      'An interactive AR experience for Canovation that brings their innovative can design to life.',
    link: { href: '#', label: 'github.com' },
    logo: logoCanovation,
  },
  {
    name: 'Campaign for Boise State University',
    description:
      'High-performing site that makes content updates easy for a non-technical team.',
    link: {
      href: 'https://live-campaign-boise-state-university.pantheonsite.io/',
      label: 'campaign-boise-state-university.com',
    },
    logo: logoBoise,
  },
]

function LinkIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        d="M15.712 11.823a.75.75 0 1 0 1.06 1.06l-1.06-1.06Zm-4.95 1.768a.75.75 0 0 0 1.06-1.06l-1.06 1.06Zm-2.475-1.414a.75.75 0 1 0-1.06-1.06l1.06 1.06Zm4.95-1.768a.75.75 0 1 0-1.06 1.06l1.06-1.06Zm3.359.53-.884.884 1.06 1.06.885-.883-1.061-1.06Zm-4.95-2.12 1.414-1.415L12 6.344l-1.415 1.413 1.061 1.061Zm0 3.535a2.5 2.5 0 0 1 0-3.536l-1.06-1.06a4 4 0 0 0 0 5.656l1.06-1.06Zm4.95-4.95a2.5 2.5 0 0 1 0 3.535L17.656 12a4 4 0 0 0 0-5.657l-1.06 1.06Zm1.06-1.06a4 4 0 0 0-5.656 0l1.06 1.06a2.5 2.5 0 0 1 3.536 0l1.06-1.06Zm-7.07 7.07.176.177 1.06-1.06-.176-.177-1.06 1.06Zm-3.183-.353.884-.884-1.06-1.06-.884.883 1.06 1.06Zm4.95 2.121-1.414 1.414 1.06 1.06 1.415-1.413-1.06-1.061Zm0-3.536a2.5 2.5 0 0 1 0 3.536l1.06 1.06a4 4 0 0 0 0-5.656l-1.06 1.06Zm-4.95 4.95a2.5 2.5 0 0 1 0-3.535L6.344 12a4 4 0 0 0 0 5.656l1.06-1.06Zm-1.06 1.06a4 4 0 0 0 5.657 0l-1.061-1.06a2.5 2.5 0 0 1-3.535 0l-1.061 1.06Zm7.07-7.07-.176-.177-1.06 1.06.176.178 1.06-1.061Z"
        fill="currentColor"
      />
    </svg>
  )
}

export const metadata: Metadata = {
  title: 'Projects',
  description: 'Things I’ve built that actually shipped and moved the needle.',
}

export default function Projects() {
  return (
    <SimpleLayout
      title={
        <>
          <span className="relative z-1">
            Things I’ve built that actually shipped and{' '}
          </span>
          <span className="relative inline-block before:absolute before:-inset-1 before:block before:-skew-y-2 before:bg-emerald-500 dark:before:bg-emerald-400">
            <span className="relative text-white dark:text-gray-950">
              moved the needle.
            </span>
          </span>
        </>
      }
      intro="These are projects I’ve worked on that shipped to real users and delivered measurable results. They reflect how I collaborate with teams, balance design and engineering, and focus on building things that matter."
    >
      <ul
        role="list"
        className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3"
      >
        {projects.map((project) => (
          <Card as="li" key={project.name}>
            <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-md ring-1 shadow-zinc-800/5 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
              <Image
                src={project.logo}
                alt=""
                className="h-8 w-8"
                unoptimized
              />
            </div>
            <h2 className="mt-6 text-base font-semibold text-zinc-800 dark:text-zinc-100">
              <Card.Link href={project.link.href} target="_blank">
                {project.name}
              </Card.Link>
            </h2>
            <Card.Description>{project.description}</Card.Description>
            <p className="relative z-10 mt-6 flex text-sm font-medium text-zinc-400 transition group-hover:text-teal-500 dark:text-zinc-200">
              <LinkIcon className="h-6 w-6 flex-none" />
              <span className="ml-2">{project.link.label}</span>
            </p>
          </Card>
        ))}
      </ul>
    </SimpleLayout>
  )
}
