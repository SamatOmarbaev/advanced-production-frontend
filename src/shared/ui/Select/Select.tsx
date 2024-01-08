import { classNames } from 'shared/lib/classNames/classNames';
import { ChangeEvent, memo, useMemo } from 'react';
import styles from './Select.module.scss';

interface SelectOptions {
    value: string;
    content: string;
}

interface SelectProps {
    className?: string;
    label?: string;
    value?: string;
    options?: SelectOptions[];
    onChange?: (value: string) => void;
    readOnly?: boolean
}

export const Select = memo((props: SelectProps) => {
  const {
    className, label, value, onChange, readOnly, options,
  } = props;

  const optionsList = useMemo(() => (
    options?.map((opt) => (
      <option
        className={styles.option}
        value={opt.value}
        key={opt.value}
      >
        {opt.content}
      </option>
    ))
  ), [options]);

  const onChangeHanlder = (e: ChangeEvent<HTMLSelectElement>) => {
    onChange?.(e.target.value);
  };

  return (
    <div className={classNames(styles.Wrapper, {}, [className])}>
      {label && (
        <span className={styles.label}>
          {`${label}>`}
        </span>
      )}
      <select
        value={value}
        onChange={onChangeHanlder}
        className={styles.Select}
        disabled={readOnly}
      >
        {optionsList}
      </select>
    </div>
  );
});
