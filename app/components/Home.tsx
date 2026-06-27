import Image from "next/image";
import React from "react";
import { ExperienceCard } from "./ExperienceCard";
import { ProjectCard } from "./ProjectCard";
import experiences from "../data/exp.json";
import projects from "../data/projects.json";

const Home = () => {
  return (
    <div className="flex flex-col justify-start items-center w-full pb-32">
      {/* Sección Inicio */}
      <section id="home" className="w-full max-w-5xl flex flex-col gap-5 pt-20 px-5 min-h-[80vh] justify-center">
        <div className="cursor-default">
          <div className="gap-2 efecto_lis_texto">
            <h5 className="flex text-xl text-center font-light self-start pt-10 text-gray-800 dark:text-gray-200">Hola soy</h5>
            <div className="flex flex-row items-center gap-2">
              <Image src="/chevron-r.svg" className="icon-svg dark:invert" alt="chev" width={75} height={75} />
              <h1 className="text-7xl text-center font-arima text-gray-800 dark:text-gray-200">Fabian Mina</h1>
            </div>
          </div>
          <div className="flex flex-col items-start gap-5 pt-5">
            <h2 className="text-2xl text-left font-semibold font-mono text-gray-800 dark:text-gray-200">Informático y desarrollador de software.</h2>
            <h2 className="text-xl text-left font-sans text-gray-800 dark:text-gray-200 max-w-2xl">
              React, React Native, Next.js. Construyo aplicaciones Web y Móvil.
            </h2>
          </div>
        </div>
      </section>

      {/* Sección Experiencia */}
      <section id="experiencia" className="w-full max-w-5xl flex flex-col gap-10 pt-20 px-5">
        <div className="flex items-center gap-4 mb-5">
          <h2 className="text-4xl font-arima font-bold text-gray-800 dark:text-gray-100">Experiencia Destacada</h2>
          <div className="h-px bg-gray-300 dark:bg-gray-700 grow"></div>
        </div>
        
        <div className="flex flex-col gap-12">
          {experiences.map((exp, idx) => (
            <ExperienceCard key={idx} experience={exp} />
          ))}
        </div>
      </section>

      {/* Sección Proyectos */}
      <section id="proyectos" className="w-full max-w-5xl flex flex-col gap-10 pt-20 px-5">
        <div className="flex items-center gap-4 mb-5">
          <h2 className="text-4xl font-arima font-bold text-gray-800 dark:text-gray-100">Otros Proyectos</h2>
          <div className="h-px bg-gray-300 dark:bg-gray-700 grow"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((proj, idx) => (
            <ProjectCard key={idx} project={proj} />
          ))}
        </div>
      </section>
      
      {/* Espacios preparados para nuevas secciones */}
      <section id="habilidades" className="w-full max-w-5xl flex flex-col gap-10 pt-20 px-5">
         {/* TODO: Agregar habilidades aquí */}
      </section>

      <section id="contacto" className="w-full max-w-5xl flex flex-col gap-10 pt-20 px-5">
         {/* TODO: Agregar contacto aquí */}
      </section>

    </div>
  );
};

export default Home;