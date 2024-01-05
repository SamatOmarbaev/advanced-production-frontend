import { LoginSchema } from '../types/LoginSchema';
import { loginActions, loginReducer } from './LoginSlice';

describe('LoginSlice.test', () => {
  test('test set username', () => {
    const state: DeepPartial<LoginSchema> = {
      username: 'admin',
    };
    expect(loginReducer(state as LoginSchema, loginActions.setUsername('admin'))).toEqual({ username: 'admin' });
  });
  test('test set password', () => {
    const state: DeepPartial<LoginSchema> = {
      password: '12345',
    };
    expect(loginReducer(state as LoginSchema, loginActions.setPassword('12345'))).toEqual({ password: '12345' });
  });
});
