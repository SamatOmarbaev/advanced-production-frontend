import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Input } from './Input';

const meta = {
  title: 'shared/Input',
  component: Input,
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof Input>;

export const InputNormal: Story = {
  args: {
    value: '123123', placeholder: 'type text',
  },
};

export const InputDark: Story = {
  args: {
    value: '123123',
    placeholder: 'type text',
  },
  decorators: [
    (Story) => ThemeDecorator(Theme.DARK)(Story),
  ],
};
