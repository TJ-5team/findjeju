import { createSlice } from "@reduxjs/toolkit";


export const handleSearch = createSlice({
  name : "handleSearch",
  initialState: { searchFlag : false },
  reducers : {
    clickSearch(state,action){
      state.searchFlag = true;
    },
    clickOthers(state,action){
      state.searchFlag = false;
    }
  },

})

export const inputControll = createSlice({
  name : "inputControll",
  initialState: {keyword : ''},
  reducers : {
    inputChange(state,action){
      state.keyword = action.payload
    }
  }
})

export const searchListSlice = createSlice({
  name : "searchListSlice",
  initialState: {},
  reducers : {
    getApiDataList(state,action){
      state.firstList = action.payload
    },
    getFestaDataList(state,action){
      state.secondList = action.payload
    },
    getShowDataList(state,action){
      state.thirdList = action.payload
    },
    getCourseDataList(state,action){
      state.forthList = action.payload
    },
  }
})

export const serviceListSlice = createSlice({
  name : "serviceListSlice",
  initialState: {list : {list : null, totalCount : 0}},
  reducers : {
    getServiceDataList(state,action){
      state.list = action.payload
    }
  }
})

export const {clickSearch,clickOthers} =  handleSearch.actions
export const {inputChange} = inputControll.actions
export const {getApiDataList,getFestaDataList,getShowDataList, getCourseDataList} = searchListSlice.actions
export const {getServiceDataList} = serviceListSlice.actions