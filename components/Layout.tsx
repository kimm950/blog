import React, { ReactNode } from 'react';
import { Header } from './';
type Props = {
  children: ReactNode | ReactNode[];
};

const Layout = ({ children }: Props) => {
  return (
    <div>
      <Header />
      {children}
    </div>
  );
};

export default Layout;
