import "./globals.css";
import Footer from "./components/Footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <title>Circular H2O</title>
      <body className="font-neue">
        <div className="p-5 lg:px-10">
        </div>
        {children}
        <Footer />
      </body>
    </html>
  );
}
