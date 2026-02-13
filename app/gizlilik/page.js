import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AdSlot from "@/components/AdSlot";

export const metadata = {
  title: "Gizlilik Politikası | iftarsaatiistanbul.com",
  description:
    "iftarsaatiistanbul.com gizlilik politikası: kişisel veriler, çerezler, reklam hizmetleri ve site kullanımı hakkında bilgilendirme.",
};

export default function GizlilikPage() {
  return (
    <div className="min-h-screen bg-[#F8FAF9] text-[#0B0B0B]">
      <Header />

      <main className="pb-16">
        <section className="w-full max-w-4xl mx-auto px-4">
          <h1 className="text-2xl md:text-4xl font-semibold tracking-tight text-center mt-10">
            Gizlilik Politikası
          </h1>

          <p className="text-center text-sm md:text-base text-neutral-600 mt-3">
            Bu sayfa, iftarsaatiistanbul.com üzerinde bilgi toplama ve kullanım biçimlerini açıklar.
          </p>

          <section className="mt-8">
            <AdSlot label="Ad Slot" />
          </section>

          <article className="mt-8 rounded-2xl bg-white border border-neutral-200 p-6 md:p-8 text-neutral-800 leading-7">
            <h2 className="text-xl md:text-2xl font-semibold">Genel Bilgilendirme</h2>
            <p className="mt-3 text-neutral-700">
              iftarsaatiistanbul.com, İstanbul için imsak ve iftar saatleri hakkında bilgilendirme sağlayan bir içerik sitesidir.
              Bu politika; ziyaret sırasında toplanabilecek teknik veriler, reklam hizmetleri ve çerez kullanımı hakkında
              şeffaf bilgi vermeyi amaçlar.
            </p>

            <h2 className="text-xl md:text-2xl font-semibold mt-10">Toplanan Bilgiler</h2>
            <p className="mt-3 text-neutral-700">
              Ziyaretçilerden ad, soyad gibi kişisel bilgiler talep edilmez. Ancak IP adresi, cihaz türü, tarayıcı bilgisi ve
              sayfa görüntüleme verileri gibi teknik bilgiler otomatik olarak kaydedilebilir.
            </p>

            <h2 className="text-xl md:text-2xl font-semibold mt-10">Reklam Hizmetleri</h2>
            <p className="mt-3 text-neutral-700">
              Sitemizde Google AdSense gibi üçüncü taraf reklam sağlayıcıları tarafından reklamlar gösterilebilir.
              Bu hizmetler, reklam performansını ölçmek veya ilgi alanlarına göre reklam sunmak için çerez kullanabilir.
            </p>

            <h2 className="text-xl md:text-2xl font-semibold mt-10">Veri Paylaşımı</h2>
            <p className="mt-3 text-neutral-700">
              Kişisel veriler satılmaz. Yasal yükümlülükler veya teknik hizmetler kapsamında sınırlı veri paylaşımı yapılabilir.
            </p>

            <h2 className="text-xl md:text-2xl font-semibold mt-10">Dış Bağlantılar</h2>
            <p className="mt-3 text-neutral-700">
              Sitemizde üçüncü taraf sitelere yönlendiren bağlantılar bulunabilir. Bu sitelerin içeriklerinden
              iftarsaatiistanbul.com sorumlu değildir.
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
