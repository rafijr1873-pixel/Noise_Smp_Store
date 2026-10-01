// ===== TYPE DEFINITIONS =====
// File ini mendefinisikan struktur data yang dipakai seluruh website.
// Tidak perlu diubah kecuali Anda ingin menambah field baru pada produk/kategori.

export type CategoryGroup = "rank" | "item";

export interface ProductItem {
  id: string;
  name: string;
  price: string;
  /** Teks kecil di bawah harga, misal "/ selamanya" atau "/ bulan" */
  priceNote?: string;
  description: string;
  /** Daftar fitur / benefit singkat, ditampilkan sebagai list bertanda centang */
  features?: string[];
  /** Emoji atau karakter ikon singkat untuk mewakili produk */
  icon?: string;
  /** Tandai true untuk memberi label "Populer" / "Best Seller" */
  popular?: boolean;
  /** Label custom opsional, misal "BARU", "DISKON", "LIMITED" */
  tag?: string;
}

export interface ProductCategory {
  id: string;
  name: string;
  /** "rank" akan muncul pada menu nav Rank, "item" pada menu nav Item.
   * Keduanya tetap tergabung pada halaman Store. */
  group: CategoryGroup;
  icon: string;
  description: string;
  products: ProductItem[];
}

export interface FaqEntry {
  question: string;
  answer: string;
}

export interface SocialLink {
  label: string;
  url: string;
  icon?: string;
}
