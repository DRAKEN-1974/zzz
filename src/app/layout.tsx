import Navbar from './components/Navbar';
import footer from './components/footer';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <footer />
      </body>
      
    </html>
  );
}