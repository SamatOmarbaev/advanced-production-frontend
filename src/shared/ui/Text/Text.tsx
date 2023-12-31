import { Mods, classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import styles from './Text.module.scss';

export enum TextTheme {
  NORMAL = 'normal',
  ERROR = 'error'
}

export enum TextAlign {
  RIGHT = 'right',
  CENTER = 'center',
  LEFT = 'left'
}

interface TextProps {
  className?: string;
  title?: string;
  text?: string;
  theme?: TextTheme;
  align?: TextAlign;
  readOnly?: boolean;
}

export const Text = memo((props: TextProps) => {
  const {
    className, text, title, theme = TextTheme.NORMAL, align = TextAlign.LEFT, readOnly,
  } = props;

  const mods: Mods = {
    [styles[theme]]: true,
    [styles[align]]: true,
    [styles.readOnly]: readOnly,
  };

  return (
    <div className={classNames('', mods, [className])}>
      {title && <p className={styles.title}>{title}</p>}
      {text && <p className={styles.text}>{text}</p>}
    </div>
  );
});
