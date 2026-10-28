import { motion } from "motion/react";
import SectionHeading, { fade, stagger, view } from "./SectionHeading";

const items = [
    {
        title: "BSc in Computer Science & Engineering",
        place: "American International University-Bangladesh (AIUB)",
        years: "2022 - Present",
        detail: "Web development, networking, operating systems.",
    },
    {
        title: "Higher Secondary Certificate",
        place: "Govt. Science College",
        years: "2020 - 2022",
        detail: "Group: Science.",
    },
];

export default function Education() {
    return (
        <section id="education" className="mx-auto max-w-7xl px-5 py-24">
            <SectionHeading title="Education" />
            <motion.ol
                variants={stagger}
                {...view}
                className="relative ml-2 space-y-10 border-l border-line pl-8"
            >
                {items.map((e) => (
                    <motion.li
                        key={e.title}
                        variants={fade}
                        className="relative"
                    >
                        <span
                            className="absolute left-[2.45rem] top-2 size-3 rounded-full border-2 border-accent bg-bg"
                            aria-hidden="true"
                        />
                        <p className="text-sm text-accent">{e.years}</p>
                        <h3 className="mt-1 text-xl font-semibold">
                            {e.title}
                        </h3>
                        <p className="text-mute">{e.place}</p>
                        <p className="mt-2 max-w-prose text-sm text-mute">
                            {e.detail}
                        </p>
                    </motion.li>
                ))}
            </motion.ol>
        </section>
    );
}
