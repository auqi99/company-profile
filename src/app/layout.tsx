import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import CustomChakraProvider from "../providers/ChakraProvider";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Palm Oil",
  description: "Palm Oil Company Profile",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
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
