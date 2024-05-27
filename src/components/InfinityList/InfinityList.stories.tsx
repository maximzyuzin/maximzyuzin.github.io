import type { Meta, StoryObj } from '@storybook/react';
import { InfinityListParent } from './InfinityListParent';

const meta: Meta<typeof InfinityListParent> = {
  title: 'Курс обучения React - OTUS / Components / InfinityList',
  component: InfinityListParent
};

export default meta;
type Story = StoryObj<typeof meta>

export const Default = {
  args: {
    itemHeight: 20,
  }
};
