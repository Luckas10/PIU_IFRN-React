import { useEffect, useState } from "react";
import "./ThemeToggle.css";

export default function ThemeToggle() {
    const [isDark, setIsDark] = useState(false);

    useEffect(() => {
        document.body.classList.toggle("dark-theme", isDark);
    }, [isDark]);

    return (
        <button className="theme-toggle" onClick={() => setIsDark(!isDark)}>
            {isDark ? "🌙 Dark" : "☀️ Light"}
        </button>
    );
}
