import { Inter } from "next/font/google";
import "./globals.css";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata = {
  title: "Pixel Peak | Tools Dashboard",
  description: "Explore twelve gaming and community tool projects.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} flex min-h-screen flex-col bg-[#080D1A] text-[#F8FAFC] antialiased`}
      >
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:z-50 focus:bg-[#25C2FF] focus:p-4 focus:text-[#080D1A]"
        >
          Skip to content
        </a>

        <Header />

        <div className="mx-auto flex w-full max-w-[1440px] flex-1 flex-col lg:flex-row">
          <Sidebar />

          <main id="main-content" className="min-w-0 flex-1">
            {children}
          </main>
        </div>

        <Footer />
      </body>
    </html>
  );
}