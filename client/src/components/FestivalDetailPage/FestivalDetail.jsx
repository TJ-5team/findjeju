import React from "react";
import { useParams } from "react-router-dom";
import useGetList from "../../hooks/useGetList";
import styles from './styles.module.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { MdArrowBackIos } from "react-icons/md";
import { MdArrowForwardIos } from "react-icons/md";
import { Pagination } from 'swiper/modules';
import { BsCalendar2Heart } from "react-icons/bs";
import { IoTimeOutline } from "react-icons/io5";
import { TbCoin } from "react-icons/tb";
import { TbSpeakerphone } from "react-icons/tb";
import { BsTelephoneFill } from "react-icons/bs";
import { FaMapMarkerAlt } from "react-icons/fa";
import Mapimage from "../Map/Mapimage";
import TripInfo from "../tripInfo/TripInfo";

export default function FestivalDetail(){
  const {contentid} = useParams();
  const [lists] = useGetList(`http://apis.data.go.kr/B551011/KorService1/detailCommon1?ServiceKey=CJ%2FlY8Dc3dAVFPdMOF6t%2FHXVFUUjp5iNiBLNNPkrq7ROViBwSkb6oMVC4s5NZjEztVJWKm0beaKYDWMn7suxaQ%3D%3D&contentTypeId=15&contentId=${contentid}&MobileOS=ETC&MobileApp=AppTest&defaultYN=Y&firstImageYN=Y&areacodeYN=Y&catcodeYN=Y&addrinfoYN=Y&mapinfoYN=Y&overviewYN=Y&_type=json`);
  const [info] = useGetList(`http://apis.data.go.kr/B551011/KorService1/detailIntro1?serviceKey=CJ%2FlY8Dc3dAVFPdMOF6t%2FHXVFUUjp5iNiBLNNPkrq7ROViBwSkb6oMVC4s5NZjEztVJWKm0beaKYDWMn7suxaQ%3D%3D&numOfRows=50&pageNo=1&MobileApp=APPTest&MobileOS=ETC&contentId=${contentid}&contentTypeId=15&_type=json`);
  const [overview] = useGetList(`http://apis.data.go.kr/B551011/KorService1/detailInfo1?serviceKey=CJ%2FlY8Dc3dAVFPdMOF6t%2FHXVFUUjp5iNiBLNNPkrq7ROViBwSkb6oMVC4s5NZjEztVJWKm0beaKYDWMn7suxaQ%3D%3D&numOfRows=50&pageNo=1&MobileOS=ETC&MobileApp=AppTest&contentId=${contentid}&contentTypeId=15&_type=json`);
  const [imgs] = useGetList(`http://apis.data.go.kr/B551011/KorService1/detailImage1?serviceKey=CJ%2FlY8Dc3dAVFPdMOF6t%2FHXVFUUjp5iNiBLNNPkrq7ROViBwSkb6oMVC4s5NZjEztVJWKm0beaKYDWMn7suxaQ%3D%3D&numOfRows=50&pageNo=1&MobileOS=ETC&MobileApp=AppTest&contentId=${contentid}&imageYN=Y&subImageYN=Y&_type=json`);
  
  const changeText = (e) => {
    return e.split('<br>').map(line => <>{line}<br/></>);
  }

  const changeText1 = (e) => {
    return e.split('<br>').map(line => <div>{line}</div>);
  }

  const newDate = (date) => {
    const y = date.substring(0,4);
    const m = date.substring(4,6);
    const d = date.substring(6,8);
    return (y + ". " + m + ". " + d);
  }

  return(
    <div className={styles.wrap}>
      <div className="inner">
        {lists.map(list =>
        <>
          <h1 key={list.subTitle} className={styles.subTitle}>{list.title}</h1>
          <h2 key={list.addr} className={styles.addr}><FaMapMarkerAlt />{list.addr1}</h2>
        </>
        )}
        <div className={styles.swiper}>
          <Swiper
            slidesPerView={3}
            spaceBetween={3}
            navigation={{
              prevEl: ".festivalPrevBtn",
              nextEl: ".festivalNextBtn",
            }}
            pagination={true}
            modules={[Navigation, Pagination]}
            className="mySwiper">
            
            {imgs.map(img =>
            <SwiperSlide key={img.originimgurl}> 
              <img className={styles.img} src={img.originimgurl} alt="행사이미지" />
            </SwiperSlide>
            )}
          </Swiper >
          <button className={`${styles.festivalPrevBtn} festivalPrevBtn`}><MdArrowBackIos/></button>
          <button className={`${styles.festivalNextBtn} festivalNextBtn`}><MdArrowForwardIos/></button>
        </div>

        <div className={styles.textBox}>
          {overview.map(i =>
          <p key={i.serialnum} className={styles.text}>{changeText(i.infotext)}</p>
          )}
        </div>
        
        {info.map(i =>
        <ul key={i.playtime} className={styles.info}>
          <li><BsCalendar2Heart className={styles.calendar}/>{newDate(i.eventstartdate)} ~ {(i.eventenddate)}</li>
          <li key={i.playtime}><IoTimeOutline className={styles.marker}/>{i.playtime}</li>
          <li><TbCoin className={styles.coin}/>{changeText1(i.usetimefestival)}</li>
          <li><TbSpeakerphone className={styles.speaker}/> {i.sponsor1}</li>
          <li><BsTelephoneFill className={styles.tel}/> {i.sponsor1tel}</li>
        </ul>
        )}
        {lists.map(list =>
        <Mapimage x={list.mapx} y={list.mapy} title={list.title}/>
        )}

        <TripInfo/>
      </div>
    </div>
  )
}