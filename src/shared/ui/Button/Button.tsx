import { memo, type ButtonHTMLAttributes } from 'react';
import { Mods, classNames } from 'shared/lib/classNames/classNames';
import styles from './Button.module.scss';

export enum ButtonTheme {
  CLEAR = 'clear',
  CLEAR_INVERTED = 'clearInverted',
  OUTLINE = 'outline',
  BACKGROUND = 'background',
  BACKGROUND_INVERTED = 'backgroundInverted'
}

export enum ButtonSize {
  M = 'size_m',
  L = 'size_l',
  XL = 'size_xl',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string
  theme?: ButtonTheme
  square?: boolean
  size?: ButtonSize
  disabled?: boolean
}

export const Button = memo((props: ButtonProps) => {
  const {
    className, theme = ButtonTheme.OUTLINE, children, square, disabled, size = ButtonSize.M, ...restProps
  } = props;

  const mods: Mods = {
    [styles.square]: square,
    [styles[size]]: true,
    [styles.disabled]: disabled,
  };

  return (
    <button
      className={classNames(styles.Button, mods, [className, styles[theme]])}
      type="button"
      disabled={disabled}
      {...restProps}
    >
      {children}
    </button>
  );
});
