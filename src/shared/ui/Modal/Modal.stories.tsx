import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Modal } from './Modal';

const meta = {
  title: 'shared/Modal',
  component: Modal,
} satisfies Meta<typeof Modal>;

export default meta;
type Story = StoryObj<typeof Modal>;

export const ModalNormal: Story = {
  args: {
    container: document.getElementById('root'),
    isOpen: true,
    children: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum reiciendis repellat nostrum minima quo alias quibusdam repudiandae earum neque odit saepe autem laborum magni, accusantium consequatur. Obcaecati, quaerat distinctio debitis aliquid, eligendi atque odio vero accusantium natus saepe ratione officia aspernatur aut minima id magni suscipit?',
  },
};

export const ModalDark: Story = {
  args: {
    container: document.getElementById('root'),
    isOpen: true,
    children: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum reiciendis repellat nostrum minima quo alias quibusdam repudiandae earum neque odit saepe autem laborum magni, accusantium consequatur. Obcaecati, quaerat distinctio debitis aliquid, eligendi atque odio vero accusantium natus saepe ratione officia aspernatur aut minima id magni suscipit?',
  },
  decorators: [
    (Story) => ThemeDecorator(Theme.DARK)(Story),
  ],
};
