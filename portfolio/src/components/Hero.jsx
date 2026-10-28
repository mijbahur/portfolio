import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import { fade, stagger } from "./SectionHeading";
import socialLinks from "../data/socialLinks";
import photo from "../assets/images/mijbahur_rahman.png";

import { MdOutlineFileDownload } from "react-icons/md";

const roles = [
    "React Developer",
    "Next.js Builder",
    "Full-Stack Web Developer",
];

function Typing() {
    const reduce = useReducedMotion();
    const [i, setI] = useState(0);
    const [n, setN] = useState(0);
    const [del, setDel] = useState(false);
    useEffect(() => {
        if (reduce) return;
        const word = roles[i];
        const wait = !del && n === word.length ? 1400 : del ? 30 : 60;
        const t = setTimeout(() => {
            if (!del && n < word.length) setN(n + 1);
            else if (!del) setDel(true);
            else if (n > 0) setN(n - 1);
            else {
                setDel(false);
                setI((i + 1) % roles.length);
            }
        }, wait);
        return () => clearTimeout(t);
    }, [n, del, i, reduce]);
    return (
        <p
            className="min-h-8 text-xl font-medium text-accent"
            aria-label={roles.join(", ")}
        >
            <span aria-hidden="true">
                {reduce ? roles[0] : roles[i].slice(0, n)}
                <span className="ml-0.5 inline-block h-[1em] w-0.5 translate-y-0.5 animate-pulse bg-accent" />
            </span>
        </p>
    );
}

export default function Hero() {
    return (
        <section
            id="top"
            className="relative flex min-h-screen items-center overflow-hidden pt-16"
        >
            <div className="mx-auto grid w-full max-w-7xl items-center gap-12 px-5 py-16 lg:grid-cols-2">
                <motion.div
                    variants={stagger}
                    initial="hidden"
                    animate="show"
                    transition={{ delayChildren: 0.1 }}
                >
                    <motion.p
                        variants={fade}
                        className="mb-6 inline-flex items-center gap-2 rounded-full border border-line bg-panel/60 px-3 py-1 text-sm text-mute"
                    >
                        <span className="size-2 rounded-full bg-emerald-400" />
                        Open to internships and collaboration
                    </motion.p>
                    <motion.h1
                        variants={fade}
                        className="text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl"
                    >
                        Hi, I'm Hacin Mijbahur Rahman.
                    </motion.h1>
                    <motion.div variants={fade} className="mt-5">
                        <Typing />
                    </motion.div>
                    <motion.p
                        variants={fade}
                        className="mt-5 max-w-md text-mute"
                    >
                        I build useful, modern web applications with React and
                        Next.js, and I'm studying to become a software engineer.
                    </motion.p>
                    <motion.div
                        variants={fade}
                        className="mt-8 flex flex-wrap gap-3"
                    >
                        <motion.a
                            href="#projects"
                            whileHover={{ y: -2 }}
                            whileTap={{ scale: 0.97 }}
                            className="rounded-full bg-accent px-6 py-3 font-semibold text-bg"
                        >
                            Explore My Work
                        </motion.a>
                        <motion.a
                            href="#contact"
                            whileHover={{ y: -2 }}
                            whileTap={{ scale: 0.97 }}
                            className="rounded-full border border-line px-6 py-3 font-semibold transition-colors hover:border-accent"
                        >
                            Let's Connect
                        </motion.a>
                        <motion.a
                            href="#"
                            whileHover={{ y: -2 }}
                            whileTap={{ scale: 0.97 }}
                            className="rounded-full bg-accent px-6 py-3 font-semibold text-bg flex items-center gap-3"
                        >
                            Resume
                            <MdOutlineFileDownload />
                        </motion.a>
                    </motion.div>
                    <motion.ul variants={fade} className="mt-8 flex gap-3">
                        {socialLinks.map(({ name, href, icon: Icon }) => (
                            <li key={name}>
                                <motion.a
                                    href={href}
                                    target="_blank"
                                    rel="noreferrer"
                                    aria-label={name}
                                    whileHover={{ y: -3 }}
                                    className="flex size-10 items-center justify-center rounded-full border border-line bg-panel/60 text-mute transition-colors hover:border-accent hover:text-accent"
                                >
                                    <Icon />
                                </motion.a>
                            </li>
                        ))}
                    </motion.ul>
                </motion.div>


                <motion.div
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.4, duration: 0.6 }}
                    className="relative mx-auto flex aspect-square w-full max-w-md items-center justify-center"
                >
                    {/* soft glow around the circle */}
                    <div
                        aria-hidden="true"
                        className="absolute inset-[8%] rounded-full bg-[radial-gradient(circle,rgb(255_200_87/0.15),rgb(60_120_200/0.1)_55%,transparent_72%)] blur-xl"
                    />
                    

                    {/* rotating dashed ring with an orbiting dot */}
                    <motion.div
                        aria-hidden="true"
                        animate={{ rotate: 360 }}
                        transition={{
                            duration: 40,
                            repeat: Infinity,
                            ease: "linear",
                        }}
                        className="absolute inset-[3%] rounded-full border-2 border-dashed border-accent/40"
                    >
                        <span className="absolute -top-1.5 left-1/2 size-3 -translate-x-1/2 rounded-full bg-accent" />
                    </motion.div>

                    {/* rotating square, turning the other way */}
                    <motion.div
                        aria-hidden="true"
                        animate={{ rotate: -360 }}
                        transition={{
                            duration: 60,
                            repeat: Infinity,
                            ease: "linear",
                        }}
                        className="absolute inset-[8%] rounded-3xl border border-line"
                    />


                    {/* solid circle: hides the square behind it and cuts off the photo at its edge */}
                    <div className="relative aspect-square w-[80%] overflow-hidden rounded-full border border-line bg-linear-to-b from-panel to-bg">
                        
                        <img
                            src={photo}
                            alt="Hacin Mijbahur Rahman"
                            className="absolute bottom-0 left-1/2 w-[108%] max-w-none -translate-x-1/2 brightness-90"
                        />
                         <div aria-hidden="true" className="absolute inset-0 bg-linear-to-t from-bg/20 via-transparent to-transparent" />
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
