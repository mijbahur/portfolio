import {
    FaHtml5,
    FaCss3Alt,
    FaJs,
    FaReact,
    FaNodeJs,
    FaGitAlt,
    FaGithub,
    FaFigma,
    FaCode,
    FaDatabase,
    FaPlug,
} from "react-icons/fa";
import {
    SiNextdotjs,
    SiTailwindcss,
    SiExpress,
    SiMongodb,
} from "react-icons/si";

const skills = [
    {
        title: "Frontend",
        note: "Interfaces that load fast and work on any screen.",
        items: [
            { name: "HTML", icon: FaHtml5 },
            { name: "CSS", icon: FaCss3Alt },
            { name: "JavaScript", icon: FaJs },
            { name: "React", icon: FaReact },
            { name: "Next.js", icon: SiNextdotjs },
            { name: "Tailwind CSS", icon: SiTailwindcss },
        ],
    },
    {
        title: "Backend",
        note: "Server logic and the APIs the frontend talks to.",
        items: [
            { name: "Node.js", icon: FaNodeJs },
            { name: "Express.js", icon: SiExpress },
            // { name: "REST APIs", icon: FaPlug },
        ],
    },
    {
        title: "Database",
        note: "Storing and querying application data.",
        items: [
            { name: "MongoDB", icon: SiMongodb },
            { name: "SQL Server", icon: FaDatabase },
        ],
    },
    {
        title: "Tools",
        note: "Day-to-day workflow.",
        items: [
            { name: "Git", icon: FaGitAlt },
            { name: "GitHub", icon: FaGithub },
            { name: "VS Code", icon: FaCode },
            { name: "Figma", icon: FaFigma },
        ],
    },
];

export default skills;
