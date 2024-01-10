import { createSelector } from '@reduxjs/toolkit';

const getSearchFlag = (state) => state.handleSearch.searchFlag;
const getSearchKeyword = (state) => state.inputControll.keyword;
const getFirstList = (state) => state.searchListSlice.firstList;
const getSecondList = (state) => state.searchListSlice.secondList;
const getThirdList = (state) => state.searchListSlice.thirdList;
export const getSearch = createSelector(
  [getSearchFlag],
  (searchFlag)=>({
      searchFlag
  })
)

export const getKeyword = createSelector(
  [getSearchKeyword],
  (key)=>({
    key
  })
)

export const getSearchListData = createSelector(
  [getFirstList,getSecondList,getThirdList],
  (firstList,secondList,thirdList)=>{
    return {
      firstList,
      secondList,
      thirdList
    }
  }
)