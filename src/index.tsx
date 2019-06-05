import React, { ReactNode } from 'react';

interface IfBrowserProps {
  children: ReactNode
}

export const IfBrowser = ({ children }: IfBrowserProps) => 
  typeof window === 'undefined' 
  ? <></>
  : <>{children}</>;

export default IfBrowser;
