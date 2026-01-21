import type { Metadata } from "next";
import {
  Barlow_Condensed,
  Rubik,
  Shippori_Mincho,
  Roboto,
} from "next/font/google";
import NavBar from "@/shared/layout/nav-bar";
import Footer from "@/shared/layout/footer";
import "./globals.css";
import CartModal from "@/shared/layout/cart-drawer";
import AppContext from "../context/appcontext";
import ScrollButton from "@/shared/layout/scroll-button";
import ReactQueryClientProvider from "@/providers/ReactQueryClientProvider";

const barlowCondensed = Barlow_Condensed({
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-barlow-condensed",
  display: "swap",
  subsets: ["latin"],
});

const rubik = Rubik({
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-rubik",
  display: "swap",
  subsets: ["latin"],
});

export const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-roboto",
  display: "swap",
});

export const shippori = Shippori_Mincho({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-shippori",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Logic Viper",
  description:
    "Logic Viper is a premier Managed Security Service Provider (MSSP) specializing in delivering top-tier cybersecurity solutions to organizations of all sizes. ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ReactQueryClientProvider>
      <html lang="en">
        <body
          className={` ${roboto.variable} ${barlowCondensed.variable} ${rubik.variable} ${shippori.variable} antialiased relative`}
        >
          <AppContext>
            <NavBar />
            {children}
            <CartModal />
            <ScrollButton />
            <Footer />
          </AppContext>
        </body>
      </html>
    </ReactQueryClientProvider>
  );
}
