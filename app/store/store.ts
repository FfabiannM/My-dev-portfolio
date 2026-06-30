import { create } from 'zustand'

import translations from '../data/translations.json';

interface ThemeState {
    mode: string;
    setMode: (mode: string) => void;
    getState: () => string;
    setState: (mode: string) => void;
}

export const useStore = create<ThemeState>((set,get) => ({
    mode: 'light',
    setMode: (mode: string) => set({ mode }),
    getState: () => get().mode,
    setState: (mode: string) => get().setMode(mode),
}))

export interface LanguageState {
  lang: 'es' | 'en';
  setLanguage: (lang: 'es' | 'en') => void;
  t: (key: string) => any;
}

const resolvePath = (object: any, path: string) => {
  return path.split('.').reduce((acc, part) => acc && acc[part], object);
};

export const useLanguageStore = create<LanguageState>((set, get) => ({
  lang: 'es',
  setLanguage: (lang: 'es' | 'en') => set({ lang }),
  t: (key: string) => {
    const { lang } = get();
    const dict = (translations as any)[0];
    if (!dict || !dict[lang]) return key;
    const value = resolvePath(dict[lang], key);
    return value !== undefined ? value : key;
  }
}));