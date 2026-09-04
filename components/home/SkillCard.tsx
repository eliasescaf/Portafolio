import BentoCard from "../ui/BentoCard";
import SkillIcon from "../ui/SkillIcon";

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

export default function SkillCard(){
    return(
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
    )
}