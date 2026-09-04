import { SiGithub } from "react-icons/si";
import BentoCard from "../ui/BentoCard";
import { Mail } from "lucide-react";

export default function ContactCard(){
    return(
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
    )
}