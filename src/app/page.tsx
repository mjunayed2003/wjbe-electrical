import { AboutPageContent } from "@/components/about-page";
import { ContactPageContent } from "@/components/contact-page";
import { Hero } from "@/components/hero";
import { ProjectsPageContent } from "@/components/projects-page";
import { SafetyPageContent } from "@/components/safety-page";
import { ServicesPageContent } from "@/components/services-page";

export default function Home() {
  return (
    <>
      <Hero />
      <AboutPageContent />
      <ServicesPageContent />
      <ProjectsPageContent />
      <SafetyPageContent />
      <ContactPageContent />
    </>
  );
}
