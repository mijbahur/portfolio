import { FaGithub, FaLinkedinIn, FaFacebookF } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";

export const email = "hacinrahman03@gmail.com";

export default [
    {
        name: "GitHub",
        href: "https://github.com/mijbahur",
        icon: FaGithub,
    },
    {
        name: "LinkedIn",
        href: "https://linkedin.com/in/mijbahur-rahman",
        icon: FaLinkedinIn,
    },
    {
        name: "Facebook",
        href: "https://facebook.com/hacin.mijbahur.rahman.2025",
        icon: FaFacebookF,
    },
    { name: "Email", href: `mailto:${email}`, icon: MdOutlineMail },
];
