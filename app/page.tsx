"use client";
import { motion } from "motion/react";
import BentoCard from "@/components/ui/BentoCard";
import ItemCard from "@/components/ui/ItemCard";
import SkillIcon from "@/components/ui/SkillIcon";
import { 
  SiNextdotjs, 
  SiReact, 
  SiTailwindcss, 
  SiAstro,
  SiCss,
  SiBootstrap,
  SiJavascript,
  SiTypescript,
  SiD3,
  SiPhp,
  SiMysql,
  SiPostgresql,
  SiPython,
  SiFastapi,
  SiLinux,
  SiLangchain,
  SiLanggraph,
  SiPytorch,
  SiTensorflow,
  SiDocker,
  SiGithub
} from "react-icons/si";
import { LuLibrary } from "react-icons/lu";
import { FaProjectDiagram } from "react-icons/fa";

import { MapPinIcon } from "@/components/ui/map-pin";

import ProfileAvatar from "@/components/ui/ProfileAvatar";
import { Mail } from "lucide-react";


export default function Home() {
  return (
    <>
      <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }} className="mt-12 md:mt-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/*Hero*/}
          {/*About*/}
          <BentoCard className="md:col-span-2">
            <ProfileAvatar />
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-zinc-100 group-hover:text-white transition-colors">
              Elias Escalante Fuentes
            </h1>
            <p className="mt-4 text-lg text-zinc-400 leading-relaxed max-w-xl">
              Software Engineer from Argentina. Student of 3rd year in
              Ingenieria en Sistemas and Analista en Sistemas. Interested in web
              development, IA/ML and fintech
            </p>
          </BentoCard>
          {/*Stack*/}
          <BentoCard className="md:row-span-2">
            <h3 className="text-zinc-100 text-2xl">Skills</h3>
            <div className="mt-4">
              <h2 className="text-zinc-400 text-[1.1rem] mb-2">Frontend</h2>
              <div className="flex flex-wrap gap-2">
                <SkillIcon icon={<SiNextdotjs className="w-6 h-6" />} name="Next.js" />
                <SkillIcon icon={<SiReact className="w-6 h-6" />} name="React" />
                <SkillIcon icon={<SiCss className="w-6 h-6" />} name="CSS" />
                <SkillIcon icon={<SiTailwindcss className="w-6 h-6" />} name="Tailwind CSS" />
                <SkillIcon icon={<SiBootstrap className="w-6 h-6" />} name="Bootstrap" />
                <SkillIcon icon={<SiJavascript className="w-6 h-6" />} name="JavaScript" />
                <SkillIcon icon={<SiTypescript className="w-6 h-6" />} name="TypeScript" />
                <SkillIcon icon={<SiAstro className="w-6 h-6" />} name="Astro" />
              </div>
            </div>

            <div className="mt-4">
              <h2 className="text-zinc-400 text-[1.1rem] mb-2">Backend</h2>
              <div className="flex flex-wrap gap-2">
                <SkillIcon icon={<SiPython className="w-6 h-6" />} name="Python" />
                <SkillIcon icon={<SiFastapi className="w-6 h-6" />} name="FastAPI" />
                <SkillIcon icon={<SiPhp className="w-6 h-6" />} name="PHP" />
                <SkillIcon icon={<SiD3 className="w-6 h-6" />} name="D3.js" />
                <SkillIcon icon={<SiMysql className="w-6 h-6" />} name="MySQL" />
                <SkillIcon icon={<SiPostgresql className="w-6 h-6" />} name="PostgreSQL" />
                <SkillIcon icon={<SiDocker className="w-6 h-6" />} name="Docker" />
              </div>
            </div>
            <div className="mt-4">
              <h2 className="text-zinc-400 text-[1.1rem] mb-2">AI</h2>
              <div className="flex flex-wrap gap-2">
                <SkillIcon icon={<SiLangchain className="w-6 h-6" />} name="LangChain" />
                <SkillIcon icon={<SiLanggraph className="w-6 h-6" />} name="LangGraph" />
                <SkillIcon icon={<SiPytorch className="w-6 h-6" />} name="PyTorch" />
                <SkillIcon icon={<SiTensorflow className="w-6 h-6" />} name="TensorFlow" />
              </div>
            </div>
          </BentoCard>

          {/*Locations*/}
          <BentoCard className="relative overflow-hidden group flex flex-col items-center justify-center p-8">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.08)_0%,transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <MapPinIcon 
            size={40} 
            className="text-emerald-500 mb-4 z-10 drop-shadow-lg" 
          />
          <div className="text-center z-10 flex flex-col gap-1">
            <h3 className="text-zinc-100 font-semibold text-xl tracking-tight">
              Caleta Olivia
            </h3>
            <p className="text-zinc-500 text-lg">
              Santa Cruz, Argentina
            </p>
          </div>
        </BentoCard>

          {/*Contact*/}
          {/* Contact */}
        <BentoCard className="flex flex-col justify-center p-8">
          <div className="mb-6">
            <h3 className="text-zinc-100 text-2xl font-semibold tracking-tight">
              Let's build something.
            </h3>
            <p className="text-zinc-400 text-sm mt-2">
              Feel free to reach out for collaborations or just a friendly hello.
            </p>
          </div>

          <div className="flex flex-col gap-3">
            {/* Botón de Email */}
            <a 
              href="mailto:eliasescalante27@gmail.com" 
              className="group flex items-center justify-between p-4 rounded-xl bg-zinc-900/50 border border-zinc-800 hover:border-zinc-700 hover:bg-zinc-800 transition-all"
            >
              <div className="flex items-center gap-3 text-zinc-300 group-hover:text-zinc-100 transition-colors">
                <Mail className="w-5 h-5" />
                <span className="font-medium text-sm">Email me</span>
              </div>
              <span className="text-zinc-500 group-hover:text-emerald-500 transition-colors">
                ↗
              </span>
            </a>

            {/* Botón de GitHub */}
            <a 
              href="https://github.com/eliasescaf" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group flex items-center justify-between p-4 rounded-xl bg-zinc-900/50 border border-zinc-800 hover:border-zinc-700 hover:bg-zinc-800 transition-all"
            >
              <div className="flex items-center gap-3 text-zinc-300 group-hover:text-zinc-100 transition-colors">
                <SiGithub className="w-5 h-5" />
                <span className="font-medium text-sm">GitHub</span>
              </div>
              <span className="text-zinc-500 group-hover:text-emerald-500 transition-colors">
                ↗
              </span>
            </a>
          </div>
        </BentoCard>
        </div>


        {/*Projects*/}
        <section className="mt-16">
          <div className="group flex items-center gap-4 mb-6">
            <FaProjectDiagram className="w-6 h-6"/>
            <h2 className="text-2xl font-semibold tracking-tight text-zinc-100">Projects</h2>
            <div className="h-[1px] flex-grow bg-zinc-800 transition-colors duration-500 group-hover:bg-emerald-500"></div>
          </div>
          <div className="flex flex-col gap-4 mt-4">
            <ItemCard
            title="Sistema de Gestión SATI"
            subtitle="2026"
            description="Plataforma integral para la gestión de equipos escolares con control de inventario, asignaciones y diagramación relacional."
            href="#"
            ></ItemCard>
            <ItemCard
            title="Sistema de Gestión de Biblioteca"
            subtitle="2026"
            description="Plataforma integral para la gestión de bibliotecas con control de inventario, asignaciones y diagramación relacional."
            href="#"
            ></ItemCard>
          </div>
        </section>

        {/*Education*/}
        <div className="mt-16">
          <div className="flex flex-col gap-4 mt-4">
            <div className="group flex items-center gap-4 mb-6">
              <LuLibrary className="w-6 h-6"/>
              <h2 className="text-2xl font-semibold tracking-tight text-zinc-100">Education</h2>
              <div className="h-[1px] flex-grow bg-zinc-800 transition-colors duration-500 group-hover:bg-emerald-500"></div>
            </div>
            <ItemCard
            title="Ingenieria en sistemas - 3rd year"
            subtitle="2024 - Present"
            description="Universidad Nacional de la Patagonia Austral - UNPA"
            ></ItemCard>
            <ItemCard
            title="Analista en sistemas - Final year"
            subtitle="2024 - Present"
            description="Universidad Nacional de la Patagonia Austral - UNPA"
            ></ItemCard>
            <ItemCard 
            title="Google Data Analytics"
            subtitle="2026"
            description="Coursera - Google"
            ></ItemCard>
          </div>
        </div>

      </motion.div>
    </>
  );
   
}
