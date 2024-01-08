import React from "react";
import { useParams } from "react-router-dom";
import useGetList from "../../hooks/useGetList";
import styles from "./styles.module.css";
import LikeButton from "../main/rest/likebutton/LikeButton";
import { PiEyeThin } from "react-icons/pi";
import { PiBookmarkSimpleThin } from "react-icons/pi";
import { PiShareNetworkThin } from "react-icons/pi";

export default function DetailInformation() {
  const { contentid, contenttypeid } = useParams();
  const [list] = useGetList(`http://apis.data.go.kr/B551011/KorService1/detailIntro1?serviceKey=nyjoBggUlH0et5JY2fC9TW7%2BuSsx%2BIGHKWsgAuOWswMCtns64Y3M1Z%2BGROfg6L5ONigYQx6N%2BmqDCpABn3PmeQ%3D%3D&numOfRows=10&pageNo=1&&MobileApp=APPTest&MobileOS=ETC&contentId=${contentid}&contentTypeId=${contenttypeid}&_type=json`);
  console.log(list);
  console.log(contentid, contenttypeid);

  return (
    <div className={styles.wrap}>
      <div className={`${styles.inner} inner`}>
        <h2 className={styles.title}>제주도 관광특구</h2>
        <p className={styles.description}>제주</p>
        <em className={styles.strongText}>"이 곳 참말로 좋수다" 세계자연유산제주</em>
        <div className={styles.iconMenuWrap}>
          <div className={styles.iconMenu}>
            <LikeButton idx={0}/> {/* 데이터테이블 만들어서 관리하기 */}
            <span>1</span>
            <PiEyeThin size="28"/>
            <span>1</span>
          </div>
          <div>
            <PiBookmarkSimpleThin size="28"/>
            <PiShareNetworkThin size="28"/>
          </div>
        </div>
      </div>
    </div>
  )
}