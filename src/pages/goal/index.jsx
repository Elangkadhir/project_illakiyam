import React from "react";
import { motion } from "framer-motion";
import { Heart, BookOpen, Globe } from "lucide-react";
import { themes } from "../../utils/theme";
import { useSelector } from "react-redux";

function OurGoal() {
    const theme = useSelector((state) => state.theme.theme);

    return (
        <div className={`min-h-screen py-6 px-12 ${themes[theme]} text-white`}>
            {/* 🎯 தலைப்பு */}
            <motion.h1
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-4xl font-bold text-center mb-12"
            >
                🎯 எங்கள் நோக்கம்
            </motion.h1>

            {/* ❤️ தமிழ் பற்றிய பற்று */}
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="max-w-4xl mx-auto text-center mb-16"
            >
                <h2 className="text-2xl font-semibold mb-4 flex justify-center items-center gap-2">
                    <Heart /> தமிழ் மீது அன்பு
                </h2>

                <p className="text-lg text-white/90 leading-relaxed">
                    தமிழ் என்பது ஒரு மொழி மட்டும் அல்ல, அது ஒரு உணர்வு.
                    இந்த இலக்கியம் திட்டம் என் தமிழ் மீதான ஆழ்ந்த பற்றின் வெளிப்பாடு.
                    சங்க இலக்கியங்கள் முதல் திருக்குறள் வரை,
                    நம் முன்னோர்களின் அறிவை அனைவரும் எளிதாக அணுக முடியும் வகையில்
                    இந்த தளம் உருவாக்கப்படுகிறது.
                </p>
            </motion.div>

            {/* 📖 நோக்கங்கள் */}
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">

                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    whileHover={{ scale: 1.05 }}
                    className="p-6 rounded-2xl bg-white/10 backdrop-blur-lg border border-white/20 shadow-lg text-center"
                >
                    <BookOpen className="mx-auto mb-4" />
                    <h3 className="text-xl font-semibold mb-2">எளிதான அணுகல்</h3>
                    <p className="text-white/80 text-sm">
                        அனைவரும் எளிதாக தமிழ் இலக்கியங்களை படிக்கக்கூடிய ஒரு தளம்.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    whileHover={{ scale: 1.05 }}
                    transition={{ delay: 0.1 }}
                    className="p-6 rounded-2xl bg-white/10 backdrop-blur-lg border border-white/20 shadow-lg text-center"
                >
                    <Globe className="mx-auto mb-4" />
                    <h3 className="text-xl font-semibold mb-2">உலகளாவிய பரவல்</h3>
                    <p className="text-white/80 text-sm">
                        உலகம் முழுவதும் உள்ளவர்களுக்கு தமிழ் இலக்கியத்தை கொண்டு செல்லுதல்.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    whileHover={{ scale: 1.05 }}
                    transition={{ delay: 0.2 }}
                    className="p-6 rounded-2xl bg-white/10 backdrop-blur-lg border border-white/20 shadow-lg text-center"
                >
                    <Heart className="mx-auto mb-4" />
                    <h3 className="text-xl font-semibold mb-2">இலவசம் & பயனர் நட்பு</h3>
                    <p className="text-white/80 text-sm">
                        அனைவருக்கும் இலவசமாக, எளிதாக பயன்படுத்தக்கூடிய அனுபவம்.
                    </p>
                </motion.div>

            </div>

            {/* 🚀 இறுதி செய்தி */}
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                className="max-w-3xl mx-auto text-center"
            >
                <p className="text-xl text-white/90 leading-relaxed">
                    இந்த இலக்கியம்ஒரு சாதாரண பயன்பாடு அல்ல,
                    இது தமிழ் மொழியின் அழகையும் அறிவையும்
                    அடுத்த தலைமுறைக்கு கொண்டு செல்லும் ஒரு முயற்சி.
                    உங்கள் ஆதரவு இந்த பயணத்தை இன்னும் உயரத்திற்கு கொண்டு செல்லும் ❤️
                </p>
            </motion.div>

        </div>
    );
}

export default OurGoal;