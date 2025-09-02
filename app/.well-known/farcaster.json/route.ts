import { NextResponse } from 'next/server'

export async function GET() {
  const data = {
    accountAssociation: {
      header: process.env.FARCASTER_HEADER,
      payload: process.env.FARCASTER_PAYLOAD,
      signature: process.env.FARCASTER_SIGNATURE,
    },
    frame: {
      name: process.env.NEXT_PUBLIC_ONCHAINKIT_PROJECT_NAME,
      url: process.env.NEXT_PUBLIC_URL,
      icon: process.env.NEXT_PUBLIC_APP_ICON,
      hero_image: process.env.NEXT_PUBLIC_APP_HERO_IMAGE,
      description: process.env.NEXT_PUBLIC_APP_DESCRIPTION,
    },
  }

  return NextResponse.json(data, { status: 200 })
}
