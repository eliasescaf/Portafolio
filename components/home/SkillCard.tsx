import BentoCard from "../ui/BentoCard";
import SkillIcon from "../ui/SkillIcon";

import { 
  SiNextdotjs, 
  SiReact, 
  SiTailwindcss, 
  SiCss, 
  SiBootstrap, 
  SiJavascript, 
  SiTypescript, 
  SiPhp, 
  SiNodedotjs,
  SiExpress,
  SiPrisma,
  SiMysql, 
  SiPostgresql, 
  SiPython, 
  SiLangchain, 
  SiDocker, 
} from "react-icons/si";

export default function SkillCard(){
    return(
        <BentoCard className="md:row-span-2">
                    <h3 className="text-zinc-100 text-2xl">Skills</h3>
                    <div className="mt-4">
                      <h2 className="text-zinc-400 text-[1.1rem] mb-2">Frontend</h2>
                      <div className="flex flex-wrap gap-2">
                        <SkillIcon icon={<SiNextdotjs className="w-5 h-5 sm:w-6 sm:h-6" />} name="Next.js" />
                        <SkillIcon icon={<SiReact className="w-5 h-5 sm:w-6 sm:h-6" />} name="React" />
                        <SkillIcon icon={<SiCss className="w-5 h-5 sm:w-6 sm:h-6" />} name="CSS" />
                        <SkillIcon icon={<SiTailwindcss className="w-5 h-5 sm:w-6 sm:h-6" />} name="Tailwind CSS" />
                        <SkillIcon icon={<SiBootstrap className="w-5 h-5 sm:w-6 sm:h-6" />} name="Bootstrap" />
                        <SkillIcon icon={<SiJavascript className="w-5 h-5 sm:w-6 sm:h-6" />} name="JavaScript" />
                        <SkillIcon icon={<SiTypescript className="w-5 h-5 sm:w-6 sm:h-6" />} name="TypeScript" />
                      </div>
                    </div>
        
                    <div className="mt-4">
                      <h2 className="text-zinc-400 text-[1.1rem] mb-2">Backend</h2>
                      <div className="flex flex-wrap gap-2">
                        <SkillIcon icon={<SiPython className="w-5 h-5 sm:w-6 sm:h-6" />} name="Python" />
                        <SkillIcon icon={<SiPhp className="w-5 h-5 sm:w-6 sm:h-6" />} name="PHP" />
                        <SkillIcon icon={<SiNodedotjs className="w-5 h-5 sm:w-6 sm:h-6" />} name="Node.js" />
                        <SkillIcon icon={<SiExpress className="w-5 h-5 sm:w-6 sm:h-6" />} name="Express" />
                        <SkillIcon icon={<SiPrisma className="w-5 h-5 sm:w-6 sm:h-6" />} name="Prisma" />
                        <SkillIcon icon={<SiMysql className="w-5 h-5 sm:w-6 sm:h-6" />} name="MySQL" />
                        <SkillIcon icon={<SiPostgresql className="w-5 h-5 sm:w-6 sm:h-6" />} name="PostgreSQL" />
                        <SkillIcon icon={<SiDocker className="w-5 h-5 sm:w-6 sm:h-6" />} name="Docker" />
                      </div>
                    </div>
                    <div className="mt-4">
                      <h2 className="text-zinc-400 text-[1.1rem] mb-2">AI</h2>
                      <div className="flex flex-wrap gap-2">
                        <SkillIcon icon={<SiLangchain className="w-5 h-5 sm:w-6 sm:h-6" />} name="LangChain" />
                        <SkillIcon icon={<SiPostgresql className="w-5 h-5 sm:w-6 sm:h-6" />} name="pgvector" />
                      </div>
                    </div>
                  </BentoCard>
    )
}