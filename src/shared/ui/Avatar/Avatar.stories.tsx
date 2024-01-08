import type { Meta, StoryObj } from '@storybook/react';
import { Avatar } from './Avatar';
import AvatarImg from './StorybookAvatar.jpg';

const meta = {
  title: 'shared/Avatar',
  component: Avatar,
} satisfies Meta<typeof Avatar>;

export default meta;
type Story = StoryObj<typeof Avatar>;

export const Primary: Story = {
  args: {
    size: 150,
    src: AvatarImg,
  },
};

export const Smal: Story = {
  args: {
    size: 50,
    src: AvatarImg,
  },
};
