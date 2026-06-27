import { create } from 'zustand'

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
