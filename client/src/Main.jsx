import React, { Children } from 'react';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import { Outlet } from 'react-router';

export default function Main({ children }) {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}


