import { classNames } from 'shared/lib/classNames/classNames';
import { Text, TextTheme } from 'shared/ui/Text/Text';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { Input } from 'shared/ui/Input/Input';
import { useSelector } from 'react-redux';
import { getProfileData } from '../../model/selectors/getProfileData/getProfileData';
import { getProfileError } from '../../model/selectors/getProfileError/getProfileError';
import { getProfileIsLoading } from '../../model/selectors/getProfileIsLoading/getProfileIsLoading';
import styles from './ProfileCard.module.scss';

export interface ProfileCardProps {
    className?: string
}

export const ProfileCard = memo(({ className }: ProfileCardProps) => {
  const { t } = useTranslation('profile');
  const data = useSelector(getProfileData);
  const error = useSelector(getProfileError);
  const isLoading = useSelector(getProfileIsLoading);

  return (
    <div className={classNames(styles.ProfileCard, {}, [className])}>
      <div className={styles.header}>
        <Text title={t('Профиль пользователя')} />
        <Button theme={ButtonTheme.OUTLINE}>
          {t('Редактировать')}
        </Button>
      </div>
      <div className={styles.data}>
        <div className={styles.inputFirst}>
          <Text
            text={t('Ваше имя')}
            theme={TextTheme.NORMAL}
            className={styles.textInput}
          />
          <Input
            value={data?.first}
            className={styles.input}
          />
        </div>
        <div className={styles.inputFirst}>
          <Text
            text={t('Ваша фамилия')}
            theme={TextTheme.NORMAL}
            className={styles.textInput}
          />
          <Input
            value={data?.lastname}
            className={styles.input}
          />
        </div>
      </div>
    </div>
  );
});
