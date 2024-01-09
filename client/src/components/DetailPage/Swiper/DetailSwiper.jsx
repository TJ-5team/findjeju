import React from "react";
import styles from "./styles.module.css";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";


export default function DetailSwiper() {
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
        <SwiperSlide className={styles.swiperSlide}>
          <img src="https://cdn.visitkorea.or.kr/img/call?cmd=VIEW&id=90440f0c-937a-43f9-a87f-4c482ffdfec4" alt="" />
        </SwiperSlide>
        <SwiperSlide className={styles.swiperSlide}>
          <img src="https://cdn.visitkorea.or.kr/img/call?cmd=VIEW&id=159f6fb9-fffa-4e68-81a2-82654fa1f8e4" alt="" />
        </SwiperSlide>
        <SwiperSlide className={styles.swiperSlide}>
          <img src="https://cdn.visitkorea.or.kr/img/call?cmd=VIEW&id=7353fdc0-58f4-49a2-839b-cf958cc26552" alt="" />
        </SwiperSlide>
        <SwiperSlide className={styles.swiperSlide}>
          <img src="https://cdn.visitkorea.or.kr/img/call?cmd=VIEW&id=dc1df116-1934-4700-8405-ca065348d566" alt="" />
        </SwiperSlide>
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

      {/*  <button >
        <IoIosArrowDropleftCircle className={styles.prevBtn}/>
      </button>
      <button >
        <IoIosArrowDroprightCircle className={styles.nextBtn}/>
      </button> */}
    </div>
  );
}

