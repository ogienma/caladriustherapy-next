'use client';

import { ThemeProvider } from 'next-themes';
import { Theme } from '@radix-ui/themes';
import '@radix-ui/themes/styles.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Theme>
            {children}
          </Theme>
        </ThemeProvider>
      </body>
    </html>
  );
} 