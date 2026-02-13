import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-neutral-200 bg-white">
      <div className="max-w-6xl mx-auto px-4 py-8 text-center text-sm text-neutral-600">
        <div className="flex items-center justify-center gap-6 flex-wrap">
          <Link href="/" className="hover:text-black">
            Ana Sayfa
          </Link>
          <Link href="/2026-takvimi" className="hover:text-black">
            2026 Takvimi
          </Link>
          <Link href="/sik-sorulan-sorular" className="hover:text-black">
            Sık Sorulan Sorular
          </Link>
          <Link href="/gizlilik" className="hover:text-black">
            Gizlilik Politikası
          </Link>
          <Link href="/cerez" className="hover:text-black">
            Çerez Politikası
          </Link>
        </div>

        <div className="mt-3">
          © 2026 iftarsaatiistanbul.com — Tüm hakları saklıdır.
        </div>
      </div>
    </footer>
  );
}

