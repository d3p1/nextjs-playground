/**
 * @description Layout
 * @author      C. M. de Picciotto <d3p1@d3p1.dev> (https://d3p1.dev/)
 */
import React from 'react'
import type {Metadata} from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Next.js | Playground',
  description: 'A playground for Next.js',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="w-screen h-screen bg-neutral-950 text-white grid place-items-center">
        {children}
      </body>
    </html>
  )
}
