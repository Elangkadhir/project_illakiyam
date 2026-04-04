import { Outlet, NavLink } from "react-router-dom";
import { themes } from "../../utils/theme";
import { useSelector } from "react-redux";

function Thirukural() {
    const navItems = [
        { name: "📖 Kural", path: "kural" },
        { name: "📜 Paal", path: "paal" },
        { name: "📚 Athikaaram", path: "athikaaram" },
    ];

    const theme = useSelector((state) => state.theme.theme);

    return (
        <div className={`min-h-screen ${themes[theme]} transition-colors duration-500 p-6`}>

            {/* Header */}
            <h1 className="text-2xl font-bold mb-6 text-center">
                📜 திருக்குறள்
            </h1>

            {/* 💎 Floating Cards Navigation */}
            <div className="flex justify-center gap-6 mb-10 flex-wrap">

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
                        <span className="block text-center font-semibold">
                            {item.name}
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