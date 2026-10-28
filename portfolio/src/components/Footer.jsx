import { motion } from "motion/react";
import { links } from "./Navbar";
import socialLinks from "../data/socialLinks";

export default function Footer() {
  return (
    <footer className="border-t border-line bg-bg/90">
      <div className="mx-auto grid max-w-6xl gap-8 px-5 py-12 md:grid-cols-[1.5fr_1fr_1fr]">
        <div>
          <a href="#top" className="font-display text-2xl font-bold">Mijba<span className="text-accent">.</span></a>
          <p className="mt-2 text-sm text-mute">Hacin Mijbahur Rahman, web developer.</p>
        </div>
        <nav aria-label="Footer"><ul className="space-y-2 text-sm">
          {links.map(([l, id]) => <li key={id}><a href={`#${id}`} className="text-mute transition-colors hover:text-accent">{l}</a></li>)}
        </ul></nav>
        <ul className="flex gap-3 md:justify-end">
          {socialLinks.map(({ name, href, icon: Icon }) => (
            <li key={name}><motion.a href={href} target="_blank" rel="noreferrer" aria-label={name} whileHover={{ y: -3 }} className="flex size-10 items-center justify-center rounded-md border border-line transition-colors hover:border-accent hover:text-accent"><Icon /></motion.a></li>
          ))}
        </ul>
      </div>
      <p className="border-t border-line py-5 text-center text-sm text-mute">© {new Date().getFullYear()} Mijba. Built with care, one component at a time.</p>
    </footer>
  );
}
