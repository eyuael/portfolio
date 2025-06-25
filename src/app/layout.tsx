import type { Metadata } from "next";
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL('http://localhost:3000'),
  title: "Eyuael Berhe | Full Stack Developer",
  description: "Full Stack Developer specializing in React Native, TypeScript, and modern web technologies. Available for opportunities in London, UK.",
  keywords: ["Full Stack Developer", "React Native", "TypeScript", "Node.js", "London", "Portfolio"],
  authors: [{ name: "Eyuael Berhe" }],
  creator: "Eyuael Berhe",
  icons: {
    icon: [
      { url: '/favicon-terminal.svg', type: 'image/svg+xml' },
      { url: '/favicon.ico', sizes: '32x32', type: 'image/x-icon' }
    ],
    shortcut: '/favicon-terminal.svg',
    apple: '/apple-touch-icon.png',
  },
  openGraph: {
    title: "Eyuael Berhe | Full Stack Developer",
    description: "Full Stack Developer specializing in React Native, TypeScript, and modern web technologies.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Eyuael Berhe | Full Stack Developer",
    description: "Full Stack Developer specializing in React Native, TypeScript, and modern web technologies.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${GeistSans.variable} ${GeistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
