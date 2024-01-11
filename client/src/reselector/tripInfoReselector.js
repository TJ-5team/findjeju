import { createSelector } from '@reduxjs/toolkit';

const getTourList = (state) => state.tripInfoSlice.tourList;
const getHomeList = (state) => state.tripInfoSlice.homeList;
const getFoodList = (state) => state.tripInfoSlice.foodList;


export const tripInfoListData = createSelector(
  [getTourList, getHomeList, getFoodList],
  (tourList, homeList, foodList) => {return {tourList, homeList, foodList}}
)