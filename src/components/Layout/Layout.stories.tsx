import type { Meta, StoryObj } from '@storybook/react';
import Layout from './Layout';

const meta: Meta<typeof Layout> = {
  title: 'Курс обучения React - OTUS / Components / Layout',
  component: Layout,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof meta>

export const Default = {
  args: {
    label: 'Layout',
  },
};