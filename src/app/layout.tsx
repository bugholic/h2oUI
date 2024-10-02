import "./globals.css";
import Navbar from './components/Navbar'
import Header from './components/Header'
import Footer from './components/Footer'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <title>Circular H2O</title>
      <body>
      <Header />
      <main className="p-5 lg:px-10"> 
      <Navbar />
        {children}
        <Footer />
      </main>
        </body>
    </html>
  );
}
