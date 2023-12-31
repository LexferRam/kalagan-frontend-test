import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import ResponsiveAppBar from './components/Navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Podcaster',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ResponsiveAppBar />
        <div style={{ marginTop: 75 }}>
          {children}
        </div>
      </body>
    </html>
  )
}
