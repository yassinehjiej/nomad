import i18n from "i18next";
import {
  initReactI18next,
  useTranslation as useTranslationBase,
} from "react-i18next";
import en from "./translations/en.json";
import fr from "./translations/fr.json";

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: en },
    fr: { translation: fr },
  },
  lng: "fr",
  fallbackLng: "fr",
  compatibilityJSON: 'v3',
  interpolation: {
    escapeValue: false,
  },
});

export const useTranslation = () => useTranslationBase();

export default i18n;
