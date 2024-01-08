import { memo, useCallback } from 'react';
import { Select } from 'shared/ui/Select/Select';
import { useTranslation } from 'react-i18next';
import { Mods, classNames } from 'shared/lib/classNames/classNames';
import { Currency } from '../../model/types/currency';
import styles from './CurrencySelect.module.scss';

interface CurrencySelectProps {
    className?: string;
    readOnly?: boolean;
    value?: Currency;
    onChange?: (value: Currency) => void;
}

const options = [
  { value: Currency.RUB, content: Currency.RUB },
  { value: Currency.EUR, content: Currency.EUR },
  { value: Currency.USD, content: Currency.USD },
];

export const CurrencySelect = memo((props: CurrencySelectProps) => {
  const { t } = useTranslation('profile');
  const {
    className, readOnly, onChange, value,
  } = props;

  const onChangeHanlder = useCallback((value: string) => {
    onChange?.(value as Currency);
  }, [onChange]);

  const mods: Mods = {
    [styles.readOnly]: readOnly,
  };

  return (
    <Select
      className={classNames('', mods, [className])}
      label={t('Укажите валюту')}
      options={options}
      readOnly={readOnly}
      value={value}
      onChange={onChangeHanlder}
    />
  );
});
