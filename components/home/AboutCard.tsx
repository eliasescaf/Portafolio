import BentoCard from "../ui/BentoCard";
import ProfileAvatar from "../ui/ProfileAvatar";

export default function AboutCard(){
    return (
      <BentoCard className="md:col-span-2">
        <ProfileAvatar />
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-zinc-100 group-hover:text-white transition-colors">
          Elias Escalante Fuentes
        </h1>
        <p className="mt-4 text-lg text-zinc-400 leading-relaxed max-w-xl">
          Software Engineer from Argentina. Student of 3rd year in Ingenieria en
          Sistemas and Analista en Sistemas. Interested in web development,
          IA/ML and fintech
        </p>
      </BentoCard>
    );
}