"use client";

import { useEffect, useMemo, useState } from "react";

function getTodayKeyYYYYMMDD() {
  const d = new Date();
  const year = d.getFullYear();
  const month = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function formatTurkishDate(dateStr) {
  const d = new Date(`${dateStr}T12:00:00`);
  return d.toLocaleDateString("tr-TR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export default function TimeCards({ data }) {
  const [todayKey, setTodayKey] = useState(null);

  useEffect(() => {
    setTodayKey(getTodayKeyYYYYMMDD());
  }, []);

  const today = useMemo(() => {
    if (!todayKey) return null;
    return data.days.find((x) => x.date === todayKey) || null;
  }, [todayKey, data.days]);

  // Ramazan dışındaysa ilk gün göster (sessiz)
  const shown = today || data.days[0];

  return (
    <section className="w-full max-w-4xl mx-auto px-4">
      <h1 className="text-2xl md:text-4xl font-semibold tracking-tight text-center mt-10">
        İstanbul İftar ve İmsak Saatleri (2026)
      </h1>

      <p className="text-center text-sm md:text-base text-neutral-600 mt-3">
        {formatTurkishDate(shown.date)} • {shown.dayName}
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
        <div className="rounded-2xl p-6 text-white bg-[#0F3D2E] flex flex-col items-center justify-center text-center">
          <div className="text-sm font-normal opacity-90 mb-2">İmsak Saati</div>
          <div className="text-5xl font-semibold">{shown.imsak}</div>
        </div>

        <div className="rounded-2xl p-6 text-white bg-[#1F7A5A] flex flex-col items-center justify-center text-center">
          <div className="text-sm font-normal opacity-90 mb-2">İftar Saati</div>
          <div className="text-5xl font-semibold">{shown.iftar}</div>
        </div>
      </div>

      <p className="text-center text-xs text-neutral-500 mt-3">
        Saatler otomatik olarak günlük güncellenmektedir.
      </p>
    </section>
  );
}


