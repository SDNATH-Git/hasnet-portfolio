// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import {
//     FaHome,
//     FaUser,
//     FaTools,
//     FaGraduationCap,
//     FaProjectDiagram,
//     FaEnvelope,
//     FaBars,
//     FaTimes,
// } from "react-icons/fa";
// import { Link, animateScroll as scroll } from "react-scroll";
// import logo from "../assets/logo.png";

// const Navbar = () => {
//     const [isOpen, setIsOpen] = useState(false);
//     const [navBg, setNavBg] = useState(false);
//     const [activeSection, setActiveSection] = useState("home");

//     useEffect(() => {
//         const handleScroll = () => {
//             // Navbar background toggle on scroll
//             if (window.scrollY > 50) setNavBg(true);
//             else setNavBg(false);

//             // Active section detection
//             const sections = ["home", "about", "skills", "education", "project", "contacts"];
//             const scrollPos = window.scrollY + 90; // Adjust offset if needed

//             // Loop backwards to find the current section in view
//             for (let i = sections.length - 1; i >= 0; i--) {
//                 const section = sections[i];
//                 const el = document.getElementById(section);
//                 if (el && el.offsetTop <= scrollPos) {
//                     setActiveSection(section);
//                     break;
//                 }
//             }
//         };

//         window.addEventListener("scroll", handleScroll);
//         return () => window.removeEventListener("scroll", handleScroll);
//     }, []);

//     const navItems = [
//         { name: "Home", icon: <FaHome />, link: "home" },
//         { name: "Skills", icon: <FaTools />, link: "skills" },
//         { name: "🗳 ElectionSection", link: "electionSection" },
//         { name: "Gallery", icon: <FaProjectDiagram />, link: "gallery1" },
//     ];
//     const navigate = useNavigate();
//     return (

//         <nav
//             className={`fixed w-full z-50 transition-all duration-300 ${navBg ? "bg-[#093A79] shadow-lg" : "bg-transparent"
//                 }`}
//         >
//             <div className="lg:px-10 px-5  flex justify-between items-center h-16">
//                 {/* Logo */}
//                 <a
//                     href="#home"
//                     className="flex-shrink-0 cursor-pointer  "
//                     onClick={() => {
//                         scroll.scrollToTop();
//                         setActiveSection("home");
//                         setIsOpen(false);
//                     }}
//                 >
//                     <p className="text-2xl text-[#25a244] font-extrabold">🗳 Hasnet </p>
//                 </a>

//                 {/* Desktop menu */}
//                 <ul className="hidden lg:flex space-x-8 text-white font-medium">
//                     {navItems.map((item) => (
//                         <li key={item.link}>
//                             <Link
//                                 to={item.link}
//                                 smooth={true}
//                                 offset={-80}
//                                 duration={500}
//                                 className={`cursor-pointer flex items-center gap-2 px-3 py-1 rounded-md transition-colors ${activeSection === item.link
//                                     ? "bg-[#25a244] text-white"
//                                     : "hover:bg-[#25a244] hover:text-white"
//                                     }`}
//                                 onClick={() => setIsOpen(false)}
//                                 spy={false} // We handle active state manually
//                             >
//                                 {item.icon}
//                                 <span>{item.name}</span>
//                             </Link>
//                         </li>
//                     ))}
//                 </ul>

//                 {/* Contacts button desktop */}
//                 <div className="hidden lg:block">
//                     {/* Button */}
//                     <button
//                         onClick={() => navigate("/electionPage")}
//                         className="z-10  bg-[#25a244] hover:bg-[#1f8838] text-white font-semibold px-6 py-3 rounded-full shadow-[0_20px_40px_rgba(37,162,68,0.7)] transition-transform transform hover:scale-105"
//                     >
//                         নির্বাচন ইশতিহার
//                     </button>
//                 </div>

//                 {/* Mobile hamburger */}
//                 <div className="lg:hidden flex items-center gap-3 text-white">
//                     <div onClick={() => setIsOpen(!isOpen)} className="cursor-pointer">
//                         {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
//                     </div>
//                 </div>
//             </div>

//             {/* Mobile menu */}
//             {isOpen && (
//                 <ul className="lg:hidden bg-[#093A79] text-white space-y-4 py-6 px-4">
//                     {navItems.map((item) => (
//                         <li key={item.link}>
//                             <Link
//                                 to={item.link}
//                                 smooth={true}
//                                 offset={-80}
//                                 duration={500}
//                                 className={`flex items-center gap-2 cursor-pointer px-3 py-2 rounded-md transition-colors ${activeSection === item.link
//                                     ? "bg-[#25a244] text-white"
//                                     : "hover:bg-[#25a244] hover:text-white"
//                                     }`}
//                                 onClick={() => setIsOpen(false)}
//                                 spy={false}
//                             >
//                                 {item.icon}
//                                 <span>{item.name}</span>
//                             </Link>
//                         </li>
//                     ))}
//                     <li>
//                         {/* Button */}
//                         <button
//                             onClick={() => navigate("/electionPage")}
//                             className="z-10 mt-4 bg-[#25a244] hover:bg-[#1f8838] text-white font-semibold px-6 py-3 rounded-full shadow-[0_20px_40px_rgba(37,162,68,0.7)] transition-transform transform hover:scale-105"
//                         >
//                             নির্বাচন ইশতিহার
//                         </button>

//                     </li>
//                 </ul>
//             )}
//         </nav>
//     );
// };

// export default Navbar;




import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FaHome, FaUser, FaTools, FaProjectDiagram, FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [navBg, setNavBg] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) setNavBg(true);
            else setNavBg(false);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navItems = [
        { name: "Home", icon: <FaHome />, path: "/" },
        { name: "Skills", icon: <FaTools />, path: "/skills" },
        { name: "ElectionSection", icon: <FaUser />, path: "/electionSection" },
        { name: "Gallery", icon: <FaProjectDiagram />, path: "/gallery1" },
    ];

    return (
        <nav className={`fixed  w-full z-50 transition-all duration-300 ${navBg ? "bg-[#093A79] shadow-lg" : "bg-transparent"}`}>
            <div className="lg:px-10 px-5  flex justify-between items-center h-16">
                {/* Logo */}
                <div onClick={() => navigate("/")} className="cursor-pointer">
                    <p className="text-2xl text-[#25a244] font-extrabold">🗳 Hasnet</p>
                </div>

                {/* Desktop menu */}
                <ul className="hidden lg:flex space-x-8 text-white font-medium">
                    {navItems.map((item) => (
                        <li key={item.path}>
                            <button
                                onClick={() => navigate(item.path)}
                                className="flex items-center gap-2 px-3 py-1 rounded-md hover:bg-[#25a244] transition-colors"
                            >
                                {item.icon}
                                <span>{item.name}</span>
                            </button>
                        </li>
                    ))}
                    <li>
                        <button
                            onClick={() => navigate("/electionPage")}
                            className="bg-[#25a244] hover:bg-[#1f8838] text-white font-semibold px-6 py-3 rounded-full shadow-lg transition-transform transform hover:scale-105"
                        >
                            নির্বাচন ইশতিহার
                        </button>
                    </li>
                </ul>

                {/* Mobile Hamburger */}
                <div className="lg:hidden flex items-center gap-3 text-white">
                    <div onClick={() => setIsOpen(!isOpen)} className="cursor-pointer">
                        {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
                    </div>
                </div>
            </div>

            {/* Mobile menu */}
            {isOpen && (
                <ul className="lg:hidden bg-[#093A79] text-white space-y-4 py-6 px-4">
                    {navItems.map((item) => (
                        <li key={item.path}>
                            <button
                                onClick={() => {
                                    navigate(item.path);
                                    setIsOpen(false);
                                }}
                                className="flex items-center gap-2 cursor-pointer px-3 py-2 rounded-md hover:bg-[#25a244] transition-colors w-full"
                            >
                                {item.icon}
                                <span>{item.name}</span>
                            </button>
                        </li>
                    ))}
                    <li>
                        <button
                            onClick={() => {
                                navigate("/electionPage");
                                setIsOpen(false);
                            }}
                            className="mt-4 bg-[#25a244] hover:bg-[#1f8838] text-white font-semibold px-6 py-3 rounded-full shadow-lg w-full"
                        >
                            নির্বাচন ইশতিহার
                        </button>
                    </li>
                </ul>
            )}
        </nav>
    );
};

export default Navbar;








