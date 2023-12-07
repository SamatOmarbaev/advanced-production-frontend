import { ButtonHTMLAttributes, FC } from "react";

import { classNames } from "shared/lib/classNames/classNames";

import styles from "./Button.module.scss";

export enum ButtonTheme {
  CLEAR = "clear",
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: ButtonTheme;
}

const Button: FC<ButtonProps> = (props) => {
  const { className, theme, children, ...restProps } = props;

  return (
    <button
      className={classNames(styles.Button, {}, [className, styles[theme]])}
      {...restProps}
    >
      {children}
    </button>
  );
};

export default Button;
