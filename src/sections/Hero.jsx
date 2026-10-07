import HeroDark from '../assets/heroblack.png';
import HeroLight from '../assets/herowhite.png'
import AboutMe from "./AboutMe.jsx";
import {useTranslation} from "react-i18next";
import Typewriter from 'typewriter-effect';
import Reveal from '../components/Reveal.jsx';

const Hero = ({theme}) =>{
    const { t } = useTranslation();
    return (
        <Reveal>
            <div
                className='px-8 md:py-16 flex flex-col-reverse lg:flex-row justify-center lg:space-x-16 gap-4 lg:gap-0'>
                <div className='flex flex-col gap-6'>
                    <div>
                        <div className='font-bold text-3xl md:text-5xl md:pb-4 tracking-tight'>
                            <Typewriter options={{
                                strings: [t('hero.title'), "I'm a CS Student"],
                                autoStart: true,
                                loop: true,
                            }}/>
                        </div>
                        <p className='italic text-slate-500 tracking-widest'>{t('hero.subtitle')}</p>
                    </div>
                    <AboutMe/>
                </div>
                <div className="flex justify-center items-center p-10">
                <span
                    className="bg-blue-500 w-80 rounded-[30%_70%_70%_30%_/_30%_30%_70%_70%] overflow-hidden flex items-center justify-center transition-all duration-500 hover:rounded-[20%_60%_40%_30%_/_80%_20%_80%_70%]">
                    <img src={theme === 'dark' ? HeroDark : HeroLight} alt="hero"
                         className="object-cover w-full h-full"/>
                </span>
                </div>
            </div>
        </Reveal>
    )
}
export default Hero;