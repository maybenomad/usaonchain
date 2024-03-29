import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "American Coin",
  description: "Bringing the greatest country on earth on-chain.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <link rel="icon" href="/usaflag.svg" type="image/svg" sizes="32x32" />
      <body className={inter.className}>{children}</body>
    </html>
  );
}
