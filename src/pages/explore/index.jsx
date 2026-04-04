import React from "react";
import { motion } from "framer-motion";
import { BookOpen } from "lucide-react";
import { themes } from "../../utils/theme";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import APPROUTES from "../../routes/app_Routes";

const sections = [
    {
        title: "சங்க இலக்கியம் (எட்டுத்தொகை)",
        books: [
            "நற்றிணை",
            "குறுந்தொகை",
            "ஐங்குறுநூறு",
            "பதிற்றுப்பத்து",
            "பரிபாடல்",
            "கலித்தொகை",
            "அகநானூறு",
            "புறநானூறு"
        ],
    },
    {
        title: "சங்க இலக்கியம் (பத்துப்பாட்டு)",
        books: [
            "திருமுருகாற்றுப்படை",
            "பொருநராற்றுப்படை",
            "சிறுபாணாற்றுப்படை",
            "பெரும்பாணாற்றுப்படை",
            "முல்லைப்பாட்டு",
            "மதுரைக்காஞ்சி",
            "நெடுநல்வாடை",
            "குறிஞ்சிப்பாட்டு",
            "பட்டினப்பாலை",
            "மலைபடுகடாம்"
        ],
    },
    {
        title: "பதினெண் கீழ்க்கணக்கு நூல்கள்",
        books: [
            "நாலடியார்",
            "நான்மணிக்கடிகை",
            "இன்னா நாற்பது",
            "இனியவை நாற்பது",
            "கார் நாற்பது",
            "களவழி நாற்பது",
            "ஆச்சாரக்கோவை",
            "பழமொழி நானூறு",
            "சிறுபஞ்சமூலம்",
            "திரிகடுகம்",
            "ஏலாதி",
            "கைந்நிலை",
            "திருக்குறள்",
            "மூதுரை",
            "நல்வழி",
            "நீதி நெறி விளக்கம்",
            "நன்னெறி",
            "ஆத்திசூடி"
        ],
    },
    {
        title: "பதினெண் மேல்க்கணக்கு / பெரிய காப்பியங்கள்",
        books: [
            "சிலப்பதிகாரம்",
            "மணிமேகலை",
            "சீவக சிந்தாமணி",
            "வளையாபதி",
            "குண்டலகேசி"
        ],
    },
];



function Explore() {
    const navigate = useNavigate()

    const handleNavigate = () => {
        navigate(APPROUTES.THIRUKURAL)
    }
    const theme = useSelector((state) => state.theme.theme);

    return (
        <div className={`min-h-screen px-6 py-16  ${themes[theme]}`}>

            {/* 🔍 Title */}
            <motion.h1
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-4xl font-bold text-center mb-12"
            >
                📚 Explore Tamil Literature
            </motion.h1>

            {/* 📖 Sections */}
            <div className="max-w-6xl mx-auto space-y-16">

                {sections.map((section, i) => (
                    <div key={i}>

                        {/* Section Title */}
                        <motion.h2
                            initial={{ opacity: 0, x: -40 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            className="text-2xl font-semibold mb-6"
                        >
                            {section.title}
                        </motion.h2>

                        {/* Cards */}
                        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">

                            {section.books.map((book, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 50 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    whileHover={{ scale: 1.05 }}
                                    transition={{ delay: index * 0.1 }}
                                    className="p-6 rounded-2xl bg-white/10 backdrop-blur-lg border border-white/20 shadow-lg cursor-pointer"
                                >
                                    <div className="flex items-center gap-3 mb-3" onClick={handleNavigate}>
                                        <BookOpen />
                                        <h3 className="text-lg font-semibold">{book}</h3>
                                    </div>

                                    <p className="text-sm ">
                                        Click to explore this literary work
                                    </p>
                                </motion.div>
                            ))}

                        </div>
                    </div>
                ))}

            </div>
        </div>
    );
}

export default Explore;