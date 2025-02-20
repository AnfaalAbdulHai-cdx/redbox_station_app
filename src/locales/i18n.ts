import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { I18nManager } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import locales from "./locales";

const loadLanguage = async () => {
  try {
    const storedLanguage = await AsyncStorage.getItem("appLanguage");
    return storedLanguage || "en"; // Default to English
  } catch (error) {
    console.log("Failed to load language from AsyncStorage", error);
    return "en";
  }
};

const initLanguage = async () => {
  const language = await loadLanguage();
  i18n.use(initReactI18next).init({
    lng: language,
    fallbackLng: "en",
    resources: {
      en: { translation: locales.en },
      ar: { translation: locales.ar },
    },
    interpolation: { escapeValue: false },
  });

  // Handle RTL layout for Arabic
  if (language === "ar") {
    I18nManager.forceRTL(true);
  } else {
    I18nManager.forceRTL(false);
  }

  // Listen for language changes and update AsyncStorage
  i18n.on("languageChanged", async (lng) => {
    await AsyncStorage.setItem("appLanguage", lng);
    if (lng === "ar") {
      I18nManager.forceRTL(true);
    } else {
      I18nManager.forceRTL(false);
    }
  });
};

initLanguage();

export default i18n;
