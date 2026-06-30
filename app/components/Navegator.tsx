'use client';

import { useEffect } from 'react';
import { useActiveSection } from '../hooks/useActiveSection';
import { useLanguageStore } from '../store/store';

const Navegator = () => {
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
  }, []);

  const sectionIds = ['home', 'experiencia', 'sobre-mi', 'contacto'];
  const activeSection = useActiveSection(sectionIds);
  const { lang } = useLanguageStore();

  const getLabel = (id: string, lang: 'es' | 'en') => {
    const map: Record<string, Record<'es' | 'en', string>> = {
      home: { es: 'Inicio', en: 'Home' },
      experiencia: { es: 'Experiencia', en: 'Experience' },
      'sobre-mi': { es: 'Sobre mí', en: 'About me' },
      contacto: { es: 'Contacto', en: 'Contact' },
    };
    return map[id]?.[lang] || id;
  };

  return (
    <header className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 w-auto bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl border border-gray-200/50 dark:border-gray-700/50 rounded-full shadow-2xl transition-all duration-500">
      <nav className="flex items-center h-20 px-4 md:px-8 py-2">
        <ul className="flex gap-2 md:gap-4 items-center">
          {sectionIds.map((id) => {
            const isActive = activeSection === id;

            return (
              <li key={id} className="relative flex flex-col items-center">
                <a
                  href={`#${id}`}
                  className={`relative flex flex-col items-center justify-center gap-1.5 px-6 py-1 rounded-2xl transition-all duration-300 group ${
                    isActive
                      ? 'bg-gray-900 dark:bg-white text-white dark:text-gray-900 shadow-md animate-fade-in animate-duration-400'
                      : 'text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800'
                  }`}
                >
                  <span
                    className={`w-7 h-7 md:w-8 md:h-8 inline-block transition-colors duration-300 ${
                      isActive
                        ? 'bg-white dark:bg-gray-900'
                        : 'bg-gray-500 dark:bg-gray-400 group-hover:bg-gray-900 dark:group-hover:bg-white'
                    }`}
                    style={{
                      WebkitMaskImage: `url('/Navegator/${id}.svg')`,
                      WebkitMaskSize: 'contain',
                      WebkitMaskRepeat: 'no-repeat',
                      WebkitMaskPosition: 'center',
                      maskImage: `url('/Navegator/${id}.svg')`,
                      maskSize: 'contain',
                      maskRepeat: 'no-repeat',
                      maskPosition: 'center',
                    }}
                  />

                  <span
                    className={`text-sm md:text-base font-bold font-arima uppercase tracking-wider transition-all duration-300 ${
                      isActive
                        ? 'opacity-100'
                        : 'opacity-70 group-hover:opacity-100'
                    }`}
                  >
                    {getLabel(id, lang)}
                  </span>
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
};

export default Navegator;
