import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import Navbar from './Navbar';

const meta = {
  title: 'widgets/Navbar',
  component: Navbar,
} satisfies Meta<typeof Navbar>;

export default meta;
type Story = StoryObj<typeof Navbar>;

export const Light: Story = {
  decorators: [
    (Story) => StoreDecorator({})(Story),
  ],
};

export const Logout: Story = {
  decorators: [
    (Story) => StoreDecorator({
      user: {
        authData: {
          id: '1',
          username: '12',
        },
      },
    })(Story),
  ],
};

export const Dark: Story = {
  decorators: [
    (Story) => ThemeDecorator(Theme.DARK)(Story),
    (Story) => StoreDecorator({})(Story),
  ],
};
