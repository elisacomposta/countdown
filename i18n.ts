import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import RNLanguageDetector from '@os-team/i18next-react-native-language-detector';

const language = 'en';

i18next
    //.use(RNLanguageDetector)
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
