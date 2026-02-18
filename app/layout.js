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
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-1CZQX92V51"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-1CZQX92V51');
            `,
          }}
        />
      </head>

      <body className={inter.className}>{children}</body>
    </html>
  );
}
