import "/public/css/bootstrap.css"
import "/public/css/animate.min.css"
import "/public/css/odometer.min.css"
import "/public/css/swiper-bundle.min.css"
import "/public/css/styles.css"

import "./globals.css"

import { Theme } from '@radix-ui/themes';


import { Archivo } from 'next/font/google'

const archivo = Archivo({
    weight: ['300', '400', '500', '600', '700', '800', '900'],
    subsets: ['latin'],
    variable: "--font-main",
    display: 'swap',
})

export const metadata = {
  title: 'Caladrius Therapy',
  description: 'Caladrius Therapy',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
          <Theme accentColor="green">
            {children}
          </Theme>
      </body>
    </html>
  );
} 