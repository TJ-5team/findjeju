import { createSlice } from "@reduxjs/toolkit";

export const subSlice = createSlice({
  name : "subSlice",
  initialState: {list : {list : null, totalCount : 0, pageSize : 0}},
  reducers : {
    getSubList(state,action){
      state.list = action.payload;
    }
  }
})

export const {getSubList} = subSlice.actions