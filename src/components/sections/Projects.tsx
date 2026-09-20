import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { AnimatedSection } from "../ui/AnimatedSection";
import { staggerContainer, fadeUp } from "../../utils/animations";
import type { Project } from "../../types/Project";

export function Projects({ projects }: { projects: Project[] }) {
  return (
    <section id="work" className="border-t border-line bg-surface">
      <div className="mx-auto max-w-[1080px] px-6 py-24">
        <AnimatedSection>
          <div className="flex items-end justify-between">
            <h2 className="font-display text-[1.6rem] font-bold text-ink">
              Projects
            </h2>
          </div>
        </AnimatedSection>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          {projects.map((project) => (
            <motion.div key={project.title} variants={fadeUp}>
              <div
                className="relative flex h-full flex-col rounded-2xl border border-card-border bg-card-bg p-6 backdrop-blur-sm"
              >
                <h3 className="font-display text-[1.05rem] font-semibold text-ink">
                  {project.title}
                </h3>
                <p className="mt-3 flex-1 text-[0.9rem] leading-relaxed text-muted">
                  {project.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-lg border border-line bg-surface px-2.5 py-1 font-mono text-[0.7rem] text-muted"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-4 inline-flex items-center gap-1.5 text-[0.85rem] font-medium text-signal-dark"
                  >
                    { project.type === 'app' ? (
                      <> 
                        View project 
                      </>
                    ) : (
                      <> 
                        View paper
                      </>
                    )}
                    <ExternalLink size={14} />
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
