import React, { useRef, useState } from 'react';
import styles from './styles.module.css';
import {Swiper, SwiperSlide} from 'swiper/react';
import { Controller, Navigation, Pagination, Autoplay} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation'
import { Link } from 'react-router-dom';

export default function VisualSlide() {
  const [firstSwiper,setFirstSwiper] = useState(null);
  const [secondSwiper,setSecondSwiper] = useState(null);
  const [auto, setAuto] = useState(false);
  const [reset,setReset] = useState(false);
  const [colorNum, setColorNum] = useState(0);
  const visualSwiper = useRef(null)
  const progressFill = useRef(null)
  const handlePlay = ()=>{
    visualSwiper.current.swiper.autoplay.resume();
    setAuto(false)
    // setAuto(visualSwiper.current.swiper.autoplay.running)
    console.log(visualSwiper.current.swiper.autoplay);
  }
  const handleStop = ()=>{
    visualSwiper.current.swiper.autoplay.pause();
    setAuto(visualSwiper.current.swiper.autoplay.paused)
  }
  const bgColor = ['rgb(255, 244, 197)','rgb(239, 232, 255)','rgb(232, 235, 240)','rgb(218, 238, 255)','rgb(235, 247, 255)','rgb(235, 245, 250)','rgb(245, 240, 243)','rgb(242, 245, 255)','rgb(255, 230, 229)','rgb(218, 238, 255)','rgb(235, 247, 255)','rgb(242, 235, 255)']
  const handleColor = (activeIndex)=>{
    setReset(!reset);
    setColorNum(activeIndex)
    /* if(colorNum === 11){
      setColorNum(0);
    }else{
      setColorNum(colorNum + 1)
    } */
  }
  return (
    <div className={styles.wrap} style={{"background": bgColor[colorNum]}}>
      <div className={styles.cont}>
        <Swiper
        ref={visualSwiper}
        className={styles.leftSwiper}
        autoplay={{
          disableOnInteraction: false,
          delay: 5000
        }}
        loop={true}
        spaceBetween={30}
        slidesPerView={1}
        onSwiper={setFirstSwiper}
        controller={{ control: secondSwiper }}
        navigation={{
          prevEl: ".prevBtn",
          nextEl: ".nextBtn",
        }}
        modules={[Controller, Navigation, Pagination, Autoplay]}
      >
        <SwiperSlide>
          <div className={styles.titleWrap}>
            <em>
              2023 트렌드 어워드
            </em>
            <strong>
              대한민국구석구석 <br /> 데이터로 본 인기 <br /> 여행지는?
            </strong>
            <Link>
            </Link>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.titleWrap}>
            <em>
              전국 별캉스 추천 숙소 BEST 5
            </em>
            <strong>
              추억에 남을 <br /> 겨울밤 별캉스
            </strong>
            <Link>
            </Link>
          </div>
        </SwiperSlide>
        </Swiper>
      </div>

      <div className={styles.imgWrap}>
        <Swiper
        className={styles.rightSwiper}
        modules={[Controller]}
        loop={true}
        spaceBetween={30}
        slidesPerView={1}
        onRealIndexChange={realIndex=>{
          handleColor(realIndex.realIndex)
        }}
        onSwiper={setSecondSwiper}
        controller={{ control: firstSwiper }}
      >
        <SwiperSlide>
          <Link to={"/"}>
            <img src="https://cdn.visitkorea.or.kr/img/call?cmd=VIEW&id=08383da3-1392-48da-88e7-cc03c090d912&mode=raw" alt="" />
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link to={"/"}>
            <img src="https://cdn.visitkorea.or.kr/img/call?cmd=VIEW&id=085dc5a3-1836-410c-85d4-7ba18457772e&mode=raw" alt="" />
          </Link>
        </SwiperSlide>
        </Swiper>
      </div>

      <div className={styles.pageBox}>
        <div className={styles.page}>
          <div className={styles.progressBarWrap}>
            <span className={styles.progressBar}>
              <span key={reset ? 'fill' : ''} ref={progressFill} className={`${styles.progressFill} ${!auto ? '' : styles.pause}`}></span>
            </span>
          </div>
          <div className={`${styles.pagination} pagination`}>
            <span className={styles.currentPage}>{colorNum+1}</span>
            /
            <span className={styles.totalPage}>12</span>
          </div>
          <div className={styles.btns}>
            <button className={`${styles.prevBtn} prevBtn`}></button>
            <button className={`${styles.nextBtn} nextBtn`}></button>
            <div className={styles.btnAuto}>
              <button className={`${styles.autoPlay} ${!auto ?  styles.auto:''}`} onClick={()=>handlePlay()}></button>
              <button className={`${styles.autoStop} ${auto ?  styles.auto:''}`} onClick={()=>handleStop()}></button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

