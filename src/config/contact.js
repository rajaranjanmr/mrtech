/** Primary business line — phone banner and default WhatsApp (no backend). */
const PHONE_E164 = "917717764690";

const PHONE_DISPLAY = "+91 7717764690";

const PHONE_TEL_HREF = `tel:+${PHONE_E164}`;

/**
 * WhatsApp Web / app deep link. Override on Netlify (build env):
 * VITE_WHATSAPP_URL=https://wa.me/91XXXXXXXXXX
 * Legacy: VITE_WHATSAPP_DIRECT_URL
 */
function getWhatsAppChatUrl() {
  const fromEnv =
    import.meta.env.VITE_WHATSAPP_URL || import.meta.env.VITE_WHATSAPP_DIRECT_URL;
  const trimmed = fromEnv != null ? String(fromEnv).trim() : "";
  if (trimmed.startsWith("http")) {
    return trimmed;
  }
  return `https://wa.me/${PHONE_E164}`;
}

export { PHONE_DISPLAY, PHONE_TEL_HREF, getWhatsAppChatUrl };
