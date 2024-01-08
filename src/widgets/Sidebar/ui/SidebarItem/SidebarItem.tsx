import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import AppLink, { AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { SidebarItemsType } from 'widgets/Sidebar/model/items';
import { memo } from 'react';
import { useSelector } from 'react-redux';
import { getAuthUserData } from 'entities/User';
import styles from './SidebarItem.module.scss';

interface SidebarItemsProps {
  item: SidebarItemsType;
  collapsed?: boolean;
}

export const SidebarItem = memo((props: SidebarItemsProps) => {
  const { item, collapsed } = props;
  const { t } = useTranslation();
  const isAuth = useSelector(getAuthUserData);

  if (item.authOnly && !isAuth) {
    return null;
  }

  return (
    <AppLink
      theme={AppLinkTheme.SECONDARY}
      className={classNames(styles.link, { [styles.collapsed]: collapsed })}
      to={item.path}
    >
      <item.Icon />
      <span className={styles.item}>
        {t(item.text)}
      </span>
    </AppLink>
  );
});
