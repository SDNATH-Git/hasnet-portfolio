
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
        <section className="  text-white py-16 px-6 md:px-16">
            <div className="">

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
