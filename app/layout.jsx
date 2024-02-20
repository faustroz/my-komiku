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
    <html lang="en" className="bg-dark-background">
      <body className={montserrat.className} suppressHydrationWarning={true}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
