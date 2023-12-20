import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Provider } from '@/components/Provider'
import { Toaster } from '@/components/ui/toaster'
import Navbar from '@/components/Navbar'
import Footer from "./index/footer/page";

import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Fitnex App',
  description: 'Training app for fitness enthusiasts',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Provider>
          <Navbar />
          {children}
          <Toaster />
        </Provider>
        <Footer />

        <Footer />
      </body>
    </html>
  )
}
