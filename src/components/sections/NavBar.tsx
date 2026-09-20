import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { ease } from "../../utils/animations";

export function NavBar({ activeSection }: { activeSection: string }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { id: "about", label: "About" },
    { id: "experience", label: "Experience" },
    { id: "work", label: "Projects" },
    { id: "stack", label: "Stack" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <motion.header
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-paper/80 backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-[1080px] items-center justify-between px-6 py-4">
        <a
          href="#"
          className="font-display text-lg font-bold tracking-tight text-ink transition-colors hover:text-signal-dark"
        >
          <TypeAnimation
            sequence={[
              "Hi! ", 1500,
              "Hola! 🇪🇸", 1500,
              "Bonjour! 🇫🇷", 1500,
              "こんにちは! 🇯🇵", 1500,
              "Hallo! 🇩🇪", 1500,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
            cursor
          />
        </a>
        <div className="flex items-center gap-1">
          {links.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className={`rounded-lg px-3 py-1.5 text-[0.85rem] font-medium transition-all duration-200 ${
                activeSection === link.id
                  ? "bg-signal/10 text-signal-dark"
                  : "text-muted hover:bg-ink/5 hover:text-ink"
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>
      </nav>
    </motion.header>
  );
}
