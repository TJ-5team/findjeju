import axios from "axios";
import { getSubList } from "../reducer/subReducer";

export const SubData = (currentPage, ContentTypeId) => {
  
  let startindex = 0;
  let endindex = 0;
  const pageSize = 30;

  startindex = (currentPage-1) * pageSize+1;
  endindex = currentPage * pageSize;

  const tourUrl = `http://apis.data.go.kr/B551011/KorService1/areaBasedList1?numOfRows=${pageSize}&pageNo=${currentPage}&MobileOS=ETC&MobileApp=AppTest&ServiceKey=CJ%2FlY8Dc3dAVFPdMOF6t%2FHXVFUUjp5iNiBLNNPkrq7ROViBwSkb6oMVC4s5NZjEztVJWKm0beaKYDWMn7suxaQ%3D%3D&listYN=Y&arrange=O&contentTypeId=${ContentTypeId}&areaCode=39&sigunguCode=&cat1=&cat2=&cat3=&_type=json`;

  return async (dispatch) => {
    const result = await axios.get(tourUrl).then(result=> result.data.response.body);
    const list = result.items.item
    const totalCount = result.totalCount
    dispatch(getSubList({list, totalCount, pageSize}))
  }
}