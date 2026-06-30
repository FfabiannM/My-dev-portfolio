'use client';

import React from 'react';
import Image from 'next/image';
import { useLanguageStore } from '../store/store';

interface Technology {
  icon: string;
  name: string;
}

interface Info {
  position_es: string;
  position_en: string;
  name: string;
  dates_es: string;
  dates_en: string;
  description_es: string[];
  description_en: string[];
}

export interface Experience {
  name_project: string;
  description_es: string;
  description_en: string;
  image: string;
  tecnologies: Technology[];
  link: string;
  github_link: string;
  information: Info[];
}

export const ExperienceCard = ({ experience }: { experience: Experience }) => {
  const { lang } = useLanguageStore();

  const description = lang === 'es' ? experience.description_es : experience.description_en;

  return (
    <div className="flex flex-col md:flex-row gap-6 p-6 border border-gray-200 dark:border-gray-800 rounded-3xl bg-white dark:bg-zinc-900 shadow-sm hover:shadow-md transition-shadow duration-300">
      <div className="flex flex-col w-full md:w-2/3 justify-between gap-4">
        <div>
          <div className="flex justify-between items-start mb-2 gap-4 flex-wrap">
            <h3 className="text-3xl font-bold font-arima text-gray-900 dark:text-white">{experience.name_project}</h3>
            <div className="flex gap-3">
              {experience.github_link && experience.github_link !== "" && (
                <a href={experience.github_link} target="_blank" rel="noreferrer" className="hover:scale-110 transition-transform">
                  <span className="text-sm border border-gray-300 dark:border-gray-700 px-3 py-1 rounded-full whitespace-nowrap">GitHub</span>
                </a>
              )}
              {experience.link && experience.link !== "" && (
                <a href={experience.link} target="_blank" rel="noreferrer" className="hover:scale-110 transition-transform">
                  <span className="text-sm border border-gray-300 dark:border-gray-700 px-3 py-1 rounded-full whitespace-nowrap">
                    {lang === 'es' ? 'Ver Web' : 'Visit Web'}
                  </span>
                </a>
              )}
            </div>
          </div>
          <p className="text-gray-600 dark:text-gray-400 font-sans mb-4">{description}</p>
          
          <div className="flex flex-col gap-6">
            {experience.information.map((info, idx) => {
              const position = lang === 'es' ? info.position_es : info.position_en;
              const dates = lang === 'es' ? info.dates_es : info.dates_en;
              const descList = lang === 'es' ? info.description_es : info.description_en;

              return (
                <div key={idx} className="flex flex-col gap-2 border-l-2 border-gray-300 dark:border-gray-700 pl-4">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1">
                    <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200">{position}</h4>
                    <span className="text-xs text-gray-500 bg-gray-100 dark:bg-zinc-800 px-2 py-1 rounded-lg w-fit">{dates}</span>
                  </div>
                  <span className="text-sm font-medium text-blue-600 dark:text-blue-400">{info.name}</span>
                  <ul className="list-disc list-inside mt-2 text-gray-600 dark:text-gray-300 text-md space-y-1.5">
                    {descList.map((desc, i) => (
                      <li key={i} className="leading-relaxed">{desc}</li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>

        <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t border-gray-100 dark:border-gray-800">
          {experience.tecnologies.map((tech, idx) => (
            <div key={idx} className="flex items-center gap-1.5 px-3 py-1.5 bg-gray-50 dark:bg-black border border-gray-200 dark:border-gray-800 rounded-xl text-md font-mono efecto_lis cursor-default">
              {tech.icon && (
                <div className="relative w-4 h-4">
                  <Image src={tech.icon} alt={tech.name} fill className="object-contain" />
                </div>
              )}
              <span>{tech.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
