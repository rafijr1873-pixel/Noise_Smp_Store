import { purchaseContacts } from "../config/siteConfig";
import type { ProductItem } from "../types";

/** Membangun link WhatsApp dengan pesan otomatis berisi nama & harga produk. */
export function buildWhatsappLink(product: ProductItem): string {
  const message = purchaseContacts.whatsappMessageTemplate
    .replace("{product}", product.name)
    .replace("{price}", product.price);
  return `https://wa.me/${purchaseContacts.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

/** Link Discord untuk proses pembelian (invite server / channel order). */
export function buildDiscordLink(): string {
  return purchaseContacts.discordInviteUrl;
}
