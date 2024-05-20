import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import ModalButton from './ModalButton';

export default {
  title: 'Курс обучения React - OTUS / Components / ModalButton',
  component: ModalButton,
  tags: ['autodocs'],
} as Meta;

const Template: StoryFn<{}> = () => <ModalButton />;

let isOpen = true

export const Default = Template.bind({});
Default.args = {

};
