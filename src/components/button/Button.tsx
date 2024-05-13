import React, { FC } from 'react';
import styles from './Button.module.scss';

interface IButton {
  label?: string,
  size?: 'small' | 'medium' | 'large',
  backgroundColor?: string,
  onClick?: () => void,
};

const Button: FC<IButton> = ({ label, size, backgroundColor = '#186ce9', onClick, ...props }) => {
  const buttonClass: string = styles.button;
  const buttonSize: string = styles[size];

  const onClickDefault = () => {
    alert('Привет Мир!');
  };

  return (
    <div>
      <button
        type="button"
        style={{ backgroundColor }}
        className={[buttonClass, buttonSize].join(' ')}
        onClick={onClick ? onClick : onClickDefault}
        {...props}>
        {label}
      </button>
    </div >
  );
};

export default Button;
