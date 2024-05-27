import type { Meta, StoryObj } from '@storybook/react';
import { ButtonTheme } from './ButtonTheme';

const meta: Meta<typeof ButtonTheme> = {
  title: 'Курс обучения React - OTUS / Components / ButtonTheme',
  component: ButtonTheme,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>

export const Default = {
  args: {
    label: 'ButtonTheme',
  },
};
