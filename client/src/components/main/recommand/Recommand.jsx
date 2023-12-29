import React, { useReducer } from 'react';
import styles from './styles.module.css';
import Title from '../title/Title';
import useGetList from '../../../hooks/useGetList';

export default function Recommand() {

  /* 지역 데이터 */
  const [list] = useGetList("http://apis.data.go.kr/B551011/KorService1/areaBasedList1?numOfRows=40&pageNo=2&MobileOS=ETC&MobileApp=AppTest&ServiceKey=niKngftprkI%2FHGPVne%2FS9c%2FCNgVohrMa9Q7iszfj1BE9mCBJvPE%2FtIV16r6O7myIthLaEAbyPJH8x2zQNU0pPA%3D%3D&listYN=Y&arrange=A&contentTypeId=&areaCode=39&sigunguCode=&cat1=&cat2=&cat3=&_type=json")




  return (
    <>
      <div className={styles.wrap}>
        <div className={`${styles.inner} inner`}>
          <h2 className={styles.title}>
            <em>대한민국 구석구석 지역 정보</em>
            <p>어디까지 알고있니?</p>
          </h2>
          <div className={styles.iconwrap}>

          </div>
        </div>
      </div>
    </>
  );
}

