import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import { language } from './utils/locale';

i18next
    .use(initReactI18next)
    .init({
        fallbackLng: 'en',
        supportedLngs: ['en', 'it'],
        lng: language,
        resources: {
            en: {
                translation: {
                    days_one: "day",
                    days_other: "days",
                    archive: "Archive",
                    my_events: "My events",
                    new_event: "New event",
                    title: "Title",
                    event_name: "Event name",
                    date: "Date",
                    color: "Color",
                    event_details: "Event details",
                }
            },
            it: {
                translation: {
                    days_one: "giorno",
                    days_other: "giorni",
                    archive: "Archivio",
                    my_events: "I miei eventi",
                    new_event: "Nuovo evento",
                    title: "Titolo",
                    event_name: "Nome evento",
                    date: "Data",
                    color: "Colore",
                    event_details: "Dettagli evento",
                }
            },
        }
    })

export default i18next;
