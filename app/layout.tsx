// app/layout.tsx
import { MiniKitContextProvider } from '@/providers/MiniKitProvider';

export const metadata = {
  other: {
    'fc:frame': JSON.stringify({
      name: process.env.NEXT_PUBLIC_ONCHAINKIT_PROJECT_NAME,
      url: process.env.NEXT_PUBLIC_URL,
      icon: process.env.NEXT_PUBLIC_APP_ICON,
      splash: process.env.NEXT_PUBLIC_APP_HERO_IMAGE,
      description: process.env.NEXT_PUBLIC_APP_DESCRIPTION,
    }),
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <MiniKitContextProvider>
          {children}
        </MiniKitContextProvider>
      </body>
    </html>
  );
}