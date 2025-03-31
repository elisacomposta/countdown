import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import { getLocales } from 'expo-localization';

const locales = getLocales();
const language = locales[0]["languageCode"] || 'en';

i18next
    .use(initReactI18next)
    .init({
        fallbackLng: 'en',
        supportedLngs: ['en', 'it'],
        lng: language,
        resources: {
            en: {
                translation: {
                    days_one: "{{count}} day",
                    days_other: "{{count}} days",
                }
            },
            it: {
                translation: {
                    days_one: "{{count}} giorno",
                    days_other: "{{count}} giorni",
                }
            },
        }
    })

export default i18next;
