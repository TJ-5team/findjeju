import React, { Children } from 'react';

export default function Main({ children }) {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}


