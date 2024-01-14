import { createSlice } from "@reduxjs/toolkit";

export const handleDetailData = createSlice({
  name : "handleDetailData",
  initialState : { commonInfo : null, detailInfo : null, comfortableInfo : null },
  reducers : {
    getCommonInfo(state, action){
      state.commonInfo = action.payload;
    },
    getDetailInfo(state, action){
      state.detailInfo = action.payload;
    },
    getComfortableInfo(state, action){
      state.comfortableInfo = action.payload;
    }
  }
})

export const { getCommonInfo, getDetailInfo, getComfortableInfo } = handleDetailData.actions