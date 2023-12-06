import { Link, LinkProps } from "react-router-dom";
import { classNames } from "shared/lib/classNames/classNames";

import styles from "./Navbar.module.scss";
import { FC } from "react";
import AppLink, { AppLinkTheme } from "shared/ui/AppLink/AppLink";

interface NavbarProps {
  className?: string;
}

const Navbar: FC<NavbarProps> = ({ className }) => {
  return (
    <nav className={classNames(styles.Navbar, {}, [className])}>
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
