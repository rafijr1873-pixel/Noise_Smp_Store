import { useEffect, useMemo, useState } from "react";
import { PackageSearch } from "lucide-react";
import { categories } from "../config/siteConfig";
import CategoryTabs from "./CategoryTabs";
import ProductCard from "./ProductCard";
import type { ProductItem } from "../types";

export type ShopFilter = "all" | "rank" | "item";

interface ShopSectionProps {
  filter: ShopFilter;
  onBuy: (product: ProductItem) => void;
}

const filterMeta: Record<ShopFilter, { title: string; subtitle: string }> = {
  all: {
    title: "Store",
    subtitle: "Semua kategori Rank & Item tersedia di sini. Pilih salah satu kategori untuk melihat produknya.",
  },
  rank: {
    title: "Rank",
    subtitle: "Tingkatkan statusmu di server dengan rank permanen bertingkat.",
  },
  item: {
    title: "Item",
    subtitle: "Perlengkapan survival, potion, hingga kosmetik untuk mempermudah petualanganmu.",
  },
};

export default function ShopSection({ filter, onBuy }: ShopSectionProps) {
  const visibleCategories = useMemo(
    () => (filter === "all" ? categories : categories.filter((c) => c.group === filter)),
    [filter]
  );

  const [activeCategoryId, setActiveCategoryId] = useState<string | null>(null);

  // Reset pilihan kategori setiap kali filter (nav Store/Rank/Item) berubah
  useEffect(() => {
    setActiveCategoryId(null);
  }, [filter]);

  const activeCategory = visibleCategories.find((c) => c.id === activeCategoryId) ?? null;
  const meta = filterMeta[filter];

  return (
    <section id="store" className="scroll-mt-16 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-10 max-w-2xl text-center">
          <p className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-emerald-600 dark:text-emerald-400">
            {meta.title}
          </p>
          <h2 className="font-display text-3xl font-extrabold tracking-tight text-zinc-900 sm:text-4xl dark:text-white">
            Pilih Kategori Dulu
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-zinc-500 sm:text-base dark:text-zinc-400">
            {meta.subtitle}
          </p>
        </div>

        <CategoryTabs
          categories={visibleCategories}
          activeId={activeCategoryId}
          onSelect={(id) => setActiveCategoryId((prev) => (prev === id ? null : id))}
        />

        <div className="mt-10">
          {activeCategory ? (
            <div key={activeCategory.id} className="animate-fade-in-up">
              <div className="mb-6 flex items-center gap-3 rounded-xl border border-zinc-200 bg-zinc-50 px-4 py-3 dark:border-white/10 dark:bg-white/5">
                <span className="text-xl">{activeCategory.icon}</span>
                <div>
                  <h3 className="font-display text-sm font-bold text-zinc-900 dark:text-white">
                    {activeCategory.name}
                  </h3>
                  <p className="text-xs text-zinc-500 dark:text-zinc-400">{activeCategory.description}</p>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {activeCategory.products.map((product, i) => (
                  <ProductCard key={product.id} product={product} index={i} onBuy={onBuy} />
                ))}
              </div>
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center gap-3 rounded-2xl border border-dashed border-zinc-300 py-16 text-center dark:border-white/15">
              <PackageSearch size={32} className="text-zinc-300 dark:text-zinc-600" />
              <p className="max-w-xs text-sm text-zinc-400 dark:text-zinc-500">
                Pilih salah satu kategori di atas untuk menampilkan daftar produknya.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
