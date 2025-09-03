// app/layout.tsx
import { MiniKitContextProvider } from '@/providers/MiniKitProvider';

export const metadata = {
  other: {
    'fc:frame': JSON.stringify({
      type: 'frame',
      name: 'My Mini App',
      url: 'https://nguyen-miniapp.vercel.app/',
      icon: 'https://nguyen-miniapp.vercel.app/icon.png',
      splash: 'https://nguyen-miniapp.vercel.app/splash.png',
      description: 'Short description used for previews',
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