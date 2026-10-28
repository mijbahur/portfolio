import { FaGithub, FaLinkedinIn, FaFacebookF } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";

// TODO: replace the placeholder URLs
export const email = "your.email@example.com";

export default [
  { name: "GitHub", href: "https://github.com/your-username", icon: FaGithub },
  { name: "LinkedIn", href: "https://linkedin.com/in/your-username", icon: FaLinkedinIn },
  { name: "Facebook", href: "https://facebook.com/your-username", icon: FaFacebookF },
  { name: "Email", href: `mailto:${email}`, icon: MdOutlineMail },
];
