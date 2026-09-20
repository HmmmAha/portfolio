import { ExternalLink, Code2, Layers, Cloud, Sparkles } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";

export function getSocialIcon(label: string) {
  switch (label.toLowerCase()) {
    case "github":
      return <FaGithub size={20} />;
    case "linkedin":
      return <CiLinkedin size={20} />;
    default:
      return <ExternalLink size={20} />;
  }
}

export function getSkillIcon(category: string) {
  switch (category.toLowerCase()) {
    case "frontend":
      return <Code2 size={20} className="text-signal" />;
    case "backend":
      return <Layers size={20} className="text-accent" />;
    case "platform":
      return <Cloud size={20} className="text-signal-dark" />;
    default:
      return <Sparkles size={20} className="text-signal" />;
  }
}
