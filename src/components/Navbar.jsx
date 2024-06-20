import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
// import { FaTwitterSquare } from "react-icons/fa";
// import { FaInstagram } from "react-icons/fa";
import { motion } from "framer-motion";

const iconVariants = {
  hover: {
    scale: 1.2,
    transition: {
      duration: 0.3,
      yoyo: Infinity, // Repeats the animation back and forth
    },
  },
};

const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.5, delay: delay },
  },
});

const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      {/* Logo removed */}
      <div></div>

      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <motion.a
          href="http://www.linkedin.com/in/kaleeshwaran-a-6b603b264"
          target="_blank"
          rel="noopener noreferrer"
          variants={container(0)}
          initial="hidden"
          animate="visible"
          whileHover="hover"
        >
          <motion.div variants={iconVariants}>
            <FaLinkedin />
          </motion.div>
        </motion.a>
        <motion.a
          href="https://github.com/Kaleeshwaran08"
          target="_blank"
          rel="noopener noreferrer"
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          whileHover="hover"
        >
          <motion.div variants={iconVariants}>
            <FaGithub />
          </motion.div>
        </motion.a>
        {/* <motion.a
          href="https://twitter.com/your-profile"
          target="_blank"
          rel="noopener noreferrer"
          variants={container(0.4)}
          initial="hidden"
          animate="visible"
          whileHover="hover"
        >
          <motion.div variants={iconVariants}>
            <FaTwitterSquare />
          </motion.div>
        </motion.a>
        <motion.a
          href="https://www.instagram.com/your-profile"
          target="_blank"
          rel="noopener noreferrer"
          variants={container(0.6)}
          initial="hidden"
          animate="visible"
          whileHover="hover"
        >
          <motion.div variants={iconVariants}>
            <FaInstagram />
          </motion.div>
        </motion.a> */}
      </div>
    </nav>
  );
};

export default Navbar;
