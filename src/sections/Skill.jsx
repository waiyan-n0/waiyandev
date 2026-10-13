import { useTranslation } from "react-i18next";
import { FaHtml5, FaCss3, FaJs, FaReact, FaPython, FaPhp, FaNodeJs, FaGitAlt, FaGithub, FaLinux } from "react-icons/fa";
import { DiMongodb, DiMysql, DiPostgresql } from "react-icons/di";
import SkillBadge from "../components/SkillBadge.jsx";
import Reveal from "../components/Reveal.jsx"

const Skill = () => {
    const { t } = useTranslation();

    return (
        <Reveal>
            <section className='p-8 md:px-16 max-w-7xl mx-auto scroll-mt-24' id="skills">
                <h1 className='text-xl font-semibold border-b-2 border-blue-500 w-fit mb-4'>
                    {t('skills.title')}
                </h1>

                <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
                    <div className='flex flex-col gap-4'>
                        <label className="uppercase font-[MighaBold] tracking-wider font-bold text-slate-400 ">
                            {t('skills.frontend')}
                        </label>
                        <div className='flex flex-wrap gap-2'>
                            <SkillBadge icon={FaHtml5} name="HTML5" percentage={100} hoverColor="group-hover:text-orange-500"/>
                            <SkillBadge icon={FaCss3} name="CSS3" percentage={100} hoverColor="group-hover:text-blue-500"/>
                            <SkillBadge icon={FaJs} name="JavaScript" percentage={70} hoverColor="group-hover:text-yellow-400"/>
                            <SkillBadge icon={FaReact} name="React" percentage={50} hoverColor="group-hover:text-cyan-400"/>
                        </div>
                    </div>

                    <div className='flex flex-col gap-4'>
                        <label className="uppercase font-[MighaBold] tracking-wider font-bold text-slate-400">
                            {t('skills.backend')}
                        </label>
                        <div className="flex flex-wrap gap-2">
                            <SkillBadge icon={FaPhp} name="PHP" percentage={60} hoverColor="group-hover:text-purple-500"/>
                            <SkillBadge icon={FaPython} name="Python" percentage={60} hoverColor="group-hover:text-blue-400"/>
                            <SkillBadge icon={FaNodeJs} name="NodeJS" percentage={20} hoverColor="group-hover:text-green-500"/>
                            <SkillBadge icon={DiMongodb} name="MongoDB" percentage={20} hoverColor="group-hover:text-green-600"/>
                            <SkillBadge icon={DiPostgresql} name="Postgresql" percentage={20} hoverColor="group-hover:text-green-600"/>
                            <SkillBadge icon={DiMysql} name="MySQL" percentage={60} hoverColor="group-hover:text-blue-600"/>
                        </div>
                    </div>

                    <div className='flex flex-col gap-4'>
                        <label className="uppercase font-[MighaBold] tracking-wider font-bold text-slate-400">
                            {t('skills.tools')}
                        </label>
                        <div className="flex flex-wrap gap-2">
                            <SkillBadge icon={FaGitAlt} name="Git" percentage={60} hoverColor='group-hover:text-red-500'/>
                            <SkillBadge icon={FaGithub} name="GitHub" percentage={60} hoverColor="group-hover:text-black"/>
                            <SkillBadge icon={FaLinux} name="Linux" percentage={60} hoverColor="group-hover:text-black"/>
                        </div>
                    </div>

                </div>
            </section>
        </Reveal>
    );
}

export default Skill;