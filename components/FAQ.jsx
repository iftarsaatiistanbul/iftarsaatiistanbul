"use client";

import { useState } from "react";

const faqData = [
  {
    question: "İmsak saati nedir?",
    answer:
      "İmsak, sahurun bittiği ve oruca başlanılan vakittir."
  },
  {
    question: "İftar vakti neye göre belirlenir?",
    answer:
      "İftar vakti, akşam vaktinin girmesiyle belirlenir."
  },
  {
    question: "İmsak ile iftar arasında kaç saat oruç tutulur?",
    answer:
      "İstanbul’da Ramazan ayının başında imsak ile iftar arasındaki süre yaklaşık 13,5 saattir. Ay ilerledikçe günler uzar ve bu süre Ramazan sonunda yaklaşık 15 saate kadar çıkar."
  },
  {
    question: "İstanbul’da tüm ilçelerde iftar saati aynı mı?",
    answer:
      "Evet. İstanbul tek zaman diliminde yer aldığı için Kadıköy, Üsküdar, Beşiktaş, Fatih, Pendik ve diğer tüm ilçelerde iftar ve imsak saatleri aynıdır."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="max-w-4xl mx-auto px-4 py-12">
      <h2 className="text-2xl font-semibold text-center mb-8">
        Sık Sorulan Sorular
      </h2>

      <div className="space-y-4">
        {faqData.map((item, index) => (
          <div
            key={index}
            className="border rounded-xl p-4 cursor-pointer bg-white"
            onClick={() =>
              setOpenIndex(openIndex === index ? null : index)
            }
          >
            <div className="flex justify-between items-center font-medium">
              {item.question}
              <span>{openIndex === index ? "▲" : "▼"}</span>
            </div>

            {openIndex === index && (
              <p className="mt-3 text-gray-600 leading-relaxed">
                {item.answer}
              </p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
