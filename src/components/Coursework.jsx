// src/components/CourseworkSection.jsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import ScrollReveal from './ScrollReveal';

const courseworkData = {
    Fall2021: [
        { title: "CMSC131: Object-Oriented Programming I", credits: 4, description: "Principles of OOP using Java." },
        { title: "MATH140: Calculus I", credits: 4, description: "Introduction to calculus, including functions, limits, derivatives, integrals, etc. " },

    ],
    Spring2022: [
        { title: "CMSC132: Object-Oriented Programming II ", credits: 4, description: " Design, build, test, and debug medium-size Java software systems/programs and learn to use relevant tools." },
        { title: "MATH141: Calculus II ", credits: 4, description: "Topics include integration, inverse functions, exponential and logarithmic functions, sequences and series." },
        { title: "MATH206: Introduction to MATLAB", credits: 1, description: "Matlab fundamentals covering equation solving, calculus, matrices and vectors, functions, and basic programming." },
    ],
    Fall2022: [
        { title: "CMSC250: Discrete Structures", credits: 4, description: "Key computer science math concepts: sets, relations, logic, permutations, graphs, trees, and problem-solving." },
        { title: "CMSC 216: Intro to Computer Systems", credits: 4, description: "Covers C programming, assembly, UNIX, threads, and optimization in Linux." },
        { title: "STAT400: Applied Probability and Statistics", credits: 3, description: "Intro to Statistics for Engineers includes random variables, distributions, central limit theorem, sampling, estimation, and hypothesis testing." },
    ],
    Spring2023: [
        { title: "CMSC330: Organization of Programming Languages", credits: 3, description: "Study of programming languages (Ruby, Python, OCaml, Haskell, Rust), covering syntax, semantics, parsing, automata, and security." },
        { title: "CMSC351: Algorithms", credits: 3, description: "Study of algorithm complexity in sorting, graphs, trees, and combinatorics, using mathematical techniques for recurrences. and summations." },
        { title: "CMSC389O: The Coding Interview", credits: 1, description: "A practical introduction to technical interviews, covering fundamental data structures and algorithms." },
    ],
    Fall2023: [
        { title: "CMSC420: Advanced Data Structures", credits: 3, description: "Study of description, properties, and implementation of data structures like heaps, trees, hash tables, skiplists, tries, and more." },
        { title: "CMSC335: Web Development", credits: 3, description: "Course covers JavaScript fundamentals, server-side scripting, and building web apps that interact with services and databases." },
        { title: "Web Development", credits: 3, description: "Building dynamic websites using HTML, CSS, and JavaScript." },
    ],
    Spring2024: [
        { title: "CMSC436: Android Development", credits: 3, description: "Course covers Android app development with Kotlin and XML, focusing on UI design, MVC architecture, data storage, and in-app features." },
        { title: "CMSC320: Intro to Data Science", credits: 3, description: "Goes over the data science pipeline—data collection, analysis, machine learning, visualization, and result communication—using case studies and a final project. Technologies include Python, NumPy, and Pandas." },
        { title: "CMSC389G: After Landing SWE Job", credits: 1, description: "Simulates a Software Engineering role, covering Git, code reviews, AWS, design docs, and unit testing, with hands-on experience in designing, implementing, and testing features." },
    ],
    Fall2024: [
        { title: "CMSC498B: Cloud Computing", credits: 3, description: "Introduction to Microsoft Azure, distributed systems, virtualization, storage, and datacenter networking, with a semester-long group project on reverse engineering real-time communication in Zoom." },
        { title: "ENGL393: Technical Writing", credits: 3, description: "Major assignments include a Skills Resume, Technical Instructions, Infographics, and a E-Portfolio." },
        { title: "ENES424: Engineering Leadership Capstone", credits: 3, description: "A capstone course where students use a case study to propose solutions for positive change, informed by organizational and leadership theories." },
    ],
    Spring2025: [
        { title: "CMSC414: Computer & Network Security ", credits: 3, description: "Introduction to security in computer systems and networks, covering C programming, network security, encryption, authentication, and practical solutions for internet environments." },
        { title: "CMSC424: Database Design", credits: 3, description: "Topics include ER diagrams, SQL, web databases with PHP/Java, SQL injection, encryption, B+-trees, NoSQL (MongoDB), concurrency, data warehousing, data mining, and query processing." },

    ],
};

const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
};

const Coursework = () => {
    const [currentSemester, setCurrentSemester] = useState('Spring2025');

    return (
        <div id="coursework" className="flex min-h-[70vh] w-full flex-col items-center justify-center gap-16 md:gap-32 p-4 md:px-14 md:py-24">
            <ScrollReveal>
                <h1 className="text-4xl font-light text-white md:text-6xl text-center"
                >
                    Relevant Coursework
                </h1>

            </ScrollReveal>
            <ScrollReveal>
                <div className="w-full max-w-[1000px] mx-auto p-6 bg-black border-2 border-white rounded-lg shadow-md"
                >
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                        {Object.keys(courseworkData).map((semester) => (
                            <button
                                key={semester}
                                className={`flex-1 py-2 text-center rounded-lg transition duration-300 mb-2
                ${currentSemester === semester ? 'bg-blue-600 text-white' : 'bg-gray-800 text-gray-300 hover:bg-gray-700'}`}
                                onClick={() => setCurrentSemester(semester)}
                            >
                                {semester.replace(/([A-Za-z]+)(\d+)/, '$1 $2')}
                            </button>
                        ))}
                    </div>
                    <div className="space-y-4">
                        {courseworkData[currentSemester].map((course, index) => (
                            <div key={index} className="p-4 bg-gray-900 rounded-lg shadow">
                                <h3 className="font-semibold text-lg text-white">{course.title}</h3>
                                <p className="text-gray-400">Credits: {course.credits}</p>
                                <p className="text-gray-500">{course.description}</p>
                            </div>
                        ))}
                    </div>
                </div>

            </ScrollReveal>
            <div className="md:mb-0 sm:mb-4" />
        </div>
    );
};

export default Coursework;