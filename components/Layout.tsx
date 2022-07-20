import React, { ReactNode } from 'react';
import { Header } from './';
type Props = {
  children: ReactNode | ReactNode[];
};

const Layout = ({ children }: Props): JSX.Element => {
  return (
    <div>
      <Header />
      {children}
    </div>
  );
};

export default Layout;
