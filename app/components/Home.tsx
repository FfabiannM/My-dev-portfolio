'use client';

import Image from 'next/image';
import React from 'react';
import { ExperienceCard } from './ExperienceCard';
import { ProjectCard } from './ProjectCard';
import experiences from '../data/exp.json';
import projects from '../data/projects.json';
import ContactForm from './ContactForm';
import { useLanguageStore } from '../store/store';

const Home = () => {
  const { t } = useLanguageStore();

  const handleCvClick = () => {
    window.open('/cv.pdf', '_blank');
  };

  return (
    <div className="relative w-full flex flex-col justify-start items-center pb-32 overflow-hidden">
      {/* Global Background Blobs (subtle variations of neutral background colors) */}
      <div className="absolute pointer-events-none top-[5%] -right-40 w-250 h-250 rounded-full bg-white/40 dark:bg-[#222222]/30 blur-3xl z-0"></div>
      <div className="absolute pointer-events-none top-[35%] -left-40 w-160 h-160 rounded-full bg-black/3 dark:bg-white/1.5 blur-3xl z-0"></div>
      <div className="absolute pointer-events-none top-[70%] -right-32 w-200 h-200 rounded-full bg-white/30 dark:bg-[#101010]/60 blur-3xl z-0"></div>

      {/* Sección Inicio */}
      <section
        id="home"
        className="w-full max-w-5xl flex flex-col gap-5 pt-20 px-5 min-h-[80vh] justify-center z-10"
      >
        <div className="cursor-default flex flex-row items-center z-10">
          <div className="flex flex-col">
            <div className="gap-2 efecto_lis_texto">
              <h5 className="flex text-xl text-center font-light self-start pt-10 text-gray-800 dark:text-gray-200">
                {t('greeting')}
              </h5>
              <div className="flex flex-row items-center gap-2">
                <Image
                  src="/chevron-r.svg"
                  className="icon-svg dark:invert"
                  alt="chev"
                  width={75}
                  height={75}
                />
                <h1 className="text-7xl text-center font-arima font-semibold text-gray-800 dark:text-gray-200">
                  Fabian Mina
                </h1>
              </div>
            </div>
            <div className="flex flex-col items-start gap-5 pt-5">
              <h2 className="text-2xl text-left font-semibold font-mono text-gray-800 dark:text-gray-200">
                {t('sub_1')}
              </h2>
              <h2 className="text-xl text-left font-sans text-gray-800 dark:text-gray-200 max-w-2xl">
                {t('sub_2')}
              </h2>
            </div>
          </div>

          <div className="flex justify-end items-center efecto_lis_texto">
            <Image
              src="/cloud.png"
              width={500}
              height={500}
              alt="cloud"
              loading="eager"
            />
          </div>
        </div>
        <div className="efecto_lis fit-content self-start rounded-xl transition-all duration-200 z-10">
          <button
            onClick={handleCvClick}
            className="flex items-center gap-2 px-5 py-2 bg-gray-800 text-gray-200 rounded-xl cursor-pointer transition-colors duration-200"
          >
            <Image
              src="/doc-arrow-down.svg"
              className="icon-svg invert"
              alt="cv"
              width={25}
              height={25}
            />
            {t('view_cv')}
          </button>
        </div>
      </section>
      {/* Sección Experiencia */}
      <section
        id="experiencia"
        className="w-full max-w-5xl flex flex-col gap-10 pt-20 px-5 z-10"
      >
        <div className="flex flex-col items-start">
          <div className="gap-2 mb-5 efecto_lis_texto">
            <h2 className="text-4xl font-arima font-bold text-gray-800 dark:text-gray-200 cursor-default">
              {t('experience_title')}
            </h2>
          </div>
          <span className="text-gray-800 font-light text-xl dark:text-gray-500">
            {t('experience_subtitle')}
          </span>
        </div>
        <div className="flex flex-col gap-12">
          {experiences.map((exp, idx) => (
            <ExperienceCard key={idx} experience={exp as any} />
          ))}
        </div>
      </section>
      {/* Sección Sobre mi */}
      <section
        id="sobre-mi"
        className="w-full max-w-5xl flex flex-col gap-10 pt-20 px-5 z-10"
      >
        <div className="flex items-center gap-4 mb-5">
          <div className="gap-2 mb-5 efecto_lis_texto">
            <h2 className="text-4xl font-arima font-bold text-gray-800 dark:text-gray-200 cursor-default">
              {t('projects_title')}
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((proj, idx) => (
            <ProjectCard key={idx} project={proj as any} />
          ))}
        </div>

        <div>
          <div className="flex flex-col gap-6">
            <div className="gap-2 mb-5 efecto_lis_texto">
              <h2 className="text-4xl font-arima font-bold text-gray-800 dark:text-gray-200 cursor-default">
                {t('about_me_title')}
              </h2>
            </div>
            <div>
              <div className=" rounded-full image_profile efecto_lis overflow-hidden">
                <div className="relative w-full h-full">
                  {/* Imagen inicial */}
                  <Image
                    src="/images/Me.jpeg"
                    alt="Imagen inicial"
                    fill
                    className="object-cover transition-all duration-150 hover:scale-110"
                  />

                  {/* Imagen que aparece en hover */}
                </div>
              </div>
              <div>
                <p className="text-gray-800 font-light text-xl dark:text-gray-200">
                  {t('about_me_text.text1')}{' '}
                  <a
                    href="https://www.emi.edu.bo"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:scale-110 transition-transform"
                  >
                    Escuela Militar de Ingeniería "Mariscal Antonio José de
                    Sucre"
                  </a>{' '}
                  {t('about_me_text.text2')}{' '}
                  <span className="font-semibold">
                    {t('about_me_text.text3')}.
                  </span>
                  <br />
                  <br />
                </p>
                <p className="text-gray-800 font-light text-xl dark:text-gray-300">
                  {t('about_me_text.text4')}
                </p>
                <br />
                <p className="font-light italic text-xl text-slate-700/70 dark:text-slate-300/70 text-justify">
                  {t('about_me_text.text5')}
                </p>
              </div>
            </div>
            <div className="h-px bg-gray-300 dark:bg-gray-700 grow"></div>
          </div>
        </div>
      </section>
      <section
        id="contacto"
        className="w-full max-w-5xl flex flex-col gap-10 pt-20 px-5 z-10"
      >
        <div className="flex items-center gap-4 mb-5">
          <div className="gap-2 mb-5 efecto_lis_texto">
            <h2 className="text-4xl font-arima font-bold text-gray-800 dark:text-gray-200 cursor-default">
              {t('contact_me_title')}
            </h2>
          </div>
          <div className="h-px bg-gray-300 dark:bg-gray-700 grow"></div>
        </div>
        <span className="text-gray-800 font-light text-xl dark:text-gray-400">
          {t('contact_subtitle')}
        </span>
        <ContactForm />
      </section>
    </div>
  );
};

export default Home;
