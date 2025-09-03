'use client'
import { useEffect } from 'react'
import { useMiniKit } from '@coinbase/onchainkit/minikit'

export default function HomePage() {
  const { setFrameReady, isFrameReady } = useMiniKit()

  useEffect(() => {
    if (!isFrameReady) setFrameReady()
  }, [isFrameReady, setFrameReady])

  return <div>Your app content 4</div>
}
