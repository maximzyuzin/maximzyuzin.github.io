import type { Meta, StoryObj } from '@storybook/react';
import { ProductCartIcon } from './ProductCartIcon';

const meta: Meta<typeof ProductCartIcon> = {
  title: 'Курс обучения React - OTUS / Components / ProductCartIcon',
  component: ProductCartIcon,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof meta>

export const Default = {
  args: {
    count: 0,
  },
};
