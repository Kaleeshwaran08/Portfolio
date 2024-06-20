import { HERO_CONTENT } from "../constants";
// import profilePic from "../assets/kevinRushProfile.png"; // Assuming this is the correct profile picture import
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
            <div className="flex flex-wrap">
                <div className="w-full lg:w-1/2">
                    <div className="flex flex-col items-center lg:items-start">
                        
                        <motion.h1 
                            variants={container(0)}
                            initial='hidden'
                            animate='visible'
                            className="pb-8 text-4xl font-thin tracking-tight lg:mt-16 lg:text-6xl"
                        >
                            Kaleeshwaran 
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
                            className="my-2 max-w-xl py-6 font-light tracking-tighter text-center lg:text-left">
                            {HERO_CONTENT}
                        </motion.p>
                        <ResumeDownloadButton /> {/* Add the download button here */}
                    </div>
                </div>
                <div className="w-full lg:w-1/2 lg:p-8">
                    <div className="flex justify-center lg:justify-end w-550 h-550">
                        <motion.img 
                            initial={{ x: 100, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                            style={{ width: '500px', height: '500px' }} // Inline styles for width and height
                            className="rounded-lg"
                            src={profilePic} 
                            alt="Kevin Rush" 
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
