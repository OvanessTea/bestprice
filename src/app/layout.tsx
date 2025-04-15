"use client"
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import Sidebar from "@/components/sidebar/Sidebar";
import Footer from "@/components/footer/Footer";
import { useState, useEffect } from "react";
import Image from "next/image";
import MobileNavbar from "@/components/navbar/MobileNavbar";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  
  const [windowWidth, setWindowWidth] = useState<number | null>(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const handleResize = () => setWindowWidth(window.innerWidth);

      handleResize();

      window.addEventListener('resize', handleResize);

      return () => window.removeEventListener('resize', handleResize);
    }
  }, []);

  if (windowWidth === null) {
    return <html lang="en">
      <body>
        <div className="w-full h-full flex items-center justify-center">
          <div className="w-10 h-10 bg-gray-200 rounded-full animate-pulse"></div>
        </div>
      </body>
    </html>;
  }

  return (
    <html lang="en">
      <body>
          {windowWidth > 1200 ? <Navbar/> : <button className="go_back_button absolute bg-white rounded-full p-2">
            <Image src={"/arrow_left.svg"} alt="Go back" width={24} height={24}/>
          </button>}
          <div className="content flex flex-1 w-[75%] mx-auto h-full">
            {windowWidth > 1200 && <Sidebar/>}
            <main>{children}</main>
            {windowWidth < 1200 && <Footer/>}
          </div>
          {windowWidth > 1200 && <Footer/>}
          {windowWidth < 1200 && <div className="fixed bottom-0 left-0 right-0 z-50"><MobileNavbar/></div>}
      </body>
    </html>
  );
}
