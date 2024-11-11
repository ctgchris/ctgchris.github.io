import { motion } from "framer-motion";
import gdit from "/gdit.png";
import asts from "/asts.png";
import golfpass from "/golfpass.png";
import ra from "/ra.jpg";
import tommy from "/tommy.png";
import aap from "/aap.jpg";
import johnson from "/johnson.jpg";
import ScrollReveal from './ScrollReveal';

const experienceData = [
  {
    image: golfpass,
    title: "Comcast NBCUniversal - Software Engineering Intern",
    date: "(June 2024 - Aug 2024)",
    description: "Resolved 14 Jira issues and deployed bug fixes to the production environment of GolfPass.com, optimizing functionality for NBC Sports' Golf streaming platform with 229,000 paid members.",
    technologies: ["Handlebars", "TailwindCSS", "JavaScript", "Figma", "Jira"],
  },
  {
    image: gdit,
    title: "General Dynamics Information Technology - Software Development Intern",
    date: "(June 2023 - Aug 2023)",
    description: "Applied agile methodologies in an R&D project to build an onboarding platform for new hires in the GDIT subsidiary. Decreased administrative overhead by 75% by automating new hire form management with a SharePoint, PowerApps, and Power Automate hybrid system, eliminating manual processing and improving form tracking.",
    technologies: ["Sharepoint", "PowerApps", "Power Automate"],
  },
];

const additionalExperienceData = [
  {
    image: johnson,
    title: "University of Maryland - Johnson-Whittle Hall Resident Assistant",
    date: "(Aug 2024 - Present)",
    description: "Supervise 84 Johnson-Whittle Hall residents while building community and providing mentorship on a personal/professional level.",
    skills: ["Student Engagement", "Student Housing", "Leadership", "Communication"],
  },
  {
    image: aap,
    title: "University of Maryland - Academic Achievement Program COMM107 Teaching Assistant",
    date: "(Aug 2023 - May 2024)",
    description: "Led weekly in-person tutoring sessions for 28 first-generation college students taking Intro to Communications, delivering a range of teaching and assessment activities.",
    skills: ["Lesson Planning", "University Teaching", "Leadership", "Communication"],
  },
  {
    image: asts,
    title: "University of Maryland - Academic Success & Tutoring Services Computer Science Tutor",
    date: "(Aug 2023 - May 2024)",
    description: "Assisted over 10 students with complex data structures and algorithms coursework, totaling 50+ tutoring hours. Honed technical communication and knowledge transfer skills by tailoring them to diverse learning preferences.",
    skills: ["Data Structures", "Algorithms", "Lesson Planning", "University Teaching", "Leadership", "Communication"],
  },
  {
    image: tommy,
    title: "Tommy Hilfiger - Sales Lead Associate",
    date: "(July 2019 - Aug 2022)",
    description: "Tailored training to 8 new hires, improving operational efficiency and adherence to company standards. Managed weekly processing of 200+ shipment boxes, implementing floor arrangements to optimize sales.",
    skills: ["Teamwork", "Cashiering", "Retail Sales", "Customer Service", "Leadership"],
  },
];

const ExperienceCard = ({ experience }) => {
  return (
    <ScrollReveal>
      <div className="flex flex-col items-center gap-8 md:flex-row md:gap-24">
        <img src={experience.image} alt="" className="w-full cursor-pointer rounded-2xl transition-all duration-300 hover:scale-105 md:w-[300px]" />
        <div className="flex flex-col gap-5">
          <div className="flex flex-col gap-2">
            <div className="text-xl font-semibold"> {experience.title} </div>
            <div className="text-gray-500 text-base"> {experience.date} </div>
            <div className="text-gray-400">{experience.description}</div>
          </div>
          <div className="flex flex-wrap gap-5">
            {
              experience.technologies.map((tech, index) => (
                <span key={index} className="rounded-lg bg-black p-3">
                  {tech}
                </span>
              ))
            }
          </div>
        </div>
      </div>
    </ScrollReveal>
  );
};

const AdditionalExperienceCard = ({ experience }) => {
  return (
    <ScrollReveal>
      <div className="flex flex-col items-center gap-8 md:flex-row md:gap-24">
        <img src={experience.image} alt="" className="w-full cursor-pointer rounded-2xl transition-all duration-300 hover:scale-105 md:w-[300px]" />
        <div className="flex flex-col gap-5">
          <div className="flex flex-col gap-2">
            <div className="text-xl font-semibold"> {experience.title} </div>
            <div className="text-gray-500 text-base"> {experience.date} </div>
            <div className="text-gray-400">{experience.description}</div>
          </div>
          <div className="flex flex-wrap gap-5">
            {
              experience.skills.map((skill, index) => (
                <span key={index} className="rounded-lg bg-black p-3">
                  {skill}
                </span>
              ))
            }
          </div>
        </div>
      </div>
    </ScrollReveal>
  );
};

const Experiences = () => {
  return (
    <div id="experiences" className="flex min-h-screen w-full flex-col items-center justify-center gap-16 p-4 md:px-14 md:py-24">
      <ScrollReveal>
        <h1 className="text-4xl font-light text-white md:text-6xl text-center">
          Relevant Experience
        </h1>
      </ScrollReveal>

      <div className="flex w-full max-w-[1000px] flex-col gap-16 text-white">
        {
          experienceData.map((experience, index) => (
            <ExperienceCard key={index} experience={experience} />
          ))
        }
      </div>
      <ScrollReveal>
        <h1 className="text-4xl font-light text-white md:text-6xl text-center">
          Additional Experience
        </h1>
      </ScrollReveal>
      <div className="flex w-full max-w-[1000px] flex-col gap-16 text-white">
        {
          additionalExperienceData.map((experience, index) => (
            <AdditionalExperienceCard key={index} experience={experience} />
          ))
        }
      </div>
      <div className="md:mb-0 sm:mb-4" />

    </div>
  );
};

export default Experiences;