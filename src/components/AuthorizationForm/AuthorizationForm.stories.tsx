import type { Meta, StoryObj } from '@storybook/react';
import { AuthorizationForm } from './AuthorizationForm';

const meta: Meta<typeof AuthorizationForm> = {
  title: 'Курс обучения React - OTUS / Components / AuthorizationForm',
  component: AuthorizationForm,
};

export default meta;
type Story = StoryObj<typeof meta>

export const Default = {
  args: {},
};
