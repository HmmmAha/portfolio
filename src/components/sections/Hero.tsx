import { motion } from "framer-motion";
import { ArrowDown, ChevronRight, Briefcase, MapPin } from "lucide-react";
import { blobMotion, scaleIn, ease, floatMotion } from "../../utils/animations";
import { getSocialIcon } from "../../utils/icons";
import type { SocialLink } from "../../types/SocialLink";

interface HeroProps {
  name: string;
  role: string;
  tagline: string;
  location?: string;
  resumeUrl?: string;
  availableForWork?: boolean;
  socialLinks: SocialLink[];
}

export function Hero({
  name,
  role,
  tagline,
  location,
  resumeUrl,
  availableForWork,
  socialLinks,
}: HeroProps) {
  return (
    <section className="relative flex min-h-svh items-center overflow-hidden">
      {/* Animated gradient blobs - Framer Motion */}
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <motion.div
          variants={blobMotion(0)}
          animate="animate"
          className="absolute -left-32 top-1/4 h-72 w-72 rounded-full bg-signal/10 mix-blend-multiply blur-3xl"
        />
        <motion.div
          variants={blobMotion(2)}
          animate="animate"
          className="absolute right-[-5rem] top-1/3 h-80 w-80 rounded-full bg-accent/10 mix-blend-multiply blur-3xl"
        />
        <motion.div
          variants={blobMotion(4)}
          animate="animate"
          className="absolute -bottom-20 left-1/3 h-64 w-64 rounded-full bg-signal-glow/10 mix-blend-multiply blur-3xl"
        />
      </div>

      {/* Background Grid Pattern */}
      <div 
        className="pointer-events-none absolute inset-0 z-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_100%)]" 
        aria-hidden
      />

      <div className="relative z-10 mx-auto max-w-[1080px] px-6 py-32">
        {/* Available badge */}
        {availableForWork && (
          <motion.div
            variants={scaleIn}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.2 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-signal/30 bg-signal/5 px-4 py-1.5 text-[0.8rem] font-medium text-signal-dark"
          >
            <span className="relative flex h-2 w-2">
              <motion.span
                animate={{ scale: [1, 2, 1], opacity: [0.75, 0, 0.75] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="absolute inline-flex h-full w-full rounded-full bg-signal"
              />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-signal" />
            </span>
            Available for opportunities
          </motion.div>
        )}

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease }}
          className="font-display text-[clamp(2.8rem,6vw,4.2rem)] font-bold leading-[1.05] tracking-tight text-ink"
        >
          {name}
          <span className="block bg-gradient-to-r from-signal via-accent to-signal-glow bg-clip-text text-transparent">
            {role}
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease }}
          className="mt-6 max-w-[52ch] text-lg leading-relaxed text-muted"
        >
          {tagline}
        </motion.p>

        {location && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-3 flex items-center gap-1.5 text-sm text-muted/70"
          >
            <MapPin size={14} />
            {location}
          </motion.p>
        )}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5, ease }}
          className="mt-8 flex flex-wrap items-center gap-4"
        >
          <a
            href="#work"
            className="group inline-flex items-center gap-2 rounded-xl bg-ink px-6 py-3 text-[0.9rem] font-semibold text-paper transition-all duration-200 hover:bg-ink-light"
          >
            View my work
            <ChevronRight
              size={16}
            />
          </a>
          {resumeUrl && (
            <a
              href={resumeUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-line px-6 py-3 text-[0.9rem] font-semibold text-ink transition-all duration-200 hover:border-ink"
            >
              <Briefcase size={16} />
              Resume
            </a>
          )}
          <div className="flex items-center gap-2">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.url}
                target="_blank"
                rel="noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-lg text-muted transition-all duration-200 hover:bg-ink/5 hover:text-ink"
                aria-label={link.label}
              >
                {getSocialIcon(link.label)}
              </a>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <a href="#about" aria-label="Scroll down">
          <motion.div variants={floatMotion} animate="animate">
            <ArrowDown size={20} className="text-muted/50" />
          </motion.div>
        </a>
      </motion.div>
    </section>
  );
}
