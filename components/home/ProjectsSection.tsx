"use client";

import {useState} from "react";
import { FaProjectDiagram } from "react-icons/fa";
import ItemCard from "../ui/ItemCard";

const PROJECTS = [
    {
        title: "Sistema de Gestión SATI",
        subtitle: "PHP",
        description: "Plataforma integral para la gestión de equipos escolares con control de inventario, asignaciones y diagramación relacional.",
        href: "#"
    },
    {
        title: "Sistema de Gestión Plantín",
        subtitle: "Javascript, PHP",
        description: "Plataforma integral para la gestión de un vivero con control de inventario, asignaciones y diagramación relacional.",
        href: "#"
    },
    {
        title: "Sistema de Reclutamiento",
        subtitle: "React, Node.js",
        description: "Plataforma integral para la gestión de reclutamiento de personal con control de inventario, asignaciones y diagramación relacional.",
        href: "#"
    }
]

export default function ProjectsSection(){
    const [showAll, setShowAll] = useState(false);

    const visibleProjects = showAll ? PROJECTS : PROJECTS.slice(0,2);

    return (
      <section className="mt-16">
        <div className="group flex items-center gap-4 mb-6">
          <FaProjectDiagram className="w-6 h-6" />
          <h2 className="text-2xl font-semibold tracking-tight text-zinc-100">
            Projects
          </h2>
          <div className="h-[1px] flex-grow bg-zinc-800 transition-colors duration-500 group-hover:bg-emerald-500"></div>
        </div>
        <div className="flex flex-col gap-4 mt-4">
          {visibleProjects.map((project, index) => (
            <ItemCard
                key={index}
                title={project.title}
                subtitle={project.subtitle}
                description={project.description}
                href={project.href}
            ></ItemCard>
          ))}
        </div>

        {PROJECTS.length > 2 && (
            <button onClick={() => setShowAll(!showAll)} className="mt-6 w-full py-3 rounded-lg border border-zinc-800 bg-zinc-900/30 hover:border-zinc-700 hover:bg-zinc-800 transition-all text-zinc-400 text-sm font-medium hover:text-zinc-100">
                {showAll ? "Show less" : "Show all"}
            </button>
        )}

      </section>
    );
}