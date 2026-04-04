import { useScroll, useTransform } from "framer-motion";
import { motion } from "framer-motion";

function Hero() {
    const { scrollY } = useScroll();

    const bg = useTransform(scrollY, [0, 500], [0, 100]);
    const text = useTransform(scrollY, [0, 500], [0, 200]);

    return (
        <div className="relative h-screen overflow-hidden">

            {/* 🌈 Background */}
            <motion.div
                style={{ y: bg }}
                className="absolute inset-0 bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500"
            />

            {/* 📜 Text Layer */}
            <motion.div
                style={{ y: text }}
                className="relative z-10 flex flex-col items-center justify-center h-full "
            >
                <h1 className="text-6xl font-bold">
                    தமிழ்
                </h1>
            </motion.div>

        </div>
    );
}

export default Hero