import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AdSlot from "@/components/AdSlot";

export const metadata = {
  title: "2026 Ramazan Takvimi – İstanbul İftar ve Sahur Saatleri | iftarsaatiistanbul.com",
  description:
    "İstanbul için 2026 Ramazan takvimi: imsak, iftar, sahur ve Ramazan Bayramı tarihleri. Kısa rehber ve açıklamalar.",
};

export default function Page2026Takvimi() {
  return (
    <div className="min-h-screen bg-[#F8FAF9] text-[#0B0B0B]">
      <Header />

      <main className="pb-16">
        <section className="w-full max-w-4xl mx-auto px-4">
          <h1 className="text-2xl md:text-4xl font-semibold tracking-tight text-center mt-10">
            2026 Ramazan Takvimi – İstanbul İftar ve Sahur Saatleri
          </h1>

          <p className="text-center text-sm md:text-base text-neutral-600 mt-3">
            İstanbul için 2026 Ramazan ayı imsak, iftar ve bayram tarihleri
          </p>

          <div className="mt-8 rounded-2xl overflow-hidden border border-neutral-200 bg-white">
            <img
              src="/pages/2026-takvimi.png"
              alt="2026 Ramazan takvimi görseli"
              className="w-full h-auto"
              loading="lazy"
            />
          </div>

          <article className="mt-8 rounded-2xl bg-white border border-neutral-200 p-6 md:p-8 text-neutral-800 leading-7">
            <h2 className="text-xl md:text-2xl font-semibold">
              2026 Ramazan Ne Zaman Başlıyor?
            </h2>
            <p className="mt-3 text-neutral-700">
              Diyanet İşleri Başkanlığı’nın 2026 yılı dini günler takvimine göre Ramazan ayı, 19 Şubat 2026 Perşembe günü başlayacaktır. 
              Son oruç 19 Mart 2026 tarihinde tutulacak olup, Ramazan ayı toplamda 29 gün devam edecektir.

            </p>

            <div className="mt-6">
              <AdSlot label="Ad Slot" />
            </div>

            <h2 className="text-xl md:text-2xl font-semibold mt-10">
              İstanbul 2026 İftar ve Sahur Saatleri
            </h2>
            <p className="mt-3 text-neutral-700">
              İstanbul iftar saati, akşam vaktinin girişiyle; imsak saati ise sahurun bittiği vakitle ilişkilidir.
              Gün gün saatlere hızlıca bakmak için ana sayfadaki kartları ve 30 günlük tabloyu kullanabilirsin.
            </p>

            <h2 className="text-xl md:text-2xl font-semibold mt-10">
              2026 Ramazan Bayramı Ne Zaman?
            </h2>
            <p className="mt-3 text-neutral-700">
              2026 yılında Ramazan ayını takiben idrak edilen Ramazan Bayramı, Mart ayı içerisinde yer alır. 
              Bayram arefesi 19 Mart Perşembe günü yarım gün olarak başlar; bayramın üç günü ise 20 Mart Cuma’dan 22 Mart Pazar’a kadar resmi tatil olarak uygulanır.

            </p>
          </article>

          <section className="mt-10">
            <AdSlot label="Ad Slot" />
          </section>
        </section>
      </main>

      <Footer />
    </div>
  );
}
