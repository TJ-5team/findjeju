import { createSelector } from '@reduxjs/toolkit';

const getSearchFlag = (state) => state.handleSearch.searchFlag;
const getSearchKeyword = (state) => state.inputControll.keyword;
const getFirstList = (state) => state.searchListSlice.firstList;
const getSecondList = (state) => state.searchListSlice.secondList;
const getThirdList = (state) => state.searchListSlice.thirdList;
const getForthList = (state) => state.searchListSlice.forthList;
const getServiceList = (state) => state.serviceListSlice.list.serviceList;
const getServiceTotal = (state) => state.serviceListSlice.list.totalCount;

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
  [getFirstList,getSecondList,getThirdList,getForthList],
  (firstList,secondList,thirdList,forthList)=>{
    return {
      firstList,
      secondList,
      thirdList,
      forthList
    }
  }
)

export const getSeviceListData = createSelector(
  [getServiceList,getServiceTotal],
  (serviceList,totalCount)=>{
      return {
        serviceList,
        totalCount
    }
  }
)