import axios from "axios";
import { getCommonInfo, getDetailInfo, getComfortableInfo } from "../reducer/detailReducer";

export const DetailData = ({ contenttypeid, contentid}) => {
  let commonUrl = `http://apis.data.go.kr/B551011/KorService1/detailCommon1?ServiceKey=nyjoBggUlH0et5JY2fC9TW7%2BuSsx%2BIGHKWsgAuOWswMCtns64Y3M1Z%2BGROfg6L5ONigYQx6N%2BmqDCpABn3PmeQ%3D%3D&contentTypeId=${contenttypeid}&contentId=${contentid}&MobileOS=ETC&MobileApp=AppTest&defaultYN=Y&firstImageYN=Y&areacodeYN=Y&catcodeYN=Y&addrinfoYN=Y&mapinfoYN=Y&overviewYN=Y&_type=json`
  let detailUrl = `http://apis.data.go.kr/B551011/KorService1/detailIntro1?ServiceKey=nyjoBggUlH0et5JY2fC9TW7%2BuSsx%2BIGHKWsgAuOWswMCtns64Y3M1Z%2BGROfg6L5ONigYQx6N%2BmqDCpABn3PmeQ%3D%3D&contentTypeId=${contenttypeid}&contentId=${contentid}&MobileOS=ETC&MobileApp=AppTest&_type=json`
  let comfortableUrl = `http://apis.data.go.kr/B551011/KorWithService1/detailWithTour1?serviceKey=nyjoBggUlH0et5JY2fC9TW7%2BuSsx%2BIGHKWsgAuOWswMCtns64Y3M1Z%2BGROfg6L5ONigYQx6N%2BmqDCpABn3PmeQ%3D%3D&contentId=${contentid}&MobileOS=ETC&MobileApp=AppTest&_type=json`
  
  return async (dispatch) => {
    const commonInfo = await axios.get(commonUrl).then(result=> result.data.response.body.items.item)
    const detailInfo = await axios.get(detailUrl).then(result=> result.data.response.body.items.item)
    const comfortableInfo = await axios.get(comfortableUrl).then(result=> result.data.response.body.items.item)

    dispatch(getCommonInfo(commonInfo))
    dispatch(getDetailInfo(detailInfo))
    dispatch(getComfortableInfo(comfortableInfo))
  }
}