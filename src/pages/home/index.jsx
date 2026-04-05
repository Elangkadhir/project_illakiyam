import React from "react";
import { motion } from "framer-motion";
import {
    BookOpen,
    Globe,
    Brain,
    Search,
    Smartphone,
    Zap,
    Scroll,
    Sparkles,
    Target,
    Wrench,
} from "lucide-react";
import Footer from "../../shared/Footer";
import { themes } from "../../utils/theme";
import { useSelector } from "react-redux";

function Home() {
    const theme = useSelector((state) => state.theme.theme);

    return (
        <div className={`min-h-screen ${themes[theme]}  transition-colors duration-500`}>


            {/* 🌈 Hero Section */}
            <section className="flex flex-col items-center justify-center text-center px-6 py-24">
                <motion.h1
                    initial={{ opacity: 0, y: -40 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center gap-3 text-4xl md:text-6xl font-bold"
                >
                    <Scroll size={48} className="text-purple-600" /> Project இலக்கியம்
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="mt-6 max-w-2xl text-lg "
                >
                    Experience ancient Tamil literature in a modern, colorful and immersive digital world.
                </motion.p>

                <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="mt-8 px-6 py-3 bg-white text-purple-600 rounded-xl font-semibold shadow-lg"
                >
                    Explore Now
                </motion.button>
            </section>

            {/* ✨ Features */}
            <section className="px-6 py-20">
                <h2 className="flex items-center justify-center gap-3 text-3xl font-semibold text-center mb-12">
                    <Sparkles className="text-yellow-400" /> Features
                </h2>

                <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {[
                        { icon: <BookOpen />, text: "Sangam literature collection" },
                        { icon: <Globe />, text: "Tamil + English translations" },
                        { icon: <Brain />, text: "Multiple commentaries" },
                        { icon: <Search />, text: "Smart navigation" },
                        { icon: <Smartphone />, text: "Responsive design" },
                        { icon: <Zap />, text: "Fast performance" },
                    ].map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 60 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            whileHover={{ scale: 1.05 }}
                            transition={{ delay: index * 0.1 }}
                            className="p-6 rounded-2xl backdrop-blur-lg bg-white/10 border border-white/20 shadow-xl"
                        >
                            <div className="mb-4 ">{item.icon}</div>
                            <p className="">{item.text}</p>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* 🎯 Goal */}
            <section className="px-6 py-20 text-center">
                <motion.h2
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="flex items-center justify-center gap-3 text-3xl font-semibold mb-6"
                >
                    <Target className="text-red-500" /> Our Goal
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="max-w-3xl mx-auto text-lg "
                >
                    To preserve Tamil literature and present it in a visually engaging,
                    modern format for the next generation.
                </motion.p>
            </section>

            {/* 🛠 Tech Stack */}
            <section className="px-6 py-20 text-center">
                <h2 className="flex items-center justify-center gap-3 text-3xl font-semibold mb-10">
                    <Wrench className="text-blue-500" /> Tech Stack
                </h2>

                <div className="flex flex-wrap justify-center gap-4">
                    {["React", "Vite", "Tailwind", "Framer Motion", "JSON"].map(
                        (tech, index) => (
                            <motion.span
                                key={index}
                                whileHover={{ scale: 1.1, rotate: 2 }}
                                className="px-4 py-2 bg-white/20 rounded-full backdrop-blur-md"
                            >
                                {tech}
                            </motion.span>
                        )
                    )}
                </div>
            </section>


            <Footer />
        </div>
    );
}

export default Home;