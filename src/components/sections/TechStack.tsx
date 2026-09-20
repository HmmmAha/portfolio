import { motion } from "framer-motion";
import { AnimatedSection } from "../ui/AnimatedSection";
import { staggerContainer, fadeUp } from "../../utils/animations";
import { getSkillIcon } from "../../utils/icons";
import type { SkillGroup } from "../../types/SkillGroup";

export function TechStack({ skills }: { skills: SkillGroup[] }) {
  return (
    <section id="stack" className="border-t border-line">
      <div className="mx-auto max-w-[1080px] px-6 py-24">
        <AnimatedSection>
          <h2 className="font-display text-[1.6rem] font-bold text-ink">
            Tech Stack
          </h2>
        </AnimatedSection>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="mt-10 grid gap-6 md:grid-cols-3"
        >
          {skills.map((group) => (
            <motion.div key={group.category} variants={fadeUp}>
              <div className="rounded-2xl border border-card-border bg-card-bg p-6 backdrop-blur-sm">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-surface">
                    {getSkillIcon(group.category)}
                  </div>
                  <h3 className="font-display text-[0.95rem] font-semibold text-ink">
                    {group.category}
                  </h3>
                </div>
                <div className="mt-5 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <motion.span
                      key={item}
                      className="cursor-default rounded-lg border border-line bg-paper px-3 py-1.5 text-[0.8rem] font-medium text-ink transition-colors duration-200 hover:border-signal/40 hover:bg-signal/5 hover:text-signal-dark"
                    >
                      {item}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
