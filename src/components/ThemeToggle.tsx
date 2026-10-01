import { Sun, Moon } from "lucide-react";
import { useTheme } from "../context/ThemeContext";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const isBlack = theme === "black";

  return (
    <button
      onClick={toggleTheme}
      aria-label="Ganti tema White / Black"
      title={isBlack ? "Ganti ke tema White" : "Ganti ke tema Black"}
      className="relative flex h-9 w-16 items-center rounded-full border border-black/10 bg-zinc-100 px-1 transition-colors duration-300 dark:border-white/10 dark:bg-zinc-800"
    >
      <span
        className={`absolute top-1 flex h-7 w-7 items-center justify-center rounded-full bg-white shadow-sm shadow-black/10 transition-transform duration-300 dark:bg-zinc-900 ${
          isBlack ? "translate-x-7" : "translate-x-0"
        }`}
      >
        {isBlack ? (
          <Moon size={14} className="text-emerald-400" />
        ) : (
          <Sun size={14} className="text-amber-500" />
        )}
      </span>
    </button>
  );
}
