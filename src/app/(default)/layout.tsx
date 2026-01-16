import type { Metadata } from "next";
import { Geist, Geist_Mono, Barlow_Condensed, Rubik } from "next/font/google";
import NavBar from "@/shared/layout/nav-bar";
import Footer from "@/shared/layout/footer";
import "../globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <NavBar />
        {children}
      <Footer />
    </>
  );
}
