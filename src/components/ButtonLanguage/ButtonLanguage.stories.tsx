import type { Meta, StoryObj } from '@storybook/react';
import { ButtonLanguage } from './ButtonLanguage';


const meta: Meta<typeof ButtonLanguage> = {
  title: 'Курс обучения React - OTUS / Components / ButtonLanguage',
  component: ButtonLanguage,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default = {
  args: {
    label: 'ButtonLanguage',
  },
};
