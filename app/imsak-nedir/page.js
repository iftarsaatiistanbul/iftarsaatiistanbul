import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AdSlot from "@/components/AdSlot";

export const metadata = {
  title: "İmsak Nedir? İstanbul İçin İmsak Saati Açıklaması | iftarsaatiistanbul.com",
  description:
    "İmsak nedir, sahur ne zaman biter? İstanbul için imsak saati hakkında kısa, anlaşılır açıklamalar ve sık sorulanlar.",
};

export default function PageImsakNedir() {
  return (
    <div className="min-h-screen bg-[#F8FAF9] text-[#0B0B0B]">
      <Header />

      <main className="pb-16">
        <section className="w-full max-w-4xl mx-auto px-4">
          <h1 className="text-2xl md:text-4xl font-semibold tracking-tight text-center mt-10">
            İmsak Nedir?
          </h1>

          <p className="text-center text-sm md:text-base text-neutral-600 mt-3">
            İmsak saati neyi ifade eder, sahur ne zaman biter?
          </p>

          <div className="mt-8 rounded-2xl overflow-hidden border border-neutral-200 bg-white">
            <img
              src="/pages/imsak-nedir.png"
              alt="İmsak nedir sayfası görseli"
              className="w-full h-auto"
              loading="lazy"
            />
          </div>

          <article className="mt-8 rounded-2xl bg-white border border-neutral-200 p-6 md:p-8 text-neutral-800 leading-7">
            <h2 className="text-xl md:text-2xl font-semibold">İmsak Saatinin Anlamı</h2>
            <p className="mt-3 text-neutral-700">
              İmsak, sahurun bittiği ve oruca başlanılan vakittir. İstanbul’da Ramazan boyunca imsak saati
              gün gün değişir; bu yüzden günlük kontrol etmek pratik bir alışkanlıktır.
            </p>

            <div className="mt-6">
              <AdSlot label="Ad Slot" />
            </div>

            <h2 className="text-xl md:text-2xl font-semibold mt-10">Sahur Ne Zaman Biter?</h2>
            <p className="mt-3 text-neutral-700">
              Sahur, imsak vaktinden önce tamamlanır. En hızlı şekilde bugünün saatini görmek için ana sayfadaki
              kartlardan “İmsak Saati” bölümünü kullanabilirsin.
            </p>

            <h2 className="text-xl md:text-2xl font-semibold mt-10">
              İstanbul’da İmsak Saati Nasıl Takip Edilir?
            </h2>
            <p className="mt-3 text-neutral-700">
              Bu sitede İstanbul için imsak ve iftar saatleri otomatik olarak güncellenir. 30 günlük tabloyla
              Ramazan boyunca tüm günleri tek ekranda görebilirsin.
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
