import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import Text, { TextTheme } from './Text';

const meta = {
  title: 'shared/Text',
  component: Text,
} satisfies Meta<typeof Text>;

export default meta;
type Story = StoryObj<typeof Text>;

export const Primary: Story = {
  args: {
    title: 'test test test',
    text: 'description description description',
  },
};

export const OnlyTitle: Story = {
  args: {
    title: 'test test test',
  },
};

export const OnlyText: Story = {
  args: {
    text: 'description description description',
  },
};

export const PrimaryDark: Story = {
  args: {
    title: 'test test test',
    text: 'description description description',
  },
  decorators: [
    (Story) => ThemeDecorator(Theme.DARK)(Story),
  ],
};

export const OnlyTitleDark: Story = {
  args: {
    title: 'test test test',
  },
  decorators: [
    (Story) => ThemeDecorator(Theme.DARK)(Story),
  ],
};

export const OnlyTextDark: Story = {
  args: {
    text: 'description description description',
  },
  decorators: [
    (Story) => ThemeDecorator(Theme.DARK)(Story),
  ],
};

export const Error: Story = {
  args: {
    title: 'test test test',
    text: 'description description description',
    theme: TextTheme.ERROR,
  },
};
