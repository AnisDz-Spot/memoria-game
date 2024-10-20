import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const adventPro = localFont({
  src: "./fonts/AdventPro-VariableFont_wdth,wght.ttf",
  variable: "--font-adventPro",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Memoria",
  description: "Is your memory as strong as you think.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`box-border max-w-[100vw]  overflow-x-hidden ${adventPro.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
