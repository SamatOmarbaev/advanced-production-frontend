import { FC } from "react";

import { classNames } from "shared/lib/classNames/classNames";
import Button, { ButtonTheme } from "shared/ui/Button/Button";
import { Theme, useTheme } from "app/providers/ThemeProvider";
import LightTheme from "shared/assets/icons/Theme-light.svg";
import DarkTheme from "shared/assets/icons/Theme-dark.svg";

import styles from "./ThemeSwitcher.module.scss";

interface ThemeSwitcherProps {
  className?: string;
}

const ThemeSwitcher: FC<ThemeSwitcherProps> = ({ className }) => {
  const { theme, toggleTheme } = useTheme();
  return (
    <Button
      className={classNames(styles.ThemeSwitcher, {}, [className])}
      onClick={toggleTheme}
      theme={ButtonTheme.CLEAR}
    >
      {theme === Theme.DARK ? <DarkTheme /> : <LightTheme />}
    </Button>
  );
};

export default ThemeSwitcher;