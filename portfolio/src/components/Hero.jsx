import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import { fade, stagger } from "./SectionHeading";

const roles = ["Full-stack web developer", "React & Next.js builder", "CSE student at AIUB"];

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
      else { setDel(false); setI((i + 1) % roles.length); }
    }, wait);
    return () => clearTimeout(t);
  }, [n, del, i, reduce]);
  return (
    <p className="min-h-8 text-xl text-accent" aria-label={roles.join(", ")}>
      <span aria-hidden="true">{reduce ? roles[0] : roles[i].slice(0, n)}<span className="ml-0.5 inline-block h-[1em] w-0.5 translate-y-0.5 animate-pulse bg-accent" /></span>
    </p>
  );
}

const shapes = [
  { cls: "left-[6%] top-[22%] size-16 rounded-full border", y: 14, d: 7 },
  { cls: "right-[8%] top-[18%] size-12 rotate-12 border", y: -12, d: 9 },
  { cls: "bottom-[12%] left-[44%] size-10 rounded-full border-2", y: 10, d: 8 },
];

const spec = [["Name", "Hacin Mijbahur Rahman"], ["Studying", "Computer Science & Engineering"], ["University", "AIUB"], ["Focus", "React, Next.js, Node.js"], ["Status", "Open to internships"]];

export default function Hero() {
  return (
    <section id="top" className="relative flex min-h-screen items-center overflow-hidden pt-16">
      {shapes.map((s, k) => (
        <motion.span key={k} aria-hidden="true" className={`absolute border-line ${s.cls}`} animate={{ y: [0, s.y, 0] }} transition={{ duration: s.d, repeat: Infinity, ease: "easeInOut" }} />
      ))}
      <div className="relative mx-auto grid w-full max-w-6xl items-center gap-12 px-5 py-16 lg:grid-cols-[1.2fr_1fr]">
        <motion.div variants={stagger} initial="hidden" animate="show" transition={{ delayChildren: 0.1 }}>
          <motion.p variants={fade} className="mb-3 text-mute">Hi, I'm</motion.p>
          <motion.h1 variants={fade} className="text-6xl font-bold leading-none tracking-tight sm:text-8xl">Mijba</motion.h1>
          <motion.div variants={fade} className="mt-5"><Typing /></motion.div>
          <motion.p variants={fade} className="mt-5 max-w-lg text-mute">I build web apps with React and Next.js, and I'm learning to design the backend and database behind them.</motion.p>
          <motion.div variants={fade} className="mt-8 flex flex-wrap gap-3">
            <motion.a href="#projects" whileHover={{ y: -2 }} whileTap={{ scale: 0.97 }} className="rounded-md bg-accent px-6 py-3 font-semibold text-bg">View projects</motion.a>
            <motion.a href="#contact" whileHover={{ y: -2 }} whileTap={{ scale: 0.97 }} className="rounded-md border border-line px-6 py-3 font-semibold transition-colors hover:border-accent">Contact me</motion.a>
          </motion.div>
        </motion.div>

        {/* Title block, like the corner of an engineering drawing */}
        <motion.dl initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5, duration: 0.6 }} className="border border-line bg-panel/80 backdrop-blur">
          {spec.map(([k, v]) => (
            <div key={k} className="grid grid-cols-[6.5rem_1fr] border-b border-line last:border-0">
              <dt className="border-r border-line px-4 py-3 text-sm text-mute">{k}</dt>
              <dd className="px-4 py-3 font-medium">{v}</dd>
            </div>
          ))}
        </motion.dl>
      </div>
    </section>
  );
}
