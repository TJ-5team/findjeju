import axios from "axios";
import { getApiDataList, getCourseDataList, getFestaDataList,getShowDataList, inputControll, getServiceDataList } from "../reducer/searchReducer";

export const SearchApiData = ({keyword,filter})=>{
let 근상키 = "CU%2BXIQukCNW8VDOOJDU8QzHHPgrsOso%2FEiDhpWTlD8Lb9q1SYmll5Qp9YK4UsjFNOYVQoLCrMi2s0mfnEPr0iA%3D%3D"
let 강민키 = "CJ%2FlY8Dc3dAVFPdMOF6t%2FHXVFUUjp5iNiBLNNPkrq7ROViBwSkb6oMVC4s5NZjEztVJWKm0beaKYDWMn7suxaQ%3D%3D"
let areaUrl = `http://apis.data.go.kr/B551011/KorService1/searchKeyword1?numOfRows=12&pageNo=1&MobileOS=ETC&MobileApp=AppTest&ServiceKey=${근상키}&listYN=Y&arrange=${filter ? filter : "O"}&areaCode=39&sigunguCode=&cat1=&cat2=&cat3=&keyword=${keyword}&_type=json`
let festaUrl = `http://apis.data.go.kr/B551011/KorService1/searchKeyword1?numOfRows=12&pageNo=1&MobileOS=ETC&MobileApp=AppTest&ServiceKey=${근상키}&listYN=Y&arrange=${filter ? filter : "O"}&areaCode=39&sigunguCode=&cat1=A02&cat2=A0207&cat3=&keyword=${keyword}&_type=json`
let showUrl = `http://apis.data.go.kr/B551011/KorService1/searchKeyword1?numOfRows=12&pageNo=1&MobileOS=ETC&MobileApp=AppTest&ServiceKey=${근상키}&listYN=Y&arrange=${filter ? filter : "O"}&areaCode=39&sigunguCode=&cat1=A02&cat2=A0208&cat3=&keyword=${keyword}&_type=json`
let courseUrl = `http://apis.data.go.kr/B551011/KorService1/searchKeyword1?numOfRows=12&pageNo=1&MobileOS=ETC&MobileApp=AppTest&ServiceKey=${근상키}&listYN=Y&arrange=${filter ? filter : "O"}&areaCode=39&sigunguCode=&cat1=C01&cat2=&cat3=&keyword=${keyword}&_type=json`
  return async (dispatch)=>{
    const areaList = await axios.get(areaUrl).then(result=> result.data.response.body.items.item)
    const festaList = await axios.get(festaUrl).then(result=> result.data.response.body.items.item)
    const showList = await axios.get(showUrl).then(result=> result.data.response.body.items.item)
    const courseList = await axios.get(courseUrl).then(result=> result.data.response.body.items.item)
    
    dispatch(getApiDataList(areaList))
    dispatch(getFestaDataList(festaList))
    dispatch(getShowDataList(showList))
    dispatch(getCourseDataList(courseList))
    
    
  }
}

export const serviceApiData = ({currentPage, subfilter, filter, keyword, active}) => {
  let 근상키 = "CU%2BXIQukCNW8VDOOJDU8QzHHPgrsOso%2FEiDhpWTlD8Lb9q1SYmll5Qp9YK4UsjFNOYVQoLCrMi2s0mfnEPr0iA%3D%3D"
  let 강민키 = "CJ%2FlY8Dc3dAVFPdMOF6t%2FHXVFUUjp5iNiBLNNPkrq7ROViBwSkb6oMVC4s5NZjEztVJWKm0beaKYDWMn7suxaQ%3D%3D"
  let startindex = 0;
  let endindex = 0;
  const pageSize = 10;
  startindex = (currentPage-1) * pageSize+1;
  endindex = currentPage * pageSize;
  console.log(subfilter);
  let serviceCode = ""
  if(filter === "최신"){
    filter = "Q"
  }else{
    filter = "O"
  }
  if(subfilter === "자연"){
    serviceCode = "A01"
  }else if(subfilter === "문화시설"){
    serviceCode = "A02"
  }else if(subfilter === "레포츠"){
    serviceCode = "A03"
  }else if(subfilter === "쇼핑"){
    serviceCode = "A04"
  }else if(subfilter === "음식점"){
    serviceCode = "A05"
  }else if(subfilter === "숙박"){
    serviceCode = "B02"
  }else if(subfilter === "전체"){
    serviceCode = ""
  }
/* 
A01 자연
A02 인문
A03 레포츠
A04 쇼핑
A05 음식
B02 숙박
 */
let middleCode = ""

if(active === "여행정보"){
  
}else if(active === "축제"){
  middleCode = "A0207"
}else if(active === "공연행사"){
  middleCode = "A0208"
}else if(active === "여행코스"){
  serviceCode = "C01"
}
const tourUrl = `http://apis.data.go.kr/B551011/KorService1/searchKeyword1?numOfRows=10&pageNo=${currentPage}&MobileOS=ETC&MobileApp=AppTest&ServiceKey=${근상키}&listYN=Y&arrange=${filter}&areaCode=39&sigunguCode=&cat1=${serviceCode}&cat2=${middleCode}&cat3=&keyword=${keyword}&_type=json`;
  return async (dispatch) => {
    const result = await axios.get(tourUrl).then(result=> result.data.response.body);
    console.log(result);
    const serviceList = result.items.item
    const totalCount = result.totalCount
    console.log(serviceList);
    dispatch(getServiceDataList({serviceList, totalCount}))
  }
}