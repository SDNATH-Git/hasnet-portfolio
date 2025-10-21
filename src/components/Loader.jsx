// import React from "react";
// import { motion } from "framer-motion";
// import Logo from "../assets/pic.png";

// const Loader = () => {
//     return (
//         <div className="flex items-center justify-center h-screen bg-gradient-to-r from-[#020024] via-[#093A79] to-[#2F58C2] bg-opacity-90">
//             <div className="relative w-40 h-40 flex items-center justify-center">
//                 {/* Static Border */}
//                 <div className="absolute inset-0 rounded-full border-8 border-orange-700"></div>

//                 {/* Rotating Border */}
//                 <motion.div
//                     className="absolute inset-0 rounded-full border-8 border-transparent"
//                     style={{
//                         borderTopColor: "black",
//                     }}
//                     animate={{ rotate: 360 }}
//                     transition={{
//                         duration: 1.5,
//                         repeat: Infinity,
//                         ease: "linear",
//                     }}
//                 />

//                 {/* Logo */}
//                 <div className="w-40 h-40  rounded-full flex items-center justify-center shadow-lg">
//                     <img src={Logo} alt="Logo" className="w-40 h-40 object-contain p-8" />
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Loader;


import React from "react";
import { motion } from "framer-motion";
import Logo from "../assets/pic.png";

const Loader = () => {
    return (
        <div
            className="flex items-center justify-center h-screen"
            style={{
                background: "linear-gradient(135deg, #020024 0%, #093A79 50%, #2F58C2 100%)",
            }}
        >
            <div className="relative w-40 h-40 flex items-center justify-center">
                {/* Floating Orange Border */}
                <motion.div
                    className="absolute inset-0 rounded-full border-8 border-orange-500"
                    animate={{ rotate: [0, 360] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                />

                {/* Inner Rotating Green Border */}
                <motion.div
                    className="absolute inset-0 rounded-full border-8 border-transparent"
                    style={{ borderTopColor: "#25a244" }}
                    animate={{ rotate: [0, 360] }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                />

                {/* Logo with shadow and slight pulse */}
                <motion.div
                    className="w-40 h-40 rounded-full flex items-center justify-center bg-white/10 backdrop-blur-md shadow-[0_10px_30px_rgba(37,162,68,0.5)]"
                    animate={{ scale: [1, 1.05, 1] }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                >
                    <img src={Logo} alt="Logo" className="w-36 h-36 object-contain p-4" />
                </motion.div>
            </div>

            {/* Optional Election Text */}
            <motion.p
                className="absolute bottom-40 text-white text-lg md:text-2xl font-bold drop-shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2, repeat: Infinity, repeatType: "reverse" }}
            >
                🗳️ PCIU Election 2025 - Loading...
            </motion.p>
        </div>
    );
};

export default Loader;
