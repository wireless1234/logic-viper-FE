import type { Metadata } from "next";
import { Geist, Geist_Mono, Barlow_Condensed, Rubik } from "next/font/google";

import "../globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
