import { CiLight,CiDark } from "react-icons/ci";
import { RiTranslate } from "react-icons/ri";
import { FaTelegram, FaLinkedin, FaGithub } from "react-icons/fa";
import { TbFileCvFilled, TbBrandGmail } from "react-icons/tb";
import Tooltip from "./Tooltip.jsx";
import useWindowResize from "../hooks/useWindowResize.js";
import {useTranslation} from "react-i18next";
import {useEffect, useRef, useState} from "react";

const Navbar = ({theme, toggleTheme,}) => {
    const {width} = useWindowResize();
    const currentWindowSize = width < 768 ? 'top' : 'right';
    const {i18n} = useTranslation();
    const toggleTranslate = () =>{
        const nextLang = i18n.language === 'en'?'mm':'en';
        i18n.changeLanguage(nextLang);
    }
    const [visible, setVisible] = useState(true);
    const timeoutRef = useRef(null);
    useEffect(() => {
        const handleMouseMove = () =>{
            setVisible(true);
            if(timeoutRef.current){
                clearTimeout(timeoutRef.current);
            }
            timeoutRef.current = setTimeout(()=>{
                setVisible(false);
            },2000);
        };
        window.addEventListener("mousemove", handleMouseMove);
        window.addEventListener("touchstart", handleMouseMove);
        window.addEventListener("scroll", handleMouseMove);
        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
            window.removeEventListener("touchstart", handleMouseMove);
            window.removeEventListener("scroll", handleMouseMove);
            if(timeoutRef.current) clearTimeout(timeoutRef.current);
        }
    },[]);

    return (
        <nav className={`fixed bottom-4 left-1/2 -translate-x-1/2 w-auto flex-row space-x-4 px-4 py-2 md:left-6 md:top-1/2 md:-translate-y-1/2 md:-translate-x-0 md:w-16 md:h-max md:flex-col md:p-4 md:space-x-0
            flex items-center justify-center backdrop-blur-md border rounded-3xl shadow-2xl z-50 transition-all duration-300 ${visible?"opacity-100 translate-y-0" : "opacity-0 translate-y-10 pointer-events-none"}`}>
            <div className="flex flex-row md:flex-col space-x-4 md:space-x-0 md:space-y-6 items-center">
                <Tooltip text={theme==='dark' ? 'Light Mode' : 'Dark Mode'} position={currentWindowSize}>
                    <span className="cursor-pointer transition-transform hover:scale-110"
                          onClick={toggleTheme}>
                    {theme==='dark' ? (<CiLight size={28}/>) : (
                        <CiDark size={28}/>
                    )}
                </span>
                </Tooltip>
                <Tooltip text='Translate' position={currentWindowSize}>
                    <span className="hover:text-blue-400 cursor-pointer transition-transform hover:scale-110">
                        <RiTranslate size={28} onClick={toggleTranslate}/>
                    </span>
                </Tooltip>
            </div>

            <div className="h-8 w-[1px] bg-slate-300 dark:bg-slate-700 md:w-8 md:h-[1px] my-2"></div>

            <div className="flex flex-row md:flex-col space-x-4 md:space-x-0 md:space-y-6 items-center">
                <Tooltip text="GitHub Profile" position={currentWindowSize}>
                    <a href="https://github.com/waiyan-n0" target="_blank" className="hover:text-gray-400">
                        <FaGithub size={28}/>
                    </a>
                </Tooltip>
                <Tooltip text="Telegram" position={currentWindowSize}>
                    <a href="https://t.me/waiyandev" target='_blank' className="hover:text-blue-400 transition-transform hover:scale-110"><FaTelegram
                        size={28}/></a>
                </Tooltip>
                <Tooltip text='Email' position={currentWindowSize}>
                    <a href="mailto:waiyann025674@gmail.com?subject=Hello&body=Hi%20Wai%20Yan%20Naing," target="_blank" className="hover:text-green-500 transition-transform hover:scale-110"><TbBrandGmail
                        size={28}/></a>
                </Tooltip>
            </div>

            <div className="h-8 w-[1px] bg-slate-300 dark:bg-slate-700 md:w-8 md:h-[1px] my-2"></div>

            <div className="flex flex-row md:flex-col space-x-4 md:space-x-0 md:space-y-6 items-center">
                <Tooltip text='LinkedIn' position={currentWindowSize}>
                    <a href="https://www.linkedin.com/in/waiyan-naing-355224272?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" className="hover:text-blue-400 transition-transform hover:scale-110"><FaLinkedin
                        size={28}/></a>
                </Tooltip>
                <Tooltip text='Download CV' position={currentWindowSize}>
                    <a href="/WaiYanNaing-Resume.pdf" target='_blank' rel="noopener noreferrer" download="WaiYanNaing_CV.pdf" className="transition-transform hover:scale-110"><TbFileCvFilled
                        size={28}/></a>
                </Tooltip>
            </div>
        </nav>
    );
};

export default Navbar;
