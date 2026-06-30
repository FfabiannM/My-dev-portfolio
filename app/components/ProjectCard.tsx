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
  dates: string;
  description_es: string[];
  description_en: string[];
}

export interface Project {
  name_es: string;
  name_en: string;
  description_es: string;
  description_en: string;
  tecnologies: Technology[];
  github_link: string;
  information: Info[];
}

export const ProjectCard = ({ project }: { project: Project }) => {
  const { lang } = useLanguageStore();

  const name = lang === 'es' ? project.name_es : project.name_en;
  const description =
    lang === 'es' ? project.description_es : project.description_en;

  return (
    <div className="flex flex-col gap-4 p-6 border-2 border-dashed border-gray-300 dark:border-gray-700 rounded-3xl hover:border-gray-500 dark:hover:border-gray-400 transition-colors duration-300 bg-transparent efecto_lis h-full">
      <div className="flex justify-between items-start gap-4">
        <h3 className="text-2xl font-bold font-arima text-gray-800 dark:text-gray-100">
          {name}
        </h3>
        {project.github_link && project.github_link !== '' && (
          <a
            href={project.github_link}
            target="_blank"
            rel="noreferrer"
            className="hover:scale-110 transition-transform bg-gray-100 dark:bg-zinc-800 px-3 py-1 rounded-full text-sm font-medium whitespace-nowrap border border-gray-200 dark:border-gray-700"
          >
            {lang === 'es' ? 'Ver Código' : 'View Code'}
          </a>
        )}
      </div>

      <p className="text-gray-600 dark:text-gray-400 text-md">{description}</p>

      {project.information && project.information.length > 0 && (
        <div className="flex flex-col gap-3 mt-2">
          {project.information.map((info, idx) => {
            const position =
              lang === 'es' ? info.position_es : info.position_en;
            const descList =
              lang === 'es' ? info.description_es : info.description_en;

            return (
              <div
                key={idx}
                className="bg-gray-50 dark:bg-zinc-900/50 p-4 rounded-2xl border border-gray-100 dark:border-gray-800"
              >
                <div className="flex justify-between items-center mb-2 flex-wrap gap-2">
                  <span className="font-semibold text-gray-800 dark:text-gray-200">
                    {position}
                  </span>
                  <span className="text-xs text-gray-500 bg-white dark:bg-zinc-800 px-2 py-1 rounded-md">
                    {info.dates}
                  </span>
                </div>
                {descList && descList.length > 0 ? (
                  <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 text-md space-y-1">
                    {descList.map((desc, i) => (
                      <li key={i} className="leading-relaxed">
                        {desc}
                      </li>
                    ))}
                  </ul>
                ) : null}
              </div>
            );
          })}
        </div>
      )}

      <div className="flex flex-wrap gap-2 mt-auto pt-4">
        {project.tecnologies.map((tech, idx) => (
          <div
            key={idx}
            className="flex items-center gap-2 px-3 py-1.5 border border-gray-200 dark:border-gray-700 rounded-xl text-md font-mono bg-white dark:bg-black efecto_lis cursor-default"
          >
            {tech.icon && (
              <div className="relative w-4 h-4">
                <Image
                  src={tech.icon}
                  alt={tech.name}
                  fill
                  className="object-contain"
                />
              </div>
            )}
            <span>{tech.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
