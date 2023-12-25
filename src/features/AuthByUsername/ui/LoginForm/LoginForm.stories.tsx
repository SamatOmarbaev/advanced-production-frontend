import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import LoginForm from './LoginForm';

const meta = {
  title: 'features/LoginForm',
  component: LoginForm,
} satisfies Meta<typeof LoginForm>;

export default meta;
type Story = StoryObj<typeof LoginForm>;

export const LoginFormNormal: Story = {
  args: {},
  decorators: [
    (Story) => StoreDecorator({})(Story),
  ],
};

export const LoginFormDark: Story = {
  args: {},
  decorators: [
    (Story) => ThemeDecorator(Theme.DARK)(Story),
    (Story) => StoreDecorator({
      loginForm: {
        password: 'das',
        username: 'sdasd',
        isLoading: false,
        error: '',
      },
    })(Story),
  ],
};

export const WithError: Story = {
  args: {},
  decorators: [
    (Story) => StoreDecorator({
      loginForm: {
        username: 'admn',
        password: '123',
        error: 'Вы ввели неправильный логин или пароль',
        isLoading: true,
      },
    })(Story),
  ],
};

export const Loading: Story = {
  args: {},
  decorators: [
    (Story) => StoreDecorator({
      loginForm: {
        password: 'das',
        username: 'sdasd',
        isLoading: true,
        error: '',
      },
    })(Story),
  ],
};
