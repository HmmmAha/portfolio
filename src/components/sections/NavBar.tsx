import { useState, useEffect } from "react";
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
} from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { ease } from "../../utils/animations";
import { Menu, X } from "lucide-react";

export function NavBar({ activeSection }: { activeSection: string }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const { scrollY } = useScroll();
  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 40);
  });

  // Lock body scroll while the mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const links = [
    { id: "about", label: "About" },
    { id: "experience", label: "Experience" },
    { id: "work", label: "Projects" },
    { id: "skills", label: "Skills" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <motion.header
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-paper/80 backdrop-blur-xl" : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-[1080px] items-center justify-between px-6 py-4">
        <a
          href="#"
          className="flex w-[130px] shrink-0 font-display text-lg font-bold tracking-tight text-ink transition-colors hover:text-signal-dark"
        >
          <TypeAnimation
            sequence={[
              "Hi!", 1500,
              "Hola!", 1500,
              "Bonjour!", 1500,
              "こんにちは!", 1500,
              "Halo!", 1500,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
            cursor
            className="whitespace-nowrap"
          />
        </a>

        {/* Desktop links */}
        <div className="hidden items-center gap-1 md:flex">
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

        {/* Mobile toggle */}
        <button
          type="button"
          onClick={() => setMenuOpen((open) => !open)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          className="flex h-9 w-9 items-center justify-center rounded-lg text-ink transition-colors hover:bg-ink/5 md:hidden"
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease }}
            className="overflow-hidden border-t border-line bg-paper/95 backdrop-blur-xl md:hidden"
          >
            <div className="flex flex-col gap-1 px-6 py-4">
              {links.map((link) => (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  onClick={() => setMenuOpen(false)}
                  className={`rounded-lg px-3 py-2.5 text-[0.9rem] font-medium transition-all duration-200 ${
                    activeSection === link.id
                      ? "bg-signal/10 text-signal-dark"
                      : "text-muted hover:bg-ink/5 hover:text-ink"
                  }`}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
