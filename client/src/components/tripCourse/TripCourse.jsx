import React, { useState, useRef, useEffect } from "react";
import styles from './styles.module.css';
import Mapimage from "../Map/Mapimage";
import { Link } from "react-router-dom";
import DetailTitle from "../DetailPage/title/DetailTitle";
import useGetList from "../../hooks/useGetList";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Thumbs, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import 'swiper/css/effect-fade';


export default function TripCourse(){
  <script
    type="text/javascript"
    src="//dapi.kakao.com/v2/maps/sdk.js?appkey=7c3fb110935eb9d27629c7f2fe22a1a4.&libraries=services,clusterer"
  ></script>

  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [onIndex, setOnIndex] = useState(0);

  const handleSlideClick = (index) => {
    setOnIndex(index);
  };


  
  const [courseTotal] = useGetList(`http://apis.data.go.kr/B551011/KorService1/detailCommon1?serviceKey=H4pEvj%2FnHLi4pMfSQvy0lqYgV7Wv1sdyTEBMecAG8%2Be%2FRh%2BjKs4mFAoT3D4cRrjVoEQQEyzLzSzrDjBCeYT9ng%3D%3D&contentTypeId=25&contentId=2372024&MobileOS=ETC&MobileApp=AppTest&defaultYN=Y&firstImageYN=Y&areacodeYN=Y&catcodeYN=Y&addrinfoYN=Y&mapinfoYN=Y&overviewYN=Y&_type=json`);
  const [courseIntro] = useGetList(`http://apis.data.go.kr/B551011/KorService1/detailIntro1?serviceKey=H4pEvj%2FnHLi4pMfSQvy0lqYgV7Wv1sdyTEBMecAG8%2Be%2FRh%2BjKs4mFAoT3D4cRrjVoEQQEyzLzSzrDjBCeYT9ng%3D%3D&contentTypeId=25&contentId=2372024&MobileOS=ETC&MobileApp=AppTest&_type=json`);  
  const [courseInfo] = useGetList(`http://apis.data.go.kr/B551011/KorService1/detailInfo1?serviceKey=H4pEvj%2FnHLi4pMfSQvy0lqYgV7Wv1sdyTEBMecAG8%2Be%2FRh%2BjKs4mFAoT3D4cRrjVoEQQEyzLzSzrDjBCeYT9ng%3D%3D&contentTypeId=25&contentId=2372024&MobileOS=ETC&MobileApp=AppTest&_type=json`);
  const [courseImg] = useGetList(`http://apis.data.go.kr/B551011/KorService1/detailImage1?ServiceKey=H4pEvj%2FnHLi4pMfSQvy0lqYgV7Wv1sdyTEBMecAG8%2Be%2FRh%2BjKs4mFAoT3D4cRrjVoEQQEyzLzSzrDjBCeYT9ng%3D%3D&contentId=126460&MobileOS=ETC&MobileApp=AppTest&imageYN=Y&subImageYN=Y&numOfRows=10&_type=json`);
  const [coursePage] = useGetList(`http://apis.data.go.kr/B551011/KorService1/detailCommon1?ServiceKey=H4pEvj%2FnHLi4pMfSQvy0lqYgV7Wv1sdyTEBMecAG8%2Be%2FRh%2BjKs4mFAoT3D4cRrjVoEQQEyzLzSzrDjBCeYT9ng%3D%3D&contentTypeId=12&contentId=126460&MobileOS=ETC&MobileApp=AppTest&defaultYN=Y&firstImageYN=Y&areacodeYN=Y&catcodeYN=Y&addrinfoYN=Y&mapinfoYN=Y&overviewYN=Y&_type=json`);




  // const [courseTotal, setCourseTotal] = useState([]);
  // const [courseIntro, setCourseIntro] = useState([]);
  // const [courseInfo, setCourseInfo] = useState([]);
  // const [courseImg, setCourseImg] = useState([]);
  // const [coursePage, setCoursePage] = useState([]);

  // useEffect(() => {
  //   axios
  //   .get(`http://apis.data.go.kr/B551011/KorService1/detailCommon1?serviceKey=H4pEvj%2FnHLi4pMfSQvy0lqYgV7Wv1sdyTEBMecAG8%2Be%2FRh%2BjKs4mFAoT3D4cRrjVoEQQEyzLzSzrDjBCeYT9ng%3D%3D
  //   &contentTypeId=25&contentId=2372024&MobileOS=ETC&MobileApp=AppTest&defaultYN=Y&firstImageYN=Y&areacodeYN=Y&catcodeYN=Y&addrinfoYN=Y&mapinfoYN=Y&overviewYN=Y&_type=json`)
  //   .then(result => setCourseTotal(result.data.response.body.items.item));
  // }, []);

  // useEffect(() => {
  //   axios
  //   .get(`http://apis.data.go.kr/B551011/KorService1/detailIntro1?serviceKey=H4pEvj%2FnHLi4pMfSQvy0lqYgV7Wv1sdyTEBMecAG8%2Be%2FRh%2BjKs4mFAoT3D4cRrjVoEQQEyzLzSzrDjBCeYT9ng%3D%3D
  //   &contentTypeId=25&contentId=2372024&MobileOS=ETC&MobileApp=AppTest&_type=json`)
  //   .then(result => setCourseIntro(result.data.response.body.items.item));
  // }, []);

  // useEffect(() => {
  //   axios
  //   .get(`http://apis.data.go.kr/B551011/KorService1/detailInfo1?serviceKey=H4pEvj%2FnHLi4pMfSQvy0lqYgV7Wv1sdyTEBMecAG8%2Be%2FRh%2BjKs4mFAoT3D4cRrjVoEQQEyzLzSzrDjBCeYT9ng%3D%3D
  //   &contentTypeId=25&contentId=2372024&MobileOS=ETC&MobileApp=AppTest&_type=json`)
  //   .then(result => setCourseInfo(result.data.response.body.items.item));
  // }, []);
  // useEffect(() => {
  //   axios
  //   .get(`http://apis.data.go.kr/B551011/KorService1/detailImage1?ServiceKey=H4pEvj%2FnHLi4pMfSQvy0lqYgV7Wv1sdyTEBMecAG8%2Be%2FRh%2BjKs4mFAoT3D4cRrjVoEQQEyzLzSzrDjBCeYT9ng%3D%3D
  //   &contentId=126460&MobileOS=ETC&MobileApp=AppTest&imageYN=Y&subImageYN=Y&numOfRows=10&_type=json`)
  //   .then(result => setCourseImg(result.data.response.body.items.item));
  // }, []);

  // useEffect(() => {
  //   axios
  //   .get(`http://apis.data.go.kr/B551011/KorService1/detailCommon1?ServiceKey=H4pEvj%2FnHLi4pMfSQvy0lqYgV7Wv1sdyTEBMecAG8%2Be%2FRh%2BjKs4mFAoT3D4cRrjVoEQQEyzLzSzrDjBCeYT9ng%3D%3D
  //   &contentTypeId=12&contentId=126460&MobileOS=ETC&MobileApp=AppTest&defaultYN=Y&firstImageYN=Y&areacodeYN=Y&catcodeYN=Y&addrinfoYN=Y&mapinfoYN=Y&overviewYN=Y&_type=json`)
  //   .then(result => setCoursePage(result.data.response.body.items.item));
  // }, []);

  return(
    <>
      <div className={styles.wrap}>
        <div className={`${styles.tripCourseContent} inner`}>
          <div className={styles.tripCourseTitle}>
            <div className={styles.courseTitle}>
              <em>1 코스</em>
              <h2>{courseTotal.title}</h2>
            </div>
            <div className={styles.courseSubAddr}>
              {/* <span>전라남도 목포시 고하도안길 234</span> */}
              <span>{courseIntro.distance}</span>
            </div>
          </div>
          {/* {courseTotal.map((title, titleIdx)=>{
            <DetailTitle
              key={titleIdx}
              commonList ={title.title}
              infoList ={title.overview}
            />
            
          })} */}
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
              <li>
                <figure>
                  <img src="https://korean.visitkorea.or.kr/resources/images/sub/ico_schedule_tag.png" alt="" />
                </figure>
                <div>
                  <p>태그</p>
                  <div className={styles.tripInfoHash}>
                    <Link to="#">#해시태그</Link>
                  </div>
                </div>
              </li>
            </ul>
            <p className={styles.tripCourseText}>
              {courseTotal.overview}
            </p>
          </div>
          <Mapimage />
          <div className={styles.tripCourseSlide}>
            <div className={`${styles.courseSwiper} courseSwiper`}>
              <Swiper
                style={{
                  '--swiper-navigation-color': '#fff',
                  '--swiper-pagination-color': '#fff',
                }}
                slidesPerView={4.5}
                className={`${styles.courseImg} courseImg`}
                onSwiper={setThumbsSwiper}
                navigation={true}
                watchSlidesProgress={true}
                modules={[Pagination, Navigation, Thumbs]}
              >
                {courseInfo.map((courseInfo,idx)=>{
                  const slideOn = idx === onIndex;
                  const slideBeforeOn = idx < onIndex;
                  const slideAfterOn = idx > onIndex;
                  return (
                    <SwiperSlide
                      key={idx}
                      className={`${styles.trip}
                        ${slideOn ? styles.on : ''}
                        ${slideBeforeOn ? styles.on100 : ''}
                        ${slideAfterOn === '' }`
                      }
                      onClick={() => handleSlideClick(idx)}
                    >
                    <em>{idx}</em>
                    {coursePage.map((coursePage, pageIdx)=>{
                      return <div key={pageIdx} className={`${styles.courseLink} courseLink`}
                        style={{backgroundImage: `url(${coursePage.firstimage})`}}>
                        <span>{courseInfo.subname}</span>
                      </div>
                    })}
                  </SwiperSlide>
                  )
                })}
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
                      <em>{cIndex}</em>
                      <strong>{courseInfo.subname}</strong>
                    </div>
                    <div className={`${styles.courseTapImgWrap} courseTapImgWrap`}>
                      {courseImg.slice(0, 3).map((courseImg, imgIndex)=>{
                      return <div key={imgIndex} className={`${styles.courseTapImg} courseTapImg`}>
                        <Link to="#" style={{backgroundImage: `url(${courseImg.originimgurl})`}}>
                        </Link>
                      </div>
                      })}
                    </div>
                    <div className={styles.courseSubAddr}>
                      {courseInfo.subdetailoverview}
                    </div>
                  </SwiperSlide>
                  )
                })}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};