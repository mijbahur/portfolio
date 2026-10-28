import { motion } from "motion/react";
import { FaGithub } from "react-icons/fa";
import { HiExternalLink } from "react-icons/hi";
import SectionHeading, { fade, stagger, view } from "./SectionHeading";
import projects from "../data/projects";

const zoom = { rest: { scale: 1 }, hover: { scale: 1.06 } };

function Cover({ p }) {
    const cls = "h-full w-full object-cover";
    return p.image ? (
        <motion.img
            variants={zoom}
            transition={{ duration: 0.5, ease: "easeOut" }}
            src={p.image}
            alt={`${p.title} screenshot`}
            loading="lazy"
            className={cls}
        />
    ) : (
        <motion.div
            variants={zoom}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="flex h-full w-full items-center justify-center bg-bg font-display text-5xl font-bold text-line"
            style={{
                backgroundImage:
                    "radial-gradient(var(--color-line) 1px, transparent 1px)",
                backgroundSize: "16px 16px",
            }}
            aria-label={`${p.title} image placeholder`}
        >
            {p.title
                .split(" ")
                .map((w) => w[0])
                .join("")
                .slice(0, 3)}
        </motion.div>
    );
}

const btn =
    "inline-flex items-center gap-2 rounded-md px-4 py-2 text-sm font-semibold";

export default function Projects() {
    return (
        <section id="projects" className="mx-auto max-w-7xl px-5 py-24">
            <SectionHeading
                title="Projects"
                text="Coursework and personal builds. Each one links to its source code."
            />
            <motion.div
                variants={stagger}
                {...view}
                className="grid gap-6 md:grid-cols-2"
            >
                {projects.map((p) => (
                    <motion.article
                        key={p.id}
                        variants={fade}
                        initial="rest"
                        whileHover="hover"
                        className="group flex flex-col overflow-hidden border border-line bg-panel/70 transition-colors hover:border-accent/60"
                    >
                        <motion.div
                            whileHover={{ y: 0 }}
                            className="aspect-video overflow-hidden border-b border-line"
                        >
                            <Cover p={p} />
                        </motion.div>
                        <div className="flex flex-1 flex-col p-6">
                            <p className="text-sm text-mute">{p.category}</p>
                            <h3 className="mt-1 text-2xl font-semibold">
                                {p.title}
                            </h3>
                            <p className="mt-3 text-mute">{p.description}</p>
                            <ul className="mt-4 flex flex-wrap gap-2">
                                {p.tech.map((t) => (
                                    <li
                                        key={t}
                                        className="rounded border border-line px-2 py-0.5 text-xs"
                                    >
                                        {t}
                                    </li>
                                ))}
                            </ul>
                            <div className="mt-6 flex flex-wrap gap-3 pt-2">
                                <motion.a
                                    href={p.source}
                                    target="_blank"
                                    rel="noreferrer"
                                    whileHover={{ y: -2 }}
                                    whileTap={{ scale: 0.97 }}
                                    className={`${btn} bg-accent text-bg`}
                                >
                                    <FaGithub aria-hidden="true" />
                                    Source code
                                </motion.a>
                                {p.live && (
                                    <motion.a
                                        href={p.live}
                                        target="_blank"
                                        rel="noreferrer"
                                        whileHover={{ y: -2 }}
                                        whileTap={{ scale: 0.97 }}
                                        className={`${btn} border border-line transition-colors hover:border-accent`}
                                    >
                                        <HiExternalLink aria-hidden="true" />
                                        Live demo
                                    </motion.a>
                                )}
                            </div>
                        </div>
                    </motion.article>
                ))}
            </motion.div>
        </section>
    );
}
