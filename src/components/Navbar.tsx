import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { navLinks, siteInfo } from "../config/siteConfig";
import ThemeToggle from "./ThemeToggle";

interface NavbarProps {
  activeSection: string;
  onNavigate: (id: string) => void;
}

export default function Navbar({ activeSection, onNavigate }: NavbarProps) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavigate = (id: string) => {
    onNavigate(id);
    setOpen(false);
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/80 shadow-sm shadow-black/5 backdrop-blur-xl dark:bg-black/70 dark:shadow-white/5"
          : "bg-white/40 backdrop-blur-md dark:bg-black/30"
      } border-b border-black/5 dark:border-white/10`}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <button
          onClick={() => handleNavigate("home")}
          className="flex items-center gap-2 font-display text-lg font-bold tracking-tight text-zinc-900 transition-opacity hover:opacity-80 dark:text-white"
        >
          <span className="inline-block h-2.5 w-2.5 rounded-[3px] bg-emerald-500" />
          {siteInfo.name}
        </button>

        <nav className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleNavigate(link.id)}
              className={`relative rounded-full px-4 py-2 text-sm font-medium transition-colors duration-200 ${
                activeSection === link.id
                  ? "text-emerald-600 dark:text-emerald-400"
                  : "text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white"
              }`}
            >
              {link.label}
              {activeSection === link.id && (
                <span className="absolute inset-x-3 -bottom-0.5 h-0.5 rounded-full bg-emerald-500" />
              )}
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <button
            className="rounded-lg p-2 text-zinc-700 transition-colors hover:bg-black/5 md:hidden dark:text-zinc-200 dark:hover:bg-white/10"
            onClick={() => setOpen((o) => !o)}
            aria-label="Toggle menu"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`overflow-hidden border-t border-black/5 bg-white/95 backdrop-blur-xl transition-[max-height] duration-300 ease-in-out md:hidden dark:border-white/10 dark:bg-black/90 ${
          open ? "max-h-96" : "max-h-0"
        }`}
      >
        <nav className="flex flex-col gap-1 px-4 py-3">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleNavigate(link.id)}
              className={`rounded-lg px-3 py-2.5 text-left text-sm font-medium transition-colors ${
                activeSection === link.id
                  ? "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400"
                  : "text-zinc-600 hover:bg-black/5 dark:text-zinc-300 dark:hover:bg-white/10"
              }`}
            >
              {link.label}
            </button>
          ))}
        </nav>
      </div>
    </header>
  );
}
