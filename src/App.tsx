import LandingPage from './components/LandingPage';
import type { SkillGroup } from './types/SkillGroup';
import type { SocialLink } from './types/SocialLink';
import type { Project } from './types/Project';
import type { Experience } from './types/Experience';

function App() {
  const defaultSkills: SkillGroup[] = [
    { category: 'Frontend', items: ['React', 'TypeScript', 'Redux', 'i18next', 'Vite'] },
    { category: 'Backend', items: ['C#', 'Azure Functions', 'Cosmos DB', 'REST APIs'] },
    { category: 'Platform', items: ['Event Hub', 'Event Grid', 'GA4', 'MSAL', 'CI/CD'] },
  ];

  const defaultSocial: SocialLink[] = [
    { label: 'GitHub', url: 'https://github.com/HmmmAha' },
    { label: 'LinkedIn', url: 'https://www.linkedin.com/in/hans-marvel-lesmana-a2598b2a5' },
  ];

  const experiences: Experience[] = [
    {
      role: 'Associate Developer',
      company: 'Bina Nusantara IT Division',
      period: 'Mar 2026 - Present',
      highlights: [
        'Maintained an LMS app used by 10,000+ students daily'
      ],
    },
    {
      role: 'Section Leader',
      company: 'PARAMABIRA',
      period: 'Jan 2026 - Present',
      highlights: [
        'Coordinated rehearsals for choir members.',
        'Assisted members with learning vocal parts and how to shape their vocals properly.',
        'Worked with the choir conductor and committee members to prepare performances.'
      ],
    },
    {
      role: 'Member',
      company: 'Sigma Lab BINUS',
      period: 'Mar 2025 - Present',
      highlights: [
        'Built a web-based to-do app for students, recognized by top lecturers at BINUS University',
      ],
    },
  ];

  const projects: Project[] = [
    {
      title: 'RectUp',
      description:
        'RectUp is a web-based to-do list, diagramming and drawing app that allows users to manipulate objects (tasks) to their likings.\
        This app can arrange tasks into a tree-like structure that can be minimized to maximize space efficiency for other tasks to be placed.',
      tags: ['React', 'TypeScript', 'To-Do List', 'Canvas'],
      link: 'https://x3nozite.github.io/rect-up/',
      logo: './src/assets/logo.svg',
    },
    {
      title: 'Greater Jakarta House Price Predictor',
      description:
        'This project is a simple price prediction tool for houses in Greater Jakarta. \
         Simply input all the details of the house, and a price prediction will be displayed.',
      tags: ['Python', 'Machine Learning', 'Streamlit'],
      link: 'https://ml-projectfejb6ycbjthrzstt7hdbo2.streamlit.app/',
    },
  ];

  return (
    <LandingPage
      name="Hans Marvel Lesmana"
      role="Full-stack Developer"
      tagline="I build systems that keep data in sync - from React interfaces to event-driven Azure backends."
      bio="I work across the stack in the Azure ecosystem: React and TypeScript on the front end, C# Azure Functions and Cosmos DB on the back end, tied together with Event Hub and Event Grid. Most of my recent work has gone into a learning management platform - widgets, sync pipelines, and the plumbing that keeps everything talking to each other."
      email="you@example.com"
      location="Indonesia"
      socialLinks={defaultSocial}
      skills={defaultSkills}
      projects={projects}
      experiences={experiences}
      availableForWork={true}
    />
  );
}

export default App;
