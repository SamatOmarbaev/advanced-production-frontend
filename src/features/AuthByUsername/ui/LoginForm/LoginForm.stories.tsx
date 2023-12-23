import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import LoginForm from './LoginForm';

const meta = {
  title: 'features/LoginForm',
  component: LoginForm,
} satisfies Meta<typeof LoginForm>;

export default meta;
type Story = StoryObj<typeof LoginForm>;

export const LoginFormNormal: Story = {
  args: {},
};

export const LoginFormDark: Story = {
  args: {},
  decorators: [
    (Story) => ThemeDecorator(Theme.DARK)(Story),
  ],
};
