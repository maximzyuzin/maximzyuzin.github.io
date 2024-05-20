
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
    <div className={styles.shortProductCard}>
      <div className={styles.imageContainer}>
        <img className={styles.image} src={image} /> <DeleteOutlineSharpIcon className={styles.buttonIcon} />
      </div>
      <div className={styles.infoContainer}>
        <div className={styles.description}><h3>{name}</h3> <h3>{price + ' Р'}</h3></div>
        <div className={styles.description}>
          <div dangerouslySetInnerHTML={{ __html: trunscateString(description, 80) }} />
        </div>
      </div>
    </div >
  );
};
