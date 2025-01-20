import type { Metadata } from "next";
import { Quicksand } from "next/font/google";
import "./globals.css";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });
const quicksand = Quicksand({
  variable: "--font-quicksand",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ticketing Portal",
  description: "Ticketing Portal for SQL and NetSuite",
  icons: {
    icon: [
      {
        // media: '(prefers-color-scheme: light)',
        url: "images/favicon.png",
        href: "images/favicon.png",
      },
      // {
      //   media: '(prefers-color-scheme: dark)',
      //   url: "images/favicon-dark.png",
      //   href: "images/favicon-dark.png",
      // },
    ]
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={quicksand.variable}>
      <body className="font-sans">
        {children}
      </body>
    </html>
  );
}
