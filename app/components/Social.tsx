import Image from 'next/image';
import { useLanguageStore } from '../store/store';

const SocialProfileGrid = () => {
  const { lang } = useLanguageStore();

  const labels: Record<string, Record<'es' | 'en', string>> = {
    profile_linkedin: { es: 'Perfil profesional', en: 'Profile' },
    connect: { es: 'Conectar', en: 'Connect' },
    repositories: { es: 'Repositorios y Stats', en: 'Repositories and Stats' },
    view_repositories: { es: 'Ver repositorios', en: 'View Repositories' },
    user: { es: 'Usuario', en: 'User' },
  };

  return (
    <div className="max-w-5xl mx-auto py-2">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 auto-rows-auto">
        {/* 1 - Gmail (Rojo Google) */}
        <a
          href="mailto:fmontanolebian@gmail.com"
          className="efecto_lis md:col-span-2 md:row-span-1 md:col-start-1 md:row-start-1 group relative bg-red-50/60 dark:bg-red-950/20 border border-red-100/80 dark:border-red-900/30 rounded-2xl p-6 flex flex-row items-center gap-4 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1"
        >
          <div className="flex items-center justify-center w-12 h-12 bg-red-100/50 dark:bg-red-900/40 rounded-xl text-red-600 dark:text-red-400 group-hover:scale-110 transition-transform duration-300">
            <Image
              src="/Navegator/contacto.svg"
              alt="Gmail"
              width={26}
              height={26}
              className="text-red-500 dark:invert-75"
            />
          </div>
          <div className="flex flex-col min-w-0">
            <h3 className="font-arima font-bold text-red-600 dark:text-red-400 text-lg leading-tight">
              Gmail
            </h3>
            <p className="text-sm font-mono text-gray-600 dark:text-gray-400 mt-0.5 break-all">
              fmontanolebian@gmail.com
            </p>
          </div>
        </a>

        {/* 2 - LinkedIn (Azul Corporativo) */}
        <a
          href="https://www.linkedin.com/in/fabian-monta%C3%B1o-b0b2bb297/"
          target="_blank"
          rel="noopener noreferrer"
          className="efecto_lis md:col-span-2 md:row-span-2 md:col-start-3 md:row-start-1 group relative bg-blue-50/60 dark:bg-blue-950/20 border border-blue-100/80 dark:border-blue-900/30 rounded-2xl p-6 flex flex-col justify-between items-center shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 min-h-[220px]"
        >
          <div className="absolute top-4 right-4 text-blue-600 dark:text-blue-400 group-hover:rotate-12 transition-transform duration-300">
            <Image src="/linkedin.svg" alt="LinkedIn" width={24} height={24} />
          </div>

          <div className="text-center w-full mt-2">
            <h3 className="font-arima font-bold text-blue-700 dark:text-blue-400 text-lg leading-tight">
              LinkedIn
            </h3>
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
              {labels.profile_linkedin[lang]}
            </p>
          </div>

          <div className="my-3 w-28 h-28 rounded-full border-4 border-blue-200/50 dark:border-blue-900/50 overflow-hidden shadow-inner group-hover:scale-105 transition-transform duration-300">
            <Image
              src="/images/ProfilePhoto.jpeg"
              alt="LinkedIn Foto"
              width={112}
              height={112}
              className="object-cover w-full h-full"
            />
          </div>

          <span className="text-xs text-blue-600 dark:text-blue-400 font-semibold group-hover:underline">
            {labels.connect[lang]} &rarr;
          </span>
        </a>

        {/* 3 - Discord (Blurple) */}
        <a
          href="https://discord.com/users/fabiantsu_ml"
          target="_blank"
          rel="noopener noreferrer"
          className="efecto_lis md:col-span-2 md:row-span-3 md:col-start-1 md:row-start-2 group relative bg-zinc-200 dark:bg-zinc-900/40 border border-zinc-200 dark:border-zinc-800 rounded-2xl p-6 flex flex-col justify-between items-center shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 min-h-[340px]"
        >
          <div className="absolute top-4 left-4 text-[#5865F2] group-hover:scale-110 transition-transform duration-300">
            <Image src="/discord.svg" alt="Discord" width={24} height={24} />
          </div>

          <div className="text-center w-full mt-2">
            <h3 className="font-arima font-bold text-[#5865F2] dark:text-[#7289da] text-2xl leading-tight">
              Discord
            </h3>
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
              {labels.user[lang]}
            </p>
          </div>

          <div className="my-4 w-32 h-32 rounded-full border-4 border-[#5865F2]/20 dark:border-[#5865F2]/40 overflow-hidden shadow-md group-hover:scale-105 transition-transform duration-300">
            <Image
              src="/images/ProfilePhoto_P.png"
              alt="Discord Foto"
              width={128}
              height={128}
              className="object-cover w-full h-full"
            />
          </div>

          <div className="text-center w-full">
            <span className="text-xs font-mono bg-zinc-200/80 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 py-1.5 px-3 rounded-lg border border-zinc-300/60 dark:border-zinc-700 select-all cursor-pointer hover:bg-zinc-300/80 dark:hover:bg-zinc-700 transition-colors">
              fabiantsu_ml
            </span>
          </div>
        </a>

        {/* 4 - GitHub (Negro/Blanco - Estilo Dev) */}
        <a
          href="https://github.com/FfabiannM"
          target="_blank"
          rel="noopener noreferrer"
          className="efecto_lis md:col-span-2 md:row-span-2 md:col-start-3 md:row-start-3 group relative bg-zinc-900 border border-zinc-800 dark:bg-black dark:border-zinc-900 rounded-2xl p-6 flex flex-col justify-between items-stretch shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 text-white min-h-[220px]"
        >
          <div className="absolute top-4 right-4 text-white group-hover:scale-110 transition-transform duration-300">
            <Image src="/github.svg" alt="GitHub" width={24} height={24} />
          </div>

          <div className="mt-2">
            <h3 className="font-arima font-bold text-white text-lg leading-tight">
              GitHub
            </h3>
            <p className="text-xs text-zinc-400 mt-1">
              {labels.repositories[lang]}
            </p>
          </div>

          {/* Bento mini stats / stack */}
          <div className="grid grid-cols-3 gap-2 my-3">
            <div className="flex flex-col items-center justify-center py-1.5 px-1 bg-zinc-800/60 dark:bg-zinc-900/60 rounded-lg border border-zinc-700/20">
              <span className="text-[10px] font-semibold text-zinc-300">
                React
              </span>
            </div>
            <div className="flex flex-col items-center justify-center py-1.5 px-1 bg-zinc-800/60 dark:bg-zinc-900/60 rounded-lg border border-zinc-700/20">
              <span className="text-[10px] font-semibold text-zinc-300">
                Next.js
              </span>
            </div>
            <div className="flex flex-col items-center justify-center py-1.5 px-1 bg-zinc-800/60 dark:bg-zinc-900/60 rounded-lg border border-zinc-700/20">
              <span className="text-[10px] font-semibold text-zinc-300">
                Expo
              </span>
            </div>
          </div>

          <span className="text-xs text-zinc-300 font-semibold group-hover:text-white transition-colors self-start">
            {labels.view_repositories[lang]}&rarr;
          </span>
        </a>
      </div>
    </div>
  );
};

export default SocialProfileGrid;
