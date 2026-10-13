import './App.css'
import {AnimatePresence} from "framer-motion";
import {useEffect, useState} from "react";
import Navbar from './components/Navbar.jsx';
import LoadingScreen from "./sections/LoadingScreen.jsx";
import Hero from './sections/Hero.jsx';
import Education from "./sections/Education.jsx";
import Skill from "./sections/Skill.jsx";
import Project from "./sections/Project.jsx";
import Footer from './sections/Footer.jsx';
import Hamburger from "./sections/Hamburger.jsx";

function App() {
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        const timerPromise = new Promise((resolve) => setTimeout(resolve, 2000));
        const loadPromise = new Promise((resolve) => {
            if (document.readyState === 'complete') {
                resolve();
            } else {
                window.onload = resolve;
            }
        });
        Promise.all([timerPromise, loadPromise]).then(() => {
            setIsLoading(false);
        });
    }, []);

    const [theme, setTheme] = useState(()=>{
        return localStorage.getItem("theme") || 'light';
    });
    useEffect(() => {
        if(theme==='dark'){
            document.documentElement.classList.add('dark');
        }else{
            document.documentElement.classList.remove('dark');
        }
        localStorage.setItem('theme', theme);
    },[theme]);
    const toggleTheme = () => {
        setTheme((prevTheme)=> (prevTheme === 'light' ? 'dark' : 'light'));
    }
    // console.log(window.innerWidth);
    return (
        <div className="dark:bg-[#121212] text-slate-900 dark:text-slate-100 transition-colors duration-300">
            <AnimatePresence mode="wait">
                {isLoading && <LoadingScreen key="loader" />}
            </AnimatePresence>
            <Hamburger/>
            <Navbar theme={theme} toggleTheme={toggleTheme}/>
            <Hero theme={theme}/>
            <Education />
            <Skill />
            <Project />
            <Footer/>
        </div>
    );
}

export default App
