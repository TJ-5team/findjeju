import React from "react";
import { useParams } from "react-router-dom";
import useGetList from "../../hooks/useGetList";
import styles from "./styles.module.css";

export default function DetailInformation(){
  const {contentid, contenttypeid} = useParams();
  const [list] = useGetList(`http://apis.data.go.kr/B551011/KorService1/detailIntro1?serviceKey=nyjoBggUlH0et5JY2fC9TW7%2BuSsx%2BIGHKWsgAuOWswMCtns64Y3M1Z%2BGROfg6L5ONigYQx6N%2BmqDCpABn3PmeQ%3D%3D&numOfRows=10&pageNo=1&&MobileApp=APPTest&MobileOS=ETC&contentId=${contentid}&contentTypeId=${contenttypeid}&_type=json`);
  console.log(list);
  console.log(contentid, contenttypeid);
  
  return(
    <div >
      detail page!
    </div>
  )
}