import { motion } from "motion/react";
import SectionHeading, { fade, stagger, view } from "./SectionHeading";
import skills from "../data/skills";

export default function Skills() {
    return (
        <section id="skills" className="mx-auto max-w-6xl px-5 py-24">
            <SectionHeading
                title="Technical skills"
                text="The tools I use most, grouped by what they do."
            />
            <motion.div
                variants={stagger}
                {...view}
                className="grid gap-5 md:grid-cols-2"
            >
                {skills.map((g) => (
                    <motion.article
                        key={g.title}
                        variants={fade}
                        whileHover={{ y: -4 }}
                        className="border border-line bg-panel/70 p-6 transition-colors hover:border-accent/60"
                    >
                        <h3 className="text-xl font-semibold">{g.title}</h3>
                        <p className="mt-1 text-sm text-mute">{g.note}</p>
                        <ul className="mt-5 flex flex-wrap gap-2">
                            {g.items.map(({ name, icon: Icon }) => (
                                <motion.li
                                    key={name}
                                    whileHover={{ y: -2 }}
                                    className="flex items-center gap-2 rounded border border-line bg-bg/60 px-3 py-1.5 text-sm transition-colors hover:border-accent"
                                >
                                    <Icon
                                        className="text-accent"
                                        aria-hidden="true"
                                    />
                                    {name}
                                </motion.li>
                            ))}
                        </ul>
                    </motion.article>
                ))}
            </motion.div>
        </section>
    );
}
