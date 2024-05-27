import React, { FC } from 'react';
import styles from './ProductCart.module.scss';
import DeleteOutlineSharpIcon from '@mui/icons-material/DeleteOutlineSharp';

export interface IProductCart {
  name: string,
  price: number,
  description?: string,
  image?: string,
};

export const ProductCart: FC<IProductCart> = ({ price, image, description, name }) => {
  return (
    <div className={styles.shortProductCard}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#F5F7FF' }} >
        <img height={'70px'} src={image} />
        <div ><h3>{name}</h3>  </div><div ><h3>{price + ' P'}</h3></div>
        <DeleteOutlineSharpIcon style={{ padding: '10px' }} />
      </div>
    </div>
  );
};
