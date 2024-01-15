import React, { useState } from "react";
import { useParams } from "react-router";
import useGetList from "../../../hooks/useGetList";
import styles from "./styles.module.css";
// Import Swiper styles
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import "swiper/css";
import "swiper/css/navigation";


export default function DetailSwiper() {
  const { contentid } = useParams();

  /* 예시로!! 삭제하기 !!!! */
  /* const contenttypeid = 32;
  const contentid = 2819964; */
  const [imgDetail] = useGetList(`http://apis.data.go.kr/B551011/KorService1/detailImage1?serviceKey=nyjoBggUlH0et5JY2fC9TW7%2BuSsx%2BIGHKWsgAuOWswMCtns64Y3M1Z%2BGROfg6L5ONigYQx6N%2BmqDCpABn3PmeQ%3D%3D&numOfRows=10&pageNo=1&MobileOS=ETC&MobileApp=AppTest&contentId=${contentid}&imageYN=Y&subImageYN=Y&_type=json`)

  const [num, setNum] = useState(0);

  return (
    <div className={styles.wrap}>
      <Swiper
        navigation={{
          prevEl: ".prevBtn",
          nextEl: ".nextBtn",
        }}
        modules={[Navigation]}
        className={styles.imgSwiper}
        onRealIndexChange={realIndex => {
          setNum(realIndex.realIndex)
        }}
      >
        {imgDetail === undefined
          ?
          <div className={styles.swiperNoImageWrap}>
            <img src="http://localhost:3000/images/jeju_island.png" alt="" className={styles.swiperNoImage} />
            {/* <a href='https://kor.pngtree.com/freepng/cute-welcome-to-jeju-island-sticker_8826440.html'>의 PNG 이미지 kor.pngtree.com/</a> */}
          </div>
          : imgDetail.map(list =>
            <SwiperSlide className={styles.swiperSlide} key={list.originimgurl}>
              <img src={list.originimgurl} alt="상세이미지" />
            </SwiperSlide>
          )}
      </Swiper>

      <button className={`${styles.prevBtn} prevBtn`}>
        <img src="http://localhost:3000/images/detailPage/btn_prev.png" alt="" />
      </button>
      <button className={`${styles.nextBtn} nextBtn`}>
        <img src="http://localhost:3000/images/detailPage/btn_prev.png" alt="" />
      </button>

      {/* Pagination */}
      {imgDetail &&
        <div className={styles.pagination}>
          <div>
            <span>{num + 1}</span>
            <span>/</span>
            <span>{imgDetail.length}</span>
          </div>
        </div>}
    </div>
  );
}

