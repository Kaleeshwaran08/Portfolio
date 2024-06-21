import aboutImg from "../assets/kaleeswaran_about.jpeg";
import { ABOUT_TEXT } from "../constants";
import { motion } from "framer-motion";

const About = () => {
    return (
        <div className="py-12 lg:py-16 border-b border-neutral-900">
            <h1 className="my-8 lg:my-12 text-center text-4xl">
                About 
                <span className="text-neutral-500"> Me</span> 
            </h1>
            <div className="container mx-auto max-w-screen-lg lg:max-w-screen-xl flex flex-col lg:flex-row items-center justify-center lg:justify-center">
                <motion.div 
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: -100 }}
                    transition={{ duration: 0.5 }}
                    className="w-full lg:w-1/4 mb-8 lg:mb-0 flex justify-center lg:justify-start px-4 lg:px-8"
                >
                    <img
                        className="rounded-lg w-82 h-80 lg:w-92 lg:h-96 object-cover"
                        src={aboutImg}
                        alt="about"
                    />
                </motion.div>

                <motion.div 
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: 100 }}
                    transition={{ duration: 0.5 }}
                    className="my-4 max-w-xl py-2 font-light tracking-tighter text-center lg:text-center"
                >
                    <p className="my-2 max-w-xl py-6">{ABOUT_TEXT}</p>
                </motion.div>
            </div>
        </div>
    );
};

export default About;