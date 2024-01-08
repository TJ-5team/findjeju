import { createSelector } from '@reduxjs/toolkit';

const getSearchFlag = (state) => state.handleSearch.searchFlag;

export const getSearch = createSelector(
  [getSearchFlag],
  (searchFlag)=>({
      searchFlag
  })
)