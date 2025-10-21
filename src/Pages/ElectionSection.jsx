import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom"; // ✅ সঠিক ইমপোর্ট

const ElectionSection = () => {
    const navigate = useNavigate(); // ✅ navigate ডিফাইন করো

    return (
        <section
            className="relative flex flex-col items-center justify-center text-center rounded-4xl mx-5 md:mx-5 lg:mx-10 overflow-hidden py-6 shadow-2xl"
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
            <div className="relative flex justify-center gap-10 mb-10 z-10">
                <motion.img
                    src="https://i.ibb.co.com/yn9tdWTF/club.png"
                    alt="Candidate 1"
                    className="w-28 h-28 md:w-40 md:h-40 object-contain rounded-full bg-white shadow-[0_20px_40px_rgba(37,162,68,0.7)]"
                    animate={{ y: [0, -15, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                />
                <motion.img
                    src="https://i.ibb.co.com/7d0Rg5F1/bag.png"
                    alt="Candidate 2"
                    className="w-28 h-28 md:w-40 md:h-40 object-contain rounded-full bg-white shadow-[0_20px_40px_rgba(37,162,68,0.7)]"
                    animate={{ y: [-10, 10, -10] }}
                    transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                />
            </div>

            {/* Vote Logo Animation */}
            <motion.div
                className="text-5xl mb-4"
                animate={{ scale: [1, 1.3, 1], rotate: [0, 15, -15, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
                🗳️
            </motion.div>

            {/* Heading & Date */}
            <h1 className="text-xl md:text-4xl font-bold text-white mb-2 drop-shadow-lg">
                PCIU Computer Club Executive Committee Election, 2025
            </h1>
            <p className="text-xl font-extrabold py-3">
                আপনার মূল্যবান ভোটটি{" "}
                <span className="text-[#05f244] text-2xl">“আবুল হাসনাত”</span> কে{" "}
                <span className="text-[#05f244] text-2xl">“ব্যাগ”</span> মার্কায় ভোট দিয়ে জয়যুক্ত করুন
            </p>
            <p className="text-[#05f244] text-lg md:text-2xl font-bold">
                Election Date: 25 October, 2025
            </p>

            {/* Button */}
            <button
                onClick={() => navigate("/electionPage")}
                className="z-10 mt-4 bg-[#25a244] hover:bg-[#1f8838] text-white font-semibold px-6 py-3 rounded-full shadow-[0_20px_40px_rgba(37,162,68,0.7)] transition-transform transform hover:scale-105"
            >
                নির্বাচন ইশতিহার
            </button>
        </section>
    );
};

export default ElectionSection;
