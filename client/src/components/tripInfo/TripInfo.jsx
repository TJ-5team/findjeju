import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { TripInfoData } from "../../api/tripInfoApi";
import { tripInfoListData } from "../../reselector/tripInfoReselector";
import TripInfoComponents from "./TripInfoComponents";

export default function TripInfo(){
  const dispatch = useDispatch();
  const [num, setNum] = useState(Math.floor(Math.random() * 10) + 1);
  const {tourList, homeList, foodList} = useSelector(tripInfoListData);

  useEffect(() => {
    dispatch(TripInfoData(num));
  },[num])

  return(
    <>
      <TripInfoComponents title={"추천 여행지"} lists={tourList}/>
      <TripInfoComponents title={"추천 숙소"} lists={homeList}/>
      <TripInfoComponents title={"추천 맛집"} lists={foodList}/>
    </>
  );
}