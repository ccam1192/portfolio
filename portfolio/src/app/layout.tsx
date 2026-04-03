import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/ThemeProvider";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Charles Camisasca | SaaS Founder & Enterprise Software Consultant",
  description:
    "Product-focused entrepreneur with 10+ years of experience designing, building, and launching data-driven SaaS applications. Founder of Boardroom, an AI-powered analytics platform for e-commerce brands.",
  keywords: [
    "Charles Camisasca",
    "SaaS Founder",
    "Product Manager",
    "Enterprise Software",
    "Boardroom",
    "E-Commerce Analytics",
    "SEO Platform",
  ],
  authors: [{ name: "Charles Camisasca" }],
  openGraph: {
    title: "Charles Camisasca | SaaS Founder & Enterprise Software Consultant",
    description:
      "Product-focused entrepreneur with 10+ years of experience designing, building, and launching data-driven SaaS applications.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Charles Camisasca | SaaS Founder & Enterprise Software Consultant",
    description:
      "Product-focused entrepreneur with 10+ years of experience designing, building, and launching data-driven SaaS applications.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-screen flex flex-col">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
