import React from 'react';
import { BackSubHeader } from './BackSubHeader';

interface LayoutProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  showBackHeader?: boolean;
  backTo?: string;
  className?: string;
}

const Layout = ({ children, showBackHeader = true, backTo = "/", className = "", ...props }: LayoutProps) => {
  return (
    <main className={className} {...props}>
        {showBackHeader && <BackSubHeader backTo={backTo} />}
        {children}
    </main>
  );
};

export default Layout;