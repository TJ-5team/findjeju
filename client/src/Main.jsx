import React, { useEffect } from 'react';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import { Outlet } from 'react-router';
import SearchModal from './components/modal/SearchModal';
import { useDispatch } from 'react-redux';
import { UserData } from './api/userApi';
import { getUser } from './utils/localStorage';

export default function Main() {

  const userInfo = getUser();
  const dispatch = useDispatch();


  useEffect(() => {

    if (userInfo.id !== '') {

      dispatch(UserData(userInfo));

    }

  }, []);



  return (
    <>
      <Header />
      <SearchModal />
      <Outlet />
      <Footer />
    </>
  );
}


