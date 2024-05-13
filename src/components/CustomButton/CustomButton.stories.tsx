import type { Meta, StoryObj } from '@storybook/react';
import CustomButton from './CustomButton';

const meta: Meta<typeof CustomButton> = {
  title: 'Курс обучения React - OTUS / Components / CustomButton',
  component: CustomButton,
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default = {
  args: {
    label: 'Нажми меня',
    size: 'medium',
  },
};
