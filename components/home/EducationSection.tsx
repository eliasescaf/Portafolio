import { LuLibrary } from "react-icons/lu"
import ItemCard from "../ui/ItemCard"

export default function EducationSection(){
    return(
        <section className="mt-16">
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
        </section>
    )
}