import React, { FC, useContext } from 'react';
import styles from './ButtonLanguage.module.scss';
import { ThemeContext } from '../Provider/ThemeProvider';
import { useTranslation } from 'react-i18next';

interface ButtonThemeProps {
  size?: string,
  label: string,
  onClick?: () => void,
};

export const ButtonLanguage: FC<{}> = () => {
  const [theme] = useContext(ThemeContext);
  const { i18n } = useTranslation();
  const lang = i18n.language;

  const setRuLang = () => {
    i18n.changeLanguage('ru');
  };

  const setEnuLang = () => {
    i18n.changeLanguage('en');
  };

  return (
    <div>
      <button
        style={{ marginRight: '4px' }}
        type="button"
        className={theme === 'dark' ? styles.storyDark : styles.story}
        onClick={setRuLang}
      // {...props}
      >
        {'RU'}
      </button>
      <button
        type="button"
        className={theme === 'dark' ? styles.storyDark : styles.story}
        onClick={setEnuLang}
      // {...props}
      >
        {'ENU'}
      </button>
    </div>
  );
};
