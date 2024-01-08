import type { Meta, StoryObj } from '@storybook/react';
import { Select } from './Select';

const meta = {
  title: 'shared/Select',
  component: Select,
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof Select>;

export const Primary: Story = {
  args: {
    label: 'Укажите значение',
    options: [
      { value: '123', content: 'First' },
      { value: '1233', content: 'Second' },
      { value: '123434', content: 'Third' },
    ],
  },
};
