import { Link } from 'react-router-dom';
import { Share2, Video, Palette, ArrowRight } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export default function Home() {
  const { t, language } = useLanguage();

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const packs = [
    {
      id: 1,
      icon: Share2,
      titleKey: 'pack1.title',
      descKey: 'pack1.desc',
      price: '15,000 DA',
      link: '/services/social-media',
      whatsapp1: 'https://wa.me/213775643433',
      whatsapp2: 'https://wa.me/213549278411'
    },
    {
      id: 2,
      icon: Video,
      titleKey: 'pack2.title',
      descKey: 'pack2.desc',
      price: '20,000 DA',
      link: '/services/video',
      whatsapp1: 'https://wa.me/213775643433',
      whatsapp2: 'https://wa.me/213549278411'
    },
    {
      id: 3,
      icon: Palette,
      titleKey: 'pack3.title',
      descKey: 'pack3.desc',
      price: '12,000 DA',
      link: '/services/design',
      whatsapp1: 'https://wa.me/213775643433',
      whatsapp2: 'https://wa.me/213549278411'
    }
  ];

  return (
    <>
      {/* ---------------- HERO SECTION ---------------- */}
      <section className="relative h-screen w-full overflow-hidden">

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-black/80 z-10" />

        {/* Background Video (local file) */}
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/videos/hero.mp4" type="video/mp4" />
        </video>

        {/* HERO TEXT */}
        <div className="relative z-20 h-full flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white drop-shadow-xl mb-4">
           
          </h1>

          <p className="text-xl md:text-2xl lg:text-3xl text-white/90 mb-10">
            
          </p>

          <button
            onClick={scrollToContact}
            className="bg-[#F15A24] hover:bg-[#d94e1f] text-white px-10 py-4 rounded-full
            text-lg font-semibold transition-all transform hover:scale-105 shadow-2xl"
          >
            {t('hero.cta')}
          </button>
        </div>
      </section>

      {/* ---------------- SERVICES SECTION ---------------- */}
      <section id="services" className="py-20 md:py-28 bg-[#F7F7F7] px-4">
        <div className="max-w-7xl mx-auto">

          <h2 className="text-4xl md:text-5xl font-bold text-center text-[#1A1A1A] mb-16">
            {t('services.title')}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {packs.map((pack) => {
              const Icon = pack.icon;
              return (
                <div
                  key={pack.id}
                  className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl border
                  hover:border-[#F15A24]/40 transition-all transform hover:-translate-y-2"
                >
                  <div className="w-20 h-20 bg-gradient-to-br from-[#F15A24] to-[#ff7e50]
                  rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                    <Icon className="w-10 h-10 text-white" />
                  </div>

                  <h3 className="text-2xl font-bold text-[#1A1A1A] mb-4">
                    {t(pack.titleKey)}
                  </h3>

                  <p className="text-[#2B2B2B] mb-6 leading-relaxed">
                    {t(pack.descKey)}
                  </p>

                  <div className="mb-6 pb-6 border-b border-gray-200">
                    <p className="text-sm text-gray-500 mb-1">{t('price.from')}</p>
                    <p className="text-3xl font-bold text-[#F15A24]">{pack.price}</p>
                  </div>

                  <div className="space-y-3 mb-6">
                    <a href={pack.whatsapp1} target="_blank"
                      className="block w-full bg-green-500 hover:bg-green-600 text-white py-3 rounded-xl font-semibold text-center">
                      {t('button.whatsapp1')}
                    </a>

                    <a href={pack.whatsapp2} target="_blank"
                      className="block w-full bg-green-500 hover:bg-green-600 text-white py-3 rounded-xl font-semibold text-center">
                      {t('button.whatsapp2')}
                    </a>
                  </div>

                  <Link
                    to={pack.link}
                    className="flex items-center justify-center w-full bg-[#F15A24] hover:bg-[#d94e1f]
                    text-white py-4 rounded-xl font-semibold transition-all transform hover:scale-105 shadow-md"
                  >
                    {t('button.details')}
                    <ArrowRight className={`w-5 h-5 ${language === 'ar' ? 'mr-2 rotate-180' : 'ml-2'}`} />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ---------------- CLIENTS ---------------- */}
      <section id="clients" className="py-20 bg-white px-4">
        <div className="max-w-7xl mx-auto">

          <h2 className="text-4xl md:text-5xl font-bold text-center text-[#1A1A1A] mb-12">
            {t('clients.title')}
          </h2>

          <div className="overflow-hidden">
            <div className="flex animate-scroll space-x-8 rtl:space-x-reverse">
              {[1,2,3,4,5,6,7,8].map((i) => (
                <div
                  key={i}
                  className="flex-shrink-0 w-32 h-32 md:w-40 md:h-40 bg-[#F7F7F7]
                  rounded-2xl flex items-center justify-center shadow-md"
                >
                  <span className="text-4xl md:text-5xl font-bold text-[#F15A24]">C{i}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- CONTACT ---------------- */}
      <section id="contact" className="py-20 bg-white px-4">
        <div className="max-w-6xl mx-auto text-center">

          <h2 className="text-4xl md:text-5xl font-bold text-[#1A1A1A] mb-4">
            {t('contact.title')}
          </h2>

          <p className="text-lg text-gray-600 mb-16">{t('contact.subtitle')}</p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

            {/* WhatsApp */}
            <div className="bg-[#F7F7F7] rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all">
              <h3 className="text-xl font-bold mb-2">WhatsApp</h3>
              <p className="text-gray-600 mb-6">{t('contact.whatsappDesc')}</p>

              <a href="https://wa.me/213775643433"
                className="block w-full bg-green-500 text-white py-3 rounded-xl font-semibold mb-3 hover:bg-green-600 transition">
                +213 775 64 34 33
              </a>

              <a href="https://wa.me/213549278411"
                className="block w-full bg-green-500 text-white py-3 rounded-xl font-semibold hover:bg-green-600 transition">
                +213 549 27 84 11
              </a>
            </div>

            {/* Phone */}
            <div className="bg-[#F7F7F7] rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all">
              <h3 className="text-xl font-bold mb-2">{t('contact.phoneTitle')}</h3>
              <p className="text-gray-600 mb-6">{t('contact.phoneDesc')}</p>

              <p className="text-lg font-semibold">+213 775 64 34 33</p>
              <p className="text-lg font-semibold">+213 549 27 84 11</p>
            </div>

            {/* Social */}
            <div className="bg-[#F7F7F7] rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all">
              <h3 className="text-xl font-bold mb-2">{t('contact.socialTitle')}</h3>
              <p className="text-gray-600 mb-6">{t('contact.socialDesc')}</p>

              <a
                href="https://www.instagram.com/hizou_agency?igsh=MjFobHB2cWMyYm01&utm_source=qr"
                className="block w-full bg-[#F15A24] text-white py-3 rounded-xl font-semibold mb-3 hover:bg-[#d94e1f] transition">
                Instagram
              </a>

              <a
                href="https://www.facebook.com/share/1AE96Z5FMC/?mibextid=wwXIfr"
                className="block w-full bg-[#F15A24] text-white py-3 rounded-xl font-semibold hover:bg-[#d94e1f] transition">
                Facebook
              </a>
            </div>

          </div>
        </div>
      </section>

      {/* SCROLL ANIMATION */}
      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll {
          animation: scroll 20s linear infinite;
          width: max-content;
        }
      `}</style>
    </>
  );
}