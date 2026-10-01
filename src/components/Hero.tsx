import { useState } from "react";
import { Check, Copy, ChevronDown } from "lucide-react";
import { siteInfo } from "../config/siteConfig";

interface HeroProps {
  onExplore: () => void;
}

export default function Hero({ onExplore }: HeroProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(siteInfo.serverIp);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      // ignore clipboard errors silently
    }
  };

  return (
    <section
      id="home"
      className="relative flex min-h-[92vh] items-center overflow-hidden pt-16"
    >
      {/* Background image + overlay */}
      <div className="absolute inset-0 -z-10">
        <img
          src="/images/hero-bg.jpg"
          alt=""
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-white/78 dark:bg-black/75" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/40 to-white dark:via-black/40 dark:to-black" />
      </div>

      <div className="mx-auto w-full max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <div className="animate-fade-in-up mb-5 inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-1.5 text-xs font-semibold tracking-wide text-emerald-700 dark:text-emerald-400">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            {siteInfo.statusBadge} &bull; {siteInfo.platformLabel}
          </div>

          <h1
            className="animate-fade-in-up font-display text-4xl font-extrabold tracking-tight text-zinc-900 sm:text-5xl md:text-6xl dark:text-white"
            style={{ animationDelay: "0.08s", animationFillMode: "backwards" }}
          >
            {siteInfo.name}
          </h1>

          <p
            className="animate-fade-in-up mx-auto mt-5 max-w-xl text-base leading-relaxed text-zinc-600 sm:text-lg dark:text-zinc-400"
            style={{ animationDelay: "0.16s", animationFillMode: "backwards" }}
          >
            {siteInfo.description}
          </p>

          <div
            className="animate-fade-in-up mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row"
            style={{ animationDelay: "0.24s", animationFillMode: "backwards" }}
          >
            <button
              onClick={handleCopy}
              className="group flex w-full items-center justify-center gap-2.5 rounded-xl border border-zinc-200 bg-white/90 px-5 py-3.5 font-mono text-sm font-medium text-zinc-800 shadow-sm transition-all duration-200 hover:border-emerald-400 hover:shadow-md sm:w-auto dark:border-white/10 dark:bg-white/5 dark:text-zinc-200 dark:hover:border-emerald-500/60"
            >
              <span className="text-zinc-400 dark:text-zinc-500">IP:</span>
              {siteInfo.serverIp}
              {copied ? (
                <Check size={16} className="text-emerald-500" />
              ) : (
                <Copy size={16} className="text-zinc-400 transition-colors group-hover:text-emerald-500" />
              )}
            </button>

            <button
              onClick={onExplore}
              className="w-full rounded-xl bg-gradient-to-r from-emerald-500 to-emerald-600 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-emerald-500/25 transition-all duration-200 hover:shadow-emerald-500/40 hover:brightness-105 active:scale-[0.98] sm:w-auto"
            >
              Jelajahi Store
            </button>
          </div>

          {copied && (
            <p className="mt-3 text-xs font-medium text-emerald-600 dark:text-emerald-400">
              IP server disalin ke clipboard!
            </p>
          )}
        </div>
      </div>

      <button
        onClick={onExplore}
        aria-label="Scroll ke store"
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 animate-float-slow text-zinc-400 transition-colors hover:text-emerald-500 sm:block"
      >
        <ChevronDown size={26} />
      </button>
    </section>
  );
}
