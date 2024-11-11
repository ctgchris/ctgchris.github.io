
import { motion } from "framer-motion"
import  headshot from "/headshot.jpg";
const Hero = () => {
  return (
    <div id="home" className="px-16 flex min-h-screen w-full items-center justify-center py-28 md:px-32">
      <div className="flex flex-col items-center justify-center gap-10 text-white">
        <motion.div
        initial={{y: -50, opacity: 0}}
        animate={{ y: 0, opacity: 1 }}
        transition={{duration: 0.8, delay: 0.2}}
        
        >
          <img src={headshot} alt="" className="w-[300px] cursor-pointer rounded-full shadow-xl shadow-indigo-900 transition-all duration-300 hover:-translate-y-5 hover:scale-15 hover:shadow-2xl hover:shadow-indigo-600 md:w-[350px]" />
        </motion.div>
        <motion.div 
        initial={{y: 50, opacity: 0}}
        animate={{ y: 0, opacity: 1 }}
        transition={{duration: 0.8, delay: 0.2}}
        className="flex max-w-[600px] flex-col items-center justify-center gap-3 text-center">

          <h1 className="bg-gradient-to-r from-blue-500 to-pink-500 bg-clip-text text-transparent text-4xl font-light md:text-7xl pb-2">Chris Giang</h1>
          <h3 className="bg-gradient-to-r from-pink-500 to-blue-500 bg-clip-text text-transparent text-2xl md:text-3xl">CS Student @ UMD</h3>
          <p className="md:text-base text-pretty text-sm text-gray-400">I am a Computer Science student at the University of Maryland interested in gaining experience in full-stack, mobile, and cloud development.</p>
        </motion.div>

      </div>
    
    
    </div>
  )
}

export default Hero