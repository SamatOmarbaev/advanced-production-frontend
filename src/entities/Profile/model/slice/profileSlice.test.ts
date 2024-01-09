import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { ProfileSchema, ValidateProfileErrors } from '../types/profile';
import { profileActions, profileReducer } from './profileSlice';
import { updateProfileData } from '../services/updateProfileData/updateProfileData';

const data = {
  username: 'admin',
  age: 24,
  country: Country.Russia,
  lastname: 'sam',
  first: 'kir',
  city: 'moscow',
  currency: Currency.RUB,
};

describe('profileSlice.test', () => {
  test('test setReadOnly', () => {
    const state: DeepPartial<ProfileSchema> = {
      readOnly: false,
    };
    expect(profileReducer(state as ProfileSchema, profileActions.setReadonly(true))).toEqual({ readOnly: true });
  });

  test('test cancelEdit', () => {
    const state: DeepPartial<ProfileSchema> = {
      data,
      form: {
        username: '',
      },
    };
    expect(profileReducer(state as ProfileSchema, profileActions.cancelEdit()))
      .toEqual({
        readOnly: true,
        validateErrors: undefined,
        data,
        form: data,
      });
  });

  test('test update profile', () => {
    const state: DeepPartial<ProfileSchema> = {
      form: {
        username: '1234',
      },
    };
    expect(profileReducer(state as ProfileSchema, profileActions.updateProfile({ username: '1234' })))
      .toEqual({
        form: {
          username: '1234',
        },
      });
  });

  test('test update profile service pending', () => {
    const state: DeepPartial<ProfileSchema> = {
      isLoading: false,
      validateErrors: [ValidateProfileErrors.SERVER_ERROR],
    };
    // @ts-ignore
    expect(profileReducer(state as ProfileSchema, updateProfileData.pending))
      .toEqual({
        isLoading: true,
        validateErrors: undefined,
      });
  });

  test('test update profile service fulfilled', () => {
    const state: DeepPartial<ProfileSchema> = {
      isLoading: true,
      validateErrors: [ValidateProfileErrors.SERVER_ERROR],
      readOnly: false,
    };
    expect(profileReducer(state as ProfileSchema, updateProfileData.fulfilled(data, '')))
      .toEqual({
        isLoading: false,
        validateError: undefined,
        readOnly: true,
        form: data,
        data,
      });
  });
});
