import { BiLogoDocker, BiLogoFirebase, BiLogoGit, BiLogoGithub, BiLogoJava, BiLogoJavascript, BiLogoMongodb, BiLogoNodejs, BiLogoPython, BiLogoTailwindCss, BiLogoTypescript, BiLogoAndroid } from "react-icons/bi";

import { motion } from "framer-motion"
const Tech = () => {

  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 }
  }
  return (
    <div id="tech" className="flex min-h-[70vh] w-full flex-col items-center justify-center gap-16 md:gap-32">
      <motion.h1
        variants={variants}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.5 }}
        className="text-4xl font-light text-white md:text-6xl">Technologies
      </motion.h1>

      <div className="flex flex-wrap items-center justify-center gap-10 p-5">
        <motion.div variants={variants}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.5 }} className="flex flex-col items-center">
          <BiLogoTypescript className="cursor-pointer text-[80px] text-blue-500 transition-all duration-300 hover:-translate-y-5 sm:text-[100px] md:text-[120px]" />
          <span className="text-sm text-white">TypeScript</span>
        </motion.div>

        <motion.div variants={variants}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.5 }} className="flex flex-col items-center">
          <BiLogoJavascript className="cursor-pointer text-[80px] text-orange-500 transition-all duration-300 hover:-translate-y-5 sm:text-[100px] md:text-[120px]" />
          <span className="text-sm text-white">JavaScript</span>
        </motion.div>

        <motion.div variants={variants}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.5 }} className="flex flex-col items-center">
          <BiLogoTailwindCss className="cursor-pointer text-[80px] text-sky-400 transition-all duration-300 hover:-translate-y-5 sm:text-[100px] md:text-[120px]" />
          <span className="text-sm text-white">Tailwind CSS</span>
        </motion.div>

        <motion.div variants={variants}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.5 }} className="flex flex-col items-center">
          <BiLogoJava className="cursor-pointer text-[80px] text-orange-500 transition-all duration-300 hover:-translate-y-5 sm:text-[100px] md:text-[120px]" />
          <span className="text-sm text-white">Java</span>
        </motion.div>

        <motion.div variants={variants}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.5 }} className="flex flex-col items-center">
          <BiLogoPython className="cursor-pointer text-[80px] text-blue-500 transition-all duration-300 hover:-translate-y-5 sm:text-[100px] md:text-[120px]" />
          <span className="text-sm text-white">Python</span>
        </motion.div>

        <motion.div variants={variants}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.5 }} className="flex flex-col items-center">
          <BiLogoAndroid className="cursor-pointer text-[80px] text-green-500 transition-all duration-300 hover:-translate-y-5 sm:text-[100px] md:text-[120px]" /> 
          <span className="text-sm text-white">Android</span> 
        </motion.div>
        
        <motion.div variants={variants}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.5 }} className="flex flex-col items-center">
          <BiLogoDocker className="cursor-pointer text-[80px] text-blue-600 transition-all duration-300 hover:-translate-y-5 sm:text-[100px] md:text-[120px]" />
          <span className="text-sm text-white">Docker</span>
        </motion.div>

        <motion.div variants={variants}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.5 }} className="flex flex-col items-center">
          <BiLogoNodejs className="cursor-pointer text-[80px] text-green-400 transition-all duration-300 hover:-translate-y-5 sm:text-[100px] md:text-[120px]" />
          <span className="text-sm text-white">Node.js</span>
        </motion.div>
        
        <motion.div variants={variants}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.5 }} className="flex flex-col items-center">
          <BiLogoGit className="cursor-pointer text-[80px] text-orange-600 transition-all duration-300 hover:-translate-y-5 sm:text-[100px] md:text-[120px]" />
          <span className="text-sm text-white">Git</span>
        </motion.div>

        <motion.div variants={variants}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.5 }} className="flex flex-col items-center">
          <BiLogoFirebase className="cursor-pointer text-[80px] text-yellow-500 transition-all duration-300 hover:-translate-y-5 sm:text-[100px] md:text-[120px]" />
          <span className="text-sm text-white">Firebase</span>
        </motion.div>

        <motion.div variants={variants}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.5 }} className="flex flex-col items-center">
          <BiLogoMongodb className="cursor-pointer text-[80px] text-green-600 transition-all duration-300 hover:-translate-y-5 sm:text-[100px] md:text-[120px]" />
          <span className="text-sm text-white">MongoDB</span>
        </motion.div>
      </div>
      <div className="md:mb-0 sm:mb-4" />

    </div>
  );
};

export default Tech;
