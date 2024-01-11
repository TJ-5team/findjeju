import { configureStore } from '@reduxjs/toolkit'
import  { area, list } from './reducer/areaReducer.js';
import  { handleSearch, inputControll, searchListSlice, serviceListSlice}  from './reducer/searchReducer.js'
import { tripInfoSlice } from './reducer/tripInfoReducer.js';
import { subSlice } from './reducer/subReducer';

export default configureStore({
  // configureStore는 내부적으로 combineReducers를 호출합니다. 

  reducer: {
    area: area.reducer,
    list: list.reducer,
    handleSearch : handleSearch.reducer,
    inputControll : inputControll.reducer,
    searchListSlice : searchListSlice.reducer,
    tripInfoSlice : tripInfoSlice.reducer,
    subSlice : subSlice.reducer,
    serviceListSlice : serviceListSlice.reducer
  }

});

