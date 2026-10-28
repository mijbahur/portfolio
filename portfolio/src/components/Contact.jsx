import { useState } from "react";
import { motion } from "motion/react";
import SectionHeading, { fade, stagger, view } from "./SectionHeading";
import socialLinks, { email } from "../data/socialLinks";

const field = "w-full rounded-md border border-line bg-bg/70 px-4 py-3 outline-none transition-colors focus:border-accent";

export default function Contact() {
  const [sent, setSent] = useState(false);
  // No backend yet: the form opens the visitor's email app with the message filled in
  const submit = (e) => {
    e.preventDefault();
    const d = new FormData(e.currentTarget);
    const body = `${d.get("message")}\n\nFrom: ${d.get("name")} (${d.get("email")})`;
    window.location.href = `mailto:${email}?subject=${encodeURIComponent("Portfolio message")}&body=${encodeURIComponent(body)}`;
    setSent(true);
  };
  return (
    <section id="contact" className="mx-auto max-w-6xl px-5 py-24">
      <SectionHeading title="Get in touch" text="Have an internship, project or question? Send me a message." />
      <motion.div variants={stagger} {...view} className="grid gap-10 md:grid-cols-[1fr_1.2fr]">
        <motion.div variants={fade} className="space-y-6">
          <a href={`mailto:${email}`} className="text-lg underline decoration-line underline-offset-4 transition-colors hover:decoration-accent">{email}</a>
          <ul className="flex gap-3">
            {socialLinks.map(({ name, href, icon: Icon }) => (
              <li key={name}><motion.a href={href} target="_blank" rel="noreferrer" aria-label={name} whileHover={{ y: -3 }} className="flex size-11 items-center justify-center rounded-md border border-line transition-colors hover:border-accent hover:text-accent"><Icon /></motion.a></li>
            ))}
          </ul>
        </motion.div>
        <motion.form variants={fade} onSubmit={submit} className="space-y-4">
          <label className="block"><span className="mb-1 block text-sm text-mute">Name</span><input name="name" required className={field} /></label>
          <label className="block"><span className="mb-1 block text-sm text-mute">Email</span><input name="email" type="email" required className={field} /></label>
          <label className="block"><span className="mb-1 block text-sm text-mute">Message</span><textarea name="message" rows={5} required className={field} /></label>
          <motion.button whileHover={{ y: -2 }} whileTap={{ scale: 0.97 }} className="rounded-md bg-accent px-6 py-3 font-semibold text-bg">{sent ? "Opening your email app" : "Send message"}</motion.button>
        </motion.form>
      </motion.div>
    </section>
  );
}
