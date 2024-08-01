import Navbar from "@/components/Navbar"
import "@/styles/global.css"
import {Inter as Fontsans} from 'next/font/google'
import { cn } from "@/lib/utils"
import { ThemeProvider } from "@/components/theme-provider"

const fontSans=Fontsans({
  subsets:["latin"],
  variable:"--font-sans",
})

export const metadata = {
  title: 'Next.js',
  description: 'Generated by Next.js',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head/>
      <body className={cn("min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
        <Navbar/>
        {children}
        </ThemeProvider>
        </body>
    </html>
  )
}
