import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { HiMenuAlt3, HiX } from "react-icons/hi";

export const links = [
    ["About", "about"],
    ["Skills", "skills"],
    ["Projects", "projects"],
    ["Education", "education"],
    ["Contact", "contact"],
];

function useActive(ids) {
    const [active, setActive] = useState("");
    useEffect(() => {
        const io = new IntersectionObserver(
            (es) =>
                es.forEach((e) => e.isIntersecting && setActive(e.target.id)),
            { rootMargin: "-45% 0px -50% 0px" },
        );
        ids.forEach((id) => {
            const el = document.getElementById(id);
            if (el) io.observe(el);
        });
        return () => io.disconnect();
    }, [ids]);
    return active;
}
const ids = links.map(([, id]) => id);

export default function Navbar() {
    const [open, setOpen] = useState(false);
    const active = useActive(ids);
    return (
        <header className="fixed inset-x-0 top-0 z-50 border-b border-line/60 bg-bg/80 backdrop-blur">
            <nav
                className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5"
                aria-label="Main"
            >
                <a href="#top" className="font-display text-xl font-bold">
                    Mijbahur<span className="text-accent">.</span>
                </a>
                <ul className="hidden gap-8 md:flex">
                    {links.map(([label, id]) => (
                        <li key={id}>
                            <motion.a
                                href={`#${id}`}
                                initial="rest"
                                whileHover="hover"
                                animate="rest"
                                className="relative block py-1 text-sm text-mute transition-colors hover:text-ink aria-current:text-ink"
                                aria-current={active === id}
                            >
                                {label}
                                <motion.span
                                    variants={{
                                        rest: { scaleX: 0 },
                                        hover: { scaleX: 1 },
                                    }}
                                    transition={{ duration: 0.2 }}
                                    className="absolute inset-x-0 -bottom-0.5 h-0.5 origin-left bg-line"
                                />
                                {active === id && (
                                    <motion.span
                                        layoutId="nav-underline"
                                        className="absolute inset-x-0 -bottom-0.5 h-0.5 bg-accent"
                                        transition={{
                                            type: "spring",
                                            stiffness: 380,
                                            damping: 32,
                                        }}
                                    />
                                )}
                            </motion.a>
                        </li>
                    ))}
                </ul>
                <button
                    onClick={() => setOpen(!open)}
                    aria-expanded={open}
                    aria-label="Toggle menu"
                    className="rounded p-2 text-2xl md:hidden"
                >
                    {open ? <HiX /> : <HiMenuAlt3 />}
                </button>
            </nav>
            <AnimatePresence>
                {open && (
                    <motion.ul
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                        className="border-t border-line/60 bg-bg px-5 pb-4 md:hidden"
                    >
                        {links.map(([label, id], i) => (
                            <motion.li
                                key={id}
                                initial={{ opacity: 0, x: -8 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.04 * i }}
                            >
                                <a
                                    href={`#${id}`}
                                    onClick={() => setOpen(false)}
                                    className={`block border-b border-line/40 py-3 ${active === id ? "text-accent" : "text-ink"}`}
                                >
                                    {label}
                                </a>
                            </motion.li>
                        ))}
                    </motion.ul>
                )}
            </AnimatePresence>
        </header>
    );
}
