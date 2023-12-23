import { classNames } from 'shared/lib/classNames/classNames';
import { Input } from 'shared/ui/Input/Input';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { useTranslation } from 'react-i18next';
import styles from './LoginForm.module.scss';

interface LoginFormProps {
    className?: string;
}

export const LoginForm = ({ className }: LoginFormProps) => {
  const { t } = useTranslation();

  return (
    <form className={classNames(styles.LoginForm, {}, [className])}>
      <Input
        className={styles.loginInput}
        placeholder={t('Введите ваше имя')}
      />
      <Input
        className={styles.loginInput}
        placeholder={t('Введите пароль')}
      />
      <Button
        theme={ButtonTheme.OUTLINE}
        className={styles.loginBtn}
      >
        {t('Войти')}
      </Button>
    </form>
  );
};

export default LoginForm;
