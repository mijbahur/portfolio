import { motion } from "motion/react";

// Shared reveal presets used by every section
export const fade = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};
export const stagger = {
    hidden: {},
    show: { transition: { staggerChildren: 0.08 } },
};
export const view = {
    initial: "hidden",
    whileInView: "show",
    viewport: { once: true, margin: "-80px" },
};

export default function SectionHeading({ title, text }) {
    return (
        <motion.div variants={stagger} {...view} className="mb-12 max-w-2xl">
            <motion.h2
                variants={fade}
                className="text-3xl font-bold tracking-tight sm:text-4xl"
            >
                {title}
            </motion.h2>
            <motion.span
                variants={{
                    hidden: { scaleX: 0 },
                    show: { scaleX: 1, transition: { duration: 0.6 } },
                }}
                className="mt-3 block h-0.5 w-16 origin-left bg-accent"
            />
            {text && (
                <motion.p variants={fade} className="mt-4 text-mute">
                    {text}
                </motion.p>
            )}
        </motion.div>
    );
}
