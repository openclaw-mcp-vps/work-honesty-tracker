import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Work Honesty Tracker — Anonymous Workplace Productivity Reality Check',
  description: 'Anonymous platform where developers can honestly report actual work hours vs claimed hours to benchmark productivity for engineering managers and HR departments.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="8b9bbeee-da59-49ea-a616-edc7abf82365"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] min-h-screen">
        {children}
      </body>
    </html>
  )
}
