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
                    edit_event: "Edit event",
                    title: "Title",
                    event_name: "Event name",
                    date: "Date",
                    color: "Color",
                    event_details: "Event details",
                    delete: 'Delete',
                    edit: 'Edit',
                    cancel: 'Cancel',
                    delete_alert_title: "Delete this event?",
                    delete_alert_message: "This action is permanent.",
                    discard_alert_title: "Discard changes?",
                    discard_alert_message: "All unsaved changes will be lost.",
                    discard: "Discard",
                }
            },
            it: {
                translation: {
                    days_one: "giorno",
                    days_other: "giorni",
                    archive: "Archivio",
                    my_events: "I miei eventi",
                    new_event: "Nuovo evento",
                    edit_event: "Modifica evento",
                    title: "Titolo",
                    event_name: "Nome evento",
                    date: "Data",
                    color: "Colore",
                    event_details: "Dettagli evento",
                    delete: 'Elimina',
                    edit: 'Modifica',
                    cancel: 'Annulla',
                    delete_alert_title: "Eliminare questo evento?",
                    delete_alert_message: "Questa azione è irreversibile.",
                    discard_alert_title: "Eliminare le modifiche?",
                    discard_alert_message: "Tutte le modifiche non salvate andranno perse.",
                    discard: "Elimina",
                }
            },
        }
    })

export default i18next;
