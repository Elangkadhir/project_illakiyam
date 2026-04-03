import React from "react";
import { motion } from "framer-motion";
import { themes } from "../../utils/theme";
import { useSelector } from "react-redux";

const quotes = [
    "யாதும் ஊரே யாவரும் கேளிர்",
    "அறத்துப்பால் வாழ்வின் அடித்தளம்",
    "தமிழ் என்பது மொழி அல்ல, அது உணர்வு",
];

function Contact() {
    const theme = useSelector((state) => state.theme.theme);

    return (
        <div className={`min-h-screen px-6 py-16 ${themes[theme]} text-white`}>

            {/* 🎯 Title */}
            <motion.h1
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-4xl font-bold text-center mb-12"
            >
                🤝 Join இலக்கியம்
            </motion.h1>

            {/* 📜 Quotes Section */}
            <div className="max-w-4xl mx-auto mb-16 space-y-6">
                {quotes.map((quote, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.2 }}
                        className="p-6 rounded-2xl bg-white/10 backdrop-blur-lg border border-white/20 text-center text-xl"
                    >
                        {quote}
                    </motion.div>
                ))}
            </div>

            {/* 💡 Developer Message */}
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                className="max-w-3xl mx-auto text-center mb-12"
            >
                <h2 className="text-2xl font-semibold mb-4">
                    💡 Calling Enthusiastic Developers
                </h2>

                <p className="text-lg text-white/90">
                    If you are passionate about Tamil, open-source, and building meaningful
                    digital experiences, you are welcome to contribute to this project.
                    Let’s preserve and modernize Tamil literature together 🚀
                </p>
            </motion.div>

            {/* 📩 Contact Options */}
            <div className="flex flex-col sm:flex-row justify-center gap-6">

                <motion.a
                    whileHover={{ scale: 1.1 }}
                    href="mailto:elangkdhirnathan12@gmail.com"
                    className="flex items-center gap-2 px-6 py-3 bg-white text-purple-600 rounded-xl font-semibold shadow-lg"
                >
                    Email Me
                </motion.a>

                <motion.a
                    whileHover={{ scale: 1.1 }}
                    href="https://github.com/Elangkadhir/project_illakiyam.git"
                    target="_blank"
                    className="flex items-center gap-2 px-6 py-3 bg-black/30 backdrop-blur-md border border-white/20 rounded-xl"
                >
                    Contribute on GitHub
                </motion.a>

            </div>

        </div>
    );
}

export default Contact;