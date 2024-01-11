import axios from "axios";
import { getApiTourList, getFoodList, getHomeList } from "../reducer/tripInfoReducer";

export const TripInfoData = (num) => {
  let tourUrl = `http://apis.data.go.kr/B551011/KorService1/areaBasedList1?numOfRows=3&pageNo=${num}&MobileOS=ETC&MobileApp=AppTest&ServiceKey=CJ%2FlY8Dc3dAVFPdMOF6t%2FHXVFUUjp5iNiBLNNPkrq7ROViBwSkb6oMVC4s5NZjEztVJWKm0beaKYDWMn7suxaQ%3D%3D&listYN=Y&arrange=O&contentTypeId=12&areaCode=39&sigunguCode=&cat1=&cat2=&cat3=&_type=json`;
  let homeUrl = `http://apis.data.go.kr/B551011/KorService1/areaBasedList1?numOfRows=3&pageNo=${num}&MobileOS=ETC&MobileApp=AppTest&ServiceKey=CJ%2FlY8Dc3dAVFPdMOF6t%2FHXVFUUjp5iNiBLNNPkrq7ROViBwSkb6oMVC4s5NZjEztVJWKm0beaKYDWMn7suxaQ%3D%3D&listYN=Y&arrange=O&contentTypeId=32&areaCode=39&sigunguCode=&cat1=&cat2=&cat3=&_type=json`;
  let foodUrl = `http://apis.data.go.kr/B551011/KorService1/areaBasedList1?numOfRows=3&pageNo=${num}&MobileOS=ETC&MobileApp=AppTest&ServiceKey=CJ%2FlY8Dc3dAVFPdMOF6t%2FHXVFUUjp5iNiBLNNPkrq7ROViBwSkb6oMVC4s5NZjEztVJWKm0beaKYDWMn7suxaQ%3D%3D&listYN=Y&arrange=O&contentTypeId=39&areaCode=39&sigunguCode=&cat1=&cat2=&cat3=&_type=json`;
  
  return async (dispatch) => {
    const tourList = await axios.get(tourUrl).then(result=> result.data.response.body.items.item);
    const homeList = await axios.get(homeUrl).then(result=> result.data.response.body.items.item);
    const foodList = await axios.get(foodUrl).then(result=> result.data.response.body.items.item);

    dispatch(getApiTourList(tourList))
    dispatch(getHomeList(homeList))
    dispatch(getFoodList(foodList))
  }
}