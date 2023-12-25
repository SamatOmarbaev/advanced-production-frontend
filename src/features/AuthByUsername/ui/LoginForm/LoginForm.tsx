import { classNames } from 'shared/lib/classNames/classNames';
import { Input } from 'shared/ui/Input/Input';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { memo, useCallback } from 'react';
import { getLoginState } from 'features/AuthByUsername/model/selectors/getLoginState/getLoginState';
import Text, { TextTheme } from 'shared/ui/Text/Text';
import { ThunkDispatch } from '@reduxjs/toolkit';
import { loginByUsername } from '../../model/services/loginByUsername/loginByUsername';
import { loginActions } from '../../model/slice/LoginSlice';
import styles from './LoginForm.module.scss';

interface LoginFormProps {
  className?: string;
}

export const LoginForm = memo(({ className }: LoginFormProps) => {
  const { t } = useTranslation();
  const dispatch = useDispatch<ThunkDispatch<any, any, any>>();
  const {
    username, password, error, isLoading,
  } = useSelector(getLoginState);

  const onChangeUsername = useCallback((value: string) => {
    dispatch(loginActions.setUsername(value));
  }, [dispatch]);

  const onChangePassword = useCallback((value: string) => {
    dispatch(loginActions.setPassword(value));
  }, [dispatch]);

  const onLoginClick = useCallback(() => {
    dispatch(loginByUsername({ password, username }));
  }, [dispatch, password, username]);

  return (
    <form className={classNames(styles.LoginForm, {}, [className])}>
      <Text title={t('Форма авторизации')} />
      {error && <Text text={t('Вы ввели неправильный логин или пароль')} theme={TextTheme.ERROR} />}
      <Input
        className={styles.loginInput}
        placeholder={t('Введите ваше имя')}
        onChange={onChangeUsername}
        value={username}
      />
      <Input
        className={styles.loginInput}
        placeholder={t('Введите пароль')}
        onChange={onChangePassword}
        value={password}
      />
      <Button
        theme={ButtonTheme.OUTLINE}
        className={styles.loginBtn}
        onClick={onLoginClick}
        disabled={isLoading}
      >
        {t('Войти')}
      </Button>
    </form>
  );
});

export default LoginForm;
