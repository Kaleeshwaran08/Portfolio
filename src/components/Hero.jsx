import { HERO_CONTENT } from "../constants";
import profilePic from "../assets/hero.jpeg"; // Assuming this is the correct profile picture import

// Import animation
import { motion } from "framer-motion";

// SVG for download icon
const DownloadIcon = (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
    </svg>
);

const container = (delay) => ({
    hidden: { x: -100, opacity: 0 },
    visible: {
        x: 0,
        opacity: 1,
        transition: { duration: 0.5, delay: delay },
    },
});

const continuousMotion = {
    initial: {
        x: -100,
        opacity: 0,
    },
    animate: {
        x: 0,
        opacity: 1,
        transition: {
            duration: 0.3,
            delay: 1,
            yoyo: Infinity,
            ease: "easeInOut",
        },
    },
};

const ResumeDownloadButton = () => (
    <motion.div className="flex items-center mt-4" variants={continuousMotion} initial="initial" animate="animate">
        <a
            href="https://drive.google.com/file/d/16TS_0zRdOk8H8NCqJoNwGj4ExayHdJFO/view?usp=sharing" // Correct the href to the actual path
            download="Kaleeshwaran Resume.pdf"
            target="_blank"
            className="flex items-center px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-700"
        >
            {DownloadIcon}
            <span className="ml-2">Download Resume</span>
        </a>
    </motion.div>
);

const Hero = () => {
    return (
        <div className="border-b border-neutral-900 pb-4 lg:mb-35">
            <div className="container mx-auto flex flex-wrap lg:flex-nowrap items-center">
                <div className="w-full lg:w-1/2 mb-8 lg:mb-0">
                    <div className="flex flex-col items-center lg:items-center">
                        <motion.h1 
                            variants={container(0)}
                            initial='hidden'
                            animate='visible'
                            className="pb-4 text-4xl font-thin tracking-tight text-center lg:text-left lg:text-5xl" 
                        >
                            Kaleeshwaran Arumugam
                        </motion.h1>
    
                        <motion.span 
                            variants={container(0.5)}
                            initial='hidden'
                            animate='visible'
                            className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-xl tracking-tight text-transparent lg:text-3xl">
                            Data Scientist and Analytics
                        </motion.span>
                        <motion.p 
                            variants={container(1)}
                            initial='hidden'
                            animate='visible'
                            className="my-4 max-w-xl py-2 font-light tracking-tighter text-center lg:text-center">
                                
                            {HERO_CONTENT}
                        </motion.p>
                        <ResumeDownloadButton /> {/* Add the download button here */}
                    </div>
                </div>
                <div className="w-full lg:w-1/2 flex justify-center lg:justify-center">
                    <motion.img 
                        initial={{ x: 100, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="rounded-lg w-82 h-80 lg:w-92 lg:h-96 object-cover" // Increased width and height
                        src={profilePic} 
                        alt="Kaleeshwaran" 
                    />
                </div>
            </div>
        </div>
    );
};

export default Hero;
