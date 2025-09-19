import { Inter } from 'next/font/google'
import './globals.css' // your global styles

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
})


export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        
        {children}
<div id="portal-root"></div>
      </body>
    </html>
  );
}




  
