import {useTranslation} from "react-i18next";
import ProjectCard from "../components/ProjectCard.jsx";
const Projects = () => {
    const { t } = useTranslation();

    const projectData = [
        {
            title: t('project.prj-0'),
            description: "A romantic and creative web experience featuring typewriter animations and interactive flower pedals. Built to express emotions through code and design.",
            tags: ["HTML5", "CSS3", "JavaScript"],
            githubLink: "https://github.com/waiyan-n0/Love-Note",
            liveLink: "https://waiyanjourney.netlify.app/"
        },
        {
            title: t('project.prj-1'),
            description: "A terminal style portfolio built with Pure HTML,CSS & JavaScript. Simulates a Ubuntu-like CLI environment where users can interact with commands to explore my professional details.",
            tags: ["HTML5", "CSS3", "JavaScript"],
            githubLink: "https://github.com/waiyan-n0/terminal-portfolio",
            liveLink: "https://waiyan-n0.github.io/terminal-portfolio/"
        },{
            title: t('project.prj-2'),
            description: "A feature-rich Todo-App designed as a practical learning roadmap for mastering React hooks like useReducer and useContext.",
            tags: ["Vite","React","Tailwind CSS"],
            githubLink: "https://github.com/waiyan-n0/todo-app",
            liveLink: "Processing"
        },
        {
            title: t('project.prj-3'),
            description: "Full-Stack MERN Recipe Platform built with React, Node.js, Express, and MongoDB. Features secure image uploads via Supabase Storage, Redis caching, and full production deployment on Render & Vercel.",
            tags: ["Vite","React JS","Tailwind CSS","MongoDB Atlas","Supabase"],
            githubLink: "https://github.com/waiyan-n0/cookbookMM",
            liveLink: "https://cookbook-mm.vercel.app/"
        }
    ];

    return (
        <section className="p-8 md:px-16 max-w-7xl mx-auto scroll-mt-24" id='projects'>
            <h1 className="text-xl font-bold border-b-2 border-blue-500 w-fit mb-8">
                {t('project.title')}
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projectData.map((project, index) => (
                    <ProjectCard key={index} delay={0.5*index} {...project} />
                ))}
            </div>
        </section>
    );
};

export default Projects;