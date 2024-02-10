import type { Metadata } from "next";
import { Toaster } from "react-hot-toast";
import ThemeContextProvider from "@/context/theme-context";
import ActiveSectionContextProvider from "@/context/active-section-context";
import Header from "@/components/header";
import Footer from "@/components/footer";
import ThemeSwitch from "@/components/theme-switch";
import "./globals.css";
// import "./i18n";

export const metadata: Metadata = {
  title: "Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <link rel="icon" href="https://pipedream.com/s.v0/app_XaLh2x/logo/orig" />
      <body className="fonts relative pt-28 sm:pt-36 dark:bg-[#292f36] dark:text-white dark:text-opacity-90">
        <ThemeContextProvider>
          <ActiveSectionContextProvider>
            <Header />
            {children}
            <Footer />
            <Toaster position="top-right" />
            <ThemeSwitch />
          </ActiveSectionContextProvider>
        </ThemeContextProvider>
      </body>
    </html>
  );
}
