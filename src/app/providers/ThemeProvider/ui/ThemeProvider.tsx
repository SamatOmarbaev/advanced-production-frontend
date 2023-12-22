import React, {
  type FC, useMemo, useState, useEffect,
} from 'react';

import {
  LOCAL_STORAGE_THEME_KEY,
  Theme,
  ThemeContext,
} from '../lib/ThemeContext';

interface ThemeProviderProps {
  children: React.ReactNode
  inititalTheme?: Theme
}

const defaultTheme = (localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme) || Theme.LIGHT;

const ThemeProvider: FC<ThemeProviderProps> = ({ children, inititalTheme }) => {
  const [theme, setTheme] = useState<Theme>(inititalTheme || defaultTheme);

  const defaultProps = useMemo(
    () => ({
      theme,
      setTheme,
    }),
    [theme],
  );

  useEffect(() => {
    document.body.classList.add(defaultTheme);

    return () => {
      document.body.classList.remove(defaultTheme);
    };
  }, []);

  return (
    <ThemeContext.Provider value={defaultProps}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
