import h4i from "/h4i.png";
import codepath from "/codepath.png";
import { BsBoxArrowUpRight } from "react-icons/bs";
import ScrollReveal from "./ScrollReveal";

const affiliationData = [
    {
        image: h4i,
        title: "Hack4Impact-UMD - Student Software Engineer",
        date: "(Aug 2023 - Present)",
        description: "Hack4Impact-UMD is a student-run nonprofit organization with 120+ members that builds free custom software tools for nonprofits while enabling students to gain real-world software development skills. Served as a software engineer on project teams building tailored applications for the nonprofits Leveling the Playing Field and the Swaliga Foundation.",
        technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Salesforce"],
        link: "https://umd.hack4impact.org/",
    },
    {
        image: codepath,
        title: "CodePath - Community Member",
        date: "(Dec 2023 - Present)",
        description: "Engaged with CodePath, a nonprofit focused on increasing diversity in tech, by participating in hands-on courses, mentorship, and a supportive community for underrepresented groups in technology.",
        technologies: ["Professional Development", "Networking", "Data Structures", "Algorithms", "Cybersecurity", "Android Development"],
        link: "https://www.codepath.org/impact",
    },

]


const AffiliationCard = ({ affiliation }) => {
    return (
        <ScrollReveal>

            <div className="flex flex-col items-center gap-8 md:flex-row md:gap-24">
                <img src={affiliation.image} alt="" className="w-full cursor-pointer rounded-2xl transition-all duration-300 hover:scale-105 md:w-[300px]" />
                <div className="flex flex-col gap-5">
                    <div className="flex flex-col gap-2">
                        <div className="text-xl font-semibold flex items-center">
                            {affiliation.title}
                            <a href={affiliation.link} target="_blank" rel="noopener noreferrer" className="ml-2">
                                <BsBoxArrowUpRight className="text-gray-400 hover:text-white transition duration-200" />
                            </a>
                        </div>
                        <div className="text-gray-500 text-base">
                            {affiliation.date}
                        </div>
                        <div className="text-gray-400">{affiliation.description}</div>
                    </div>
                    <div className="flex flex-wrap gap-5">
                        {
                            affiliation.technologies.map((tech, index) => (
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
const Affiliations = () => {
    return (
        <div id="affiliations" className="flex min-h-screen w-full flex-col items-center justify-center gap-16 p-4 md:px-14 md:py-24">
            <ScrollReveal>
                <h1 className="text-4xl font-light text-white md:text-6xl">
                    Affiliations
                </h1>

            </ScrollReveal>

            <div className="flex w-full max-w-[1000px] flex-col gap-16 text-white">
                {
                    affiliationData.map((affiliation, index) => (
                        <AffiliationCard key={index} affiliation={affiliation} />


                    ))
                }
            </div>


        </div>
    )
}

export default Affiliations