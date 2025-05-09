
/**
 * Opens a WhatsApp chat window with a predefined message
 * @param message The message to send via WhatsApp
 */
export const openWhatsAppChat = (message: string) => {
  // Replace this with your actual phone number in international format (without + symbol)
  const phoneNumber = "55SEUNUMERODETELEFONE";
  const encodedMessage = encodeURIComponent(message);
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
  window.open(whatsappUrl, '_blank');
};

