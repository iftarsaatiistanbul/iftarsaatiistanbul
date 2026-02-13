import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TimeCards from "@/components/TimeCards";
import AdSlot from "@/components/AdSlot";
import FAQ from "@/components/FAQ";
import TimesTable from "@/components/TimesTable";

import data from "@/data/istanbul-2026.json";

export const metadata = {
  title: "İstanbul İftar ve İmsak Saatleri (2026) | iftarsaatiistanbul.com",
  description:
    "İstanbul için 2026 Ramazan imsak ve iftar saatleri: bugün imsak kaçta, iftar kaçta? 30 günlük İstanbul imsakiyesi ve sık sorulan sorular.",
};

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#F8FAF9] text-[#0B0B0B]">
      <Header />

      <main className="pb-16">
        <TimeCards data={data} />

        <section className="w-full max-w-4xl mx-auto px-4 mt-10">
          <AdSlot label="Ad Slot 1" />
        </section>

        <section className="w-full max-w-4xl mx-auto px-4 mt-14">
          <h2 className="text-2xl md:text-3xl font-semibold text-center">
            İstanbul İçin 30 Günlük İftar ve İmsak Saatleri
          </h2>

          {/* Sadece HTML tablo */}
          <TimesTable data={data} />
        </section>

        {/* SEO Metni */}
        <section className="w-full max-w-4xl mx-auto px-4 mt-10">
          <article className="rounded-2xl bg-white border border-neutral-200 p-6 md:p-8 text-neutral-800 leading-7">
            <h3 className="text-xl md:text-2xl font-semibold">
              İstanbul’da Bugün İftar Kaçta? İmsak Saat Kaçta?
            </h3>

            <p className="mt-4 text-neutral-700">
              İstanbul için <strong>2026 iftar saati</strong> ve <strong>imsak saati</strong> arıyorsan doğru yerdesin.
              Bu sayfa, tek ekranda en hızlı şekilde sonucu göstermek için tasarlandı: üstte{" "}
              <strong>bugünün İstanbul imsak</strong> ve <strong>İstanbul iftar</strong> saatini görürsün; aşağıda ise
              Ramazan boyunca ihtiyaç duyacağın <strong>30 günlük İstanbul imsakiyesi</strong> (tarih + gün + saatler)
              yer alır. Kullanıcı dostu yapı sayesinde sayfada kaybolmadan, tek bakışta cevabı alırsın.
            </p>

            <p className="mt-4 text-neutral-700">
              <strong>İmsak</strong>, sahurun bittiği ve oruca niyetin başladığı vakittir. <strong>İftar</strong> ise
              akşam vaktinin girmesiyle orucun açıldığı zamandır. İstanbul gibi kalabalık bir şehirde, özellikle iş
              çıkışı ve trafikteyken “İftar kaçta?” sorusunun cevabı saniyeler içinde lazım olur. Bu yüzden sayfanın en
              üstünde iki büyük kartla saatleri net gösteriyoruz.
            </p>

            <h3 className="text-xl md:text-2xl font-semibold mt-8">
              İstanbul 2026 Ramazan Takvimi Nasıl Kullanılır?
            </h3>

            <ul className="mt-4 list-disc pl-6 text-neutral-700 space-y-2">
              <li>
                Üstteki kartlardan <strong>bugünün</strong> imsak ve iftar saatini gör.
              </li>
              <li>
                “<strong>Tabloyu Göster</strong>” butonuna basarak <strong>30 günlük</strong> İstanbul iftar–imsak
                saatlerini tek seferde incele.
              </li>
              <li>
                Ramazan boyunca her gün giriş yaptığında saatler otomatik güncellenir; ekstra işlem yapman gerekmez.
              </li>
            </ul>

            <p className="mt-6 text-neutral-700">
              Daha fazla bilgi için şu sayfalara da göz atabilirsin:{" "}
              <a className="text-[#0F3D2E] font-semibold hover:underline" href="/imsak-nedir">
                İmsak Nedir?
              </a>{" "}
              ve{" "}
              <a className="text-[#0F3D2E] font-semibold hover:underline" href="/iftar-nedir">
                İftar Nedir?
              </a>
              . Bu içerikler, “imsak nedir / iftar nedir” gibi sık aranan sorulara hızlı cevap verir.
            </p>

            <div className="mt-8 rounded-xl bg-[#F3F7F6] border border-neutral-200 p-4 text-neutral-700">
              <p className="font-semibold">Kısa cevap:</p>
              <p className="mt-2">
                İstanbul’da <strong>bugünkü imsak</strong> ve <strong>iftar</strong> saatleri üstteki kartlarda.
                <strong> 30 günlük tablo</strong> için “Tabloyu Göster” butonuna tıkla.
              </p>
            </div>
          </article>
        </section>

        <section className="w-full max-w-4xl mx-auto px-4 mt-10">
          <AdSlot label="Ad Slot 2" />
        </section>

        <FAQ />
      </main>

      <Footer />
    </div>
  );
}
