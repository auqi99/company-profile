
"use client";
import { ReactNode } from "react";
import Navbar from "@/components/Navbar";
import { Inter } from "next/font/google";
import "../globals.css"; 
import CustomChakraProvider from "../providers/ChakraProvider";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "700"], 
});

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Company profile website with Next.js, TypeScript, Axios, and Chakra UI"
        />
      </head>
      <body className={inter.className}>
        <CustomChakraProvider>
          <Navbar />
          {children}
          <Footer />
        </CustomChakraProvider>
      </body>
    </html>
  );
}
