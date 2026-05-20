import { createContext, useContext, useMemo, useState } from 'react';
import { translations } from '../translations/index.js';

const I18nContext = createContext(null);

const getNestedValue = (source, path) =>
  path.split('.').reduce((current, key) => current?.[key], source);

export function I18nProvider({ children }) {
  const [language, setLanguage] = useState(() => localStorage.getItem('language') || 'es');

  const value = useMemo(() => {
    const dictionary = translations[language] ?? translations.es;

    return {
      language,
      setLanguage: (nextLanguage) => {
        localStorage.setItem('language', nextLanguage);
        document.documentElement.lang = nextLanguage;
        setLanguage(nextLanguage);
      },
      t: (key) => getNestedValue(dictionary, key) ?? key,
      dictionary,
    };
  }, [language]);

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  const context = useContext(I18nContext);
  if (!context) {
    throw new Error('useI18n must be used inside I18nProvider');
  }
  return context;
}

