import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { validateProfileData } from './validateProfileData';
import { ValidateProfileErrors } from '../../types/profile';

const data = {
  username: 'admin',
  age: 24,
  country: Country.Russia,
  lastname: 'sam',
  first: 'kir',
  city: 'moscow',
  currency: Currency.RUB,
};

describe('loginByUsername.test', () => {
  test('success', async () => {
    const result = validateProfileData(data);

    expect(result).toEqual([]);
  });

  test('without first and last name', async () => {
    const result = validateProfileData({ ...data, first: '', lastname: '' });

    expect(result).toEqual([
      ValidateProfileErrors.INCORRECT_USER_DATA,
    ]);
  });

  test('incorrect age', async () => {
    const result = validateProfileData({ ...data, age: undefined });

    expect(result).toEqual([
      ValidateProfileErrors.INCORRECT_AGE,
    ]);
  });

  test('incorrect country', async () => {
    const result = validateProfileData({ ...data, country: undefined });

    expect(result).toEqual([
      ValidateProfileErrors.INCORRECT_COUNTRY,
    ]);
  });

  test('incorrect all', async () => {
    const result = validateProfileData({});

    expect(result).toEqual([
      ValidateProfileErrors.INCORRECT_USER_DATA,
      ValidateProfileErrors.INCORRECT_AGE,
      ValidateProfileErrors.INCORRECT_COUNTRY,
      ValidateProfileErrors.INCORRECT_USERNAME,
    ]);
  });

  test('incorrect username', async () => {
    const result = validateProfileData({ ...data, username: '' });

    expect(result).toEqual([
      ValidateProfileErrors.INCORRECT_USERNAME,
    ]);
  });
});
