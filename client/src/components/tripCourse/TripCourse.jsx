import React, { useState, useRef } from "react";
import styles from './styles.module.css';
import Mapimage from "../Map/Mapimage";
import useGetList from "../../hooks/useGetList";
import { Link } from "react-router-dom";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Thumbs, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import 'swiper/css/effect-fade';
import SwiperComponents from "./swiperCourse/SwiperComponents";

export default function TripCourse(){
  <script
    type="text/javascript"
    src="//dapi.kakao.com/v2/maps/sdk.js?appkey=7c3fb110935eb9d27629c7f2fe22a1a4.&libraries=services,clusterer"
  ></script>

  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [number, setNumber] = useState(0);

  const arr = [1,2,3,4,5,6];

  const getNumber = (e) =>{
    setNumber(e);
  }

  console.log(number);

  return(
    <>
      <div className={styles.wrap}>
        <div className={`${styles.tripCourseContent} inner`}>
          <div className={styles.tripCourseTitle}>
            <div className={styles.courseTitle}>
              <em>1 코스</em>
              <h2>서해랑길(진도, 목포구간)</h2>
            </div>
            <div className={styles.courseSubAddr}>
              <span>전라남도 목포시 고하도안길 234</span>
              <span>내 위치에서 13239.4km</span>
            </div>
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
              <li>
                <figure>
                  <img src="https://korean.visitkorea.or.kr/resources/images/sub/ico_schedule_tag.png" alt="" />
                </figure>
                <div>
                  <p>태그</p>
                  <div className={styles.tripInfoHash}>
                    <Link to="#">#해시태그</Link>
                    <Link to="#">#해시태그</Link>
                    <Link to="#">#해시태그</Link>
                    <Link to="#">#해시태그</Link>
                    <Link to="#">#해시태그</Link>
                    <Link to="#">#해시태그</Link>
                    <Link to="#">#해시태그</Link>
                    <Link to="#">#해시태그</Link>
                    <Link to="#">#해시태그</Link>
                  </div>
                </div>
              </li>
            </ul>
            <p className={styles.tripCourseText}>
              서해랑길은 땅끝마을 해남을 시작으로 인천 강화까지 총 1,800km의 길이다. 새와 나무, 바람의 터전이 된 쌍계사 정원과 가을 낙엽 길을 걸으며 자연 있는 그대로를 마주하게 된다. 서해랑 길로 이어진 길 따라 걸어가면 바다 소리로 채워진 고하도, 일몰 시간 섬과 섬 사이로 지는 해를 볼 수 있는 세방 낙조 그리고 이제는 과거의 길이 된 목포근대문화의 거리를 만날 수 있다.
            </p>
          </div>
          <Mapimage/>
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
                {arr.map((val,idx)=>{
                  return <SwiperComponents
                          key={idx}
                          list={idx}
                          getNumber={getNumber}
                          number={number}
                        />
                })}


                {/* <SwiperSlide className={`${styles.trip} trip ${styles.on} on`}>
                  <em>1</em>
                  <div className={`${styles.courseLink} courseLink`}>
                    <Link to="#">
                      <span>제목</span>
                    </Link>
                  </div>
                </SwiperSlide>*/}
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
                <SwiperSlide className={`${styles.courseTapContent} courseTapContent`}>
                  <div className={`${styles.courseTapTitleWrap} courseTapTitleWrap`}>
                    <em>1</em>
                    <strong>관광지 이름</strong>
                  </div>
                  <div className={styles.courseSubAddr}>
                    <span>전라남도 목포시 고하도안길 234</span>
                    <span>내 위치에서 13239.4km</span>
                  </div>
                  <div className={`${styles.courseTapImgWrap} courseTapImgWrap`}>
                    <div className={`${styles.courseTapImg} courseTapImg`}>
                      <Link to="#"></Link>
                    </div>
                    <div className={`${styles.courseTapImg} courseTapImg`}>
                      <Link to="#"></Link>
                    </div>
                    <div className={`${styles.courseTapImg} courseTapImg`}>
                      <Link to="#"></Link>
                    </div>
                  </div>
                  <ul>
                    <li>
                      <Link to="">#해시태그</Link>
                    </li>
                    <li>
                      <Link to="">#해시태그해시태그</Link>
                    </li>
                    <li>
                      <Link to="">#해시해시태그</Link>
                    </li>
                    <li>
                      <Link to="">#해시태그</Link>
                    </li>
                    <li>
                      <Link to="">#해시해시태그</Link>
                    </li>
                    <li>
                      <Link to="">#해시태그</Link>
                    </li>
                    <li>
                      <Link to="">#해시태그해시태그</Link>
                    </li>
                    <li>
                      <Link to="">#해시태그</Link>
                    </li>
                    <li>
                      <Link to="">#해시태그</Link>
                    </li>
                    
                  </ul>
                </SwiperSlide>
                <SwiperSlide className={`${styles.courseTapContent} courseTapContent`}>
                  <div className={`${styles.courseTapTitleWrap} courseTapTitleWrap`}>
                    <em>4</em>
                    <strong>관광지 이름</strong>
                  </div>
                  <div className={styles.courseSubAddr}>
                    <span>전라남도 목포시 고하도안길 234</span>
                    <span>내 위치에서 13239.4km</span>
                  </div>
                  <div className={`${styles.courseTapImgWrap} courseTapImgWrap`}>
                    <div className={`${styles.courseTapImg} courseTapImg`}>
                      <Link to="#"></Link>
                    </div>
                    <div className={`${styles.courseTapImg} courseTapImg`}>
                      <Link to="#"></Link>
                    </div>
                    <div className={`${styles.courseTapImg} courseTapImg`}>
                      <Link to="#"></Link>
                    </div>
                  </div>
                  <ul>
                    <li>
                      <Link to="">#해시태그</Link>
                    </li>
                  </ul>
                </SwiperSlide>
                <SwiperSlide className={`${styles.courseTapContent} courseTapContent`}>
                  <div className={`${styles.courseTapTitleWrap} courseTapTitleWrap`}>
                    <em>2</em>
                    <strong>관광지 이름</strong>
                  </div>
                  <div className={styles.courseSubAddr}>
                    <span>전라남도 목포시 고하도안길 234</span>
                    <span>내 위치에서 13239.4km</span>
                  </div>
                  <div className={`${styles.courseTapImgWrap} courseTapImgWrap`}>
                    <div className={`${styles.courseTapImg} courseTapImg`}>
                      <Link to="#"></Link>
                    </div>
                    <div className={`${styles.courseTapImg} courseTapImg`}>
                      <Link to="#"></Link>
                    </div>
                    <div className={`${styles.courseTapImg} courseTapImg`}>
                      <Link to="#"></Link>
                    </div>
                  </div>
                  <ul>
                    <li>
                      <Link to="">#해시태그</Link>
                    </li>
                    <li>
                      <Link to="">#해시태그해시태그</Link>
                    </li>
                    <li>
                      <Link to="">#해시해시태그</Link>
                    </li>
                    <li>
                      <Link to="">#해시태그</Link>
                    </li>
                    <li>
                      <Link to="">#해시해시태그</Link>
                    </li>
                    <li>
                      <Link to="">#해시태그</Link>
                    </li>
                    <li>
                      <Link to="">#해시태그해시태그</Link>
                    </li>
                    <li>
                      <Link to="">#해시태그</Link>
                    </li>
                    <li>
                      <Link to="">#해시태그</Link>
                    </li>
                    
                  </ul>
                </SwiperSlide>
                <SwiperSlide className={`${styles.courseTapContent} courseTapContent`}>
                  <div className={`${styles.courseTapTitleWrap} courseTapTitleWrap`}>
                    <em>3</em>
                    <strong>관광지 이름</strong>
                  </div>
                  <div className={styles.courseSubAddr}>
                    <span>전라남도 목포시 고하도안길 234</span>
                    <span>내 위치에서 13239.4km</span>
                  </div>
                  <div className={`${styles.courseTapImgWrap} courseTapImgWrap`}>
                    <div className={`${styles.courseTapImg} courseTapImg`}>
                      <Link to="#"></Link>
                    </div>
                    <div className={`${styles.courseTapImg} courseTapImg`}>
                      <Link to="#"></Link>
                    </div>
                    <div className={`${styles.courseTapImg} courseTapImg`}>
                      <Link to="#"></Link>
                    </div>
                  </div>
                  <ul>
                    <li>
                      <Link to="">#해시태그</Link>
                    </li>
                    <li>
                      <Link to="">#해시태그해시태그</Link>
                    </li>
                    <li>
                      <Link to="">#해시해시태그</Link>
                    </li>
                    <li>
                      <Link to="">#해시태그</Link>
                    </li>
                    <li>
                      <Link to="">#해시해시태그</Link>
                    </li>
                    <li>
                      <Link to="">#해시태그</Link>
                    </li>
                    <li>
                      <Link to="">#해시태그해시태그</Link>
                    </li>
                    <li>
                      <Link to="">#해시태그</Link>
                    </li>
                    <li>
                      <Link to="">#해시태그</Link>
                    </li>
                    
                  </ul>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};