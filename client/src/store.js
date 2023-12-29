import { configureStore, createSlice } from '@reduxjs/toolkit'


let area = createSlice({
  // name은 state이름 , initialState은 state값
  name : 'area',
  initialState : {name:'제주시', code:"&sigunguCode=4"},
  reducers : {
    changeName(state,action){
      return state = action.payload
    }
  }
})


export default configureStore({

  reducer: { 
    area : area.reducer
  }

});

export let {changeName} = area.actions

