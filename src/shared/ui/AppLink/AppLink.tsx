import { memo } from 'react';
import { Link, type LinkProps } from 'react-router-dom';

import { classNames } from 'shared/lib/classNames/classNames';

import styles from './AppLink.module.scss';

export enum AppLinkTheme {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
}

interface AppLinkProps extends LinkProps {
  className?: string
  theme?: AppLinkTheme
}

const AppLink = memo((props: AppLinkProps) => {
  const {
    to,
    className,
    theme = AppLinkTheme.PRIMARY,
    children,
    ...restProps
  } = props;

  return (
    <Link
      to={to}
      className={classNames(styles.appLink, {}, [className, styles[theme]])}
      {...restProps}
    >
      {children}
    </Link>
  );
});

export default AppLink;
