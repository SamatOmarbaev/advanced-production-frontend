import type { Meta, StoryObj } from '@storybook/react';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import AvatarImg from 'shared/assets/tests/StorybookAvatar.jpg';
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { ProfileCard } from './ProfileCard';

const meta = {
  title: 'entities/ProfileCard',
  component: ProfileCard,
} satisfies Meta<typeof ProfileCard>;

export default meta;
type Story = StoryObj<typeof ProfileCard>;

export const LoginFormNormal: Story = {
  args: {
    data: {
      avatar: AvatarImg,
      username: 'admin',
      age: 24,
      country: Country.Russia,
      lastname: 'sam',
      first: 'kir',
      city: 'moscow',
      currency: Currency.RUB,
    },
  },
  decorators: [
    (Story) => StoreDecorator({})(Story),
  ],
};

export const WithError: Story = {
  args: {
    error: 'true',
  },
  decorators: [
    (Story) => StoreDecorator({})(Story),
  ],
};

export const Loading: Story = {
  args: {
    isLoading: true,
  },
  decorators: [
    (Story) => StoreDecorator({})(Story),
  ],
};
