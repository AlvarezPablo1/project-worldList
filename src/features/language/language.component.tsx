import { FC } from 'react';
import Languages from 'features/language/language.types';

type LanguageComponentProps = {
  language: Languages;
  setLanguage: (language: Languages) => void;
  t: (key: string) => string;
};

const LanguageComponent: FC<LanguageComponentProps> = ({
  language,
  setLanguage,
  t
}: LanguageComponentProps) => (
  <div className={'language'}>
    <button
      onClick={() => setLanguage('SPANISH')}
      className={language === 'SPANISH' ? 'language-button active' : 'language-button'}>
      {t('language.spanish')}
    </button>
    <button
      onClick={() => setLanguage('ENGLISH')}
      className={language === 'ENGLISH' ? 'language-button active' : 'language-button'}>
      {t('language.english')}
    </button>
    <button
      onClick={() => setLanguage('PORTUGUESE')}
      className={language === 'PORTUGUESE' ? 'language-button active' : 'language-button'}>
      {t('language.portuguese')}
    </button>
  </div>
);
export default LanguageComponent;
