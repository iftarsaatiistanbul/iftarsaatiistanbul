import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AdSlot from "@/components/AdSlot";
import FAQ from "@/components/FAQ";

export const metadata = {
  title:
    "Sık Sorulan Sorular | İstanbul İftar ve İmsak Saatleri | iftarsaatiistanbul.com",
  description:
    "İstanbul iftar ve imsak saatleri hakkında sık sorulan sorular: imsak-sabah namazı farkı, iftar vakti neye göre belirlenir ve daha fazlası.",
};

export default function PageSSS() {
  return (
    <div className="min-h-screen bg-[#F8FAF9] text-[#0B0B0B]">
      <Header />

      <main className="pb-16">
        <section className="w-full max-w-4xl mx-auto px-4">
          <h1 className="text-2xl md:text-4xl font-semibold tracking-tight text-center mt-10">
            Oruç İle İlgili Sık Sorulan Sorular
          </h1>

          <p className="text-center text-sm md:text-base text-neutral-600 mt-3">
            Ramazan ayı hakkında en çok merak edilen soruların kısa ve net cevapları.
          </p>

          {/* İlk reklam alanı */}
          <section className="mt-8">
            <AdSlot label="Ad Slot" />
          </section>

          {/* FAQ içerik */}
          <FAQ />

          {/* Alt reklam alanı */}
          <section className="mt-10">
            <AdSlot label="Ad Slot" />
          </section>
        </section>
      </main>

      <Footer />
    </div>
  );
}

