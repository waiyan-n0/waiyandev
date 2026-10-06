import {useTranslation, Trans} from "react-i18next";
import Reveal from "../components/Reveal";

const AboutMe = () => {
    const {t} = useTranslation();
    return (
        <Reveal >
            <div className='md:max-w-2xl max-w-lg scroll-mt-0' id="about">
                <h1 className='text-xl font-semibold border-b-2 border-blue-500 w-fit mb-2'>
                    {t('aboutMe.title')}
                </h1>
                <div className="flex flex-col gap-4 text-slate-600 dark:text-slate-300 leading-relaxed md:text-lg">
                    <p>
                        <Trans i18nKey="aboutMe.description">
                            I'm a <span className="text-black font-semibold dark:text-white">Computer Science student</span> passionate about
                            full stack development and creative design. Currently, I'm learning interactive front-end
                            experiences, MERN Stack & Full Stack Development.
                        </Trans>
                    </p>
                </div>
                <span className='flex flex-row pt-4 gap-4'>
                <a href="/public/Wai Yan Naing - Resume.pdf" target='_blank' rel="noopener noreferrer" download="WaiYanNaing_CV.pdf"
                   className='py-2 px-6 bg-blue-400 rounded-xl font-semibold hover:bg-blue-600 w-auto text-sm md:text-lg md:w-auto text-white'>
                    {t('aboutMe.btnDownload')}
                </a>
                <a href='https://t.me/waiyandev' target={'_blank'}
                   className='flex items-center py-2 px-6 bg-transparent border-2 border-blue-400 rounded-xl font-semibold hover:bg-blue-400 hover:text-white text-sm md:text-lg md:w-auto'>
                    {t('aboutMe.btnContact')}
                </a>
            </span>
            </div>
        </Reveal>
    );
}
export default AboutMe;