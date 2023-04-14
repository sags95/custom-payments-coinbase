
import Navbar from '@/components/navbar'
import './globals.css';
import Footer from '@/components/footer';
import { CartProvider } from '@/utils/cartContext';


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head />
      <body>
        <CartProvider>
          <Navbar />
          {children}
          <Footer />
        </CartProvider>
      </body>
    </html>
  )
}
