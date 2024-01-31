import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import trNavigation from './tr/navigation';
import enNavigation from './en/navigation';


console.log('trNavigation', trNavigation);


// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
const resources = {
  en: {
    translation: { ...enNavigation }
  },
  tr: {
    translation: { ...trNavigation }
  }
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    compatibilityJSON: 'v3',
    resources,
    lng: "en",
    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

export default i18n;