'use client'

import { Suspense } from 'react'
import { useSearchParams } from 'next/navigation'

function ViewerContent() {
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

export default function ViewerPage() {
  return (
    <Suspense
      fallback={
        <main className="flex min-h-screen items-center justify-center">
          <p>Loading viewer...</p>
        </main>
      }
    >
      <ViewerContent />
    </Suspense>
  )
}
