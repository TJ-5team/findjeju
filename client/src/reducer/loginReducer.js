import {createSlice} from "@reduxjs/toolkit";
import { PURGE } from "redux-persist";

const initialState = {

  member : {
    id:'',
    iat:''
  }
  

}

export const login = createSlice({

  name:'login',
  initialState,
  reducers:{
    fnLogin(state,action){
      state.member = action.payload
    }
  },
  /* extraReducers: builder => {
    builder.addCase(PURGE, () => initialState);
  } */
  //로그아웃을 하면 store를 purge하는 작업을 거쳐야 한다.
  //persistConfig에서 localStorage에 저장한 state들을 전부 초기화 시켜주는 과정이다.
});

export const {fnLogin} = login.actions;