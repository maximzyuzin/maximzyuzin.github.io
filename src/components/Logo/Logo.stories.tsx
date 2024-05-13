import type { Meta, StoryObj } from '@storybook/react';
import { Logo } from './Logo';


const meta: Meta<typeof Logo> = {
  title: 'Курс обучения React - OTUS / Components / Logo',
  component: Logo,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof meta>

export const Default = {
  args: {
    label: 'Logo',
  },
};