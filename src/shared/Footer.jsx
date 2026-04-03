import React from "react";
import { motion } from "framer-motion";
import {
    FaGithub,
    FaLinkedin,
    FaInstagram,
    FaTwitter,
} from "react-icons/fa";
import { ArrowUp } from "lucide-react";

const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <footer className="relative mt-20 bg-gradient-to-r from-black via-gray-600 to-black text-white rounded-t-2xl">

            {/* 🌟 Content */}
            <div className="py-12 px-6 text-center">

                {/* 📜 Logo / Name */}
                <h2 className="text-2xl font-bold mb-4">📜 Illakiyam</h2>

                {/* 🌐 Social Icons */}
                <div className="flex justify-center gap-6 mb-6 text-2xl">

                    <motion.a
                        whileHover={{ scale: 1.3 }}
                        href="https://github.com/yourusername"
                        target="_blank"
                        className="hover:text-gray-200"
                    >
                        <FaGithub />
                    </motion.a>

                    <motion.a
                        whileHover={{ scale: 1.3 }}
                        href="https://linkedin.com/in/yourprofile"
                        target="_blank"
                        className="hover:text-blue-300"
                    >
                        <FaLinkedin />
                    </motion.a>

                    <motion.a
                        whileHover={{ scale: 1.3 }}
                        href="https://instagram.com/yourprofile"
                        target="_blank"
                        className="hover:text-pink-300"
                    >
                        <FaInstagram />
                    </motion.a>

                    <motion.a
                        whileHover={{ scale: 1.3 }}
                        href="https://twitter.com/yourprofile"
                        target="_blank"
                        className="hover:text-sky-300"
                    >
                        <FaTwitter />
                    </motion.a>

                </div>

                {/* 👤 Creator */}
                <p className="text-sm text-white/90">
                    Created by{" "}
                    <span className="font-semibold">
                        V. Elangkadhir Nathan
                    </span>
                </p>

                {/* ©️ Copyright */}
                <p className="text-sm text-white/70 mt-1">
                    © {new Date().getFullYear()} Illakiyam. All rights reserved.
                </p>
            </div>

            {/* ⬆️ Scroll To Top */}
            <motion.button
                onClick={scrollToTop}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                className="absolute right-6 bottom-6 p-3 rounded-full bg-white text-purple-600 shadow-xl"
            >
                <ArrowUp />
            </motion.button>

        </footer>
    );
};

export default Footer;