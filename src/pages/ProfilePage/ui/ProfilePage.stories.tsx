import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import ProfilePage from './ProfilePage';

const meta = {
  title: 'pages/ProfilePage',
  component: ProfilePage,
} satisfies Meta<typeof ProfilePage>;

export default meta;
type Story = StoryObj<typeof ProfilePage>;

export const Light: Story = {
  decorators: [
    (Story) => StoreDecorator({})(Story),
  ],
};

export const Dark: Story = {
  decorators: [
    (Story) => ThemeDecorator(Theme.DARK)(Story),
    (Story) => StoreDecorator({})(Story),
  ],
};
