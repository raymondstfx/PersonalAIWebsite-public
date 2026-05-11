import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Xiyao Huang | AI Portfolio",
  description:
    "A personal portfolio prototype for Xiyao Huang with a styled AI assistant preview.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
