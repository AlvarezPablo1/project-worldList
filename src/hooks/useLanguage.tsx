import enTranslations from 'data/i18n.en';
import esTranslations from 'data/i18n.es';
import ptTranslations from 'data/i18n.pt';
import { Languages } from 'features/language';
import { useState } from 'react';

export const useLanguage = () => {
  const [language, setLanguage] = useState<Languages>('ENGLISH' as Languages);

  const translate = (key: string) => {
    if (language === 'SPANISH') {
      return esTranslations[key];
    } else if (language === 'ENGLISH') {
      return enTranslations[key];
    } else if (language === 'PORTUGUESE') {
      return ptTranslations[key];
    }
    return key;
  };

  return { language, setLanguage, translate };
};
