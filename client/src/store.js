import { configureStore } from '@reduxjs/toolkit'
import  { area, list } from './reducer/areaReducer.js';
import  { handleSearch, inputControll, searchListSlice}  from './reducer/searchReducer.js'
import { tripInfoSlice } from './reducer/tripInfoReducer.js';
import { subSlice } from './reducer/subReducer';
import { login } from './reducer/loginReducer.js';
import { userData } from "./reducer/userReducer.js";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { combineReducers } from "redux";
import persistStore from 'redux-persist/es/persistStore';

const rootReducer = combineReducers({
  area: area.reducer,
  list: list.reducer,
  handleSearch : handleSearch.reducer,
  inputControll : inputControll.reducer,
  searchListSlice : searchListSlice.reducer,
  tripInfoSlice : tripInfoSlice.reducer,
  subSlice : subSlice.reducer,
  login: login.reducer,
  userData: userData.reducer
});

const persistConfig = {
  key: "root",
  //reducer의 어느 지점에서부터 데이터를 저장할 것인지 지정
  storage,
  //웹의 localStorage에 저장한다는 뜻
  whitelist: ['login'] // 여기서 login 리듀서만 지정
  // blacklist는 저장하지 않을 리듀서의 이름을 배열로 지정합니다.
};

const persistedReducer = persistReducer(persistConfig, rootReducer);
// 두번째 인자로 만든 reducer를 전달
// loading : store를 불러오는 과정(로딩) 중에 보여줄 컴포넌트
// persistor : 로컬스토리지에 저장할 스토어

export const store = configureStore({
  // configureStore는 내부적으로 combineReducers를 호출합니다. 
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    })
  
});

export const persistor = persistStore(store);

