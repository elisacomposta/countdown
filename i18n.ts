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
                    archive_action: "Archive",
                    unarchive: "Restore",
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
                    delete_all_archived: "Delete all archived events?",
                    delete_alert_message: "This action is permanent.",
                    discard_alert_title: "Discard changes?",
                    discard_alert_message: "All unsaved changes will be lost.",
                    delete_all: "Delete all",
                    discard: "Discard",
                    sort_by: "Choose sorting criteria",
                    remaining_days: "Remaining days",
                    creation_date: "Creation date",
                    last_edit_date: "Last edit",
                }
            },
            it: {
                translation: {
                    days_one: "giorno",
                    days_other: "giorni",
                    archive: "Archivio",
                    archive_action: "Archivia",
                    unarchive: "Ripristina",
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
                    delete_all_archived: "Eliminare tutti gli eventi archiviati?",
                    delete_alert_message: "Questa azione è irreversibile.",
                    discard_alert_title: "Eliminare le modifiche?",
                    discard_alert_message: "Tutte le modifiche non salvate andranno perse.",
                    delete_all: "Elimina tutto",
                    discard: "Elimina",
                    sort_by: "Scegli come ordinare gli eventi",
                    remaining_days: "Giorni rimanenti",
                    creation_date: "Data di creazione",
                    last_edit_date: "Ultima modifica",
                }
            },
        }
    })

export default i18next;
