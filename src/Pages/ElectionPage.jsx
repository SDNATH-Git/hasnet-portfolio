import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const points = [
    {
        title: "ম্যানটারিং এবং গাইডলাইন",
        text: "পুরো বছরকে কয়েকটি ভাগে ভাগ করে হাতে কলমে প্রশিক্ষণ দেওয়া, যেমন:-দুই মাস কম্পিটিটিভ প্রোগ্রামিং, দুই মাস ওয়েব ডেভেলপমেন্ট, দুই মাস নেটওয়ার্কিং, দুই মাস রিসার্চ, এবং অন্যান্য। এতে শিক্ষার্থীরা বুঝবে কোন সেক্টরে তার ভালোলাগা কাজ করে এবং কোন সেক্টরে গেলে তার জন্য ভালো হবে।",
    },
    {
        title: "কম্পিটিটিভ প্রোগ্রামিং উন্নয়ন",
        text: "ম্যানটারিং, সাপোর্ট ও গাইডলাইনের মাধ্যমে কয়েকজন কম্পিটিটিভ প্রোগ্রামার তৈরি করা — যেমন কোডশেফ টু স্টার, কোডফোর্সেস পিউপিল।",
    },
    {
        title: "যুগোপযোগী ওয়ার্কশপ ও সেমিনার",
        text: "ব্লকচেইন, এআই, মেশিন লার্নিং ইত্যাদি বিষয়ে আধুনিক সেমিনার ও ওয়ার্কশপের আয়োজন করা।",
    },
    {
        title: "ল্যাব আধুনিকায়ন ও দ্রুত সমস্যা সমাধান",
        text: "সফটওয়্যার ইঞ্জিনিয়ারিং ল্যাবসহ অন্যান্য ল্যাবগুলোর আধুনিকায়নে গতিশীলতা আনা এবং সমস্যা দ্রুত সমাধান করা।",
    },
    {
        title: "ইন্ডাস্ট্রি-রেডি প্রোফাইল ও সিভি ট্রেনিং",
        text: "গিটহাব, লিংকডইন, সিভি ও রিজিউমি তৈরির ওয়ার্কশপ বা ক্রাশ কোর্সের ব্যবস্থা করা।",
    },
    {
        title: "নিয়মিত কোডিং ও এআই/এমএল বুটক্যাম্প",
        text: "নিয়মিত কোডিং কর্মশালা, হ্যাকাথন এবং এআই/এমএল বুটক্যাম্প আয়োজন করা।",
    },
    {
        title: "অ্যালামনাই সংযোগ ও অভিজ্ঞতা বিনিময়",
        text: "অ্যালামনাই ও সাবেক এক্সিকিউটিভ কমিটির অভিজ্ঞতা আহরণের জন্য সেমিনার আয়োজন করা।",
    },
    {
        title: "বই, উদ্ভাবন ও গবেষণায় সহায়তা",
        text: "বই লিখা, উদ্ভাবন ও গবেষণায় আগ্রহী শিক্ষার্থীদের প্রকাশনাসহ বিভিন্ন কাজে সহযোগিতা করা।",
    },
    {
        title: "জাতীয় ও আন্তর্জাতিক প্রতিযোগিতায় অংশগ্রহণ",
        text: "শিক্ষার্থীদের জাতীয় ও আন্তর্জাতিক প্রতিযোগিতায় অংশগ্রহণে উৎসাহ প্রদান।",
    },
    {
        title: "ছাত্রীদের সক্রিয় অংশগ্রহণ",
        text: "ছাত্রীদের প্রোগ্রামিং ও ওয়ার্কশপে সক্রিয় অংশগ্রহণ নিশ্চিত করা।",
    },
    {
        title: "ডিজিটাল নোটিশ বোর্ড ও ইভেন্ট পোর্টাল",
        text: "সুষ্ঠু সমন্বয়ের জন্য ডিজিটাল নোটিশ বোর্ড ও ইভেন্ট ম্যানেজমেন্ট পোর্টাল চালু করা।",
    },
    {
        title: "আইটি উৎসব ও টেক সম্মেলন",
        text: "বিভিন্ন আইটি উৎসব ও প্রযুক্তি শীর্ষ সম্মেলনের আয়োজন করা।",
    },
    {
        title: "সকল বর্ষের শিক্ষার্থীদের সমান সুযোগ",
        text: "প্রথম বর্ষ থেকে চতুর্থ বর্ষ পর্যন্ত সকল শিক্ষার্থীকে সমান সুযোগ-সুবিধা প্রদান করা।",
    },
    {
        title: "ক্লাব সদস্যদের মধ্যে যোগাযোগ জোরদার করা",
        text: "ক্লাব সদস্য ও কমিটির মধ্যে শক্তিশালী যোগাযোগ ব্যবস্থা গড়ে তোলা।",
    },
    {
        title: "স্পোর্টস ও কালচারাল একটিভিটি",
        text: "বিভিন্ন স্পোর্টস ও সাংস্কৃতিক কর্মকাণ্ডে শিক্ষার্থীদের সক্রিয় অংশগ্রহণ নিশ্চিত করা।",
    },
];

const ElectionPage = () => {
    const navigate = useNavigate();
    return (
        <section className="relative text-white overflow-hidden">

            {/* ===== HERO SECTION ===== */}
            <section
                className="relative flex flex-col items-center text-center py-20"
                style={{
                    backgroundImage:
                        "url('https://i.ibb.co.com/TM0yp3Mr/Port-City-International-University.jpg')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            >
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/60"></div>

                {/* Content */}
                <div className="relative z-10 flex flex-col items-center px-3">

                    {/* Floating Candidate Images */}
                    <div className="flex justify-center gap-4 md:gap-10 mb-8">
                        <motion.img
                            src="https://i.ibb.co/yn9tdWTF/club.png"
                            alt="Candidate 1"
                            className="w-28 h-28 md:w-40 md:h-40 object-contain rounded-full bg-white shadow-[0_20px_40px_rgba(37,162,68,0.7)]"
                            animate={{ y: [0, -15, 0] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                        />
                        <motion.img
                            src="https://i.ibb.co/7d0Rg5F1/bag.png"
                            alt="Candidate 2"
                            className="w-32 h-32 md:w-48 md:h-48 object-contain rounded-full bg-white shadow-[0_20px_40px_rgba(37,162,68,0.7)]"
                            animate={{ y: [-10, 10, -10] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                        />
                        <motion.img
                            src="https://i.ibb.co/Y4ZStvrJ/pic.png"
                            alt="Candidate 3"
                            className="w-28 h-28 md:w-40 md:h-40 object-contain rounded-full bg-white shadow-[0_20px_40px_rgba(37,162,68,0.7)]"
                            animate={{ y: [0, -15, 0] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
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
                    <h1 className="text-2xl md:text-4xl font-bold text-white mb-2 drop-shadow-lg">
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
                </div>
            </section>

            {/* ===== MANIFESTO SECTION ===== */}
            <section
                id="manifesto"
                className="relative z-10 max-w-6xl mx-auto mt-20 mb-20 bg-white/10 backdrop-blur-lg rounded-3xl p-8 md:p-12 shadow-[0_8px_30px_rgba(37,162,68,0.3)] border border-white/20"
            >
                <motion.h2
                    className="text-3xl md:text-4xl font-bold text-center mb-10 text-yellow-300 drop-shadow-lg"
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    🗳️ নির্বাচন ইশতেহার
                </motion.h2>

                <div className="grid md:grid-cols-2 gap-6 text-justify text-white/90 leading-relaxed">
                    {points.map((item, index) => (
                        <motion.div
                            key={index}
                            className="bg-white/10 rounded-xl p-5 border border-white/10 hover:bg-white/20 hover:shadow-[0_0_20px_rgba(37,162,68,0.4)] transition-all"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4, delay: index * 0.05 }}
                        >
                            <h3 className="text-lg md:text-xl font-semibold text-[#14e147] mb-2">
                                {index + 1}) {item.title}
                            </h3>
                            <p className="text-sm md:text-base">{item.text}</p>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* ===== Home Page Button ===== */}
            <div className="flex items-center justify-center">
                <button
                    onClick={() => navigate("/")}
                    className="mt-8 bg-[#25a244] hover:bg-[#1f8838] text-white font-semibold px-8 py-3 rounded-full shadow-[0_20px_40px_rgba(37,162,68,0.7)] transition-transform transform hover:scale-105"
                >
                    হোমে ফিরে যান
                </button>

            </div>


        </section>
    );
};

export default ElectionPage;
