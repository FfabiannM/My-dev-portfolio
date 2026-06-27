import React from 'react';
import Image from 'next/image';

interface Technology {
  icon: string;
  name: string;
}

interface Info {
  puesto: string;
  name: string;
  dates: string;
  description: string[];
}

export interface Project {
  name: string;
  description: string;
  tecnologies: Technology[];
  github_link: string;
  information: Info[];
}

export const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <div className="flex flex-col gap-4 p-6 border-2 border-dashed border-gray-300 dark:border-gray-700 rounded-3xl hover:border-gray-500 dark:hover:border-gray-400 transition-colors duration-300 bg-transparent efecto_lis h-full">
      <div className="flex justify-between items-start gap-4">
        <h3 className="text-2xl font-bold font-arima text-gray-800 dark:text-gray-100">{project.name}</h3>
        {project.github_link && project.github_link !== "" && (
          <a href={project.github_link} target="_blank" rel="noreferrer" className="hover:scale-110 transition-transform bg-gray-100 dark:bg-zinc-800 px-3 py-1 rounded-full text-sm font-medium whitespace-nowrap border border-gray-200 dark:border-gray-700">
            Ver Código
          </a>
        )}
      </div>
      
      <p className="text-gray-600 dark:text-gray-400 text-md">{project.description}</p>
      
      {project.information && project.information.length > 0 && (
        <div className="flex flex-col gap-3 mt-2">
          {project.information.map((info, idx) => (
            <div key={idx} className="bg-gray-50 dark:bg-zinc-900/50 p-4 rounded-2xl border border-gray-100 dark:border-gray-800">
              <div className="flex justify-between items-center mb-2 flex-wrap gap-2">
                <span className="font-semibold text-gray-800 dark:text-gray-200">{info.puesto}</span>
                <span className="text-xs text-gray-500 bg-white dark:bg-zinc-800 px-2 py-1 rounded-md">{info.dates}</span>
              </div>
              {info.description.length > 0 && (
                <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 text-md space-y-1">
                  {info.description.map((desc, i) => (
                    <li key={i} className="leading-relaxed">{desc}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      )}

      <div className="flex flex-wrap gap-2 mt-auto pt-4">
        {project.tecnologies.map((tech, idx) => (
          <div key={idx} className="flex items-center gap-2 px-3 py-1.5 border border-gray-200 dark:border-gray-700 rounded-xl text-md font-mono bg-white dark:bg-black efecto_lis cursor-default">
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
  );
};
