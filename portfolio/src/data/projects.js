// Dummy data. Add real screenshots to src/assets/images and set `image` with an import,
// e.g. import bazardor from "../assets/images/bazardor.png"  ->  image: bazardor
// Replace "#" with the real GitHub / live links.
const projects = [
    {
        id: "bazardor",
        title: "BazarDor",
        category: "Full-stack web app",
        image: null,
        description:
            "A Bangla market price site where visitors can check daily prices of everyday goods. Includes sign-in and protected pages.",
        tech: ["Next.js", "TypeScript", "BetterAuth", "Tailwind CSS"],
        source: "#",
        live: "#",
    },
    {
        id: "devstack",
        title: "DevStack Builder",
        category: "Frontend app",
        image: null,
        description:
            "Browse a catalog of technologies and build your own stack by adding and removing items. Designed in Figma first.",
        tech: ["React", "TypeScript", "Tailwind CSS", "Figma"],
        source: "#",
        live: "#",
    },
    {
        id: "fitlog",
        title: "FitLog",
        category: "Frontend app",
        image: null,
        description:
            "A workout library with a My Plan page for collecting the exercises you want to do each week.",
        tech: ["Next.js", "JavaScript", "Tailwind CSS", "Figma"],
        source: "#",
        live: "#",
    },
    {
        id: "ums",
        title: "University Management System",
        category: "Backend / MVC",
        image: null,
        description:
            "A university management system with student and course records, built with the MVC pattern and Entity Framework Core.",
        tech: ["ASP.NET Core MVC", "Entity Framework Core", "SQL Server"],
        source: "#",
        live: "#",
    },
];

export default projects;
