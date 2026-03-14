import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ScrollAnimator from "@/components/ScrollAnimator";
import { Analytics } from "@vercel/analytics/next";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://personal-portfolio-t4e2.vercel.app/"),
  title: {
    default: "Yashwanth M K - Full Stack Engineer & DevOps Enthusiast",
    template: "%s | Yashwanth M K",
  },
  description: "Full Stack Developer and DevOps learner focused on building scalable web applications and deploying them using modern cloud technologies. Experienced with MERN stack, AWS, and real-world project development.",
  keywords: [
    "Yashwanth M K",
    "Full Stack Developer",
    "DevOps Engineer",
    "Web3 Developer",
    "Next.js Developer",
    "TypeScript",
    "React",
    "Python",
    "Portfolio",
    "Computer Vision",
    "FastAPI"
  ],
  authors: [{ name: "Yashwanth M K", url: "https://github.com/yashwanthmk11" }],
  creator: "Yashwanth M K",
  publisher: "Yashwanth M K",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "Yashwanth M K - Full Stack Engineer",
    description: "Building full stack web applications and exploring cloud infrastructure, deployment, and modern development workflows.",
    url: "https://personal-portfolio-t4e2.vercel.app/",
    siteName: "Yashwanth M K Portfolio",
    images: [
      {
        url: "/profilee.jpg",
        width: 1200,
        height: 630,
        alt: "Yashwanth M K - Full Stack Engineer",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Yashwanth M K - Full Stack Engineer",
    description: "Building full stack web applications and exploring cloud infrastructure, deployment, and modern development workflows.",
    creator: "@yashwanthmk11",
    images: ["/profilee.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  
  alternates: {
    canonical: "https://personal-portfolio-t4e2.vercel.app/",
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ScrollAnimator />
        {children}
        <Analytics />
      </body>
    </html>
  );
}