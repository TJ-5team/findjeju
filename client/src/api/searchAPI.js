import axios from "axios";
import { getApiDataList, getFestaDataList,getShowDataList, inputControll } from "../reducer/searchReducer";

export const SearchApiData = ({keyword,filter})=>{
let areaUrl = `http://apis.data.go.kr/B551011/KorService1/searchKeyword1?numOfRows=12&pageNo=1&MobileOS=ETC&MobileApp=AppTest&ServiceKey=CU%2BXIQukCNW8VDOOJDU8QzHHPgrsOso%2FEiDhpWTlD8Lb9q1SYmll5Qp9YK4UsjFNOYVQoLCrMi2s0mfnEPr0iA%3D%3D&listYN=Y&arrange=${filter ? filter : "O"}&areaCode=39&sigunguCode=&cat1=&cat2=&cat3=&keyword=${keyword}&_type=json`
let festaUrl = `http://apis.data.go.kr/B551011/KorService1/searchKeyword1?numOfRows=12&pageNo=1&MobileOS=ETC&MobileApp=AppTest&ServiceKey=CU%2BXIQukCNW8VDOOJDU8QzHHPgrsOso%2FEiDhpWTlD8Lb9q1SYmll5Qp9YK4UsjFNOYVQoLCrMi2s0mfnEPr0iA%3D%3D&listYN=Y&arrange=${filter ? filter : "O"}&areaCode=39&sigunguCode=&cat1=A02&cat2=A0207&cat3=&keyword=${keyword}&_type=json`
let showUrl = `http://apis.data.go.kr/B551011/KorService1/searchKeyword1?numOfRows=12&pageNo=1&MobileOS=ETC&MobileApp=AppTest&ServiceKey=CU%2BXIQukCNW8VDOOJDU8QzHHPgrsOso%2FEiDhpWTlD8Lb9q1SYmll5Qp9YK4UsjFNOYVQoLCrMi2s0mfnEPr0iA%3D%3D&listYN=Y&arrange=${filter ? filter : "O"}&areaCode=39&sigunguCode=&cat1=A02&cat2=A0208&cat3=&keyword=${keyword}&_type=json`
console.log(keyword);
  return async (dispatch)=>{
    const areaList = await axios.get(areaUrl).then(result=> result.data.response.body.items.item)
    const festaList = await axios.get(festaUrl).then(result=> result.data.response.body.items.item)
    const showList = await axios.get(showUrl).then(result=> result.data.response.body.items.item)
    
    dispatch(getApiDataList(areaList))
    dispatch(getFestaDataList(festaList))
    dispatch(getShowDataList(showList))
    
    
  }
}