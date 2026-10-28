import bazardor from "../assets/images/bazardor.png"
import fitLog from "../assets/images/fitLog.png"
import devStack from "../assets/images/devStack.png"
const projects = [
    {
        id: "bazardor",
        title: "BazarDor",
        category: "Full-stack web app",
        image: bazardor,
        description:
            "A Bangla market price site where visitors can check daily prices of everyday goods. Includes sign-in and protected pages.",
        tech: ["Next.js", "TypeScript", "BetterAuth", "Tailwind CSS"],
        source: "https://github.com/mijbahur/bazardor",
        live: "https://bazardor-lac-ten.vercel.app",
    },
    {
        id: "fitlog",
        title: "FitLog",
        category: "Frontend app",
        image: fitLog,
        description:
            "A workout library with a My Plan page for collecting the exercises you want to do each week.",
        tech: ["Next.js", "JavaScript", "Tailwind CSS", "Figma"],
        source: "https://github.com/mijbahur/fit-log",
        live: "https://fit-log-puce-five.vercel.app",
    },
    {
        id: "devstack",
        title: "DevStack Builder",
        category: "Frontend app",
        image: devStack,
        description:
            "Browse a catalog of technologies and build your own stack by adding and removing items. Designed in Figma first.",
        tech: ["React", "TypeScript", "Tailwind CSS", "Figma"],
        source: "https://github.com/mijbahur/b14-assignment-05-PH",
        live: "https://gleaming-paprenjak-f7398a.netlify.app",
    },
];

export default projects;
