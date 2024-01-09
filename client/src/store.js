import { configureStore } from '@reduxjs/toolkit'
import  { area, list } from './reducer/areaReducer.js';
import  { handleSearch, inputControll, searchListSlice}  from './reducer/searchReducer.js'

export default configureStore({
  // configureStore는 내부적으로 combineReducers를 호출합니다. 

  reducer: {
    area: area.reducer,
    list: list.reducer,
    handleSearch : handleSearch.reducer,
    inputControll : inputControll.reducer,
    searchListSlice : searchListSlice.reducer
  }

});

