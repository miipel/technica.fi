import React from 'react';
import Head from 'next/head';

const Layout = ({ children }: any) => {
  return (
    <div className="flex flex-col text-center">
      <div className="flex-expand flex flex-col items-center max-h-full">
        <div className="container mx-auto max-w-prose max-h-full">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Layout;