import Header from '@/components/Header/Header'
import './globals.css'
import { ContextApi } from '@/components/Context/Context'


export const metadata = {
  title: 'HOTFLIX',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <ContextApi>
      <html lang="en">
        <body>
          <Header />
          <main>
            {children}
          </main>
        </body>
      </html>
    </ContextApi>
  )
}
