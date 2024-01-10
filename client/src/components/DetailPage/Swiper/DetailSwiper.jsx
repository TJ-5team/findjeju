import React from "react";
import styles from "./styles.module.css";
import useGetList from "../../../hooks/useGetList";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";


export default function DetailSwiper() {
  /* 예시로!! 삭제하기 !!!! */
  const contenttypeid = 32;
  const contentid = 2819964;

  const [img] = useGetList(`http://apis.data.go.kr/B551011/KorService1/detailImage1?ServiceKey=nyjoBggUlH0et5JY2fC9TW7%2BuSsx%2BIGHKWsgAuOWswMCtns64Y3M1Z%2BGROfg6L5ONigYQx6N%2BmqDCpABn3PmeQ%3D%3D&contentId=${contentid}&MobileOS=ETC&MobileApp=AppTest&imageYN=Y&subImageYN=Y&numOfRows=10&_type=json`)
  const [imgDetail] = useGetList(`http://apis.data.go.kr/B551011/KorService1/detailImage1?ServiceKey=nyjoBggUlH0et5JY2fC9TW7%2BuSsx%2BIGHKWsgAuOWswMCtns64Y3M1Z%2BGROfg6L5ONigYQx6N%2BmqDCpABn3PmeQ%3D%3D&contentId=${contentid}&MobileOS=ETC&MobileApp=AppTest&imageYN=Y&subImageYN=Y&numOfRows=10&_type=json`)

  //console.log(imgDetail);

  return (
    <div className={styles.wrap}>
      <Swiper
        navigation={{
          prevEl: ".prevBtn",
          nextEl: ".nextBtn",
        }}
        modules={[Navigation]}
        className={styles.imgSwiper}
      >
        {imgDetail && imgDetail.map(list=>
        <SwiperSlide className={styles.swiperSlide} >
          <img src={list.originimgurl} alt="" />
        </SwiperSlide>
        )}

        {/* <SwiperSlide className={styles.swiperSlide}>
          <img src="https://cdn.visitkorea.or.kr/img/call?cmd=VIEW&id=159f6fb9-fffa-4e68-81a2-82654fa1f8e4" alt="" />
        </SwiperSlide>
        <SwiperSlide className={styles.swiperSlide}>
          <img src="https://cdn.visitkorea.or.kr/img/call?cmd=VIEW&id=7353fdc0-58f4-49a2-839b-cf958cc26552" alt="" />
        </SwiperSlide>
        <SwiperSlide className={styles.swiperSlide}>
          <img src="https://cdn.visitkorea.or.kr/img/call?cmd=VIEW&id=dc1df116-1934-4700-8405-ca065348d566" alt="" />
        </SwiperSlide> */}
      </Swiper>

      {/* Navigation */}
      {/* <button className={`${styles.prevBtn} prevBtn`}><BsFillArrowLeftCircleFill /></button>
      <button className={`${styles.nextBtn} nextBtn`}><BsFillArrowRightCircleFill /></button> */}

      <button className={`${styles.prevBtn} prevBtn`}>
        <img src="http://localhost:3000/images/detailPage/btn_prev.png" alt="" />
      </button>
      <button className={`${styles.nextBtn} nextBtn`}>
        <img src="http://localhost:3000/images/detailPage/btn_prev.png" alt="" />
      </button>

      {/* Pagination */}
      <div className={styles.pagination}>
        <span>1</span>
        <span>/</span>
        <span>4</span>
      </div>

    </div>
  );
}

