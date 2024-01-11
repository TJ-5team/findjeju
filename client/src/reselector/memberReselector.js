import React from 'react';
import {createSelector} from "@reduxjs/toolkit";

const getUser = (state) => state.login.member;

/* reducer 함수의 state값 가져오기 */
export const getUserData = createSelector(
  [getUser],
  (member)=>({
    member
  })
);