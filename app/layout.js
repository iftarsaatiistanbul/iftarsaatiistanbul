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
      <head>
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6862528607801068"
          crossOrigin="anonymous"
        ></script>
      </head>

      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
