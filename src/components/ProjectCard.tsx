"use client";

import { Project } from "@/types";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

interface ProjectCardProps {
  project: Project;
  onClick: () => void;
}

export default function ProjectCard({ project, onClick }: ProjectCardProps) {
  const hasGradient = project.gradient;

  return (
    <div
      className={`group relative border border-white/10 rounded-2xl p-6 transition-all duration-300 cursor-pointer overflow-hidden flex flex-col justify-between h-full ${
        hasGradient
          ? `bg-gradient-to-br ${project.gradient}`
          : "bg-black hover:bg-white/5"
      }`}
      onClick={onClick}
    >
      {/* Grid pattern overlay for gradient cards */}
      {hasGradient && (
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
      )}

      {/* Hover glow effect */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        <div
          className={`absolute inset-0 ${
            hasGradient ? "bg-white/5" : "bg-gradient-to-r from-blue-500/10 to-cyan-500/10"
          }`}
        />
      </div>

      <div className="relative z-10 flex flex-col flex-1 justify-between h-full">
        {/* Top Content: Title, Subtitle, Description */}
        <div className="flex flex-col">
          {/* Header */}
          <div className="flex justify-between items-start mb-2 sm:min-h-[4rem]">
            <h3
              className={`text-2xl font-bold tracking-tight line-clamp-2 ${
                hasGradient ? "text-white" : "text-white"
              }`}
            >
              {project.title}
            </h3>
            {project.status && (
              <span className="px-2 py-1 bg-blue-500/20 text-blue-400 text-xs rounded-full shrink-0 ml-2">
                {project.status}
              </span>
            )}
          </div>

          <p
            className={`mb-2 text-sm font-medium line-clamp-1 min-h-[1.25rem] ${
              hasGradient ? "text-white/90" : "text-gray-300"
            }`}
          >
            {project.subtitle}
          </p>
          <p
            className={`mb-4 text-sm line-clamp-3 min-h-[3.75rem] ${
              hasGradient ? "text-white/80" : "text-gray-400"
            }`}
          >
            {project.description}
          </p>
        </div>

        {/* Bottom Content: Tech stack, Action buttons, Click indicator */}
        <div className="mt-auto pt-2 flex flex-col">
          {/* Technologies */}
          <div className="flex flex-wrap items-center gap-2 mb-4 min-h-[2rem]">
            {project.technologies.slice(0, 4).map((tech) => (
              <span
                key={tech}
                className={`px-3 py-1 rounded-lg text-xs ${
                  hasGradient
                    ? "bg-white/20 text-white backdrop-blur-sm"
                    : "bg-white/10 text-white/90"
                }`}
              >
                {tech}
              </span>
            ))}
            {project.technologies.length > 4 && (
              <span
                className={`px-3 py-1 rounded-lg text-xs ${
                  hasGradient
                    ? "bg-white/20 text-white backdrop-blur-sm"
                    : "bg-white/10 text-white/90"
                }`}
              >
                +{project.technologies.length - 4}
              </span>
            )}
          </div>

          {/* Links */}
          <div className="flex items-center gap-3">
            <a
              href={project.github || "#"}
              target={project.github ? "_blank" : undefined}
              rel={project.github ? "noopener noreferrer" : undefined}
              onClick={(e) => {
                e.stopPropagation();
                if (!project.github) e.preventDefault();
              }}
              className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-sm transition-all duration-200 ${
                hasGradient
                  ? "bg-white/10 hover:bg-white/20 text-white backdrop-blur-sm"
                  : "bg-white/10 hover:bg-white/20 text-white"
              }`}
            >
              <FaGithub />
              <span>Code</span>
            </a>
            <a
              href={project.live || "#"}
              target={project.live ? "_blank" : undefined}
              rel={project.live ? "noopener noreferrer" : undefined}
              onClick={(e) => {
                e.stopPropagation();
                if (!project.live) e.preventDefault();
              }}
              className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-sm transition-all duration-200 ${
                hasGradient
                  ? "bg-white hover:bg-white/90 text-black font-semibold"
                  : "bg-cyan-500 hover:bg-cyan-400 text-black font-semibold"
              }`}
            >
              <FaExternalLinkAlt />
              <span>Live</span>
            </a>
          </div>

          {/* Click indicator */}
          <div
            className={`mt-4 text-xs ${
              hasGradient ? "text-white/70" : "text-gray-500"
            } group-hover:text-cyan-400 transition-colors`}
          >
            Click for details →
          </div>
        </div>
      </div>
    </div>
  );
}
