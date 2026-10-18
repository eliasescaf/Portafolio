import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
  } from "@/components/ui/tooltip";
import React from "react";

interface SkillIconProps{
    icon: React.ReactNode;
    name: string;
}

export default function SkillIcon({icon, name}: SkillIconProps){
    return (
    <div className="px-3 py-1.5 sm:px-4 sm:py-2 bg-zinc-900/50 border border-zinc-800 rounded-lg hover:border-zinc-700 hover:bg-zinc-800 transition-all cursor-pointer flex items-center gap-2 sm:gap-3 text-zinc-400 hover:text-zinc-100">
      {icon}
      <span className="text-xs sm:text-sm font-medium">{name}</span>
    </div>
  );
}