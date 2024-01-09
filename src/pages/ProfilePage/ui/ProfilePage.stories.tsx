import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import AvatarImg from 'shared/assets/tests/StorybookAvatar.jpg';
import ProfilePage from './ProfilePage';

const meta = {
  title: 'pages/ProfilePage',
  component: ProfilePage,
} satisfies Meta<typeof ProfilePage>;

export default meta;
type Story = StoryObj<typeof ProfilePage>;

export const Light: Story = {
  args: {},
  decorators: [
    (Story) => StoreDecorator({
      profile: {
        form: {
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
    })(Story),
  ],
};

export const Dark: Story = {
  args: {},
  decorators: [
    (Story) => ThemeDecorator(Theme.DARK)(Story),
    (Story) => StoreDecorator({
      profile: {
        form: {
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
    })(Story),
  ],
};
