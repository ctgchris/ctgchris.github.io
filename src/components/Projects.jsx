import { motion } from "framer-motion";
import { BsBoxArrowUpRight } from "react-icons/bs";
import project1 from "/project1.png";
import project2 from "/project2.png";
import portfolio from "/portfolio.png";
import project4 from "/project4.png";
import project5 from "/project5.png";
import ScrollReveal from "./ScrollReveal";
const projectsData = [
  {
    image: project1,
    title: "Leveling the Playing Field Store Website",
    description: "Building a Next.js mobile web app to automate youth sports equipment requests for a nonprofit that has served over 100,000 children, streamlining their customer experience for browsing and ordering equipment.",
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Salesforce"],
    link: "https://github.com/Hack4Impact-UMD/leveling-the-playing-field",
  },
  {
    image: project2,
    title: "Swaliga Survey Analytics Website",
    description: "Developed a Next.js platform automating student notifications, data management, and survey analysis for the Swaliga Foundation, an NPO empowering 10,000+ under-served youth with STEM education.",
    technologies: ["Next.js", "React", "TypeScript", "Firebase"],
    link: "https://umd.hack4impact.org/ourwork/swaliga",
  },
  {
    image: portfolio,
    title: "Personal Portfolio Wesbite",
    description: "Built a website using React to practice front-end development and animation, including hosting and deployment.",
    technologies: ["React", "Tailwind CSS", "Framer Motion"],
    link: "https://github.com/ctgchris/ctgchris.github.io",
  },
  {
    image: project4,
    title: "Testudo Bank Web App",
    description: "Implemented an account freeze feature and an APY interest rate using Java and MySQL, complemented by comprehensive design documentation and thorough JUnit integration tests.",
    technologies: ["Java", "Spring Boot", "JUnit", "MySQL", "Docker"],
    link: "https://github.com/ctgchris/testudo-bank",
  },
  {
    image: project5,
    title: "Housing Price Evaluation",
    description: "Collected, processed, and analyzed U.S. housing data to identify correlations between features and market estimates.",
    technologies: ["Python", "NumPy", "Pandas"],
    link: "https://github.com/ctgchris/house-prediction",
  },
]


const ProjectCard = ({ project }) => {
  return (
    <ScrollReveal>

      <div className="flex flex-col items-center gap-8 md:flex-row md:gap-24">
        <img src={project.image} alt="" className="w-full cursor-pointer rounded-2xl transition-all duration-300 hover:scale-105 md:w-[300px]" />
        <div className="flex flex-col gap-5">
          <div className="flex flex-col gap-3">
            <div className="text-xl font-semibold flex items-center">
              {project.title}
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="ml-2">
                <BsBoxArrowUpRight className="text-gray-400 hover:text-white transition duration-200" />
              </a>
            </div>
            <div className="text-gray-400">{project.description}</div>
          </div>
          <div className="flex flex-wrap gap-5">
            {
              project.technologies.map((tech, index) => (
                <span key={index} className="rounded-lg bg-black p-3">
                  {tech}
                </span>
              ))
            }
          </div>
        </div>
      </div>
    </ScrollReveal>

  )
}
const Projects = () => {
  return (
    <div id="projects" className="flex min-h-screen w-full flex-col items-center justify-center gap-16 p-4 md:px-14 md:py-24">
      <ScrollReveal>
        <h1 className="text-4xl font-light text-white md:text-6xl">
          Projects
        </h1>

      </ScrollReveal>

      <div className="flex w-full max-w-[1000px] flex-col gap-16 text-white">
        {
          projectsData.map((project, index) => (
            <ProjectCard key={index} project={project} />


          ))
        }
      </div>
      <div className="md:mb-0 sm:mb-4" />


    </div>
  )
}

export default Projects