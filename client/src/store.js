import { configureStore } from '@reduxjs/toolkit'
import  { area } from './reducer/areaReducer.js';



export default configureStore({
  // configureStore는 내부적으로 combineReducers를 호출합니다. 

  reducer: {
    area: area.reducer
  }

});

export let { changeName } = area.actions

