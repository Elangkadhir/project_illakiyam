import { Outlet, NavLink } from "react-router-dom";
import { themes } from "../../utils/theme";
import { useSelector } from "react-redux";
import { BookOpen, Scroll, Library, Gem } from "lucide-react";

function Thirukural() {
    const navItems = [
        { name: "Kural", icon: <BookOpen size={18} />, path: "kural" },
        { name: "Paal", icon: <Scroll size={18} />, path: "paal" },
        { name: "Athikaaram", icon: <Library size={18} />, path: "athikaaram" },
    ];

    const theme = useSelector((state) => state.theme.theme);

    return (
        <div className={`min-h-screen ${themes[theme]} transition-colors duration-500 p-6`}>

            {/* Header */}
            <h1 className="flex items-center justify-center gap-3 text-2xl font-bold mb-6 text-center">
                <Scroll className="text-purple-600" /> திருக்குறள்
            </h1>

            {/* 💎 Floating Cards Navigation */}
            <div className="flex justify-center gap-6 mb-10 flex-wrap">
                <div className="w-full flex justify-center mb-4">
                    <Gem className="text-blue-400 animate-pulse" />
                </div>

                {navItems.map((item, index) => (
                    <NavLink
                        key={index}
                        to={item.path}
                        className={({ isActive }) =>
                            `px-6 py-4 rounded-2xl backdrop-blur-xl border transition-all duration-300 shadow-lg
                            
                            ${isActive
                                ? "bg-white/30 text-white scale-110 border-white/40 shadow-2xl"
                                : "bg-white/10 text-white hover:bg-white/20 hover:scale-105 border-white/20"
                            }`
                        }
                    >
                        <span className="flex items-center gap-2 justify-center font-semibold">
                            {item.icon} {item.name}
                        </span>
                    </NavLink>
                ))}

            </div>

            {/* 🔽 Sub Page Render */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-xl p-6 border border-white/20">
                <Outlet />
            </div>

        </div>
    );
}

export default Thirukural;