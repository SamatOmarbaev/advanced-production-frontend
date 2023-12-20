import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import AppLink, { AppLinkTheme } from './AppLink';

const meta = {
  title: 'shared/AppLink',
  component: AppLink,
  tags: ['autodocs'],
} satisfies Meta<typeof AppLink>;

export default meta;
type Story = StoryObj<typeof AppLink>;

export const PrimaryLight: Story = {
  args: {
    children: 'test',
  },
};
export const PrimaryDark: Story = {
  args: {
    children: 'test',
  },
  decorators: [
    (Story) => ThemeDecorator(Theme.DARK)(Story),
  ],
};

export const SecondaryLight: Story = {
  args: {
    children: 'test',
    theme: AppLinkTheme.SECONDARY,
  },
};

export const SecondaryDark: Story = {
  args: {
    children: 'test',
    theme: AppLinkTheme.SECONDARY,
  },
  decorators: [
    (Story) => ThemeDecorator(Theme.DARK)(Story),
  ],
};
