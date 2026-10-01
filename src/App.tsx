import { useCallback, useEffect, useRef, useState } from "react";
import { ThemeProvider } from "./context/ThemeContext";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ShopSection, { type ShopFilter } from "./components/ShopSection";
import FaqSection from "./components/FaqSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import BuyModal from "./components/BuyModal";
import type { ProductItem } from "./types";

const OBSERVED_IDS = ["home", "store", "faq", "contact"];

function AppContent() {
  const [shopFilter, setShopFilter] = useState<ShopFilter>("all");
  const [currentSectionId, setCurrentSectionId] = useState("home");
  const [selectedProduct, setSelectedProduct] = useState<ProductItem | null>(null);
  const observerSetupDone = useRef(false);

  useEffect(() => {
    if (observerSetupDone.current) return;
    observerSetupDone.current = true;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target.id) {
          setCurrentSectionId(visible.target.id);
        }
      },
      { rootMargin: "-35% 0px -50% 0px", threshold: [0, 0.25, 0.5, 0.75, 1] }
    );

    OBSERVED_IDS.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToId = useCallback((id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, []);

  const handleNavigate = useCallback(
    (id: string) => {
      if (id === "rank" || id === "item") {
        setShopFilter(id);
        scrollToId("store");
      } else if (id === "store") {
        setShopFilter("all");
        scrollToId("store");
      } else {
        scrollToId(id);
      }
    },
    [scrollToId]
  );

  const activeNav =
    currentSectionId === "store" ? (shopFilter === "all" ? "store" : shopFilter) : currentSectionId;

  return (
    <div className="min-h-screen bg-white font-sans text-zinc-900 transition-colors duration-300 dark:bg-black dark:text-zinc-50">
      <Navbar activeSection={activeNav} onNavigate={handleNavigate} />

      <main>
        <Hero onExplore={() => handleNavigate("store")} />
        <ShopSection filter={shopFilter} onBuy={setSelectedProduct} />
        <FaqSection />
        <ContactSection />
      </main>

      <Footer onNavigate={handleNavigate} />

      <BuyModal product={selectedProduct} onClose={() => setSelectedProduct(null)} />
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}
