import { Inter } from 'next/font/google'
import './globals.css'
import Header from './ui/header/Header'
import Footer from './ui/footer/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Portfolio Website | Muhammad Iqbal',
  description: 'Designed & developed by Muhammad Iqbal',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`bg-primary ${inter.className} max-w-[1440px] mx-auto`}>
        <div className='md:px-8 lg:px-28 flex flex-col lg:flex-row'>
          <div className="basis-5/12 md:basis-full h-screen lg:sticky top-0 pt-12 pb-12 md:pt-20 md:pb-0 lg:pt-24">
            <Header/>
          </div>
          <div className="basis-7/12 md:basis-full">
            {children}
            <Footer/>
          </div>
        </div>
      </body>
    </html>
  )
}
