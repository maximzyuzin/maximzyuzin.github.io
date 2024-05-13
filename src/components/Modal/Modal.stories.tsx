import React, { useState } from 'react';
import { Meta, StoryObj } from '@storybook/react';
import Modal, { IModal } from './Modal';
import Button from '../Button/Button';

const meta: Meta<typeof Modal> = {
  title: 'Курс обучения React - OTUS / Components / Modal',
  component: Modal,
  tags: ['autodocs'],
  argTypes: {
    visible: { control: 'boolean' },
    onClose: { action: 'onClose' },
    children: { control: 'text' },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: StoryObj<IModal> = (args: IModal) => {
  const [visible, setVisible] = useState(args.visible);

  return (
    <div style={{ display: 'flex', position: 'relative', height: '600px', alignItems: 'center', justifyContent: 'center' }}>
      <Button size='medium' onClick={() => setVisible(true)} label='Открыть Modal' />
      <Modal {...args} visible={visible} onClose={() => setVisible(false)} />
    </div>
  );
};

Default.args = {
  visible: false,
  children: 'Я модальное окно',
};
