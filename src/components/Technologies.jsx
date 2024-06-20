import React from 'react';
import { RiReactjsLine } from "react-icons/ri";
import { SiPython, SiMysql, SiTableau, SiPandas, SiNumpy, SiPytorch, SiPowerbi, SiHtml5, SiCss3, SiDjango, SiGithub } from "react-icons/si";
import { FaBrain, FaDatabase, FaChartLine, FaCode, FaRobot, FaChartBar } from "react-icons/fa";
import { DiSpark } from "react-icons/di";
import { FiGrid } from "react-icons/fi";
import { MdAnalytics } from "react-icons/md";
import { GiBrain, GiArtificialIntelligence } from "react-icons/gi";
import { motion } from "framer-motion";

const iconVariants = (duration) => ({
    initial: { y: -10 },
    animate: {
        y: [10, -10],
        transition: {
            duration: duration, 
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse",
        }
    }
});

const technologies = [
    { icon: <SiPython className="text-7xl text-yellow-500" />, duration: 2 },
    { icon: <SiMysql className="text-7xl text-blue-600" />, duration: 2 },
    { icon: <MdAnalytics className="text-7xl text-green-500" />, duration: 3 },
    { icon: <FaChartLine className="text-7xl text-red-500" />, duration: 7 },
    { icon: <FaDatabase className="text-7xl text-purple-500" />, duration: 5.5 },
    { icon: <FaBrain className="text-7xl text-yellow-600" />, duration: 3.5 },
    { icon: <GiArtificialIntelligence className="text-7xl text-blue-500" />, duration: 4 },
    { icon: <FaRobot className="text-7xl text-gray-500" />, duration: 2.5 },
    { icon: <FaCode className="text-7xl text-pink-500" />, duration: 6 },
    { icon: <SiPandas className="text-7xl text-black" />, duration: 2 },
    { icon: <SiNumpy className="text-7xl text-blue-500" />, duration: 2 },
    { icon: <DiSpark className="text-7xl text-orange-500" />, duration: 4 },
    { icon: <SiTableau className="text-7xl text-blue-700" />, duration: 3.5 },
    { icon: <SiPowerbi className="text-7xl text-yellow-500" />, duration: 4.5 },
    { icon: <SiHtml5 className="text-7xl text-orange-600" />, duration: 3 },
    { icon: <SiCss3 className="text-7xl text-blue-600" />, duration: 5.5 },
    { icon: <SiDjango className="text-7xl text-green-700" />, duration: 3 },
    { icon: <SiGithub className="text-7xl text-black" />, duration: 4 },
    { icon: <FaChartBar className="text-7xl text-green-600" />, duration: 5 },
    { icon: <FaBrain className="text-7xl text-purple-600" />, duration: 4.5 },
    { icon: <GiBrain className="text-7xl text-red-600" />, duration: 3 },
    { icon: <FiGrid className="text-7xl text-yellow-600" />, duration: 6 },
];

const Technologies = () => {
    return (
        <div>
            <div className="border-b border-neutral-800 pb-24">
                <motion.h1 
                    whileInView={{ opacity: 1, y: 0 }}
                    initial={{ opacity: 0, y: -100 }}
                    transition={{ duration: 1.5 }}
                    className="my-20 text-center text-4xl">Technologies
                </motion.h1>
                <motion.div 
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: -100 }}
                    transition={{ duration: 1.5 }}
                    className="flex flex-wrap items-center justify-center gap-4"
                >
                    {technologies.map((tech, index) => (
                        <motion.div 
                            key={index}
                            variants={iconVariants(tech.duration)}
                            initial='initial'
                            animate="animate"
                            className="rounded-2xl border-4 border-neutral-800 p-4"
                        >
                            {tech.icon}
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </div>
    );
}

export default Technologies;
