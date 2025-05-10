
/**
 * Opens a WhatsApp chat window with a predefined message
 * @param message The message to send via WhatsApp
 */
export const openWhatsAppChat = (message: string) => {
  // Phone number in international format (without + symbol)
  const phoneNumber = "5555997159903";
  const encodedMessage = encodeURIComponent(message);
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
  window.open(whatsappUrl, '_blank');
};
