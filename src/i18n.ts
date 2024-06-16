import { createI18n } from "vue-i18n"

import en from "./locales/en.json"
import nl from "./locales/nl.json"

const loadLocaleMessages = () => {
    return {
      en: en,
      nl: nl
    }
  }

export default createI18n({
  legacy: false,
  locale: import.meta.env.VITE_I18N_LOCALE || 'en',
  fallbackLocale: import.meta.env.VITE_I18N_FALLBACK_LOCALE || 'en',
  messages: loadLocaleMessages()
})