import React, { useState } from "react";
import useGetDate from "../../hooks/useGetDate";
import styles from './styles.module.css';
import { IoCalendarNumberOutline } from "react-icons/io5";
import { Link } from 'react-router-dom';
import useGetList from "../../hooks/useGetList";

export default function Festival(){
  const months = ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"];
  const date = useGetDate(false,false,false,false,true);
  const date2 = useGetDate(false,true,false,false,false);
  const [cDate, setCDate] = useState(`${date.date} ${date2.date}`);
  const [festivalList] = useGetList(`http://apis.data.go.kr/B551011/KorService1/searchFestival1?eventStartDate=${cDate.split(" ")[0]}&eventEndDate=${cDate.split(" ")[1]}&areaCode=39&sigunguCode=&ServiceKey=CJ%2FlY8Dc3dAVFPdMOF6t%2FHXVFUUjp5iNiBLNNPkrq7ROViBwSkb6oMVC4s5NZjEztVJWKm0beaKYDWMn7suxaQ%3D%3D&listYN=Y&MobileOS=ETC&MobileApp=AppTest&arrange=A&numOfRows=12&pageNo=1&_type=json`)
  const handleChange = (e) => {
    setCDate(e.target.value);
  }

  return(
    <div className={styles.wrap}>
      <div className="inner">
        <div className={styles.relative}>
        <IoCalendarNumberOutline className={styles.svg}/>
          <select className={styles.select} onChange={handleChange}>
            <option value={`${date.date} ${date2.date}`}>개최중</option>
            {months.map((month, i) => 
              <option key={month} value={`${date.days[i].firstDay} ${date.days[i].lastDay}`}>{month}월</option>
            )}
          </select>
        </div>
        
        {festivalList === undefined ? 
          <div className={styles.noResult}>
            <img src="https://cdn.visitkorea.or.kr/kfes/resources/img/no_list_ico.png" alt="" />
            <h4 className={styles.noTitle}>검색결과가 없습니다 </h4>
            <p className={styles.noText}>찾으시는 축제를 다시 검색해 주세요</p>
          </div> : 
          <div className={styles.flex}>
          {festivalList.map(list =>
          <div key={list.contentid} className={styles.festival}>
            <Link to={list.contentid}>
              <img className={styles.img} src={list.firstimage} alt="축제이미지" />
              <div className={styles.textBox}>
                <h4 className={styles.title}>{list.title}</h4>
                <p className={styles.date}>{list.eventstartdate} ~ {list.eventenddate}</p>
                <p className={styles.address}>{list.addr1}</p>
              </div>
            </Link>
          </div>
          )}
        </div>}
      </div>
    </div>
  );
}