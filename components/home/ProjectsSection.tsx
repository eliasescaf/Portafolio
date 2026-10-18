"use client";

import {useState} from "react";
import { FaProjectDiagram } from "react-icons/fa";
import ItemCard from "../ui/ItemCard";

const PROJECTS = [
    {
        title: "Sistema de Gestión Plantín",
        subtitle: "PHP, MySQL",
        description: "Sistema de administración y ventas para vivero: catálogo con categorías y riego, control de stock, clientes, ventas con numeración automática y usuarios con acceso por roles.",
        link: "https://github.com/eliasescaf/proyectolp"
    },
    {
        title: "Banco de Técnicos Santa Cruz",
        subtitle: "Next.js, Express, Supabase",
        description: "Portal de empleos y red técnica profesional para Santa Cruz: publicación de ofertas, registro de perfiles técnicos y panel de administración con moderación.",
        link: "https://www.banco-de-tecnicos-santa-cz.com.ar"
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
          {visibleProjects.map((project, index) => {
            const isLive = Boolean(project.link) && !project.link.includes("github.com");
            const tag = !project.link ? "" : isLive ? "live" : "github";

            return (
              <ItemCard
                  key={index}
                  title={project.title}
                  subtitle={project.subtitle}
                  description={project.description}
                  href={project.link}
                  tag={tag}
              ></ItemCard>
            );
          })}
        </div>

        {PROJECTS.length > 2 && (
            <button onClick={() => setShowAll(!showAll)} className="mt-6 w-full py-3 rounded-lg border border-zinc-800 bg-zinc-900/30 hover:border-zinc-700 hover:bg-zinc-800 transition-all text-zinc-400 text-sm font-medium hover:text-zinc-100">
                {showAll ? "Show less" : "Show all"}
            </button>
        )}

      </section>
    );
}