import { navLinks, siteInfo, footerConfig } from "../config/siteConfig";

interface FooterProps {
  onNavigate: (id: string) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  return (
    <footer className="border-t border-zinc-200 bg-white py-10 dark:border-white/10 dark:bg-black">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <button
            onClick={() => onNavigate("home")}
            className="flex items-center gap-2 font-display text-base font-bold text-zinc-900 dark:text-white"
          >
            <span className="inline-block h-2.5 w-2.5 rounded-[3px] bg-emerald-500" />
            {siteInfo.name}
          </button>

          <nav className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => onNavigate(link.id)}
                className="text-sm text-zinc-500 transition-colors hover:text-emerald-600 dark:text-zinc-400 dark:hover:text-emerald-400"
              >
                {link.label}
              </button>
            ))}
          </nav>
        </div>

        <div className="mt-8 border-t border-zinc-100 pt-6 text-center dark:border-white/10">
          <p className="text-xs text-zinc-400 dark:text-zinc-500">{footerConfig.copyText}</p>
          <p className="mt-1 text-[11px] text-zinc-300 dark:text-zinc-600">{footerConfig.note}</p>
        </div>
      </div>
    </footer>
  );
}
