import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Globe } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

// 🟠 import your real logo here:
import logo from '../assets/logo/hizou-logo.png';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showLangMenu, setShowLangMenu] = useState(false);

  const { language, setLanguage, t } = useLanguage();
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const switchLang = (lang: 'fr' | 'ar' | 'en') => {
    setLanguage(lang);
    setShowLangMenu(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-white/80 border-b border-black/5 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">

          {/* LOGO */}
          <Link to="/" className="flex items-center gap-3 group">
            
            {/* Logo image */}
            <div className="w-12 h-12 rounded-xl overflow-hidden shadow-md group-hover:shadow-lg transition-all duration-300">
              <img
                src={logo}
                alt="Hizou Logo"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Brand name */}
            <span className="text-2xl font-bold text-[#1A1A1A] tracking-tight group-hover:text-[#F15A24] transition-colors">
              Hizou
            </span>
          </Link>

          {/* DESKTOP NAV */}
          <nav className="hidden md:flex items-center gap-10">

            <Link
              to="/"
              className={`relative text-[16px] transition-colors ${
                isActive('/') ? 'text-[#F15A24] font-semibold'
                : 'text-[#2B2B2B] hover:text-[#F15A1A]'
              }`}
            >
              {t('nav.home')}
            </Link>

            <button
              onClick={(e) => {
                if (location.pathname === '/') {
                  e.preventDefault();
                  document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="text-[#2B2B2B] hover:text-[#F15A24] text-[16px] transition-colors"
            >
              {t('nav.services')}
            </button>

            <button
              onClick={(e) => {
                if (location.pathname === '/') {
                  e.preventDefault();
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="text-[#2B2B2B] hover:text-[#F15A24] text-[16px] transition-colors"
            >
              {t('nav.contact')}
            </button>
          </nav>

          {/* RIGHT SIDE */}
          <div className="flex items-center gap-4 relative">

            {/* LANGUAGE */}
            <div className="relative">
              <button
                onClick={() => setShowLangMenu(!showLangMenu)}
                className="p-2 rounded-full bg-white border border-gray-200 hover:bg-gray-100 transition-all shadow-sm"
              >
                <Globe className="w-5 h-5 text-[#1A1A1A]" />
              </button>

              {showLangMenu && (
                <div className="absolute top-12 right-0 bg-white rounded-xl shadow-xl border py-2 w-32 animate-fadeIn z-50">
                  <button
                    onClick={() => switchLang('fr')}
                    className={`block w-full px-4 py-2 text-left hover:bg-gray-100 ${
                      language === 'fr' ? 'text-[#F15A24] font-semibold' : 'text-[#1A1A1A]'
                    }`}
                  >
                    Français
                  </button>
                  <button
                    onClick={() => switchLang('ar')}
                    className={`block w-full px-4 py-2 text-left hover:bg-gray-100 ${
                      language === 'ar' ? 'text-[#F15A24] font-semibold' : 'text-[#1A1A1A]'
                    }`}
                  >
                    العربية
                  </button>
                  <button
                    onClick={() => switchLang('en')}
                    className={`block w-full px-4 py-2 text-left hover:bg-gray-100 ${
                      language === 'en' ? 'text-[#F15A24] font-semibold' : 'text-[#1A1A1A]'
                    }`}
                  >
                    English
                  </button>
                </div>
              )}
            </div>

            {/* MOBILE BUTTON */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 hover:text-[#F15A24] transition-colors"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>

          </div>
        </div>
      </div>

      {/* MOBILE MENU */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 shadow-sm animate-fadeIn">
          <nav className="flex flex-col px-4 py-4 space-y-3">

            <Link
              to="/"
              onClick={() => setIsMenuOpen(false)}
              className={`py-2 px-4 rounded-lg transition-colors ${
                isActive('/') ? 'bg-[#F15A24] text-white' : 'hover:bg-gray-100'
              }`}
            >
              {t('nav.home')}
            </Link>

            <button
              onClick={(e) => {
                setIsMenuOpen(false);
                if (location.pathname === '/') {
                  e.preventDefault();
                  document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="py-2 px-4 rounded-lg hover:bg-gray-100"
            >
              {t('nav.services')}
            </button>

            <button
              onClick={(e) => {
                setIsMenuOpen(false);
                if (location.pathname === '/') {
                  e.preventDefault();
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="py-2 px-4 rounded-lg hover:bg-gray-100"
            >
              {t('nav.contact')}
            </button>

          </nav>
        </div>
      )}
    </header>
  );
}