import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import SiteLayout from "./components/layout/site-layout";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Heral Kumar",
  description: "Portfolio website showcasing my work and experience",
};

export const viewport = {
  width: "device-width",
  initialScale: 0.85,
  maximumScale: 0.85,
  userScalable: false,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <Script id="theme-switcher" strategy="beforeInteractive">
          {`
            (function () {
              function getStoredTheme() { return localStorage.getItem('theme') }
              function setTheme(theme) {
                if (theme === 'system') {
                  const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
                  document.documentElement.classList.toggle('dark', systemTheme === 'dark')
                } else {
                  document.documentElement.classList.toggle('dark', theme === 'dark')
                }
              }
              const storedTheme = getStoredTheme();
              const theme = storedTheme || 'dark';
              setTheme(theme);
            })()
          `}
        </Script>
        {/* If you still need a custom mobile zoom, consider configuring it here or via CSS. */}
      </head>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <SiteLayout>{children}</SiteLayout>
        </ThemeProvider>
      </body>
    </html>
  );
}