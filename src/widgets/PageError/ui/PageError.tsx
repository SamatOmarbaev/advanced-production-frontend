import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import styles from './PageError.module.scss';

interface PageErrorProps {
    className?: string
}

const PageError = ({ className }: PageErrorProps) => {
  const { t } = useTranslation();

  const reloadPage = () => {
    window.location.reload();
  };

  return (
    <div className={classNames(styles.PageError, {}, [className])}>
      <p>{t('Произошла непредвиденная ошибка')}</p>
      <button onClick={reloadPage} type="button">
        {t('Перезагрузить страницу')}
      </button>
    </div>
  );
};

export default PageError;
