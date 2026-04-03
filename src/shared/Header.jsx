import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Home, Info, Phone, Share2 } from "lucide-react";

const Header = () => {
    const navigate = useNavigate();

    return (
        <motion.div
            initial={{ y: -80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="h-[80px] sticky top-0 z-50 bg-gradient-to-r from-black via-gray-600 to-black text-white shadow-lg"
        >
            <div className="flex items-center justify-between mx-auto w-[90%] h-full">

                {/* 🌟 Logo */}
                <div
                    onClick={() => navigate("/")}
                    className="flex items-center gap-2 cursor-pointer"
                >
                    <span className="text-2xl font-bold text-white">
                        📜 Illakiyam
                    </span>
                </div>

                {/* 🧭 Nav Links */}
                <div className="hidden lg:flex gap-8 text-white/90 font-medium">

                    <motion.span
                        whileHover={{ scale: 1.1 }}
                        onClick={() => navigate("/")}
                        className="flex items-center gap-1 cursor-pointer hover:text-white"
                    >
                        <Home size={18} /> Home
                    </motion.span>

                    <motion.span
                        whileHover={{ scale: 1.1 }}
                        className="flex items-center gap-1 cursor-pointer hover:text-white"
                    >
                        <Info size={18} /> About
                    </motion.span>

                    <motion.span
                        whileHover={{ scale: 1.1 }}
                        className="flex items-center gap-1 cursor-pointer hover:text-white"
                    >
                        <Phone size={18} /> Contact
                    </motion.span>

                    <motion.span
                        whileHover={{ scale: 1.1 }}
                        className="flex items-center gap-1 cursor-pointer hover:text-white"
                    >
                        <Share2 size={18} /> Social
                    </motion.span>

                </div>

                {/* 🚀 CTA Button */}
                <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="hidden sm:flex"
                >
                    <button
                        onClick={() => navigate("/explore")}
                        className="px-5 py-2 rounded-full bg-gradient-to-r from-pink-500 to-indigo-500 text-white font-semibold shadow-lg"
                    >
                        Start Reading
                    </button>
                </motion.div>

            </div>
        </motion.div>
    );
};

export default Header;