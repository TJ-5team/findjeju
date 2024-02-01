import React, { useState, useEffect, require } from "react";
import styles from './styles.module.css';
import { Link } from "react-router-dom";
import DetailTitle from "../DetailPage/title/DetailTitle";
import useGetList from "../../hooks/useGetList";
import DetailReply from "../DetailPage/reply/DetailReply";
import axios from "axios";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Thumbs, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import 'swiper/css/effect-fade';

export default function TripCourse(){
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [onIndex, setOnIndex] = useState(0);

  const handleSlideClick = (index) => {
    setOnIndex(index);
  };

  const [courseTotal] = useGetList(`http://apis.data.go.kr/B551011/KorService1/detailCommon1?serviceKey=H4pEvj%2FnHLi4pMfSQvy0lqYgV7Wv1sdyTEBMecAG8%2Be%2FRh%2BjKs4mFAoT3D4cRrjVoEQQEyzLzSzrDjBCeYT9ng%3D%3D&contentTypeId=25&contentId=2372024&MobileOS=ETC&MobileApp=AppTest&defaultYN=Y&firstImageYN=Y&areacodeYN=Y&catcodeYN=Y&addrinfoYN=Y&mapinfoYN=Y&overviewYN=Y&_type=json`);
  const [courseIntro] = useGetList(`http://apis.data.go.kr/B551011/KorService1/detailIntro1?serviceKey=H4pEvj%2FnHLi4pMfSQvy0lqYgV7Wv1sdyTEBMecAG8%2Be%2FRh%2BjKs4mFAoT3D4cRrjVoEQQEyzLzSzrDjBCeYT9ng%3D%3D&contentTypeId=25&contentId=2372024&MobileOS=ETC&MobileApp=AppTest&_type=json`);  
  
  const [tripCourseJson, setTripCourseJson] = useState([]);
  useEffect(() => {
    axios.get("http://127.0.0.1:3000/data/tripCourse.json")
      .then(result => {
        setTripCourseJson(result.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);
  
  console.log(tripCourseJson);
  
  return(
    <>
      <div className={styles.wrap}>
        <div className={`${styles.tripCourseContent} inner`}>
          <div className={styles.tripCourseTitle}>
            <em className={styles.titleRed}>{tripCourseJson.length} 코스</em>
            {courseTotal.map((title, titleIdx)=>
              <DetailTitle
                key={titleIdx}
                commonList ={title}
                detailInfo ={courseIntro}
              />
            )}
          </div>
          <div className={styles.tripCourseInfo}>
            <ul className={styles.tripCourseIcon}>
              <li>
                <figure>
                  <img src="https://korean.visitkorea.or.kr/resources/images/sub/icon_cos_schedule1.gif" alt="" />
                </figure>
                <div>
                  <p>일정</p>
                  <strong>당일여행</strong>
                </div>
              </li>
              <li>
                <figure>
                  <img src="https://korean.visitkorea.or.kr/resources/images/sub/icon_cos_theme4.gif" alt="" />
                </figure>
                <div>
                  <p>테마</p>
                  <strong>힐링코스</strong>
                </div>
              </li>
            </ul>
            {courseTotal.map((toComment, commentIdx)=>
              <p key={commentIdx} className={styles.tripCourseText}>
                {toComment.overview}
              </p>
              )}
          </div>
          <div className={styles.tripCourseSlide}>
            <div className={`${styles.courseSwiper} courseSwiper`}>
              <Swiper
                style={{
                  '--swiper-navigation-color': '#fff',
                  '--swiper-pagination-color': '#fff',
                }}
                slidesPerView={4}
                className={`${styles.courseImg} courseImg`}
                onSwiper={setThumbsSwiper}
                navigation={true}
                watchSlidesProgress={true}
                modules={[Pagination, Navigation, Thumbs]}
              >
                {tripCourseJson.map((courseInfo,idx)=>
                  <SwiperSlide
                    key={idx}
                    className={`${styles.trip}
                      ${idx === onIndex ? styles.on : ''}
                      ${idx < onIndex ? styles.on100 : ''}
                      ${idx > onIndex === '' }`}
                    onClick={() => handleSlideClick(idx)}
                  >
                  <em>{idx + 1}</em>
                    <div className={`${styles.courseLink} courseLink`}
                      style={{backgroundImage: `url(${courseInfo.firstimage})`}}>
                      <span>{courseInfo.subname}</span>
                    </div>
                  </SwiperSlide>
                )}
              </Swiper>
              <Swiper
                className={`${styles.courseTap} courseTap`}
                spaceBetween={40}
                slidesPerView={1}
                thumbs={{swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null}}
                modules={[Navigation, Thumbs, EffectFade]}
                speed={1}
              >
                {tripCourseJson.map((courseInfo, cIndex)=>{
                  return (
                  <SwiperSlide key={cIndex} className={`${styles.courseTapContent} courseTapContent`}>
                    <div className={`${styles.courseTapTitleWrap} courseTapTitleWrap`}>
                      <em>{cIndex + 1}</em>
                      <strong>{courseInfo.subname}</strong>
                      <p>{courseInfo.addr}</p>
                    </div>
                    <div className={`${styles.courseTapImgWrap} courseTapImgWrap`}>
                      <div className={`${styles.courseTapImg} courseTapImg`}>
                        <Link to="#" style={{backgroundImage: `url(${courseInfo.firstimage})`}}>
                        </Link>
                      </div>
                      <div className={`${styles.courseTapImg} courseTapImg`}>
                        <Link to="#" style={{backgroundImage: `url(${courseInfo.firstimage2})`}}>
                        </Link>
                      </div>
                      <div className={`${styles.courseTapImg} courseTapImg`}>
                        <Link to="#" style={{backgroundImage: `url(${courseInfo.firstimage3})`}}>
                        </Link>
                      </div>
                    </div>
                    <div className={styles.courseSubComment}>
                      {courseInfo.subdetailoverview}
                    </div>
                  </SwiperSlide>
                  )
                })}
              </Swiper>
            </div>
          </div>
          <DetailReply 
            contentid = {2372024}
            contenttypeid = {25}
          />
        </div>
      </div>
    </>
  );
};