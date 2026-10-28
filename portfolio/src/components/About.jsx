import { motion } from "motion/react";
import SectionHeading, { fade, stagger, view } from "./SectionHeading";

const now = [
    "Studying CSE at AIUB",
    "Building projects with Next.js and TypeScript",
    "Learning backend and database design",
];

export default function About() {
    return (
        <section id="about" className="mx-auto max-w-6xl px-5 py-24">
            <SectionHeading title="About me" />
            <motion.div
                variants={stagger}
                {...view}
                className="grid gap-10 md:grid-cols-[1.4fr_1fr]"
            >
                <motion.div
                    variants={fade}
                    className="max-w-prose space-y-4 text-mute"
                >
                    <p>
                        I'm Hacin Mijbahur Rahman, but most people call me
                        Mijba. I'm a Computer Science and Engineering student at
                        AIUB who enjoys turning course projects into things that
                        actually work on the web.
                    </p>
                    <p>
                        I like the full loop: sketching a layout in Figma,
                        building it in React, and wiring it to an API and a
                        database. My coursework covers web development,
                        networking, operating systems and software engineering
                        ethics.
                    </p>
                </motion.div>
                <motion.ul
                    variants={fade}
                    className="space-y-3 border-l border-line pl-6"
                >
                    {now.map((t) => (
                        <li key={t} className="text-ink">
                            {t}
                        </li>
                    ))}
                </motion.ul>
            </motion.div>
        </section>
    );
}
