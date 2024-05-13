import type { Meta, StoryObj } from '@storybook/react';
import { ProductCart } from './ProductCart';

const meta: Meta<typeof ProductCart> = {
  title: 'Курс обучения React - OTUS / Components / ProductCart',
  component: ProductCart,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default = {
  args: {
    name: 'Товар №1',
    price: 77777,
    image: 'https://img2.freepng.ru/20180806/siu/kisspng-laptop-asus-zenbook-3-intel-core-i5-cebrac-5b67cb65470759.909331961533528933291.jpg',
  },
};
