import React, { FC, useContext } from 'react';
import styles from './Header.module.scss';
import { Logo } from '../Logo/Logo';
import Button from 'src/components/Button/Button';
import { ButtonTheme } from '../ButtonTheme/ButtonTheme';
import { ThemeContext } from '../Provider/ThemeProvider';
import { useTranslation } from 'react-i18next';
import { ButtonLanguage } from '../ButtonLanguage/ButtonLanguage';

interface IHeader {
  size?: string,
};

export const Header: FC<IHeader> = ({ size }) => {
  const [theme,] = useContext(ThemeContext);
  const { t } = useTranslation();

  return (
    <header>
      <div
        className={styles.storybookHeader}
        style={theme === 'dark' ? { backgroundColor: 'rgb(177, 189, 230)' } : {}} >
        <div>
          <div className={styles.logo}>
            <Logo />
          </div>
          <h1>PROJECT - OTUS</h1>
        </div>
        <div>
          <span className={styles.welcome}>
            {t('header.welcome')}
          </span>
          <Button label="Log out" onClick={() => alert('Привет Мир!')} />
          <ButtonTheme />
          <ButtonLanguage />
        </div>
      </div>
    </header>
  );
};
