import React, { FC, ReactNode } from 'react';
import { BrowserRouter } from 'react-router-dom';

interface RouterDecoratorProps {
    children?: ReactNode
}

export const RouterDecorator: FC<RouterDecoratorProps> = ({ children }) => (
  <BrowserRouter>
    {children}
  </BrowserRouter>
);
