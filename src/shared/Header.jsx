import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, Home, Info, Phone, Share2 } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { setTheme } from "../Redux/slice/themeSlice";
import { themes } from "../utils/theme";
import APPROUTES from "../routes/app_Routes";

const Header = () => {
    const navigate = useNavigate();
    const themeOptions = [
        { name: "purple", label: "Purple Pink" },
        { name: "blue", label: "Ocean Blue" },
        { name: "orange", label: "Sunset" },
        { name: "dark", label: "Dark Mode" },
    ];
    const dispatch = useDispatch();
    const [open, setOpen] = useState(false);
    const theme = useSelector((state) => state.theme.theme);

    return (
        <motion.div
            initial={{ y: -80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className={`h-[80px] sticky top-0 z-50 ${themes[theme]} text-white shadow-lg`}
        >
            <div className="flex items-center justify-between mx-auto w-[90%] h-full">

                {/* 🌟 Logo */}
                <div
                    onClick={() => navigate("/")}
                    className="flex items-center gap-2 cursor-pointer"
                >
                    <span className="text-2xl font-bold text-white">
                        📜 இலக்கியம்
                    </span>
                </div>

                {/* 🧭 Nav Links */}
                <div className="hidden lg:flex gap-8 text-white/90 font-medium">

                    <motion.span
                        whileHover={{ scale: 1.1 }}
                        onClick={() => navigate("/")}
                        className="flex items-center gap-1 cursor-pointer hover:text-white"
                    >
                        Home
                    </motion.span>

                    <motion.span
                        onClick={() => navigate(APPROUTES.CONTACT)}
                        whileHover={{ scale: 1.1 }}
                        className="flex items-center gap-1 cursor-pointer hover:text-white"
                    >
                        Contact us
                    </motion.span>

                    <motion.span
                        onClick={() => navigate(APPROUTES.EXPLORE)}
                        whileHover={{ scale: 1.1 }}
                        className="flex items-center gap-1 cursor-pointer hover:text-white"
                    >
                        Explore
                    </motion.span>

                    <motion.span
                        onClick={() => navigate(APPROUTES.OURGOAL)}
                        whileHover={{ scale: 1.1 }}
                        className="flex items-center gap-1 cursor-pointer hover:text-white"
                    >
                        Our-Goal
                    </motion.span>

                </div>



                <div className="relative">

                    {/* 🔽 Dropdown Button */}
                    <button
                        onClick={() => setOpen(!open)}
                        className="flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-md rounded-lg text-white"
                    >
                        Theme
                        <ChevronDown size={16} />
                    </button>

                    {/* 📂 Dropdown Menu */}
                    <AnimatePresence>
                        {open && (
                            <motion.div
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                className="absolute right-0 mt-2 w-44 bg-white/20 backdrop-blur-lg rounded-xl shadow-lg border border-white/20 overflow-hidden"
                            >
                                {themeOptions.map((item) => (
                                    <div
                                        key={item.name}
                                        onClick={() => {
                                            dispatch(setTheme(item.name));
                                            setOpen(false);
                                        }}
                                        className="px-4 py-2 cursor-pointer hover:bg-white/20 text-white"
                                    >
                                        {item.label}
                                    </div>
                                ))}
                            </motion.div>
                        )}
                    </AnimatePresence>

                </div>

            </div>
        </motion.div>
    );
};

export default Header;