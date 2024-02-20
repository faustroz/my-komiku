import Navbar from "@/components/Navbar/Navbar";
import "./globals.css";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
});

export const metadata = {
  title: "KomikVerse",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        suppressHydrationWarning={true}
        className={`${montserrat.className} bg-light-background dark:bg-dark-background`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
