// Base64-encoded to keep the raw address/number out of the prerendered
// static HTML — see ObfuscatedLink for why. Not encryption, just enough to
// stop plain-text scrapers from regexing an @-sign or phone number off the page.
export const EMAIL_ENCODED = "bWFoZGl3YXZlQGdtYWlsLmNvbQ==";
export const WHATSAPP_ENCODED = "ODgwMTcxNzIyOTAwNg==";

export function formatWhatsApp(raw: string) {
  return `+${raw.slice(0, 3)} ${raw.slice(3, 7)}-${raw.slice(7)}`;
}
