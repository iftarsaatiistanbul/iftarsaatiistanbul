import "../styles/globals.css";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "600"],
});

export const metadata = {
  title: "iftarsaatiistanbul.com",
  description: "İstanbul için 2026 Ramazan imsak ve iftar saatleri.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="tr">
      <body className={inter.className}>{children}</body>
    </html>
  );
}