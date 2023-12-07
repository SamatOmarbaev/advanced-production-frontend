import { FC } from "react";

import { classNames } from "shared/lib/classNames/classNames";
import AppLink, { AppLinkTheme } from "shared/ui/AppLink/AppLink";
import { ThemeSwitcher } from "widgets/ThemeSwitcher";

import styles from "./Navbar.module.scss";

interface NavbarProps {
  className?: string;
}

const Navbar: FC<NavbarProps> = ({ className }) => {
  return (
    <nav className={classNames(styles.Navbar, {}, [className])}>
      <ThemeSwitcher />
      <div className={classNames(styles.links, {}, [])}>
        <AppLink
          theme={AppLinkTheme.SECONDARY}
          className={styles.link}
          to={"/"}
        >
          Главная
        </AppLink>
        <AppLink
          theme={AppLinkTheme.SECONDARY}
          className={styles.link}
          to={"/about"}
        >
          О нас
        </AppLink>
      </div>
    </nav>
  );
};

export default Navbar;
