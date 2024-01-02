import React from 'react';
import { createSelector } from 'reselect';

const getArea = (state) => state.area;
const getAreaName = (state) => state.area.name;
const getAreaCode = (state) => state.area.code;
const getAreaImg = (state) => state.area.imgArea;

/* reducer 함수의 state값 가져오기 */
export const getAreaData = createSelector(
  [getArea],
  (area)=>({
    area
  })
);