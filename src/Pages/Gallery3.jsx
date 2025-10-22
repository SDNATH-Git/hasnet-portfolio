// Gallery1.jsx
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { AiOutlineClose, AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

// Import all images dynamically
const importAllImages = () => {
    const images = import.meta.glob("../assets/gallery3/*.jpg", { eager: true });
    return Object.values(images).map((img) => img.default);
};

const Gallery3 = () => {
    const images = importAllImages();
    const [lightboxOpen, setLightboxOpen] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);

    const openLightbox = (index) => {
        setCurrentIndex(index);
        setLightboxOpen(true);
    };

    const closeLightbox = () => setLightboxOpen(false);

    const prevImage = () => setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    const nextImage = () => setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));

    return (
        <div className="px-5 md:px-10 py-12">
            {/* Title */}
            <motion.h1
                className="text-2xl md:text-4xl font-bold mb-3 text-center text-[#ebedf0] drop-shadow-lg"
                initial={{ opacity: 0, y: -30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                Sports and Cultural Activities
            </motion.h1>

            <motion.p
                className="text-center text-sm md:text-lg text-gray-300 mb-12 max-w-3xl mx-auto"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
            >
                Explore verified certifications, skill achievements, and professional milestones of our students.
            </motion.p>


            {/* Gallery Grid */}
            <div className="grid grid-cols-3 sm:grid-cols-5 md:grid-cols-6 gap-2">
                {images.map((img, idx) => (
                    <motion.div
                        key={idx}
                        className="relative overflow-hidden rounded-xl shadow-lg border-2 border-[#25a244] cursor-pointer"
                        whileHover={{ scale: 1.05 }}
                        onClick={() => openLightbox(idx)}
                    >
                        <img
                            src={img}
                            alt={`Gallery ${idx + 1}`}
                            className="w-full h-40 object-cover transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-black/20 opacity-0 hover:opacity-100 transition-opacity flex items-center justify-center">
                            <p className="text-white font-semibold text-lg">View</p>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Lightbox */}
            <AnimatePresence>
                {lightboxOpen && (
                    <motion.div
                        className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        <button
                            className="absolute top-6 right-6 text-white text-3xl"
                            onClick={closeLightbox}
                        >
                            <AiOutlineClose />
                        </button>
                        <button
                            className="absolute left-6 text-white text-4xl"
                            onClick={prevImage}
                        >
                            <AiOutlineLeft />
                        </button>
                        <img
                            src={images[currentIndex]}
                            alt={`Gallery ${currentIndex + 1}`}
                            className="max-h-[80vh] max-w-[90vw] rounded-lg shadow-2xl"
                        />
                        <button
                            className="absolute right-6 text-white text-4xl"
                            onClick={nextImage}
                        >
                            <AiOutlineRight />
                        </button>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default Gallery3;
