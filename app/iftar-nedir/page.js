import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AdSlot from "@/components/AdSlot";

export const metadata = {
  title: "İftar Nedir? İstanbul İçin İftar Saati Rehberi | iftarsaatiistanbul.com",
  description:
    "İftar nedir, iftar vakti ne zaman girer? İstanbul iftar saati hakkında kısa rehber, açıklamalar ve pratik bilgiler.",
};

export default function PageIftarNedir() {
  return (
    <div className="min-h-screen bg-[#F8FAF9] text-[#0B0B0B]">
      <Header />

      <main className="pb-16">
        <section className="w-full max-w-4xl mx-auto px-4">
          <h1 className="text-2xl md:text-4xl font-semibold tracking-tight text-center mt-10">
            İftar Nedir?
          </h1>

          <p className="text-center text-sm md:text-base text-neutral-600 mt-3">
            İftar vakti ne zaman girer, oruç ne zaman açılır?
          </p>

          <div className="mt-8 rounded-2xl overflow-hidden border border-neutral-200 bg-white">
            <img
              src="/pages/iftar-nedir.png"
              alt="İftar nedir sayfası görseli"
              className="w-full h-auto"
              loading="lazy"
            />
          </div>

          <article className="mt-8 rounded-2xl bg-white border border-neutral-200 p-6 md:p-8 text-neutral-800 leading-7">
            <h2 className="text-xl md:text-2xl font-semibold">İftar Saatinin Dini Anlamı</h2>
            <p className="mt-3 text-neutral-700">
              İftar, Ramazan ayında tutulan orucun akşam vaktinin girmesiyle açılmasıdır. İstanbul’da iftar saati,
              günlerin uzayıp kısalmasına göre her gün değişiklik gösterebilir.
            </p>

            <div className="mt-6">
              <AdSlot label="Ad Slot" />
            </div>

            <h2 className="text-xl md:text-2xl font-semibold mt-10">İftar Vaktini Nereden Görebilirim?</h2>
            <p className="mt-3 text-neutral-700">
              İftar vakti, akşam vaktinin girişidir. “Bugün iftar kaçta?” sorusuna en hızlı cevap için ana sayfadaki
              “İftar Saati” kartına bakabilirsin.
            </p>

            <h2 className="text-xl md:text-2xl font-semibold mt-10">
              İstanbul İftar Saatleri Hakkında Pratik Bilgiler
            </h2>
            <p className="mt-3 text-neutral-700">
              Ramazan boyunca 30 günlük tabloyu açarak tüm günlerin iftar saatlerini tek seferde görebilirsin.
              Bu sayfa ise “iftar nedir?” sorusuna hızlı ve sade bir açıklama sunar.
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
