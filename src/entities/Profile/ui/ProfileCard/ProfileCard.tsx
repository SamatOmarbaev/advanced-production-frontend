import { Mods, classNames } from 'shared/lib/classNames/classNames';
import { Text, TextAlign, TextTheme } from 'shared/ui/Text/Text';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { Input } from 'shared/ui/Input/Input';
import Loader from 'shared/ui/Loader/Loader';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { Currency, CurrencySelect } from 'entities/Currency';
import { Country, CountrySelect } from 'entities/Country';
import { Profile } from '../../model/types/profile';
import styles from './ProfileCard.module.scss';

export interface ProfileCardProps {
  className?: string;
  data?: Profile;
  isLoading?: boolean;
  error?: string;
  readOnly?: boolean;
  onChangeFirstName?: (value?: string) => void;
  onChangeLastName?: (value?: string) => void;
  onChangeAge?: (value?: string) => void;
  onChangeUsername?: (value?: string) => void;
  onChangeCity?: (value?: string) => void;
  onChangeAvatar?: (value?: string) => void;
  onChangeCurrency?: (currency: Currency) => void;
  onChangeCountry?: (country: Country) => void;
}

export const ProfileCard = memo((props: ProfileCardProps) => {
  const {
    className, data, isLoading, error, readOnly,
    onChangeFirstName, onChangeLastName, onChangeAge,
    onChangeCity, onChangeUsername, onChangeAvatar, onChangeCurrency,
    onChangeCountry,
  } = props;
  const { t } = useTranslation('profile');

  if (isLoading) {
    return (
      <div className={classNames(styles.ProfileCard, { [styles.loading]: true }, [className])}>
        <Loader />
      </div>
    );
  }

  if (error) {
    return (
      <div className={classNames(styles.ProfileCard, {}, [className, styles.error])}>
        <Text
          title={t('Произошла ошибка при загрузке профиля')}
          text={t('Попробуйте обновить страницу')}
          theme={TextTheme.ERROR}
          align={TextAlign.CENTER}
        />
      </div>
    );
  }

  const mods: Mods = {
    [styles.editing]: !readOnly,
  };

  return (
    <div className={classNames(styles.ProfileCard, mods, [className])}>
      <div className={styles.data}>
        {data?.avatar && (
          <div className={styles.avatarWrapper}>
            <Avatar src={data?.avatar} />
          </div>
        )}
        <div className={styles.inputFirst}>
          <Text
            text={t('Ваше имя')}
            theme={TextTheme.NORMAL}
            className={styles.textInput}
            readOnly={readOnly}
          />
          <Input
            value={data?.first}
            onChange={onChangeFirstName}
            className={styles.input}
            readOnly={readOnly}
          />
        </div>
        <div className={styles.inputFirst}>
          <Text
            text={t('Ваша фамилия')}
            theme={TextTheme.NORMAL}
            className={styles.textInput}
            readOnly={readOnly}
          />
          <Input
            value={data?.lastname}
            onChange={onChangeLastName}
            className={styles.input}
            readOnly={readOnly}
          />
        </div>
        <div className={styles.inputFirst}>
          <Text
            text={t('Ваш возраст')}
            theme={TextTheme.NORMAL}
            className={styles.textInput}
            readOnly={readOnly}
          />
          <Input
            value={data?.age}
            onChange={onChangeAge}
            className={styles.input}
            readOnly={readOnly}
          />
        </div>
        <div className={styles.inputFirst}>
          <Text
            text={t('Ваш город')}
            theme={TextTheme.NORMAL}
            className={styles.textInput}
            readOnly={readOnly}
          />
          <Input
            value={data?.city}
            onChange={onChangeCity}
            className={styles.input}
            readOnly={readOnly}
          />
        </div>
        <div className={styles.inputFirst}>
          <Text
            text={t('Введите имя пользователя')}
            theme={TextTheme.NORMAL}
            className={styles.textInput}
            readOnly={readOnly}
          />
          <Input
            value={data?.username}
            onChange={onChangeUsername}
            className={styles.input}
            readOnly={readOnly}
          />
        </div>
        <div className={styles.inputFirst}>
          <Text
            text={t('Введите ссылку на аватар')}
            theme={TextTheme.NORMAL}
            className={styles.textInput}
            readOnly={readOnly}
          />
          <Input
            value={data?.avatar}
            onChange={onChangeAvatar}
            className={styles.input}
            readOnly={readOnly}
          />
        </div>
        <CurrencySelect
          value={data?.currency}
          readOnly={readOnly}
          onChange={onChangeCurrency}
        />
        <CountrySelect
          value={data?.country}
          readOnly={readOnly}
          onChange={onChangeCountry}
        />
      </div>
    </div>
  );
});
