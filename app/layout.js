import '@styles/globals.css'
import Navbar from '@components/Navbar'

export const metadata = {
  title: 'Bioreactor dashboard',
  description: 'BioreactorDashboard powered by Next.js',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
    <body>
    <Navbar />
      <div>
        {children}
      </div>

    </body>
    </html>
  )
}