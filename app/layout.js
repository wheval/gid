import "./globals.css";
import localFont from "next/font/local";
import { Lato } from 'next/font/google';
import Header from "@/components/Header";

const clashDisplay = localFont({
  src: "./font/ClashDisplay-Variable.ttf",
  variable: "--font-clashDisplay",
  weight: "100 400 600 900",
});

const lato = Lato({
  subsets: ['latin'],
  weight: ['100', '300', '400', '700', '900'],
  variable: '--font-lato',
});

export const metadata = {
  title: "GIDA",
  description: "Ginakev Digital Academy ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${clashDisplay.variable} ${lato.variable} antialiased font-[family-name:var(--font-clashDisplay)]`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
