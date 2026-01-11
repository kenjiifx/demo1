import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Fresh Coffee - Made Daily',
  description: 'Visit Fresh Coffee for the best espresso in town',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
