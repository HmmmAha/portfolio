import { motion } from "framer-motion";
import { Code2, Layers, Cloud, Music, Gamepad2, Sparkles } from "lucide-react";
import { AnimatedSection } from "../ui/AnimatedSection";
import { staggerContainer, fadeUp } from "../../utils/animations";
import type { Interest } from "../../types/Interests";

const interests: Interest[] = [
  {
    icon: <Music size={20} className="text-signal" />,
    bgClass: "bg-signal/10",
    title: "Music",
    sub: "Music is one of the things in life that keeps me sane.",
  },
  {
    icon: <Gamepad2 size={20} className="text-accent" />,
    bgClass: "bg-accent/10",
    title: "Gaming",
    sub: "A fun little side job I picked.",
  },
  {
    icon: <Sparkles size={20} className="text-signal-dark" />,
    bgClass: "bg-signal-dark/10",
    title: "Anime",
    sub: "Favorite thing to watch when I ran out of things to do.",
  },
]

export function About({ bio }: { bio: string }) {
  return (
    <section id="about" className="relative border-t border-line bg-surface">
      <div className="mx-auto max-w-[1080px] px-6 py-24">
        <AnimatedSection>
          <div className="grid gap-8 md:grid-cols-[1.2fr_1fr]">
            <div>
              <h2 className="font-display text-[1.6rem] font-bold text-ink">
                About me
              </h2>
              <p className="mt-6 max-w-[60ch] text-[1.05rem] leading-[1.8] text-muted">
                {bio}
              </p>
            </div>
            <div>
              <h2 className="font-display text-[1.6rem] font-bold text-ink">
                Interests
              </h2>
              <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-80px" }}
                className="mt-6 flex flex-col gap-4"
              >
                {interests.map((card) => (
                  <motion.div
                    key={card.title}
                    variants={fadeUp}
                    className="rounded-2xl border border-card-border bg-card-bg p-5 backdrop-blur-sm"
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className={`flex h-10 w-10 items-center justify-center rounded-xl ${card.bgClass}`}
                      >
                        {card.icon}
                      </div>
                      <div>
                        <p className="text-sm font-medium text-ink">
                          {card.title}
                        </p>
                        <p className="text-xs text-muted">{card.sub}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
