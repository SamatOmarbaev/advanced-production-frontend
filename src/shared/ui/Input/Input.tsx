import { classNames } from 'shared/lib/classNames/classNames';
import React, { InputHTMLAttributes, memo } from 'react';
import { Trans } from 'react-i18next';
import { log } from 'console';
import styles from './Input.module.scss';

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>

interface InputProps extends HTMLInputProps {
    className?: string;
    value?: string
    onChange?: (value: string) => void
}

export const Input = memo((props: InputProps) => {
  const {
    className, onChange, placeholder, value, ...otherProps
  } = props;

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(e.target.value);
  };

  return (
    <Trans translate={placeholder}>
      <input
        className={classNames(styles.Input, {}, [className])}
        value={value}
        onChange={onChangeHandler}
        placeholder={placeholder}
        {...otherProps}
      />
    </Trans>
  );
});
