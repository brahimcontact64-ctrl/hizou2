import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type Language = 'fr' | 'ar' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations: Record<string, Record<Language, string>> = {

  // ---------------- NAV ----------------
  'nav.home': { fr: 'Accueil', ar: 'الرئيسية', en: 'Home' },
  'nav.services': { fr: 'Services', ar: 'الخدمات', en: 'Services' },
  'nav.projects': { fr: 'Projets', ar: 'المشاريع', en: 'Projects' },
  'nav.contact': { fr: 'Contact', ar: 'اتصل بنا', en: 'Contact' },

  // ---------------- HEADER ----------------
  'header.logo': {
    fr: 'Hizou Agency',
    ar: 'حزو أجينسي',
    en: 'Hizou Agency'
  },

  // ---------------- FOOTER ----------------
  'footer.developed': {
   fr: 'Développé par Brahim Beldjilali',
  ar: 'تم تطويره من طرف إبراهيم بلجيلالي',
  en: 'Developed by Brahim Beldjilali'

  },

  // ---------------- HERO ----------------
  'hero.title': {
    fr: 'Votre Partenaire Créatif Digital',
    ar: 'شريكك الإبداعي الرقمي',
    en: 'Your Creative Digital Partner'
  },
  'hero.subtitle': {
    fr: 'Marketing • Production • Design',
    ar: 'تسويق • إنتاج • تصميم',
    en: 'Marketing • Production • Design'
  },
  'hero.cta': { fr: 'Contactez-nous', ar: 'اتصل بنا', en: 'Contact Us' },

  // ---------------- SERVICES ----------------
  'services.title': { fr: 'Nos Services', ar: 'خدماتنا', en: 'Our Services' },

  'pack1.title': {
    fr: 'Gestion & Marketing des Réseaux Sociaux',
    ar: 'إدارة وتسويق وسائل التواصل الاجتماعي',
    en: 'Social Media Management & Marketing'
  },
  'pack1.desc': {
    fr: 'Gestion complète des réseaux sociaux, création de contenu, stratégie et développement web',
    ar: 'إدارة كاملة لوسائل التواصل الاجتماعي، إنشاء المحتوى، الاستراتيجية والتطوير',
    en: 'Complete social media management, content creation, strategy and web development'
  },

  'pack2.title': {
    fr: 'Production & Montage Vidéo',
    ar: 'الإنتاج والمونتاج الفيديو',
    en: 'Video Production & Editing'
  },
  'pack2.desc': {
    fr: 'Tournage professionnel, montage créatif, scripts et voix-off',
    ar: 'تصوير احترافي، مونتاج إبداعي، سكريبت وتعليق صوتي',
    en: 'Professional shooting, creative editing, scripts and voice-over'
  },

  'pack3.title': {
    fr: 'Branding & Design Graphique',
    ar: 'العلامة التجارية والتصميم الجرافيكي',
    en: 'Branding & Graphic Design'
  },
  'pack3.desc': {
    fr: 'Identité visuelle, réseaux sociaux, packaging et supports imprimés',
    ar: 'الهوية البصرية، التصميم، التغليف والمطبوعات',
    en: 'Visual identity, design, packaging and print materials'
  },

  'price.from': { fr: 'À partir de', ar: 'ابتداء من', en: 'Starting from' },

  // ---------- BUTTONS ----------
  'button.details': { fr: 'Voir détails', ar: 'عرض التفاصيل', en: 'See details' },
  'button.whatsapp1': { fr: 'Commander via WhatsApp (1)', ar: 'اطلب عبر واتساب (1)', en: 'Order via WhatsApp (1)' },
  'button.whatsapp2': { fr: 'Commander via WhatsApp (2)', ar: 'اطلب عبر واتساب (2)', en: 'Order via WhatsApp (2)' },
  'button.backhome': { fr: 'Retour à l\'accueil', ar: 'العودة للرئيسية', en: 'Back to home' },

  // ---------------- CLIENTS ----------------
  'clients.title': { fr: 'Nos Clients', ar: 'عملاؤنا', en: 'Our Clients' },

  // ---------------- CONTACT ----------------
  'contact.titleSocial': { fr: 'Contactez-nous', ar: 'تواصل معنا', en: 'Get in Touch' },
  'contact.title': { fr: 'Contactez-nous', ar: 'اتصل بنا', en: 'Contact Us' },
  'contact.subtitle': {
    fr: 'Nous sommes disponibles 7j/7 pour répondre à vos projets.',
    ar: 'نحن متاحون 7 أيام في الأسبوع لخدمتكم.',
    en: 'We are available 7 days a week to assist you.'
  },
  'contact.whatsapp': { fr: 'WhatsApp', ar: 'واتساب', en: 'WhatsApp' },
  'contact.whatsappDesc': {
    fr: 'Discutez directement avec notre équipe.',
    ar: 'تواصل مباشرة مع فريقنا.',
    en: 'Chat directly with our team.'
  },
  'contact.phoneTitle': { fr: 'Téléphone', ar: 'الهاتف', en: 'Phone' },
  'contact.phoneDesc': {
    fr: 'Appelez-nous pour plus d\'informations.',
    ar: 'اتصل بنا للمزيد من المعلومات.',
    en: 'Call us for more information.'
  },
  'contact.socialTitle': { fr: 'Réseaux sociaux', ar: 'وسائل التواصل الاجتماعي', en: 'Social Media' },
  'contact.socialDesc': {
    fr: 'Suivez-nous pour voir nos derniers projets.',
    ar: 'تابعونا لمشاهدة آخر أعمالنا.',
    en: 'Follow us to see our latest projects.'
  },

  // ---------------- SOCIAL MEDIA SERVICE ----------------
  'sm.section1.title': { fr: 'Gestion des Réseaux Sociaux', ar: 'إدارة وسائل التواصل الاجتماعي', en: 'Social Media Management' },
  'sm.section2.title': { fr: 'Stratégie Marketing', ar: 'الاستراتيجية التسويقية', en: 'Marketing Strategy' },
  'sm.section3.title': { fr: 'Développement Web & Apps', ar: 'تطوير الويب والتطبيقات', en: 'Web & App Development' },
  'sm.section4.title': { fr: 'Promotion & Publicité', ar: 'الترويج والإعلان', en: 'Promotion & Advertising' },

  // ---------------- VIDEO SERVICE ----------------
  'video.section1.title': { fr: 'Tournage Professionnel', ar: 'التصوير الاحترافي', en: 'Professional Shooting' },
  'video.section2.title': { fr: 'Montage & Post-Production', ar: 'المونتاج والإنتاج', en: 'Editing & Post-Production' },
  'video.section3.title': { fr: 'Écriture de Scripts', ar: 'كتابة السكريبت', en: 'Script Writing' },
  'video.section4.title': { fr: 'Voix-Off', ar: 'التعليق الصوتي', en: 'Voice-Over' },

  // ---------------- DESIGN SERVICE ----------------
  'design.title': {
    fr: 'Service de Design',
    ar: 'خدمة التصميم',
    en: 'Design Service'
  },
  'design.desc': {
    fr: 'Nous créons des identités visuelles modernes et professionnelles adaptées à votre marque.',
    ar: 'نصمّم هويات بصرية حديثة واحترافية تناسب علامتك التجارية.',
    en: 'We create modern and professional visual identities tailored to your brand.'
  },
  'design.section1.title': { fr: 'Identité Visuelle', ar: 'الهوية البصرية', en: 'Visual Identity' },
  'design.section2.title': { fr: 'Graphisme & Réseaux Sociaux', ar: 'التصميم ووسائل التواصل', en: 'Graphic Design & Social Media' },
  'design.section3.title': { fr: 'Retouche & Photomontage', ar: 'المونتاج ومعالجة الصور', en: 'Retouching & Photomontage' },
  'design.section4.title': { fr: 'Illustrations & Vectoriels', ar: 'الرسومات والفيكتر', en: 'Illustrations & Vector Art' },

  // ---------------- PORTFOLIO ----------------
  'portfolio.title': { fr: 'Portfolio', ar: 'معرض الأعمال', en: 'Portfolio' }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('fr');

  useEffect(() => {
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = language;
  }, [language]);

  const t = (key: string): string => translations[key]?.[language] || key;

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }
  return context;
}