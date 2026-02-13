import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AdSlot from "@/components/AdSlot";

export const metadata = {
  title: "Çerez Politikası | iftarsaatiistanbul.com",
  description:
    "iftarsaatiistanbul.com çerez politikası: kullanılan çerez türleri, reklam çerezleri ve çerez yönetimi hakkında bilgilendirme.",
};

export default function CerezPage() {
  return (
    <div className="min-h-screen bg-[#F8FAF9] text-[#0B0B0B]">
      <Header />

      <main className="pb-16">
        <section className="w-full max-w-4xl mx-auto px-4">
          <h1 className="text-2xl md:text-4xl font-semibold tracking-tight text-center mt-10">
            Çerez Politikası
          </h1>

          <p className="text-center text-sm md:text-base text-neutral-600 mt-3">
            Çerezler, site deneyimini geliştirmek ve reklamları yönetmek amacıyla kullanılabilir.
          </p>

          <section className="mt-8">
            <AdSlot label="Ad Slot" />
          </section>

          <article className="mt-8 rounded-2xl bg-white border border-neutral-200 p-6 md:p-8 text-neutral-800 leading-7">
            <h2 className="text-xl md:text-2xl font-semibold">Çerez Nedir?</h2>
            <p className="mt-3 text-neutral-700">
              Çerezler, bir web sitesini ziyaret ettiğinizde tarayıcınızda saklanabilen küçük veri dosyalarıdır.
              Site işlevleri, analiz ve reklam hizmetleri için kullanılabilir.
            </p>

            <h2 className="text-xl md:text-2xl font-semibold mt-10">Kullanılan Çerez Türleri</h2>
            <ul className="mt-3 list-disc pl-6 text-neutral-700 space-y-2">
              <li>Zorunlu çerezler</li>
              <li>Analiz ve performans çerezleri</li>
              <li>Reklam çerezleri</li>
            </ul>

            <h2 className="text-xl md:text-2xl font-semibold mt-10">Reklam Çerezleri</h2>
            <p className="mt-3 text-neutral-700">
              Google AdSense gibi üçüncü taraf reklam sağlayıcıları, reklamların etkinliğini ölçmek ve
              kullanıcıya daha uygun reklam göstermek için çerez kullanabilir.
            </p>

            <h2 className="text-xl md:text-2xl font-semibold mt-10">Çerezleri Kontrol Etme</h2>
            <p className="mt-3 text-neutral-700">
              Çerezleri tarayıcı ayarlarınızdan silebilir veya engelleyebilirsiniz. Ancak bu durumda sitenin bazı
              özellikleri beklediğiniz gibi çalışmayabilir.
            </p>

            <p className="mt-8 text-sm text-neutral-500">
              Son güncelleme: 2026
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
