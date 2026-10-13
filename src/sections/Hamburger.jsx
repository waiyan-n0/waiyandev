import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { AiOutlineCoffee } from "react-icons/ai";

const Hamburger = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { t } = useTranslation();

    const navItems = [
        { id: 'about', label: t('nav.about') },
        { id: 'education', label: t('nav.edu') },
        { id: 'skills', label: t('nav.skills')},
        { id: 'projects', label: t('nav.prj')},
    ];

    const smoothScrollTo = (targetY, duration = 700) => {
        const startY = window.pageYOffset;
        const distance = targetY - startY;
        let startTime = null;

        const animation = (currentTime) => {
            if (!startTime) startTime = currentTime;
            const timeElapsed = currentTime - startTime;
            const progress = Math.min(timeElapsed / duration, 1);
            const ease = t => t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
            window.scrollTo(0, startY + distance * ease(progress));

            if (timeElapsed < duration) {
                requestAnimationFrame(animation);
            }
        };
        requestAnimationFrame(animation);
    };

    const scrollToSection = (id) => {
        setIsOpen(false);
        const element = document.getElementById(id);

        if (element) {
            if (id === 'about') {
                smoothScrollTo(0, 700);
            } else {
                const navbarHeight = 64;
                const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
                const offsetPosition = elementPosition - navbarHeight;

                smoothScrollTo(offsetPosition, 700);
            }
        }
    };

    return (
        <nav className="sticky top-0 z-50 bg-white/80 dark:bg-[#121212] backdrop-blur-md border-b border-slate-200 dark:border-slate-800 transition-colors duration-300">
            <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
                <motion.span
                    onClick={() => {
                        smoothScrollTo(0, 700);
                    }}
                    whileHover={{scale: 1.2}} whileTap={{scale: 0.9, rotate: 180}}
                    transition={{type: "spring", stiffness: 400, damping: 15}}
                    className="text-xl font-bold cursor-pointer font-[MighaBold] tracking-wider inline-block select-none"
                >
                    WYN
                </motion.span>
                <div className="hidden md:flex items-center gap-8">
                    {navItems.map((item) => (
                        <button key={item.id} onClick={() => scrollToSection(item.id)}
                                className="font-medium text-slate-600 hover:text-blue-500 dark:hover:text-blue-500 transition-colors"
                        >
                            {item.label}
                        </button>
                    ))}
                </div>

                <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-slate-700 dark:text-slate-300 focus:outline-none z-50">
                    <AnimatePresence mode="wait">
                        {isOpen ? (
                            <motion.div key="open" initial={{ rotate: 180 }} animate={{ rotate: 0 }} transition={{ duration: 0.3, ease: "easeInOut" }}>
                                <AiOutlineCoffee size={26} className='rotate-180' />
                            </motion.div>
                        ) : (
                            <motion.div key="closed" initial={{ rotate: -180 }} animate={{ rotate: 0 }} transition={{ duration: 0.3, ease: "easeInOut" }}>
                                <AiOutlineCoffee size={26} />
                            </motion.div>
                        )}
                    </AnimatePresence>
                </button>
            </div>

            <AnimatePresence>
                {isOpen && (
                    <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.2 }}
                        className="absolute top-16 left-0 w-full bg-white dark:bg-[#121212] border-b border-slate-200 dark:border-slate-800 flex flex-col p-4 gap-4 shadow-xl md:hidden"
                    >
                        {navItems.map((item) => (
                            <button key={item.id} onClick={() => scrollToSection(item.id)}
                                className="text-left py-2 px-4 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-900 rounded-lg font-medium transition-colors"
                            >
                                {item.label}
                            </button>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Hamburger;