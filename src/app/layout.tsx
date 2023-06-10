import '~/styles/globals.scss'
import { Inter } from 'next/font/google'
import Head from 'next/head';
import clsx from 'clsx';
import NavBar from '~/components/NavBar';

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="/images/logo-qrcode.jpg" />
      </Head>
      <body className={clsx(inter.className)}>
        <NavBar />
        <div className='flex min-h-screen flex-col items-center justify-between pt-20'>
          {children}
        </div>
      </body>
    </html>
  )
}
