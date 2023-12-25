import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Button, ButtonSize, ButtonTheme } from './Button';

const meta = {
  title: 'shared/Button',
  component: Button,
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    children: 'test',
  },
};

export const Clear: Story = {
  args: {
    children: 'test',
    theme: ButtonTheme.CLEAR,
  },
};

export const ClearInverted: Story = {
  args: {
    children: 'test',
    theme: ButtonTheme.CLEAR_INVERTED,
  },
};

export const Outline: Story = {
  args: {
    children: 'test',
    theme: ButtonTheme.OUTLINE,
  },
};

export const OutlineSizeL: Story = {
  args: {
    children: 'test',
    theme: ButtonTheme.OUTLINE,
    size: ButtonSize.L,
  },
};

export const OutlineSizeXL: Story = {
  args: {
    children: 'test',
    theme: ButtonTheme.OUTLINE,
    size: ButtonSize.XL,
  },
};

export const OutlineDark: Story = {
  args: {
    children: 'test',
    theme: ButtonTheme.OUTLINE,
  },
  decorators: [
    (Story) => ThemeDecorator(Theme.DARK)(Story),
  ],
};

export const Background: Story = {
  args: {
    children: '>',
    theme: ButtonTheme.BACKGROUND,
  },
};

export const BackgroundInverted: Story = {
  args: {
    children: '>',
    theme: ButtonTheme.BACKGROUND_INVERTED,
  },
};

export const Square: Story = {
  args: {
    children: '>',
    theme: ButtonTheme.BACKGROUND_INVERTED,
    square: true,
  },
};
export const SquareL: Story = {
  args: {
    children: '>',
    theme: ButtonTheme.BACKGROUND_INVERTED,
    square: true,
    size: ButtonSize.L,
  },
};
export const SquareXL: Story = {
  args: {
    children: '>',
    theme: ButtonTheme.BACKGROUND_INVERTED,
    square: true,
    size: ButtonSize.XL,
  },
};

export const Disabled: Story = {
  args: {
    children: 'test',
    theme: ButtonTheme.OUTLINE,
    disabled: true,
  },
};
