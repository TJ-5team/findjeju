import React from 'react';
import styles from './styles.module.css';
import { SwiperSlide } from 'swiper/react';
import { Link } from 'react-router-dom';

export default function SwiperComponents({list,getNumber,number}) {

  const swiperNumber = (i) =>{
    getNumber(i);
    console.log(i);
  }

  // function numArr(num){
  //   return Array.from({length:num}).map((v,i)=>i+1).join('');
  // }

  return (
    <>
      <SwiperSlide className={`${styles.trip}`}>
        <em>{list}</em>
        <div className={`${styles.courseLink} courseLink`} onClick={()=>{swiperNumber(list)}}>
          <span>제목</span>
        </div>
      </SwiperSlide>
    </>
  );
}

