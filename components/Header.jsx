"use client";

import { useState } from "react";
import Link from "next/link";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="w-full border-b border-neutral-200 bg-white sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <Link
            href="/"
            className="flex items-center gap-2 font-semibold text-[#0F3D2E]"
          >
            <img src="/favicon.ico" alt="Logo" className="w-12 h-12" />
            <span>iftarsaatiistanbul.com</span>
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center gap-6 text-sm text-neutral-700">
            <Link href="/2026-takvimi" className="hover:text-black">
              2026 Takvimi
            </Link>
            <Link href="/imsak-nedir" className="hover:text-black">
              İmsak Nedir?
            </Link>
            <Link href="/iftar-nedir" className="hover:text-black">
              İftar Nedir?
            </Link>
            <Link href="/sik-sorulan-sorular" className="hover:text-black">
              Sık Sorulan Sorular
            </Link>
            <Link href="/gizlilik" className="hover:text-black">
              Gizlilik
            </Link>
            <Link href="/cerez" className="hover:text-black">
              Çerez
            </Link>
          </nav>

          {/* Hamburger */}
          <button
            className="md:hidden text-2xl"
            onClick={() => setOpen(true)}
            aria-label="Menüyü Aç"
          >
            ☰
          </button>
        </div>
      </header>

      {/* Mobile Overlay */}
      {open && (
        <div
          className="fixed inset-0 bg-black/40 z-40"
          onClick={() => setOpen(false)}
        />
      )}

      {/* Mobile Drawer */}
      <aside
        className={`fixed top-0 right-0 h-full w-72 bg-white z-50 transform transition-transform duration-300 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-5 border-b border-neutral-200 flex justify-between items-center">
          <span className="font-semibold text-[#0F3D2E]">Menü</span>
          <button onClick={() => setOpen(false)} className="text-xl" aria-label="Menüyü Kapat">
            ✕
          </button>
        </div>

        <nav className="flex flex-col p-5 gap-4 text-neutral-700">
          <Link onClick={() => setOpen(false)} href="/2026-takvimi">
            2026 Takvimi
          </Link>
          <Link onClick={() => setOpen(false)} href="/imsak-nedir">
            İmsak Nedir?
          </Link>
          <Link onClick={() => setOpen(false)} href="/iftar-nedir">
            İftar Nedir?
          </Link>
          <Link onClick={() => setOpen(false)} href="/sik-sorulan-sorular">
            Sık Sorulan Sorular
          </Link>

          <div className="h-px bg-neutral-200 my-2" />

          <Link onClick={() => setOpen(false)} href="/gizlilik">
            Gizlilik Politikası
          </Link>
          <Link onClick={() => setOpen(false)} href="/cerez">
            Çerez Politikası
          </Link>
        </nav>
      </aside>
    </>
  );
}

