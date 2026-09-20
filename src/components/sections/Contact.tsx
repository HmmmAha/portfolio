import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import { AnimatedSection } from "../ui/AnimatedSection";
import { getSocialIcon } from "../../utils/icons";
import type { SocialLink } from "../../types/SocialLink";

interface ContactProps {
  name: string;
  email: string;
  socialLinks: SocialLink[];
}

export function Contact({ name, email, socialLinks }: ContactProps) {
  return (
    <footer
      id="contact"
      className="relative overflow-hidden border-t border-line bg-ink"
    >
      {/* Subtle background glow */}
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <motion.div
          animate={{ opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute -left-40 -top-40 h-80 w-80 rounded-full bg-signal/5 blur-3xl"
        />
        <motion.div
          animate={{ opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 8, repeat: Infinity, delay: 4 }}
          className="absolute -right-40 -bottom-40 h-80 w-80 rounded-full bg-accent/5 blur-3xl"
        />
      </div>

      <div className="relative z-10 mx-auto max-w-[1080px] px-6 pb-12 pt-24">
        <AnimatedSection>
          <h2 className="font-display text-[2rem] font-bold text-paper">
            Let's build something together
          </h2>
          <p className="mt-4 max-w-[50ch] text-muted">
            I'm always interested in hearing about new opportunities,
            interesting projects, or just connecting with fellow developers.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <motion.a
              href={`mailto:${email}`}
              whileTap={{ scale: 0.97 }}
              className="group inline-flex items-center gap-2 rounded-xl bg-signal px-6 py-3 text-[0.9rem] font-semibold text-paper transition-colors duration-200 hover:bg-signal-dark"
            >
              <Mail size={18} />
              Say hello
            </motion.a>
            <div className="flex items-center gap-3">
              {socialLinks.map((link) => (
                <motion.a
                  key={link.label}
                  href={link.url}
                  target="_blank"
                  rel="noreferrer"
                  className="flex h-11 w-11 items-center justify-center rounded-xl border border-line-dark text-muted transition-colors duration-200 hover:border-signal/40 hover:text-signal"
                  aria-label={link.label}
                >
                  {getSocialIcon(link.label)}
                </motion.a>
              ))}
            </div>
          </div>
        </AnimatedSection>

        <div className="mt-20 flex items-center justify-between border-t border-line-dark pt-6 text-[0.8rem] text-muted">
        </div>
      </div>
    </footer>
  );
}
