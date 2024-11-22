import { Html, Head, Main, NextScript } from "next/document";
import localFont from "next/font/local";
import "./globals.css";

// Load custom fonts
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

// SEO Metadata
export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
  openGraph: {
    type: "website",
    url: "https://www.yourwebsite.com",
    title: "Create Next App",
    description: "Generated by create next app",
    image: "https://www.yourwebsite.com/images/og-image.jpg", // Optional: image for social media
  },
  twitter: {
    card: "summary_large_image", // Twitter card type
    site: "@yourtwitterhandle", // Optional: Twitter handle
    creator: "@yourtwitterhandle", // Optional: Twitter handle for the creator
    title: "Create Next App",
    description: "Generated by create next app",
    image: "https://www.yourwebsite.com/images/og-image.jpg", // Optional: image for Twitter
  },
};

export default function RootLayout({ children }) {
  return (
    <Html lang="en">
      <Head>
        {/* SEO meta tags */}
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content="nextjs, pwa, font generator" />
        <meta property="og:title" content={metadata.openGraph.title} />
        <meta property="og:description" content={metadata.openGraph.description} />
        <meta property="og:image" content={metadata.openGraph.image} />
        <meta property="og:url" content={metadata.openGraph.url} />
        <meta property="og:type" content={metadata.openGraph.type} />
        <meta name="twitter:card" content={metadata.twitter.card} />
        <meta name="twitter:creator" content={metadata.twitter.creator} />
        <meta name="twitter:site" content={metadata.twitter.site} />
        <meta name="twitter:title" content={metadata.twitter.title} />
        <meta name="twitter:description" content={metadata.twitter.description} />
        <meta name="twitter:image" content={metadata.twitter.image} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </Html>
  );
}
