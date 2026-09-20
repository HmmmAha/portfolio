import LandingPage from './components/LandingPage';
import type { SkillGroup } from './types/SkillGroup';
import type { SocialLink } from './types/SocialLink';
import type { Project } from './types/Project';
import type { Experience } from './types/Experience';

function App() {
  const defaultSkills: SkillGroup[] = [
    { category: 'Frontend', items: ['React', 'TypeScript', 'Redux', 'Laravel'] },
    { category: 'Backend', items: ['C#', 'Python (Django)', 'Supabase', 'PHP'] },
    { category: 'Database', items: ['MySQL', 'CosmosDB', 'NoSQL', 'SQL Server'] },
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
        'Coordinated rehearsals for choir members',
        'Assisted members with learning vocal parts and how to shape their vocals properly',
        'Worked with the choir conductor and committee members to prepare performances'
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
      type: 'app',
      link: 'https://x3nozite.github.io/rect-up/',
    },
    {
      title: 'Greater Jakarta House Price Predictor',
      description:
        'This project is a simple price prediction tool for houses in Greater Jakarta. \
         Simply input all the details of the house, and a price prediction will be displayed.',
      tags: ['Python', 'Machine Learning', 'Streamlit'],
      type: 'app',
      link: 'https://ml-projectfejb6ycbjthrzstt7hdbo2.streamlit.app/',
    },
    {
      title: 'Experimentation on Various Loss Function Configurations Effects on Liver Tumor Segmentation Performance of TransUNet',
      description:
        'This is a research that focuses on analysing how different loss functions affect the segmentation performance of liver carcinoma. \
        This project primarily uses',
      tags: ['Python', 'Deep Learning', 'PyTorch', 'Medical Segmentation'],
      type: 'paper',
      link: 'https://drive.google.com/file/d/174TouLVgtdaZR9oQznboh7T-V_PSX1JT/view?usp=sharing'
    },
  ];

  // for ease of reading purposes
  var bio = "Hello, I'm a Computer Science student that likes turning my own ideas into something practical. \
            I'm currently working as a developer, but I'm still exploring what kind of developer I want to become, so I'm always learning.\
            I'm also a big enjoyer of music and games, I think that they are a beautiful way to express art. \
            Details of what I do can be seen to the right side of this bio and below."

  return (
    <LandingPage
      name="Hans Marvel Lesmana"
      role="Developer"
      tagline="Actively learning and being curious enough to learn."
      bio={bio}
      email="hmmaha123456000@gmail.com"
      socialLinks={defaultSocial}
      skills={defaultSkills}
      projects={projects}
      experiences={experiences}
    />
  );
}

export default App;
