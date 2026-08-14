/* eslint-disable @typescript-eslint/no-explicit-any */
import ClaripScript from '@/components/ClaripScript'
import '@/styles/index.scss'

// export const dynamic = 'force-dynamic'
// export const fetchCache = 'force-no-store'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="msapplication-TileColor" content="#4e9b36" />
        <meta name="theme-color" content="#ffffff" />
        <ClaripScript />
      </head>
      <body>{children}</body>
    </html>
  )
}
