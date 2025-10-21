// import React from "react";
// import {
//     FaHtml5,
//     FaCss3Alt,
//     FaJs,
//     FaReact,
//     FaNodeJs,
//     FaGitAlt,
//     FaGithub
// } from "react-icons/fa";
// import { SiTailwindcss, SiMongodb, SiExpress, SiFigma } from "react-icons/si";
// import { motion, useAnimation } from "framer-motion";

// const Skills = () => {
//     const skills = {
//         Frontend: [
//             { name: "HTML5", icon: <FaHtml5 className="text-orange-500" />, level: 95 },
//             { name: "CSS3", icon: <FaCss3Alt className="text-blue-500" />, level: 90 },
//             { name: "JavaScript", icon: <FaJs className="text-yellow-400" />, level: 85 },
//             { name: "React", icon: <FaReact className="text-cyan-400" />, level: 90 },
//             { name: "Tailwind CSS", icon: <SiTailwindcss className="text-sky-400" />, level: 88 },
//         ],
//         Backend: [
//             { name: "Node.js", icon: <FaNodeJs className="text-green-500" />, level: 85 },
//             { name: "Express.js", icon: <SiExpress className="text-gray-300" />, level: 80 },
//             { name: "MongoDB", icon: <SiMongodb className="text-green-600" />, level: 83 },
//         ],
//         Tools: [
//             { name: "Git", icon: <FaGitAlt className="text-orange-600" />, level: 90 },
//             { name: "GitHub", icon: <FaGithub className="text-white" />, level: 95 },
//             { name: "Figma", icon: <SiFigma className="text-pink-500" />, level: 70 },
//         ],
//     };
//     const scrollAnimation = (direction = "left") => ({
//         animate: {
//             x: direction === "left" ? ["0%", "-100%"] : ["-100%", "0%"],
//         },
//         transition: {
//             repeat: Infinity,
//             repeatType: "loop",
//             ease: "linear",
//             duration: 15,
//         },
//     });

//     const SkillRow = ({ skillList, direction }) => {
//         const controls = useAnimation();

//         React.useEffect(() => {
//             controls.start(scrollAnimation(direction).animate);
//         }, [controls, direction]);

//         return (
//             <div className="overflow-hidden w-full">
//                 <motion.div
//                     className="flex gap-6"
//                     animate={controls}
//                     transition={scrollAnimation(direction).transition}
//                     onMouseEnter={() => controls.stop()}
//                     onMouseLeave={() => controls.start(scrollAnimation(direction).animate)}
//                 >
//                     {[...skillList, ...skillList].map((skill, index) => (
//                         <div
//                             key={index}
//                             className="flex flex-col items-center p-3 min-w-[130px] bg-gradient-to-r from-gray-900 to-gray-800 rounded-xl shadow-lg hover:scale-105 hover:bg-gray-700 transition-all duration-300"
//                         >
//                             <div className="text-5xl mb-3">{skill.icon}</div>
//                             <p className="text-lg font-medium mb-2">{skill.name}</p>
//                             <div className="w-full bg-gray-700 rounded-full h-2 overflow-hidden">
//                                 <div
//                                     className="bg-orange-500 h-2"
//                                     style={{ width: `${skill.level}%` }}
//                                 ></div>
//                             </div>
//                             <span className="text-sm mt-1 text-gray-300">
//                                 {skill.level}%
//                             </span>
//                         </div>
//                     ))}
//                 </motion.div>
//             </div>
//         );
//     };

//     return (
//         <section id="skills" className="text-white py-16 lg:mb-20">
//             <div className="px-5 md:px-5 lg:px-10">
//                 <h2 className="text-4xl text-orange-500 font-bold text-center mb-10">
//                     💡 My Skills
//                 </h2>

//                 <h3 className="text-2xl font-semibold mb-6 border-l-4 border-orange-500 pl-3">
//                     Frontend
//                 </h3>
//                 <SkillRow skillList={skills.Frontend} direction="right" />

//                 <h3 className="text-2xl font-semibold mt-10 mb-6 border-l-4 border-orange-500 pl-3">
//                     Backend
//                 </h3>
//                 <SkillRow skillList={skills.Backend} direction="left" />

//                 <h3 className="text-2xl font-semibold mt-10 mb-6 border-l-4 border-orange-500 pl-3">
//                     Tools
//                 </h3>
//                 <SkillRow skillList={skills.Tools} direction="right" />
//             </div>
//         </section>
//     );
// };

// export default Skills;


import React from "react";
import { motion } from "framer-motion";
import { FaCode, FaLightbulb, FaUsers, FaLaptop, FaTools, FaClock, FaComments, FaChalkboardTeacher, FaProjectDiagram, FaStar } from "react-icons/fa";

const programmingSkills = [
    { name: "C", icon: <FaCode /> },
    { name: "C++", icon: <FaCode /> },
    { name: "Python", icon: <FaCode /> },
    { name: "Data Structure", icon: <FaProjectDiagram /> },
    { name: "Algorithm", icon: <FaProjectDiagram /> },
    { name: "Problem Solving", icon: <FaLightbulb /> },
    { name: "Competitive Programming", icon: <FaLaptop /> },
];

const competitiveProfiles = [
    { name: "Codechef", link: "https://www.codechef.com/users/clear_camp_92", icon: <FaLaptop /> },
    { name: "Codeforces", link: "https://codeforces.com/profile/Abul_Hasnat", icon: <FaLaptop /> }
];

const softSkills = [
    { name: "Public Speaking", icon: <FaComments /> },
    { name: "Emphatic Listening", icon: <FaUsers /> },
    { name: "Confidence", icon: <FaLightbulb /> },
    { name: "Adaptability", icon: <FaChalkboardTeacher /> },
    { name: "Team Work", icon: <FaUsers /> }
];

const technicalSkills = [
    { name: "Canva", icon: <FaTools /> },
    { name: "MS Word", icon: <FaTools /> },
    { name: "MS PowerPoint", icon: <FaTools /> }
];

const SkillsPage = () => {
    return (
        <section className="min-h-screen  text-white py-16 px-6 md:px-16">
            <div className="max-w-6xl mx-auto">

                {/* Title */}
                <motion.h1
                    className="text-4xl md:text-5xl font-bold text-center mb-12 flex items-center justify-center gap-3"
                    initial={{ opacity: 0, y: -30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <FaStar className="text-[#25a244] text-3xl md:text-4xl" />
                    My Skills
                    <FaStar className="text-[#25a244] text-3xl md:text-4xl" />
                </motion.h1>

                {/* Programming Skills */}
                <motion.div
                    className="mb-12"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-2xl font-semibold mb-6 border-b-2 border-white inline-block pb-2">Programming Skills</h2>
                    <div className="flex flex-wrap gap-4">
                        {programmingSkills.map((skill, idx) => (
                            <motion.div
                                key={idx}
                                className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full shadow-md hover:bg-white/20 transition-all cursor-pointer"
                                whileHover={{ scale: 1.05 }}
                            >
                                <span className="text-[#05f244] text-lg">{skill.icon}</span>
                                <span className="font-medium">{skill.name}</span>
                            </motion.div>
                        ))}
                        {competitiveProfiles.map((profile, idx) => (
                            <motion.a
                                key={idx}
                                href={profile.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full shadow-md hover:bg-white/20 transition-all cursor-pointer"
                                whileHover={{ scale: 1.05 }}
                            >
                                <span className="text-[#05f244] text-lg">{profile.icon}</span>
                                <span>{profile.name} Profile</span>
                            </motion.a>
                        ))}
                    </div>
                </motion.div>

                {/* Soft Skills */}
                <motion.div
                    className="mb-12"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    <h2 className="text-2xl font-semibold mb-6 border-b-2 border-white inline-block pb-2">Soft Skills</h2>
                    <div className="flex flex-wrap gap-4">
                        {softSkills.map((skill, idx) => (
                            <motion.div
                                key={idx}
                                className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full shadow-md hover:bg-white/20 transition-all cursor-pointer"
                                whileHover={{ scale: 1.05 }}
                            >
                                <span className="text-[#05f244] text-lg">{skill.icon}</span>
                                <span>{skill.name}</span>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Technical Skills */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                >
                    <h2 className="text-2xl font-semibold mb-6 border-b-2 border-white inline-block pb-2">Technical Skills</h2>
                    <div className="flex flex-wrap gap-4">
                        {technicalSkills.map((skill, idx) => (
                            <motion.div
                                key={idx}
                                className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full shadow-md hover:bg-white/20 transition-all cursor-pointer"
                                whileHover={{ scale: 1.05 }}
                            >
                                <span className="text-[#05f244] text-lg">{skill.icon}</span>
                                <span>{skill.name}</span>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

            </div>
        </section>
    );
};

export default SkillsPage;
