import { createSlice } from "@reduxjs/toolkit";

export const tripInfoSlice = createSlice({
  name : "tripInfoSlice",
  initialState: {tourList : null, homeList : null, foodList : null},
  reducers : {
    getApiTourList(state,action){
      state.tourList = action.payload;
    },
    getHomeList(state,action){
      state.homeList = action.payload;
    },
    getFoodList(state,action){
      state.foodList = action.payload;
    }
  }
})

export const {getApiTourList, getHomeList, getFoodList} = tripInfoSlice.actions