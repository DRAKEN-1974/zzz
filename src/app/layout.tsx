import Navbar from './components/Navbar';
import Footer from './components/footer'; // Capitalized Footer component

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer /> {/* Correctly capitalized */}
      </body>
    </html>
  );
}
