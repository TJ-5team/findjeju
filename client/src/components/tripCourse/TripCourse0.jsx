import React, { useState, useEffect } from "react";
import styles from './styles.module.css';
import { Link } from "react-router-dom";
import DetailTitle from "../DetailPage/title/DetailTitle";
import useGetList from "../../hooks/useGetList";
import DetailReply from "../DetailPage/reply/DetailReply";

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

  const [courseTotal] = useGetList(`http://apis.data.go.kr/B551011/KorService1/detailCommon1?serviceKey=H4pEvj%2FnHLi4pMfSQvy0lqYgV7Wv1sdyTEBMecAG8%2Be%2FRh%2BjKs4mFAoT3D4cRrjVoEQQEyzLzSzrDjBCeYT9ng%3D%3D&contentTypeId=25&contentId=2804721&MobileOS=ETC&MobileApp=AppTest&defaultYN=Y&firstImageYN=Y&areacodeYN=Y&catcodeYN=Y&addrinfoYN=Y&mapinfoYN=Y&overviewYN=Y&_type=json`);
  const [courseIntro] = useGetList(`http://apis.data.go.kr/B551011/KorService1/detailIntro1?serviceKey=H4pEvj%2FnHLi4pMfSQvy0lqYgV7Wv1sdyTEBMecAG8%2Be%2FRh%2BjKs4mFAoT3D4cRrjVoEQQEyzLzSzrDjBCeYT9ng%3D%3D&contentTypeId=25&contentId=2804721&MobileOS=ETC&MobileApp=AppTest&_type=json`);  
  const [courseInfo] = useGetList(`http://apis.data.go.kr/B551011/KorService1/detailInfo1?serviceKey=H4pEvj%2FnHLi4pMfSQvy0lqYgV7Wv1sdyTEBMecAG8%2Be%2FRh%2BjKs4mFAoT3D4cRrjVoEQQEyzLzSzrDjBCeYT9ng%3D%3D&contentTypeId=25&contentId=2804721&MobileOS=ETC&MobileApp=AppTest&_type=json`);
  const [courseImg] = useGetList(`http://apis.data.go.kr/B551011/KorService1/detailImage1?ServiceKey=H4pEvj%2FnHLi4pMfSQvy0lqYgV7Wv1sdyTEBMecAG8%2Be%2FRh%2BjKs4mFAoT3D4cRrjVoEQQEyzLzSzrDjBCeYT9ng%3D%3D&contentId=126460&MobileOS=ETC&MobileApp=AppTest&imageYN=Y&subImageYN=Y&numOfRows=10&_type=json`);
  const [coursePage] = useGetList(`http://apis.data.go.kr/B551011/KorService1/detailCommon1?ServiceKey=H4pEvj%2FnHLi4pMfSQvy0lqYgV7Wv1sdyTEBMecAG8%2Be%2FRh%2BjKs4mFAoT3D4cRrjVoEQQEyzLzSzrDjBCeYT9ng%3D%3D&contentTypeId=12&contentId=126460&MobileOS=ETC&MobileApp=AppTest&defaultYN=Y&firstImageYN=Y&areacodeYN=Y&catcodeYN=Y&addrinfoYN=Y&mapinfoYN=Y&overviewYN=Y&_type=json`); //코스정보

  console.log(courseTotal);
  
  return(
    <>
      <div className={styles.wrap}>
        <div className={`${styles.tripCourseContent} inner`}>
          <div className={styles.tripCourseTitle}>
            <em className={styles.titleRed}>{courseInfo.length} 코스</em>
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
                slidesPerView={courseInfo.length > 4 ? 4.5 : 4}
                className={`${styles.courseImg} courseImg`}
                onSwiper={setThumbsSwiper}
                navigation={true}
                watchSlidesProgress={true}
                modules={[Pagination, Navigation, Thumbs]}
              >
                {courseInfo.map((courseInfo,idx)=>
                  <SwiperSlide
                    key={idx}
                    className={`${styles.trip}
                      ${idx === onIndex ? styles.on : ''}
                      ${idx < onIndex ? styles.on100 : ''}
                      ${idx > onIndex === '' }`}
                    onClick={() => handleSlideClick(idx)}
                  >
                  <em>{idx + 1}</em>
                  {courseTotal.map((courseTotal, pageIdx)=>
                    <div key={pageIdx} className={`${styles.courseLink} courseLink`}
                      style={{backgroundImage: `url(${courseTotal.firstimage})`}}>
                      <span>{courseInfo.subname}</span>
                    </div>
                  )}
                  </SwiperSlide>
                )}
              </Swiper>
              <Swiper
                className={`${styles.courseTap} courseTap`}
                spaceBetween={40}
                slidesPerView={1}
                thumbs={{swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null}}
                modules={[Navigation, Thumbs, EffectFade]}
                effect={'fade'}
                speed={1}
              >
                {courseInfo.map((courseInfo, cIndex)=>{
                  return (
                  <SwiperSlide key={cIndex} className={`${styles.courseTapContent} courseTapContent`}>
                    <div className={`${styles.courseTapTitleWrap} courseTapTitleWrap`}>
                      <em>{cIndex + 1}</em>
                      <strong>{courseInfo.subname}</strong>
                    </div>
                    <div className={`${styles.courseTapImgWrap} courseTapImgWrap`}>
                      {courseImg.slice(0, 3).map((courseImg, imgIndex)=>
                        <div key={imgIndex} className={`${styles.courseTapImg} courseTapImg`}>
                          <Link to="#" style={{backgroundImage: `url(${courseImg.originimgurl})`}}>
                          </Link>
                        </div>
                      )}
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