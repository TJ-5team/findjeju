import {createSlice} from "@reduxjs/toolkit";

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
  }
  

});

export const {fnLogin} = login.actions;