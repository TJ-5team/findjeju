import { createSelector } from '@reduxjs/toolkit';


const getUserData = (state) => state.userData.userData;

export const userData = createSelector(

  [getUserData],
  (user)=>({

    user

  })

)