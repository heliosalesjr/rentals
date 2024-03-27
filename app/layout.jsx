import { Inter } from "next/font/google";
import '../assets/globals.css'
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "the rentals app",
  description: "by @heliosalesjr",
  keywords: 'the realness of the world',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
      
      </body>
    </html>
  );
}
