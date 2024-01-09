import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useGetList from "../../hooks/useGetList";
import styles from "./styles.module.css";
import LikeButton from "../main/rest/likebutton/LikeButton";
import { PiEyeThin } from "react-icons/pi";
import { PiBookmarkSimpleThin } from "react-icons/pi";
import { PiShareNetworkThin } from "react-icons/pi";
import { HiArrowSmallUp } from "react-icons/hi2";
import { Swiper, SwiperSlide } from 'swiper/react';
import DetailSwiper from "./Swiper/DetailSwiper";


export default function DetailInformation() {
  const { contentid, contenttypeid } = useParams();
  const [list] = useGetList(`http://apis.data.go.kr/B551011/KorService1/detailIntro1?serviceKey=nyjoBggUlH0et5JY2fC9TW7%2BuSsx%2BIGHKWsgAuOWswMCtns64Y3M1Z%2BGROfg6L5ONigYQx6N%2BmqDCpABn3PmeQ%3D%3D&numOfRows=10&pageNo=1&&MobileApp=APPTest&MobileOS=ETC&contentId=${contentid}&contentTypeId=${contenttypeid}&_type=json`);
  //console.log(list);
  //console.log(contentid, contenttypeid);

  const tabMenulist = ["사진보기", "상세정보", "여행톡", "추천여행"]
  const [active, setActive] = useState(0);
  function ScrollMove(num) {
    window.scrollTo({
      top: num,
      behavior: "smooth"
    })
  }

  const handleActive = (e, idx) => {
    if (active != idx) {
      setActive(idx)
    }
    if (idx == 1) {
      ScrollMove(800)
    } else if (idx == 2) {
      ScrollMove(1500)
    } else if (idx == 3) {
      ScrollMove(2000)
    }
  }

  const handleScrolltoTop = () => {
    if (!window.scrollY) return
    ScrollMove(0)
  }

  const [showTopBtn, SetShowTopBtn] = useState(false);

  useEffect(() => {
    const handleShowBtn = (e) => {
      if (window.scrollY > 200 || window.scrollY < window.scroll.Height) {
        SetShowTopBtn(true)
      } else {
        SetShowTopBtn(false)
      }
    }

    window.addEventListener('scroll',handleShowBtn)
    return () => {
    window.removeEventListener('scroll',handleShowBtn)
    }
  },[])


  return (
    <div className={styles.wrap}>
      <div className={`${styles.inner} inner`}>
        <h2 className={styles.title}>제주도 관광특구</h2>
        <p className={styles.description}>제주</p>
        <em className={styles.strongText}>"이 곳 참말로 좋수다" 세계자연유산제주</em>
        <div className={styles.iconMenuWrap}>
          <div className={styles.iconMenu}>
            <LikeButton idx={0} /> {/* 데이터테이블 만들어서 관리하기 */}
            <span>1</span>
            <PiEyeThin size="28" />
            <span>1</span>
          </div>
          <div>
            <PiBookmarkSimpleThin size="28" />
            <PiShareNetworkThin size="28" />
          </div>
        </div>
        <ul className={styles.tabMenuWrap}>
          {tabMenulist.map((list, idx) =>
            <li onClick={(e) => handleActive(e, idx)} className={active === idx ? `${styles.tabMenu} ${styles.active}` : styles.tabMenu}>{list}</li>
          )}
        </ul>
        <DetailSwiper />
        <HiArrowSmallUp size="23" className={showTopBtn ? `${styles.scrollTopBtn} ${styles.active}` : styles.scrollTopBtn} onClick={handleScrolltoTop} />
      </div>
    </div>
  )
}