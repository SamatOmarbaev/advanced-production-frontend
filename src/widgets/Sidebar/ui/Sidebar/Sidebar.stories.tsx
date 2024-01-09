import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { Sidebar } from './Sidebar';

const meta = {
  title: 'widgets/Sidebar',
  component: Sidebar,
} satisfies Meta<typeof Sidebar>;

export default meta;
type Story = StoryObj<typeof Sidebar>;

export const Light: Story = {
  decorators: [
    (Story) => StoreDecorator({ user: { authData: {} } })(Story),
  ],
};

export const Dark: Story = {
  decorators: [
    (Story) => ThemeDecorator(Theme.DARK)(Story),
    (Story) => StoreDecorator({ user: { authData: {} } })(Story),
  ],
};

export const NoAuth: Story = {
  decorators: [
    (Story) => StoreDecorator({})(Story),
  ],
};
