import AnimateDiv from "@/components/ui/AnimateDiv";
import AboutCard from "@/components/home/AboutCard";
import SkillCard from "@/components/home/SkillCard";
import LocationCard from "@/components/home/LocationCard";
import ContactCard from "@/components/home/ContactCard";
import ProjectsSection from "@/components/home/ProjectsSection";
import EducationSection from "@/components/home/EducationSection";


export default function Home() {
  return (
    <>
      <AnimateDiv className="mt-12 md:mt-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/*Hero*/}
          {/*About*/}
          <AboutCard></AboutCard>
          {/*Stack*/}
          <SkillCard></SkillCard>
          {/*Locations*/}
          <LocationCard></LocationCard>
          {/*Contact*/}
          {/* Contact */}
          <ContactCard></ContactCard>
        </div>
        {/*Projects*/}
        <ProjectsSection></ProjectsSection>
        {/*Education*/}
        <EducationSection></EducationSection>

      </AnimateDiv>
    </>
  );
   
}
