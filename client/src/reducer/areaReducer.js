import { createSlice } from "@reduxjs/toolkit";

export const area = createSlice({

  name: 'area',
  initialState: { name: '제주시', code: "&sigunguCode=4", imgArea: 'jeju' },
  reducers: {
    changeName(state, action) {
      return state = action.payload
    }
  }
/* 
  name: 슬라이스의 이름으로, 생성되는 액션 타입의 접두사로 사용됩니다.
  initialState: 슬라이스의 초기 상태 값을 설정합니다.
  reducers: 해당 슬라이스에서 처리할 리듀서 함수들을 정의하는 객체입니다. 각 함수는 특정 액션에 대응하여 상태를 어떻게 변경할지 정의합니다.
*/

});

/* export const areaData = createSlice({

  name: 'areaData',
  initialState: { area:'' },
  reducers: {
    changeArea(state, action) {
      return state = action.payload
    }
  }

  // name: 슬라이스의 이름으로, 생성되는 액션 타입의 접두사로 사용됩니다.
  // initialState: 슬라이스의 초기 상태 값을 설정합니다.
  // reducers: 해당 슬라이스에서 처리할 리듀서 함수들을 정의하는 객체입니다. 각 함수는 특정 액션에 대응하여 상태를 어떻게 변경할지 정의합니다.


}); */

export const list = createSlice({

  name: 'list',
  initialState: { contentTypeId: 32, category: 'cat1=B02&cat2=B0201' },
  reducers: {
    changeList(state, action) {
      return state = action.payload
    }
  }
/* 
  name: 슬라이스의 이름으로, 생성되는 액션 타입의 접두사로 사용됩니다.
  initialState: 슬라이스의 초기 상태 값을 설정합니다.
  reducers: 해당 슬라이스에서 처리할 리듀서 함수들을 정의하는 객체입니다. 각 함수는 특정 액션에 대응하여 상태를 어떻게 변경할지 정의합니다.
*/

});

export let { changeName, changeArea, changeList } = area.actions