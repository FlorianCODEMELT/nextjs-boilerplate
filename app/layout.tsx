import Footer from "@components/layouts/footer";
import Header from "@components/layouts/header";
import { ThemeProvider } from "@components/providers/theme-provider";
import { siteConfig } from "@constants/config";
import { cn } from "@lib/utils";
import { Metadata } from "next";
import * as React from "react";

import "@styles/globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.title}`,
  },
  description: siteConfig.description,
  robots: { index: true, follow: true },
  // !STARTERCONF this is the default favicon, you can generate your own from https://realfavicongenerator.net/
  // ! copy to /favicon folder
  icons: {
    icon: "/favicon/favicon.ico",
    shortcut: "/favicon/favicon-16x16.png",
    apple: "/favicon/apple-touch-icon.png",
  },
  manifest: `/favicon/site.webmanifest`,
  // openGraph: {
  //   url: siteConfig.url,
  //   title: siteConfig.title,
  //   description: siteConfig.description,
  //   siteName: siteConfig.title,
  //   images: [`${siteConfig.url}/images/og.jpg`],
  //   type: 'website',
  //   locale: 'en_US',
  // },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
    images: [`${siteConfig.url}/images/og.jpg`],
    // creator: '@th_clarence',
  },
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body
        className={cn(
          "bg-background flex min-h-screen flex-col font-sans antialiased"
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
