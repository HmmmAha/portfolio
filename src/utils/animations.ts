import { type Variants } from "framer-motion";

export const ease = [0.22, 1, 0.36, 1] as const;

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease } },
};

export const staggerContainer: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.4, ease } },
};

export const blobMotion = (delay: number): Variants => ({
  animate: {
    x: [0, 30, -20, 20, 0],
    y: [0, -50, 20, 40, 0],
    scale: [1, 1.1, 0.9, 1.05, 1],
    transition: { duration: 7, repeat: Infinity, ease: "easeInOut", delay },
  },
});

export const floatMotion: Variants = {
  animate: {
    y: [0, -8, 0],
    transition: { duration: 6, repeat: Infinity, ease: "easeInOut" },
  },
};
