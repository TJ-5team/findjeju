import { createSelector } from "@reduxjs/toolkit";

const getCommonInfo = (state) => state.handleDetailData.commonInfo;
const getDetailInfo = (state) => state.handleDetailData.detailInfo;
const getComfortableInfo = (state) => state.handleDetailData.comfortableInfo;

export const getDetailData = createSelector(
  [getCommonInfo, getDetailInfo, getComfortableInfo],
  (commonInfo, detailInfo, comfortableInfo) => {
    return {
      commonInfo,
      detailInfo,
      comfortableInfo
    }
  }
)