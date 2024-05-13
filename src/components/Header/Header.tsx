import React, { FC, useContext } from 'react';
import styles from './Header.module.scss';
import { Logo } from '../Logo/Logo';
import Button from 'src/components/CustomButton/CustomButton';

interface IHeader {
  size?: string,
};

export const Header: FC<IHeader> = ({ size, ...props }) => {
  return (
    <header>
      <div className={styles["storybook-header"]}>
        <div>
          <Logo />
          <h1>PROJECT - OTUS</h1>
        </div>
        <div>
          <>
            <span className={styles.welcome}>
            </span>
            <Button size="small" label="Log out" onClick={() => alert('Привет Мир!')} />
          </>
        </div>
      </div>
    </header>
  );
};
