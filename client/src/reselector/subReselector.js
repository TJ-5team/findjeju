import { createSelector } from '@reduxjs/toolkit';

const getSubList = (state) => state.subSlice.list.list;
const getSubCount = (state) => state.subSlice.list.totalCount;
const getSubPageSize = (state) => state.subSlice.list.pageSize;


export const subListData = createSelector(
  [getSubList, getSubCount, getSubPageSize],
  (list, totalCount, pageSize) => {return {list, totalCount, pageSize}}
)