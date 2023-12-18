import { Theme } from 'app/providers/ThemeProvider';
import React, { FC, ReactNode } from 'react';

interface ThemeDecoratorProps {
  children?: ReactNode
  theme?: Theme
}

export const ThemeDecorator: FC<ThemeDecoratorProps> = ({ children, theme }) => (
  <div className={`app ${theme}`}>
    {children}
  </div>
);
