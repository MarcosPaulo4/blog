import { Blinker } from 'next/font/google'

const blinker = Blinker({
  weight: ['300', '400', '600'],
  subsets: ['latin'],
})

export const metadata = {
  title: 'Blog',
  description: 'Study Axios Blog',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <body className={blinker.className}>{children}</body>
    </html>
  )
}
