"use client";

import Image from "next/image";

const Navegator = () => {
  return (
    <header className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 w-auto bg-white/70 dark:bg-gray-900/70 backdrop-blur-md text-gray-900 dark:text-gray-200 py-3 px-8 border border-gray-200 dark:border-gray-700 rounded-full shadow-lg transition-colors duration-300">
      <nav className="flex justify-between items-center">
        <ul className="flex gap-8 md:gap-12 items-center">
          <li className="flex flex-col items-center cursor-pointer hover:scale-110 hover:-translate-y-1 transition-all duration-300 ease-in-out">
            <a href="#home" className="flex flex-col items-center gap-1 group">
              <Image
                src="/Navegator/home.svg"
                alt="Inicio"
                width={22}
                height={22}
                className="opacity-70 group-hover:opacity-100 transition-opacity dark:invert"
              />
              <span className="text-[10px] font-semibold tracking-wider uppercase opacity-0 group-hover:opacity-100 transition-opacity absolute -bottom-4">Inicio</span>
            </a>
          </li>
          <li className="flex flex-col items-center cursor-pointer hover:scale-110 hover:-translate-y-1 transition-all duration-300 ease-in-out">
            <a href="#experiencia" className="flex flex-col items-center gap-1 group">
              <Image
                src="/Navegator/user.svg"
                alt="Experiencia"
                width={22}
                height={22}
                className="opacity-70 group-hover:opacity-100 transition-opacity dark:invert"
              />
              <span className="text-[10px] font-semibold tracking-wider uppercase opacity-0 group-hover:opacity-100 transition-opacity absolute -bottom-4">Exp</span>
            </a>
          </li>
          <li className="flex flex-col items-center cursor-pointer hover:scale-110 hover:-translate-y-1 transition-all duration-300 ease-in-out">
            <a href="#proyectos" className="flex flex-col items-center gap-1 group">
              <Image
                src="/Navegator/mail.svg"
                alt="Proyectos"
                width={22}
                height={22}
                className="opacity-70 group-hover:opacity-100 transition-opacity dark:invert"
              />
              <span className="text-[10px] font-semibold tracking-wider uppercase opacity-0 group-hover:opacity-100 transition-opacity absolute -bottom-4">Proy</span>
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navegator;