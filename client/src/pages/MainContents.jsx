import React, { Children } from 'react';
import { ScrollRestoration } from 'react-router-dom';

export default function MainContents({ children }) {
  return (
    <>
      <main>
        <ScrollRestoration/>
        {children}
      </main>
    </>
  );
}

