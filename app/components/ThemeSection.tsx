'use client';
import { useStore, useLanguageStore } from '../store/store';
import Image from 'next/image';

export const ThemeSection = () => {
  const { mode, setMode } = useStore();
  const { lang, setLanguage } = useLanguageStore();

  const handleClick = () => {
    if (mode === 'dark') {
      document.body.style.backgroundColor = '#EAEAEA';
      document.body.style.color = '#171717';
      setMode('light');
    } else {
      document.body.style.backgroundColor = '#171717';
      document.body.style.color = '#EAEAEA';
      setMode('dark');
    }
  };

  return (
    <div className="fixed top-5 right-5 z-50 flex flex-row items-center gap-3 bg-white/60 dark:bg-gray-900/60 backdrop-blur-lg px-4 py-2 rounded-full border border-gray-200/60 dark:border-gray-800/60 shadow-lg transition-all duration-300">
      <div className="flex items-center">
        <select
          value={lang}
          onChange={(e) => setLanguage(e.target.value as 'es' | 'en')}
          className="bg-transparent text-gray-800 dark:text-gray-200 text-sm font-bold font-arima outline-none cursor-pointer pr-1 uppercase border-none"
        >
          <option
            value="es"
            className="bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200"
          >
            ES
          </option>
          <option
            value="en"
            className="bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200"
          >
            EN
          </option>
        </select>
      </div>
      <div className="w-px h-5 bg-gray-300 dark:bg-gray-700"></div>
      <button
        onClick={handleClick}
        className="flex items-center justify-center cursor-pointer hover:scale-110 active:scale-95 transition-all duration-200 p-1 efecto_lis_texto"
        aria-label="Toggle theme"
      >
        {mode === 'dark' ? (
          <Image
            src="/moon.svg"
            className="invert"
            alt="Modo Oscuro"
            width={20}
            height={20}
          />
        ) : (
          <Image src="/sun.svg" alt="Modo Claro" width={20} height={20} />
        )}
      </button>
    </div>
  );
};
