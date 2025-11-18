import { Link } from 'react-router-dom';
import { ArrowLeft, Brush, Layout, Camera, PenTool } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export default function DesignService() {
  const { t, language } = useLanguage();

  const sections = [
    {
      icon: Brush,
      titleKey: 'design.section1.title',
      items: {
        fr: [
          'Identité visuelle complète',
          'Logo professionnel personnalisé',
          'Charte graphique',
          'Palette de couleurs et typographies',
          'Déclinaisons visuelles'
        ],
        ar: [
          'هوية بصرية كاملة',
          'شعار احترافي مخصص',
          'دليل الهوية البصرية',
          'الألوان والخطوط',
          'التطبيقات البصرية'
        ],
        en: [
          'Full visual identity',
          'Professional custom logo',
          'Brand guideline',
          'Color palette & typography',
          'Visual brand assets'
        ]
      }
    },
    {
      icon: Layout,
      titleKey: 'design.section2.title',
      items: {
        fr: [
          'Affiches publicitaires',
          'Flyers professionnels',
          'Designs pour les réseaux sociaux',
          'Bannières web et impressions',
          'Templates personnalisés'
        ],
        ar: [
          'بوسترات إعلانية',
          'مطويات احترافية',
          'تصاميم لمواقع التواصل الاجتماعي',
          'بانرات ويب ومواد للطباعة',
          'قوالب مخصصة'
        ],
        en: [
          'Advertising posters',
          'Professional flyers',
          'Social media designs',
          'Web banners & print material',
          'Custom templates'
        ]
      }
    },
    {
      icon: Camera,
      titleKey: 'design.section3.title',
      items: {
        fr: [
          'Retouche photo professionnelle',
          'Photomontage avancé',
          'Corrections de couleurs',
          'Détourage et effets',
          'Optimisation pour réseaux sociaux'
        ],
        ar: [
          'معالجة صور احترافية',
          'مونتاج صور متقدم',
          'تصحيح الألوان',
          'قص وإضافة تأثيرات',
          'تحسين الصور لوسائل التواصل'
        ],
        en: [
          'Professional photo retouching',
          'Advanced photomontage',
          'Color correction',
          'Cut-out & effects',
          'Social media optimization'
        ]
      }
    },
    {
      icon: PenTool,
      titleKey: 'design.section4.title',
      items: {
        fr: [
          'Création d’illustrations',
          'Designs vectoriels',
          'Visuels personnalisés pour marques',
          'Illustrations marketing',
          'Assets graphiques pour applications'
        ],
        ar: [
          'إنشاء رسومات توضيحية',
          'تصاميم فيكتر',
          'محتوى بصري مخصص للعلامات التجارية',
          'رسومات تسويقية',
          'عناصر رسومية للتطبيقات'
        ],
        en: [
          'Custom illustrations',
          'Vector designs',
          'Brand-specific visuals',
          'Marketing illustrations',
          'Graphic assets for apps'
        ]
      }
    }
  ];

  return (
    <div className="min-h-screen bg-white">

      {/* HEADER */}
      <div className="bg-gradient-to-br from-[#F15A24] to-[#ff7e50] text-white py-20 md:py-32 px-4 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-32 h-32 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-40 h-40 bg-white rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-5xl mx-auto text-center relative z-10">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6">
            {t('design.title')}
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto">
            {t('design.desc')}
          </p>
        </div>
      </div>

      {/* CONTENT */}
      <div className="max-w-6xl mx-auto px-4 py-16 md:py-24">

        <div className="space-y-16">
          {sections.map((section, index) => {
            const Icon = section.icon;
            return (
              <div key={index} className="bg-[#F7F7F7] rounded-3xl p-6 md:p-10">

                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#F15A24] to-[#ff7e50] rounded-xl flex items-center justify-center shadow-lg">
                    <Icon className="w-6 h-6 text-white" />
                  </div>

                  <h2
                    className={`text-2xl md:text-3xl font-bold text-[#1A1A1A] ${
                      language === 'ar' ? 'mr-4' : 'ml-4'
                    }`}
                  >
                    {t(section.titleKey)}
                  </h2>
                </div>

                <ul className="space-y-4">
                  {section.items[language].map((item, idx) => (
                    <li key={idx} className="flex items-start">
                      <div
                        className={`w-2 h-2 bg-[#F15A24] rounded-full mt-2 flex-shrink-0 ${
                          language === 'ar' ? 'ml-3' : 'mr-3'
                        }`}
                      ></div>
                      <span className="text-[#2B2B2B] text-lg">{item}</span>
                    </li>
                  ))}
                </ul>

              </div>
            );
          })}
        </div>

        {/* WHATSAPP */}
        <div className="mt-16 space-y-4">
          <a
            href="https://wa.me/213775643433"
            className="block w-full bg-green-500 hover:bg-green-600 text-white py-5 rounded-2xl font-semibold text-lg text-center transition-all transform hover:scale-105 shadow-lg"
          >
            {t('button.whatsapp1')}
          </a>

          <a
            href="https://wa.me/213549278411"
            className="block w-full bg-green-500 hover:bg-green-600 text-white py-5 rounded-2xl font-semibold text-lg text-center transition-all transform hover:scale-105 shadow-lg"
          >
            {t('button.whatsapp2')}
          </a>
        </div>

        {/* BACK */}
        <div className="mt-8 text-center">
          <Link
            to="/"
            className="inline-flex items-center text-[#F15A24] hover:text-[#d94e1f] font-semibold text-lg transition-colors"
          >
            <ArrowLeft
              className={`w-5 h-5 ${
                language === 'ar' ? 'ml-2 rotate-180' : 'mr-2'
              }`}
            />
            {t('button.backhome')}
          </Link>
        </div>

      </div>
    </div>
  );
}