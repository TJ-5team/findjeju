import React, { useEffect, useRef, useState } from 'react';
import styles from './styles.module.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Controller, Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation'
import { Link } from 'react-router-dom';
import useGetList from '../../../hooks/useGetList';

export default function VisualSlide() {
  const [list] = useGetList("http://apis.data.go.kr/B551011/KorService1/areaBasedList1?numOfRows=12&pageNo=1&MobileOS=ETC&MobileApp=AppTest&ServiceKey=CU%2BXIQukCNW8VDOOJDU8QzHHPgrsOso%2FEiDhpWTlD8Lb9q1SYmll5Qp9YK4UsjFNOYVQoLCrMi2s0mfnEPr0iA%3D%3D&listYN=Y&arrange=D&contentTypeId=12&areaCode=39&sigunguCode=&cat1=&cat2=A0101&cat3=&_type=json")
  const [firstSwiper, setFirstSwiper] = useState(null);
  const [secondSwiper, setSecondSwiper] = useState(null);
  const [auto, setAuto] = useState(false);
  const [reset, setReset] = useState(false);
  const [colorNum, setColorNum] = useState(0);
  const visualSwiper = useRef(null)
  const progressFill = useRef(null)
  const handlePlay = () => {
    visualSwiper.current.swiper.autoplay.resume();
    setAuto(false)
    // setAuto(visualSwiper.current.swiper.autoplay.running)
  }
  const handleStop = () => {
    visualSwiper.current.swiper.autoplay.pause();
    setAuto(visualSwiper.current.swiper.autoplay.paused)
  }
  const bgColor = ['rgb(255, 244, 197)', 'rgb(239, 232, 255)', 'rgb(232, 235, 240)', 'rgb(218, 238, 255)', 'rgb(235, 247, 255)', 'rgb(235, 245, 250)', 'rgb(245, 240, 243)', 'rgb(242, 245, 255)', 'rgb(255, 230, 229)', 'rgb(218, 238, 255)', 'rgb(235, 247, 255)', 'rgb(242, 235, 255)']
  const handleColor = (activeIndex) => {
    setReset(!reset);
    setColorNum(activeIndex)
    /* if(colorNum === 11){
      setColorNum(0);
    }else{
      setColorNum(colorNum + 1)
    } */
  }
  useEffect(() => {
    visualSwiper.current.swiper.autoplay.start();
    setAuto(false);
  }, [reset])
  return (
    <div className={styles.wrap} style={{ "background": bgColor[colorNum] }}>
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
          {list.map((item) => <SwiperSlide>
            <div className={styles.titleWrap}>
              <em>
                2023 트렌드 in 제주
              </em>
              <strong>
                {item.title}
              </strong>
              <Link>
              </Link>
            </div>
          </SwiperSlide>)}
        </Swiper>
      </div>

      <div className={styles.imgWrap}>
        <Swiper
          className={styles.rightSwiper}
          modules={[Controller]}
          loop={true}
          spaceBetween={30}
          slidesPerView={1}
          onRealIndexChange={realIndex => {
            handleColor(realIndex.realIndex)
          }}
          onSwiper={setSecondSwiper}
          controller={{ control: firstSwiper }}
        >
          {list.map((item)=><SwiperSlide>
            <Link to={"/"}>
              <img src={item.firstimage} alt="" />
            </Link>
          </SwiperSlide>)}
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
            <span className={styles.currentPage}>{colorNum + 1}</span>
            /
            <span className={styles.totalPage}>12</span>
          </div>
          <div className={styles.btns}>
            <button className={`${styles.prevBtn} prevBtn`}></button>
            <button className={`${styles.nextBtn} nextBtn`}></button>
            <div className={styles.btnAuto}>
              <button className={`${styles.autoPlay} ${!auto ? styles.auto : ''}`} onClick={() => handlePlay()}></button>
              <button className={`${styles.autoStop} ${auto ? styles.auto : ''}`} onClick={() => handleStop()}></button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

