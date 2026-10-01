// ========================================================================
// ===== OWNER CUSTOMIZATION =====
// ========================================================================
// Semua teks, harga, kategori, item, rank, link, warna, dan banner website
// bisa diubah 100% dari file ini. Tidak perlu menyentuh file HTML/komponen
// lain. Setiap kali Anda menambah/menghapus data di bawah, website akan
// otomatis menyesuaikan (kategori baru langsung muncul di menu & store).
//
// Cari komentar "// EDIT DI SINI" untuk tahu persis bagian yang boleh/ perlu
// Anda ubah.
// ========================================================================

import type { ProductCategory, FaqEntry, SocialLink } from "../types";

/* ------------------------------------------------------------------ */
/* 1. IDENTITAS SITUS & SERVER                                         */
/* ------------------------------------------------------------------ */
export const siteInfo = {
  // EDIT DI SINI — nama yang tampil di menu utama / navbar
  name: "Noise SMP Store",

  // EDIT DI SINI — tagline singkat di bawah nama (hero section)
  tagline: "Toko resmi untuk server Minecraft Bedrock Noise SMP",

  // EDIT DI SINI — deskripsi panjang untuk hero / meta description
  description:
    "Tingkatkan pengalaman bermainmu di Noise SMP dengan Rank eksklusif, item langka, dan berbagai keperluan survival — proses instan, aman, dan terpercaya.",

  // EDIT DI SINI — IP server Minecraft Bedrock (ditampilkan + tombol copy)
  serverIp: "xiao-nodes.davinn.net:40123",

  // EDIT DI SINI — label platform yang ditampilkan di badge hero
  platformLabel: "Khusus Minecraft Bedrock Edition",

  // EDIT DI SINI — teks badge status server (opsional, bisa diganti "Online" dll)
  statusBadge: "Server Online 24/7",
};

/* ------------------------------------------------------------------ */
/* 2. NAVBAR                                                            */
/* ------------------------------------------------------------------ */
// EDIT DI SINI — ubah label menu navbar. "id" harus tetap cocok dengan
// section id di App.tsx (home, store, rank, item, faq, contact) kecuali
// Anda juga mengubah App.tsx.
export const navLinks = [
  { id: "home", label: "Home" },
  { id: "store", label: "Store" },
  { id: "rank", label: "Rank" },
  { id: "item", label: "Item" },
  { id: "faq", label: "FAQ" },
  { id: "contact", label: "Contact" },
];

/* ------------------------------------------------------------------ */
/* 3. KONTAK / CHANNEL PEMBELIAN                                       */
/* ------------------------------------------------------------------ */
// EDIT DI SINI — link Discord & nomor WhatsApp untuk proses pembelian.
// Saat tombol "Beli" ditekan, user memilih salah satu dan akan diarahkan
// (redirect) ke link berikut. Format nomor WhatsApp: kode negara tanpa "+".
export const purchaseContacts = {
  discordInviteUrl: "https://discord.gg/noisesmp",
  whatsappNumber: "6281234567890",
  // EDIT DI SINI — template pesan WhatsApp otomatis. {product} & {price}
  // akan diganti otomatis sesuai produk yang dipilih.
  whatsappMessageTemplate:
    "Halo Admin Noise SMP Store, saya ingin membeli {product} seharga {price}. Mohon info selanjutnya ya!",
};

/* ------------------------------------------------------------------ */
/* 4. KATEGORI & PRODUK (RANK + ITEM)                                   */
/* ------------------------------------------------------------------ */
// EDIT DI SINI — tambah/hapus/ubah kategori & produk sebebas mungkin.
// - group: "rank"  -> muncul di menu nav "Rank"
// - group: "item"  -> muncul di menu nav "Item"
// Semua kategori (rank & item) otomatis tergabung di halaman "Store".
// Setiap kategori butuh minimal: id (unik), name, group, icon, description, products.
// Setiap produk butuh minimal: id (unik), name, price, description.
export const categories: ProductCategory[] = [
  {
    id: "rank-member",
    name: "Rank Bertingkat",
    group: "rank",
    icon: "⭐",
    description: "Rank permanen dengan keuntungan bertingkat untuk pengalaman survival terbaikmu.",
    products: [
      {
        id: "rank-knight",
        name: "VIP",
        price: "Rp 6.000",
        priceNote: "/ selamanya",
        icon: "🛡️",
        description: "Rank awal untuk kamu yang ingin memulai perjalanan dengan sedikit keuntungan extra.",
        features: ["Tag [VIP] di chat", "Akses kit harian Vip", " dan fitur lainnya"],
      },
      {
        id: "rank-hero",
        name: "MVP",
        price: "Rp 15.000",
        priceNote: "/ selamanya",
        icon: "⚔️",
        description: "Pilihan favorit pemain aktif, cocok untuk grinding dan survival jangka panjang.",
        features: ["Tag [MVP] berwarna", "Akses kit harian Hero", "Dan fitur lainnya"],
        popular: true,
        tag: "TERLARIS",
      },
      {
        id: "rank-legend",
        name: "-",
        price: "Rp -",
        priceNote: "/ selamanya",
        icon: "👑",
        description: "Untuk pemain serius yang ingin fitur lengkap dan prioritas lebih di server.",
        features: ["Tag [Legend] eksklusif", "10 /sethome", "Akses /fly di area survival", "Diskon 10% di /shop"],
      },
      {
        id: "rank-immortal",
        name: "-",
        price: "Rp -",
        priceNote: "/ selamanya",
        icon: "🔥",
        description: "Rank tertinggi dengan seluruh keuntungan Noise SMP, dibuat untuk pemain top tier.",
        features: ["Tag [Immortal] animasi warna", "Unlimited /sethome", "/fly & /god area survival", "Diskon 15% di /shop", "Akses channel Discord khusus"],
        tag: "PREMIUM",
      },
    ],
  },
  {
    id: "item-gear",
    name: "Tools & Gear",
    group: "item",
    icon: "⛏️",
    description: "Peralatan dan gear enchant siap pakai untuk mempercepat progress survival-mu.",
    products: [
      {
       
      },
      {
       
      },
      {
       
      },
    ],
  },
  {
    id: "item-consumable",
    name: "Potion & Konsumsi",
    group: "item",
    icon: "🧪",
    description: "Item konsumsi untuk membantu aktivitas harian di server.",
    products: [
      {
       
      },
      {
       
      },
    ],
  },
  {
    id: "item-cosmetic",
    name: "Kosmetik",
    group: "item",
    icon: "🎨",
    description: "Item kosmetik untuk mempercantik tampilan.",
    products: [
      {
       
      },
      {
       
      },
    ],
  },
];

/* ------------------------------------------------------------------ */
/* 5. FAQ                                                               */
/* ------------------------------------------------------------------ */
// EDIT DI SINI — tambah / hapus pertanyaan & jawaban FAQ sebebas mungkin.
export const faqList: FaqEntry[] = [
  {
    question: "Apakah Noise SMP mendukung Minecraft Java Edition?",
    answer:
      "Tidak. Noise SMP Store dan server Noise SMP hanya tersedia untuk Minecraft Bedrock Edition (mobile, konsol, Windows 10/11).",
  },
  {
    question: "Berapa lama proses setelah pembayaran?",
    answer:
      "Setelah konfirmasi pembayaran via Discord atau WhatsApp, item/rank biasanya diproses otomatis maupun manual oleh admin dalam 1-15 menit.",
  },
  {
    question: "Apakah pembelian rank bersifat permanen?",
    answer:
      "Ya, seluruh rank bersifat permanen (selamanya) kecuali disebutkan lain pada deskripsi produk, seperti item kosmetik berlangganan bulanan.",
  },
  {
    question: "Metode pembayaran apa saja yang didukung?",
    answer:
      "Pembayaran dilakukan melalui admin di Discord atau WhatsApp, mendukung transfer bank, e-wallet, dan QRIS.",
  },
  {
    question: "Bagaimana jika item/rank belum masuk setelah membayar?",
    answer:
      "Silakan hubungi admin melalui Discord atau WhatsApp dengan menyertakan bukti pembayaran dan username Minecraft kamu untuk dibantu secepatnya.",
  },
];

/* ------------------------------------------------------------------ */
/* 6. SOSIAL MEDIA / CONTACT SECTION                                    */
/* ------------------------------------------------------------------ */
// EDIT DI SINI — daftar sosial media / channel yang tampil di section Contact.
export const socialLinks: SocialLink[] = [
  { label: "Discord Server", url: "https://discord.gg/noisesmp", icon: "discord" },
  { label: "WhatsApp Admin", url: "https://wa.me/6281234567890", icon: "whatsapp" },
  { label: "Instagram", url: "https://instagram.com/noisesmp", icon: "instagram" },
  { label: "YouTube", url: "https://youtube.com/@noisesmp", icon: "youtube" },
];

/* ------------------------------------------------------------------ */
/* 7. FOOTER                                                            */
/* ------------------------------------------------------------------ */
export const footerConfig = {
  // EDIT DI SINI
  copyText: `© ${new Date().getFullYear()} Noise SMP Store. Semua hak dilindungi.`,
  note: "Noise SMP Store tidak berafiliasi resmi dengan Mojang / Microsoft.",
};

/* ------------------------------------------------------------------ */
/* 8. TEMA WARNA (opsional, lanjutan)                                   */
/* ------------------------------------------------------------------ */
// EDIT DI SINI — warna aksen utama tema (dipakai tombol, highlight, gradient).
// Gunakan format Tailwind-friendly hex. Terapkan di tailwind via arbitrary
// value class accent-[...] sudah otomatis terhubung dari variabel ini.
export const themeAccent = {
  from: "#4ade80", // hijau emerald ala Minecraft grass
  to: "#16a34a",
  solid: "#22c55e",
};
