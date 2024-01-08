import { Mods, classNames } from 'shared/lib/classNames/classNames';
import React, { InputHTMLAttributes, memo } from 'react';
import { Trans } from 'react-i18next';
import styles from './Input.module.scss';

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange' | 'readOnly'>

interface InputProps extends HTMLInputProps {
  className?: string;
  value?: string | number;
  onChange?: (value: string) => void;
  readOnly?: boolean;
}

export const Input = memo((props: InputProps) => {
  const {
    className, onChange, placeholder, value, readOnly, ...otherProps
  } = props;

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(e.target.value);
  };

  const mods: Mods = {
    [styles.readOnly]: readOnly,
  };

  return (
    <Trans translate={placeholder}>
      <input
        className={classNames(styles.Input, mods, [className])}
        value={value}
        onChange={onChangeHandler}
        placeholder={placeholder}
        readOnly={readOnly}
        {...otherProps}
      />
    </Trans>
  );
});
