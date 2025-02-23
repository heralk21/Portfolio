import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import type React from "react";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Heral Kumar",
  description: "Heral Kumar's Portfolio",
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
      <body>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}