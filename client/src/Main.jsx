import React from 'react';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import { Outlet } from 'react-router';
import SearchModal from './components/modal/SearchModal';

export default function Main() {

  return (
    <>
      <Header />
      <SearchModal />
      <Outlet />
      <Footer />
    </>
  );

}


