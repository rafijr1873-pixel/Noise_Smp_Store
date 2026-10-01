import { Check, ShoppingCart } from "lucide-react";
import type { ProductItem } from "../types";

interface ProductCardProps {
  product: ProductItem;
  index: number;
  onBuy: (product: ProductItem) => void;
}

export default function ProductCard({ product, index, onBuy }: ProductCardProps) {
  return (
    <div
      className="animate-fade-in-up group relative flex flex-col rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-emerald-400/60 hover:shadow-xl hover:shadow-emerald-500/10 dark:border-white/10 dark:bg-zinc-900/60 dark:hover:border-emerald-500/40"
      style={{ animationDelay: `${index * 60}ms`, animationFillMode: "backwards" }}
    >
      {product.tag && (
        <span className="absolute -top-3 right-5 rounded-full bg-gradient-to-r from-emerald-500 to-emerald-600 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-white shadow-md shadow-emerald-500/30">
          {product.tag}
        </span>
      )}

      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-500/10 text-2xl transition-transform duration-300 group-hover:scale-110">
        {product.icon ?? "📦"}
      </div>

      <h3 className="font-display text-lg font-bold text-zinc-900 dark:text-white">{product.name}</h3>
      <p className="mt-2 text-sm leading-relaxed text-zinc-500 dark:text-zinc-400">{product.description}</p>

      {product.features && product.features.length > 0 && (
        <ul className="mt-4 space-y-2">
          {product.features.map((feat) => (
            <li key={feat} className="flex items-start gap-2 text-sm text-zinc-600 dark:text-zinc-300">
              <Check size={15} className="mt-0.5 shrink-0 text-emerald-500" />
              <span>{feat}</span>
            </li>
          ))}
        </ul>
      )}

      <div className="mt-6 flex items-end justify-between border-t border-zinc-100 pt-4 dark:border-white/10">
        <div>
          <span className="font-display text-xl font-extrabold text-zinc-900 dark:text-white">
            {product.price}
          </span>
          {product.priceNote && (
            <span className="ml-1 text-xs text-zinc-400 dark:text-zinc-500">{product.priceNote}</span>
          )}
        </div>
        <button
          onClick={() => onBuy(product)}
          className="flex items-center gap-1.5 rounded-lg bg-zinc-900 px-4 py-2.5 text-sm font-semibold text-white transition-all duration-200 hover:bg-emerald-600 active:scale-95 dark:bg-white dark:text-zinc-900 dark:hover:bg-emerald-500 dark:hover:text-white"
        >
          <ShoppingCart size={15} />
          Beli
        </button>
      </div>
    </div>
  );
}
