import React, { useEffect, useState } from 'react';
import styles from './styles.module.css';
import useGetDate from '../../../hooks/useGetDate';
import { IoIosArrowForward } from "react-icons/io";
import useGetList from './../../../hooks/useGetList';
import { Link } from 'react-router-dom'
import { FaPlus } from "react-icons/fa6";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";

export default function Fiesta() {
  const date = useGetDate(false,false,false,true,false);
  const [startDate, setStartDate] = useState(date.date);
  const [festivalLists] = useGetList(`http://apis.data.go.kr/B551011/KorService1/searchFestival1?eventStartDate=${startDate}&eventEndDate=&areaCode=39&sigunguCode=&ServiceKey=CJ%2FlY8Dc3dAVFPdMOF6t%2FHXVFUUjp5iNiBLNNPkrq7ROViBwSkb6oMVC4s5NZjEztVJWKm0beaKYDWMn7suxaQ%3D%3D&listYN=Y&MobileOS=ETC&MobileApp=AppTest&arrange=A&numOfRows=12&pageNo=1&_type=json`)

  const DayOfTheWeek = (num) => {
    const week = ["일","월","화","수","목","금","토"];
    return(week[num]);
  }

  const newDate = (date) => {
    const y = date.substring(0,4);
    const m = date.substring(4,6);
    const d = date.substring(6,8);
    return (y + ". " + m + ". " + d);
  }

  return (
    <div className={styles.wrap}>
      <div className="inner">
        <h3 className={styles.title}>제주축제·행사 어디까지 가봤니? <Link to="/festival"><FaPlus/></Link></h3>
          <div className={styles.toDate}>{startDate.substring(0,4) + "." + startDate.substring(4,6)}</div>
          <div className={styles.dayList}>
            {date.days.map(d =>
            <button className={`${styles.day} ${d.day === startDate ? styles.active : ""}`} key={d.day} data-id={d.day} onClick={ e => setStartDate(e.currentTarget.dataset.id)}>
              <span className={styles.date}>{d.day.substring(6,8)}</span><span className={styles.text}>{date.date === d.day ? "오늘" : DayOfTheWeek(d.week)}</span>
              </button>
            )}
          </div>

        <div className={styles.swiperWrap}>
          <Swiper
            slidesPerView={3}
            spaceBetween={5}
            navigation={{
              prevEl: ".festivalPrevBtn",
              nextEl: ".festivalNextBtn",
            }}
            modules={[Navigation]}
            className="mySwiper">
            {festivalLists && festivalLists.map((list,index) =>
            <SwiperSlide key={index}> 
              <div className={styles.festival}>
                <img className={styles.img} src={list.firstimage ? list.firstimage : "http://localhost:3000/images/bg_no_festival.png"} alt="축제이미지" />
                <div className={styles.cont}>
                  <strong className={styles.subject}>{list.title}</strong>
                  <span className={styles.addr}>{list.addr1.split(" ")[1]}</span>
                  <em className={styles.start}>{newDate(list.eventstartdate)} ~ {newDate(list.eventenddate)}</em>
                  <Link to={`/festival/${list.contentid}`}className={styles.link}>바로가기</Link>
                </div>
              </div>
            </SwiperSlide>
            )}

            {festivalLists === undefined ? 
              <div className={styles.noData}>
                <img className={styles.noImg} src="https://cdn.visitkorea.or.kr/resources/images/submain/bg_festival_no_list.png" alt="풍선" />
                <h4 className={styles.noTitle}>앗! 아쉽지만 찾으신 날짜에 진행중인 축제·행사가 없어요.</h4>
                <p className={styles.noText}>다른 축제·행사를 살펴보는건 어떨까요?</p>
              </div>
            : festivalLists.length === 1 ? 
              <>
                <SwiperSlide key="1"> 
                  <div className={`${styles.festival} ${styles.noImg}`}>
                    <img className={styles.img} src="http://localhost:3000/images/bg_no_festival.png" alt="" />
                  </div>
                </SwiperSlide>
                <SwiperSlide key="2"> 
                  <div className={`${styles.festival} ${styles.noImg}`}>
                    <img className={styles.img} src="http://localhost:3000/images/bg_no_festival.png" alt="" />
                  </div>
                </SwiperSlide>
              </> : festivalLists.length === 2 ? 
                <SwiperSlide key="3"> 
                  <div className={`${styles.festival} ${styles.noImg}`}>
                  <img className={styles.img} src="http://localhost:3000/images/bg_no_festival.png" alt="" />
                  </div>
                </SwiperSlide>
              :
              <></>}

            </Swiper >
          <button className={`${styles.festivalPrevBtn} festivalPrevBtn`}><FaArrowLeft/></button>
          <button className={`${styles.festivalNextBtn} festivalNextBtn`}><FaArrowRight /></button>
          </div>
          
        <div className={styles.festivalLink}>
          <Link to="/festival"><strong>축제 · 행사</strong> 바로가기 <IoIosArrowForward/></Link>
        </div>
        </div>
    </div>
  );
}



