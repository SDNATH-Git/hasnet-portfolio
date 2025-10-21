import React from "react";
import {
    FaGithub,
    FaLinkedin,
    FaTwitter,
    FaFacebook,
} from "react-icons/fa";
import logo from "../assets/logo.png";

const Footer = () => {
    return (
        <footer className="bg-[#093A79] text-gray-300 py-6 mt-16">
            <div className="px-6   text-center">

                {/* Logo */}
                <div className="flex justify-center py-3">
                    <a
                        href="#home"
                        className="flex-shrink-0 cursor-pointer  "
                        onClick={() => {
                            scroll.scrollToTop();
                            setActiveSection("home");
                            setIsOpen(false);
                        }}
                    >
                        <p className="text-2xl text-[#25a244] font-extrabold">🗳 Hasnet </p>
                    </a>

                </div>
                <h1 className="text-xl font-bold text-white mb-2 drop-shadow-lg">
                    PCIU Computer Club Executive Committee Election, 2025
                </h1>
                <p className="text- font-extrabold py-3">
                    আপনার মূল্যবান ভোটটি{" "}
                    <span className="text-[#05f244] text-2xl">“আবুল হাসনাত”</span> কে{" "}
                    <span className="text-[#05f244] text-2xl">“ব্যাগ”</span> মার্কায় ভোট দিয়ে জয়যুক্ত করুন
                </p>


                <hr />
                <p className="text-[#05f244] font-bold">
                    Election Date: 25 October, 2025
                </p>


            </div>
        </footer>
    );
};

export default Footer;
