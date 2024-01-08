import { Mods, classNames } from 'shared/lib/classNames/classNames';
import { memo, useMemo } from 'react';
import styles from './Avatar.module.scss';

interface AvatarProps {
    className?: string;
    src?: string;
    alt?: string;
    size?: number;
}

export const Avatar = memo((props: AvatarProps) => {
  const {
    className, src, alt, size,
  } = props;

  const mods: Mods = {};

  const style = useMemo(() => ({
    height: size || 100,
    width: size || 100,
  }), [size]);

  return (
    <img
      src={src}
      alt={alt}
      style={style}
      className={classNames(styles.Avatar, mods, [className])}
    />
  );
});
