import { ThemeProvider } from "@/components/ThemeProvider";
import { Outfit } from 'next/font/google'
import "./globals.css";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { pageview } from "@/lib/gtag";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import Script from "next/script";

const outfit = Outfit({
  subsets: ['latin'],
})

export const metadata = {
  title: "Muhammad Rizki's Personal Profile",
  description: "Muhammad Rizki's personal portfolio profile",
};

export default function RootLayout({ children }) {
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window !== 'undefined' && window.gtag) {
        pageview(pathname);
    }
  }, [pathname]);

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Google tag (gtag.js) */}
        <Script async src="https://www.googletagmanager.com/gtag/js?id=G-K5N3K0CYY7" />
        <Script id="google-analytics">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-K5N3K0CYY7');
          `}
        </Script>
      </head>
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
