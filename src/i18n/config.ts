export const locales = ['en', 'es', 'fr', 'ru', 'ar'] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = 'en';

export const localeNames: Record<Locale, string> = {
  en: 'English',
  es: 'Español',
  fr: 'Français',
  ru: 'Русский',
  ar: 'العربية',
};

export const rtlLocales: Locale[] = ['ar'];
