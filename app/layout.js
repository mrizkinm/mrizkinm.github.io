import { ThemeProvider } from "@/components/ThemeProvider";
import { Outfit } from 'next/font/google'
import "./globals.css";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

const outfit = Outfit({
  subsets: ['latin'],
})

export const metadata = {
  title: "Muhammad Rizki's Personal Profile",
  description: "Muhammad Rizki's personal portfolio profile",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${outfit.className} antialiased`}
      >
        <ThemeProvider attribute="class" defaultTheme="system">
          <Header />
            {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
