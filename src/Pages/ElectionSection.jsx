import React from "react";
import { motion } from "framer-motion";

const ElectionSection = () => {
    return (

        <section
            className="relative flex flex-col items-center justify-center text-center rounded-4xl mx-5 md:mx-5 lg:mx-10 overflow-hidden p-6 shadow-2xl "
            style={{
                background: "linear-gradient(135deg, #020024 0%, #093A79 50%, #2F58C2 100%)",
                color: "white",
            }}
        >
            {/* Animated Background (code-like glow) */}
            <div className="absolute inset-0 opacity-10 select-none">
                <pre className="text-xs text-green-300 whitespace-pre-wrap font-mono p-10">
                    {`function voteNow() {
  const candidate = "Your Future Leader";
  const electionDate = "25 October 2025";
  console.log("Vote for Change!");
}`}
                </pre>
            </div>

            {/* Floating Images */}
            <div className="relative flex flex-wrap justify-center gap-10 mb-10 z-10">
                <motion.img
                    src="https://i.ibb.co.com/yn9tdWTF/club.png"
                    alt="Candidate 1"
                    className="w-60 h-60 object-cover rounded-full bg-white shadow-[0_20px_40px_rgba(37,162,68,0.7)]"
                    animate={{ y: [0, -15, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                />
                <motion.img
                    src="https://i.ibb.co.com/7d0Rg5F1/bag.png"
                    alt="Candidate 2"
                    className="w-60 h-60 object-cover rounded-full shadow-[0_20px_40px_rgba(37,162,68,0.7)]"
                    animate={{ y: [-10, 10, -10] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                />
            </div>

            {/* Text Content */}
            <h2 className="text-3xl md:text-4xl font-bold mb-3 z-10">
                PCIU Computer Club Executive Committee Election, 2025
            </h2>
            <p className="text-lg text-yellow-300 font-semibold mb-6 z-10">
                Electronics Date : 25 October, 2025
            </p>

            {/* Button */}
            <button className="z-10 bg-[#25a244] hover:bg-[#1f8838] text-white font-semibold px-6 py-3 rounded-full shadow-[0_20px_40px_rgba(37,162,68,0.7)] transition-transform transform hover:scale-105">
                নির্বাচন ইশতিহার
            </button>
        </section>


    );
};

export default ElectionSection;
