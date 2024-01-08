import { memo, useCallback } from 'react';
import { Select } from 'shared/ui/Select/Select';
import { useTranslation } from 'react-i18next';
import { Mods, classNames } from 'shared/lib/classNames/classNames';
import { Country } from '../../model/types/country';
import styles from './CountrySelect.module.scss';

interface CounrtySelectProps {
    className?: string;
    readOnly?: boolean;
    value?: Country;
    onChange?: (value: Country) => void;
}

const options = [
  { value: Country.Russia, content: Country.Russia },
  { value: Country.Kazakhstan, content: Country.Kazakhstan },
  { value: Country.Armenia, content: Country.Armenia },
  { value: Country.Belarus, content: Country.Belarus },
];

export const CountrySelect = memo((props: CounrtySelectProps) => {
  const { t } = useTranslation('profile');
  const {
    className, readOnly, onChange, value,
  } = props;

  const onChangeHanlder = useCallback((value: string) => {
    onChange?.(value as Country);
  }, [onChange]);

  const mods: Mods = {
    [styles.readOnly]: readOnly,
  };

  return (
    <Select
      className={classNames('', mods, [className])}
      label={t('Укажите страну')}
      options={options}
      readOnly={readOnly}
      value={value}
      onChange={onChangeHanlder}
    />
  );
});
