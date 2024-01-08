import { createSlice } from "@reduxjs/toolkit";


const handleSearch = createSlice({
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

export const {clickSearch,clickOthers} =  handleSearch.actions
export default handleSearch.reducer