import { motion } from "framer-motion";
import { ChevronRight, Calendar } from "lucide-react";
import { AnimatedSection } from "../ui/AnimatedSection";
import { staggerContainer, fadeUp } from "../../utils/animations";
import type { Experience } from "../../types/Experience";

export function ExperienceSection({ experiences }: { experiences: Experience[] }) {
  if (!experiences || experiences.length === 0) return null;

  return (
    <section id="experience" className="border-t border-line">
      <div className="mx-auto max-w-[1080px] px-6 py-24">
        <AnimatedSection>
          <h2 className="font-display text-[1.6rem] font-bold text-ink">
            Experience
          </h2>
        </AnimatedSection>
        <div className="relative mt-10">
          {/* Timeline line */}
          <div className="absolute left-[15px] top-2 bottom-2 w-px bg-gradient-to-b from-signal via-accent to-signal-glow md:left-[15px]" />
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="flex flex-col gap-10"
          >
            {experiences.map((exp, i) => (
              <motion.div key={i} variants={fadeUp}>
                <div className="relative pl-12">
                  {/* Timeline dot */}
                  <div className="absolute left-[11px] top-1.5 h-[9px] w-[9px] rounded-full border-2 border-signal bg-paper" />
                  <motion.div
                    className="rounded-2xl border border-card-border bg-card-bg p-6 backdrop-blur-sm"
                  >
                    <div className="mb-3 inline-flex items-center gap-1.5 rounded-full bg-ink/5 px-3 py-1 text-xs font-medium text-muted">
                      <Calendar size={12} />
                      {exp.period}
                    </div>
                    <div>
                      <h3 className="font-display text-[1.05rem] font-semibold text-ink">
                        {exp.role}
                      </h3>
                      <p className="mt-0.5 text-[0.9rem] font-medium text-signal-dark">
                        {exp.company}
                      </p>
                    </div>
                    <ul className="mt-4 flex flex-col gap-2">
                      {exp.highlights.map((h, j) => (
                        <li
                          key={j}
                          className="flex items-start gap-2 text-[0.9rem] leading-relaxed text-muted"
                        >
                          <ChevronRight
                            size={14}
                            className="mt-1 shrink-0 text-signal"
                          />
                          {h}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
