"use client"

import "./globals.css";
import { usePathname } from "next/navigation";
import NavBar from "./navbar/page";

export default function RootLayout({ children }) {
  // This ensures the NavBar will persist only in the specifies paths
  const pathname = usePathname();
  const showNavBar = ["/home", "/about", "/contact", "/form"].includes(pathname);
  
  return (
    <html lang="en">
      <body style={{ paddingTop: "64px" }}>
        {showNavBar && <NavBar />}
        {children}
      </body>
    </html>
  );
}
