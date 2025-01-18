import "./globals.css";
import localFont from "next/font/local";

const clashDisplay = localFont({
  src: "./font/ClashDisplay-Variable.ttf",
  variable: "--font-clashDisplay",
  weight: "100 400 600 900",
});

export const metadata = {
  title: "GIDA",
  description: "GIDA ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${clashDisplay.variable} $ antialiased font-[family-name:var(--font-clashDisplay)]`}>
        {children}
      </body>
    </html>
  );
}
