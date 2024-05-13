
import React, { FC } from 'react';
import styles from './ProductShort.module.scss';
import DeleteOutlineSharpIcon from '@mui/icons-material/DeleteOutlineSharp';

export interface IProductShort {
  name: string,
  price: number,
  description: string,
  image?: string,
};

const trunscateString = (value: string, maxSize: number): string => {
  if (value.length <= maxSize) return value
  else return value.substring(0, maxSize - 3) + '...'
};

export const ProductShort: FC<IProductShort> = ({ price, image, description, name, ...props }) => {
  return (
    <div className={styles["short-product-card"]}>
      <div style={{ display: 'flex', justifyContent: 'space-between' }} >
        <img height={'70px'} src={image} /> <DeleteOutlineSharpIcon style={{ opacity: '0.4', padding: '5px' }} />
      </div>
      <div style={{ backgroundColor: '#F5F7FF' }}>
        <div style={{ display: 'flex', justifyContent: 'space-around' }}><h3>{name}</h3> <h3>{price + ' Р'}</h3></div>
        <div className={styles["info-container"]}>
          <div dangerouslySetInnerHTML={{ __html: trunscateString(description, 80) }} />
        </div>
      </div>
    </div>
  );
};
