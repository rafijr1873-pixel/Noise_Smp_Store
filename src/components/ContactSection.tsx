import { MessageCircle, ArrowUpRight, Copy, Check } from "lucide-react";
import { useState } from "react";
import { socialLinks, siteInfo } from "../config/siteConfig";

function SocialIcon({ icon }: { icon?: string }) {
  switch (icon) {
    case "discord":
      return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <path d="M20.317 4.369a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.056 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.128 12.3 12.3 0 0 1-1.873.892.076.076 0 0 0-.04.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.028ZM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.955 2.418-2.157 2.418Zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418Z" />
        </svg>
      );
    case "whatsapp":
      return <MessageCircle size={20} />;
    case "instagram":
      return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2c2.717 0 3.056.01 4.122.06 1.065.05 1.79.217 2.428.465a4.9 4.9 0 0 1 1.772 1.153 4.9 4.9 0 0 1 1.153 1.772c.248.637.415 1.363.465 2.428.047 1.066.06 1.405.06 4.122s-.01 3.056-.06 4.122c-.05 1.065-.217 1.79-.465 2.428a4.9 4.9 0 0 1-1.153 1.772 4.9 4.9 0 0 1-1.772 1.153c-.637.248-1.363.415-2.428.465-1.066.047-1.405.06-4.122.06s-3.056-.01-4.122-.06c-1.065-.05-1.79-.217-2.428-.465a4.9 4.9 0 0 1-1.772-1.153 4.9 4.9 0 0 1-1.153-1.772c-.248-.637-.415-1.363-.465-2.428C2.013 15.056 2 14.717 2 12s.01-3.056.06-4.122c.05-1.065.217-1.79.465-2.428a4.9 4.9 0 0 1 1.153-1.772A4.9 4.9 0 0 1 5.45 2.525c.637-.248 1.363-.415 2.428-.465C8.944 2.013 9.283 2 12 2Zm0 5a5 5 0 1 0 0 10 5 5 0 0 0 0-10Zm0 8.25A3.25 3.25 0 1 1 12 8.75a3.25 3.25 0 0 1 0 6.5ZM17.5 6.25a1.2 1.2 0 1 0 0 2.4 1.2 1.2 0 0 0 0-2.4Z" />
        </svg>
      );
    case "youtube":
      return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <path d="M23.498 6.186a2.994 2.994 0 0 0-2.107-2.12C19.505 3.546 12 3.546 12 3.546s-7.505 0-9.39.52a2.994 2.994 0 0 0-2.108 2.12A31.23 31.23 0 0 0 0 12a31.23 31.23 0 0 0 .502 5.814 2.994 2.994 0 0 0 2.108 2.12c1.885.52 9.39.52 9.39.52s7.505 0 9.39-.52a2.994 2.994 0 0 0 2.108-2.12A31.23 31.23 0 0 0 24 12a31.23 31.23 0 0 0-.502-5.814ZM9.75 15.568V8.432L15.818 12l-6.068 3.568Z" />
        </svg>
      );
    default:
      return <ArrowUpRight size={20} />;
  }
}

export default function ContactSection() {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(siteInfo.serverIp);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      /* noop */
    }
  };

  return (
    <section id="contact" className="scroll-mt-16 py-20 sm:py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <p className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-emerald-600 dark:text-emerald-400">
            Contact
          </p>
          <h2 className="font-display text-3xl font-extrabold tracking-tight text-zinc-900 sm:text-4xl dark:text-white">
            Hubungi Kami
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-zinc-500 sm:text-base dark:text-zinc-400">
            Ada pertanyaan sebelum membeli? Tim admin Noise SMP Store siap membantu lewat channel berikut.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {socialLinks.map((social, i) => (
            <a
              key={social.label}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="animate-fade-in-up group flex flex-col items-center gap-3 rounded-2xl border border-zinc-200 bg-white px-5 py-7 text-center transition-all duration-300 hover:-translate-y-1.5 hover:border-emerald-400/60 hover:shadow-lg hover:shadow-emerald-500/10 dark:border-white/10 dark:bg-zinc-900/60"
              style={{ animationDelay: `${i * 70}ms`, animationFillMode: "backwards" }}
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-600 transition-transform duration-300 group-hover:scale-110 dark:text-emerald-400">
                <SocialIcon icon={social.icon} />
              </span>
              <span className="text-sm font-semibold text-zinc-800 dark:text-zinc-100">{social.label}</span>
            </a>
          ))}
        </div>

        <div className="mx-auto mt-12 flex max-w-md flex-col items-center gap-3 rounded-2xl border border-emerald-500/20 bg-emerald-500/5 px-6 py-6 text-center">
          <p className="text-sm font-medium text-zinc-600 dark:text-zinc-300">
            Langsung main sekarang dengan IP server:
          </p>
          <button
            onClick={handleCopy}
            className="group flex items-center gap-2.5 rounded-xl border border-zinc-200 bg-white px-4 py-3 font-mono text-sm text-zinc-800 shadow-sm transition-all hover:border-emerald-400 dark:border-white/10 dark:bg-zinc-900 dark:text-zinc-200"
          >
            {siteInfo.serverIp}
            {copied ? <Check size={16} className="text-emerald-500" /> : <Copy size={16} className="text-zinc-400 group-hover:text-emerald-500" />}
          </button>
        </div>
      </div>
    </section>
  );
}
