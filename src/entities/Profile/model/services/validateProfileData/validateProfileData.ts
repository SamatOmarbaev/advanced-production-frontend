import { Profile, ValidateProfileErrors } from '../../types/profile';

export const validateProfileData = (profile?: Profile) => {
  if (!profile) {
    return [ValidateProfileErrors.NO_DATA];
  }
  const {
    first, lastname, age, country, username,
  } = profile;
  const errors: ValidateProfileErrors[] = [];

  if (!first || !lastname) {
    errors.push(ValidateProfileErrors.INCORRECT_USER_DATA);
  }

  if (!age || !Number.isInteger(age)) {
    errors.push(ValidateProfileErrors.INCORRECT_AGE);
  }

  if (!country) {
    errors.push(ValidateProfileErrors.INCORRECT_COUNTRY);
  }

  if (!username) {
    errors.push(ValidateProfileErrors.INCORRECT_USERNAME);
  }

  return errors;
};
