import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import Loader from './Loader';

const meta = {
  title: 'shared/Loader',
  component: Loader,
} satisfies Meta<typeof Loader>;

export default meta;
type Story = StoryObj<typeof Loader>;

export const LightLoader: Story = {};

export const DarkLoader: Story = {
  decorators: [
    (Story) => ThemeDecorator(Theme.DARK)(Story),
  ],
};
