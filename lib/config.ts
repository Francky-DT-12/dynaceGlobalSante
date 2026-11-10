// Modifiez ici vos coordonnées : elles sont utilisées partout sur le site.
export const SITE = {
  phoneIntl: "237674664829", // format international sans le "+" (pour WhatsApp)
  phoneDisplay: "+237 674 664 829",
  defaultCity: "Yaoundé",
};

export const waLink = (text: string) =>
  `https://wa.me/${SITE.phoneIntl}?text=${encodeURIComponent(text)}`;
