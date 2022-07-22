import React, { ReactNode } from 'react';
import { Header, Footer } from './';
type Props = {
  children: ReactNode | ReactNode[];
};

const Layout = ({ children }: Props): JSX.Element => {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
