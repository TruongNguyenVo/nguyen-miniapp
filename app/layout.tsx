// app/layout.tsx
import { MiniKitContextProvider } from '@/providers/MiniKitProvider';

export const metadata = {
  other: {
    'fc:frame': JSON.stringify({
      type: 'frame',
      name: 'My Mini App',
      url: 'https://yourdomain.com',
      icon: 'https://yourdomain.com/icon.png',
      splash: 'https://yourdomain.com/splash.png',
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