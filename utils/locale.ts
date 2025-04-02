import { getLocales } from 'expo-localization';

const locales = getLocales();
export const locale = locales[0]["languageTag"] || 'en-US';
export const language = locales[0]["languageCode"] || 'en';