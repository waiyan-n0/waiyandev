import { motion } from "framer-motion";
import { PiCoffeeFill } from "react-icons/pi";

const LoadingScreen = () => {
    const name = "WAI YAN NAING.DEV";
    const letters = [...Array.from(name),<PiCoffeeFill/>];

    const containerVariants = {
        exit: {
            y: "-100%",
            transition: { duration: 1, ease: [0.76, 0, 0.24, 1], delay: 0.2 }
        }
    };
    const letterVariants = {
        initial: { y: 100, opacity: 0 },
        animate: {
            y: 0,
            opacity: 1,
            transition: {
                type: "spring",
                damping: 15,
                stiffness: 150
            }
        }
    };

    return (
        <motion.div variants={containerVariants} initial="initial" animate="animate" exit="exit"
            className="fixed inset-0 z-[999] flex items-center justify-center bg-white dark:bg-[#121212]"
        >
            <motion.div className="flex overflow-hidden"
                transition={{ staggerChildren: 0.1 }}
                initial="initial" animate="animate"
            >
                {letters.map((char, index) => (
                    <motion.span key={index}
                        variants={letterVariants}
                        className="text-2xl md:text-7xl font-bold font-[MighaBold] tracking-wide"
                    >
                        {char === " " ? "\u00A0" : char}
                    </motion.span>
                ))}
            </motion.div>
        </motion.div>
    );
};

export default LoadingScreen;