import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import ModalPortalButton from './ModalPortalButton';

export default {
  title: 'Курс обучения React - OTUS / Components / ModalPortalButton',
  component: ModalPortalButton,
} as Meta;

const Template: StoryFn<{}> = () => <ModalPortalButton />;

let isOpen = true;

export const Default = Template.bind({});
Default.args = {};
