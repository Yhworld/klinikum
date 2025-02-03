"use client"; 
import { useLayoutEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { merriweatherSans } from '@/app/ui/fonts';
import "./globals.css";
import Navbar from './ui/Navbar';
import Footer from './ui/Footer';
import ScrollToTopButton from './ui/scroll';


// export const metadata = {
//   title: "Create Next App",
//   description: "Generated by create next app",
// };

export default function RootLayout({ children }) {
  useLayoutEffect(() => {
    // Initialize AOS only on the client
    AOS.init({
      duration: 1000, // Duration of animations
      easing: 'ease-in-out', // Easing of animations
      once: true, // Ensures animations happen only once per element
    });

    return () => {
      // Clean up AOS when the component unmounts
      AOS.refresh();
    };
  }, [])
  return (
    <html lang="en">
      <body
       className={ merriweatherSans.className }
      >
        <Navbar />
        <ScrollToTopButton />
        <main className="flex-1">
            {children}
          </main>
        <Footer />
      </body>
    </html>
  );
}
