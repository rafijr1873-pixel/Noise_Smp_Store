import type { ProductCategory } from "../types";

interface CategoryTabsProps {
  categories: ProductCategory[];
  activeId: string | null;
  onSelect: (id: string) => void;
}

export default function CategoryTabs({ categories, activeId, onSelect }: CategoryTabsProps) {
  return (
    <div className="flex flex-wrap justify-center gap-2.5 sm:gap-3">
      {categories.map((cat) => {
        const isActive = cat.id === activeId;
        return (
          <button
            key={cat.id}
            onClick={() => onSelect(cat.id)}
            className={`group flex items-center gap-2 rounded-xl border px-4 py-2.5 text-sm font-medium transition-all duration-200 ${
              isActive
                ? "border-emerald-500 bg-emerald-500 text-white shadow-md shadow-emerald-500/25"
                : "border-zinc-200 bg-white text-zinc-700 hover:-translate-y-0.5 hover:border-emerald-400 hover:text-emerald-600 hover:shadow-sm dark:border-white/10 dark:bg-white/5 dark:text-zinc-300 dark:hover:border-emerald-500/50 dark:hover:text-emerald-400"
            }`}
          >
            <span className="text-base leading-none">{cat.icon}</span>
            {cat.name}
          </button>
        );
      })}
    </div>
  );
}
