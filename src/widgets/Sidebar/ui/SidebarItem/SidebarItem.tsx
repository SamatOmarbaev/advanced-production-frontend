import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import AppLink, { AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { SidebarItemsType } from 'widgets/Sidebar/model/items';
import { memo } from 'react';
import styles from './SidebarItem.module.scss';

interface SidebarItemsProps {
  item: SidebarItemsType
  collapsed?: boolean
}

export const SidebarItem = memo(({ item, collapsed }: SidebarItemsProps) => {
  const { t } = useTranslation();

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
