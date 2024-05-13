import type { Meta, StoryObj } from '@storybook/react';
import { ProductMain } from './ProductMain';

const meta: Meta<typeof ProductMain> = {
  title: 'Курс обучения React - OTUS / Components / ProductMain',
  component: ProductMain,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default = {
  args: {
    category: 'Техника',
    title: 'Товар №1',
    description: '&bull; Intel Core i7-10700F <br>&bull; Intel H410 <br>&bull; WHITE <br>&bull; NVIDIA MSI GeForce RTX 2060 SUPER 8GB AERO ITX GDDR6 <br>&bull; SO-DIMM 16GB (16GB x 1) DDR4 2666MHz <br>&bull; 2 total slots (64GB Max) <br>&bull; 512GB (1 x 512GB) M.2 NVMe PCIe GEN3x4 SSD 2TB (2.5) 5400RPM <br>&bull; Gaming Keyboard GK30 + Gaming Mouse GM11 <br>&bull; 3.5 HDD (0/0), 2.5 HDD/SSD(1/0), M.2 (1/0) <br>&bull; Intel WGI219Vethernet (10/100/1000M) <br>&bull; AX200 (WIFI 6)+BT5.1 <br>&bull; PSU 330W <br>&bull; Fan Coole',
    imageLink: 'https://img2.freepng.ru/20180806/siu/kisspng-laptop-asus-zenbook-3-intel-core-i5-cebrac-5b67cb65470759.909331961533528933291.jpg',
    price: 77777,
  },
};
