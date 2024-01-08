import { classNames } from 'shared/lib/classNames/classNames';
import { memo, useCallback } from 'react';
import { Text } from 'shared/ui/Text/Text';
import { useTranslation } from 'react-i18next';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { useSelector } from 'react-redux';
import { getProfileReadOnly, profileActions, updateProfileData } from 'entities/Profile';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import styles from './ProfilePageHeader.module.scss';

interface ProfilePageHeaderProps {
  className?: string;
}

export const ProfilePageHeader = memo((props: ProfilePageHeaderProps) => {
  const { className } = props;
  const { t } = useTranslation('profile');
  const readOnly = useSelector(getProfileReadOnly);
  const dispatch = useAppDispatch();

  const onEdit = useCallback(() => {
    dispatch(profileActions.setReadonly(false));
  }, [dispatch]);

  const onCancelEdit = useCallback(() => {
    dispatch(profileActions.cancelEdit());
  }, [dispatch]);

  const onSaveEdit = useCallback(() => {
    dispatch(updateProfileData());
  }, [dispatch]);

  return (
    <div className={classNames(styles.ProfilePageHeader, {}, [className])}>
      <Text
        title={t('Профиль пользователя')}
        className={styles.text}
      />
      {readOnly
        ? (
          <Button
            theme={ButtonTheme.OUTLINE}
            className={styles.editBtn}
            onClick={onEdit}
          >
            {t('Редактировать')}
          </Button>
        )
        : (
          <>
            <Button
              theme={ButtonTheme.OUTLINE_RED}
              className={styles.editBtn}
              onClick={onCancelEdit}
            >
              {t('Отменить')}
            </Button>
            <Button
              theme={ButtonTheme.OUTLINE}
              className={styles.saveBtn}
              onClick={onSaveEdit}
            >
              {t('Сохранить')}
            </Button>
          </>
        )}
    </div>
  );
});
