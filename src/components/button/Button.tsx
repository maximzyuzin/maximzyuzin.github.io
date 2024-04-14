import React, { FC } from 'react';
import styles from './Button.module.scss';

interface ButtonProps {
  label: string,
  size: 'small' | 'medium' | 'large';
  backgroundColor?: string;
}

export const Button: FC<ButtonProps> = ({ label, size, backgroundColor = '#186ce9', ...props }) => {
  const buttonClass: string = styles.button;
  const buttonSize: string = styles[size];

  const onClick = () => {
    alert('Привет Мир!');
  };

  return (
    <div>
      <button type="button" style={{ backgroundColor }} className={[buttonClass, buttonSize].join(' ')} onClick={onClick} {...props}>
        {label}
      </button>
    </div >
  );
};
