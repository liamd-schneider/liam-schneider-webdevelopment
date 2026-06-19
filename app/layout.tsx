import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Liam Schneider — Web Development",
  description: "Hier entsteht etwas Großes. Neue Website in Arbeit.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" className="h-full antialiased">
      <body className="min-h-full flex flex-col bg-[#0B0D0E]">{children}</body>
    </html>
  );
}
