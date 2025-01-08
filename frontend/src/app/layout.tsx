// src/app/layout.tsx
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "My 4chan Clone MVP",
  description: "A minimal Next.js 4chan-like interface",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`bg-gray-100 text-gray-900 ${inter.className}`}>
        <header className="p-4 bg-white shadow">
          <nav className="container mx-auto flex justify-between items-center">
            <div className="text-xl font-bold">forum-app</div>
            <div>
              <a href="/" className="text-blue-500 hover:underline mr-4">
                Home
              </a>
              <a href="/board" className="text-blue-500 hover:underline">
                Board
              </a>
            </div>
          </nav>
        </header>
        <main className="container mx-auto p-4">{children}</main>
      </body>
    </html>
  );
}
