'use client'

import { useSearchParams } from 'next/navigation'

export default function ViewerPage() {
  const searchParams = useSearchParams()
  const src = searchParams.get('src')

  if (!src) {
    return (
      <main className="flex min-h-screen items-center justify-center">
        <p>No image provided</p>
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-neutral-950">
      <img src={src} alt="Design preview" className="block h-auto w-full" />
    </main>
  )
}
