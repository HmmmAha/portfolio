import { motion } from "framer-motion";
import { Code2, Layers, Cloud } from "lucide-react";
import { AnimatedSection } from "../ui/AnimatedSection";
import { staggerContainer, fadeUp } from "../../utils/animations";

export function About({ bio }: { bio: string }) {
  return (
    <section id="about" className="relative border-t border-line bg-surface">
      <div className="mx-auto max-w-[1080px] px-6 py-24">
        <AnimatedSection>
          <h2 className="font-display text-[1.6rem] font-bold text-ink">
            About me
          </h2>
          <div className="mt-6 grid gap-8 md:grid-cols-[1.2fr_1fr]">
            <div>
              <p className="max-w-[60ch] text-[1.05rem] leading-[1.8] text-muted">
                {bio}
              </p>
            </div>
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              className="flex flex-col gap-4"
            >
              {[
                {
                  icon: <Code2 size={20} className="text-signal" />,
                  bgClass: "bg-signal/10",
                  title: "Full-stack Development",
                  sub: "React · C# · Azure",
                },
                {
                  icon: <Layers size={20} className="text-accent" />,
                  bgClass: "bg-accent/10",
                  title: "Event-driven Architecture",
                  sub: "Event Hub · Event Grid · Cosmos DB",
                },
                {
                  icon: <Cloud size={20} className="text-signal-dark" />,
                  bgClass: "bg-signal-dark/10",
                  title: "Cloud-native Solutions",
                  sub: "Azure Functions · Serverless",
                },
              ].map((card) => (
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
        </AnimatedSection>
      </div>
    </section>
  );
}
