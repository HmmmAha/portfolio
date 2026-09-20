import { useState, useEffect } from "react";
import type { Project } from "../types/Project";
import type { SkillGroup } from "../types/SkillGroup";
import type { SocialLink } from "../types/SocialLink";
import type { Experience } from "../types/Experience";

import { NavBar } from "./sections/NavBar";
import { Hero } from "./sections/Hero";
import { About } from "./sections/About";
import { ExperienceSection } from "./sections/ExperienceSection";
import { Projects } from "./sections/Projects";
import { TechStack } from "./sections/TechStack";
import { Contact } from "./sections/Contact";

interface LandingPageProps {
  name: string;
  role: string;
  tagline: string;
  bio: string;
  email: string;
  socialLinks: SocialLink[];
  skills: SkillGroup[];
  projects: Project[];
  experiences?: Experience[];
  resumeUrl?: string;
}

export default function LandingPage({
  name,
  role,
  tagline,
  bio,
  email,
  socialLinks,
  skills,
  projects,
  experiences = [],
  resumeUrl,
}: LandingPageProps) {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const sectionIds = ["about", "experience", "work", "stack", "contact"];
    const observers: IntersectionObserver[] = [];

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(id);
        },
        { rootMargin: "-40% 0px -55% 0px" }
      );
      obs.observe(el);
      observers.push(obs);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return (
    <div className="bg-paper font-sans leading-relaxed antialiased">
      <NavBar activeSection={activeSection} />

      <Hero
        name={name}
        role={role}
        tagline={tagline}
        resumeUrl={resumeUrl}
        socialLinks={socialLinks}
      />

      <About bio={bio} />

      <ExperienceSection experiences={experiences} />

      <Projects projects={projects} />

      <TechStack skills={skills} />

      <Contact name={name} email={email} socialLinks={socialLinks} />
    </div>
  );
}
