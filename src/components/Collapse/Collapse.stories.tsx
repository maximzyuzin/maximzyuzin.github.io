import type { Meta, StoryObj } from '@storybook/react';
import { Collapse } from './Collapse';

const meta: Meta<typeof Collapse> = {
  title: 'Курс обучения React - OTUS / Components / Collapse',
  component: Collapse,
};

export default meta;
type Story = StoryObj<typeof meta>

export const Default = {
  args: {
    children: 'Это компонент Collapse. Он принимает только opened и children. Это компонент Collapse. Он принимает только opened и children. Это компонент Collapse. Он принимает только opened и children. Это компонент Collapse. Он принимает только opened и children. Это компонент Collapse. Он принимает только opened и children. Это компонент Collapse. Он принимает только opened и children.',
    opened: true
  },
};
