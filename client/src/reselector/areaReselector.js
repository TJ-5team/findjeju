import React from 'react';
import { createSelector } from 'reselect';

const getArea = (state) => state.area;
const getAreaName = (state) => state.area.name;
const getAreaCode = (state) => state.area.code;
const getAreaImg = (state) => state.area.imgArea;

const getList = (state) => state.list; 
const getContentTypeId = (state) => state.list.contentTypeId; 
const getCategory = (state) => state.list.category; 

/* reducer 함수의 state값 가져오기 */
export const getAreaData = createSelector(
  [getArea],
  (area)=>({
    area
  })
);

export const getListData = createSelector(
  [getList],
  (list)=>({
    list
  })
);