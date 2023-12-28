import React, { Children } from 'react';

export default function MainContents({ children }) {
  return (
    <>
      <main>
        {children}
      </main>
    </>
  );
}

