
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
                    <p className="text-2xl text-[#25a244] font-extrabold">🗳 Hasnat</p>
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








