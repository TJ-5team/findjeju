import { createSlice } from "@reduxjs/toolkit";


export const userData = createSlice({

    name: "userData",
    initialState:{},
    reducers:{
      fnUserData(state,action){
        state.userData = action.payload 
      }
    }

});

export const {fnUserData} = userData.actions

