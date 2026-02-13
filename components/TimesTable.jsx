"use client";

import { useMemo, useState } from "react";

function formatTurkishDateShort(dateStr) {
  const d = new Date(`${dateStr}T12:00:00`);
  return d.toLocaleDateString("tr-TR", {
    day: "numeric",
    month: "short",
  });
}

export default function TimesTable({ data }) {
  const [open, setOpen] = useState(false);

  const rows = useMemo(() => {
    return (data?.days || []).map((x) => ({
      date: x.date,
      dayName: x.dayName,
      imsak: x.imsak,
      iftar: x.iftar,
      dateShort: formatTurkishDateShort(x.date),
    }));
  }, [data]);

  return (
    <section className="mt-6">
      <div className="flex items-center justify-center">
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="px-4 py-2 rounded-xl border border-neutral-200 bg-white text-sm font-semibold hover:border-neutral-300"
        >
          {open ? "Tabloyu Gizle" : "Tabloyu Göster"}
        </button>
      </div>

      {open && (
        <div className="mt-4 rounded-2xl border border-neutral-200 bg-white overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="bg-neutral-50 text-neutral-700">
                <tr>
                  <th className="text-left px-4 py-3 whitespace-nowrap">Tarih</th>
                  <th className="text-left px-4 py-3 whitespace-nowrap">Gün</th>
                  <th className="text-left px-4 py-3 whitespace-nowrap">İmsak</th>
                  <th className="text-left px-4 py-3 whitespace-nowrap">İftar</th>
                </tr>
              </thead>

              <tbody>
                {rows.map((r) => (
                  <tr key={r.date} className="border-t border-neutral-100">
                    <td className="px-4 py-3 whitespace-nowrap">{r.dateShort}</td>
                    <td className="px-4 py-3 whitespace-nowrap">{r.dayName}</td>
                    <td className="px-4 py-3 whitespace-nowrap font-semibold">{r.imsak}</td>
                    <td className="px-4 py-3 whitespace-nowrap font-semibold">{r.iftar}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </section>
  );
}

