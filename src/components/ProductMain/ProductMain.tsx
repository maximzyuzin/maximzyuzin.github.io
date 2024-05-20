import React, { FC } from 'react';
import styles from './ProductMain.module.scss';
import DeleteOutlineSharpIcon from '@mui/icons-material/DeleteOutlineSharp';

interface IProductMain {
  category?: string,
  title?: string,
  description?: string,
  imageLink?: string,
  price?: number,
}

export const ProductMain: FC<IProductMain> = ({ category, title, description, imageLink, price }) => {
  return (
    <section className={styles["storybook-page"]}>
      <h3>{category}</h3>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}><h2>{title}</h2>  <DeleteOutlineSharpIcon style={{ opacity: '0.2', padding: '5px' }} /></div>
      <br />
      <h1>{price + ' P'}</h1>
      <img height={'120px'} src={imageLink} />
      <p>
        <div style={{ backgroundColor: '#F5F7FF' }} dangerouslySetInnerHTML={{ __html: description }} />
      </p>
    </section>
  );
};
