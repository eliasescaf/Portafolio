import { MapPinIcon } from "lucide-react";
import BentoCard from "../ui/BentoCard";

export default function LocationCard(){
    return (
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
          <p className="text-zinc-500 text-lg">Santa Cruz, Argentina</p>
        </div>
      </BentoCard>
    );
}