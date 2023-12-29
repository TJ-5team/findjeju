import React from 'react';
import styles from './styles.module.css';
import Title from '../title/Title';
import useGetList from '../../../hooks/useGetList';
import { changeName } from '../../../store';
import { useDispatch, useSelector } from 'react-redux';

export default function Recommand() {
  let dispatch = useDispatch();
  let state = useSelector((state) => state);
  /* 지역 데이터 */
  // const [list] = useGetList(`http://apis.data.go.kr/B551011/KorService1/areaBasedList1?numOfRows=40&pageNo=2&MobileOS=ETC&MobileApp=AppTest&ServiceKey=niKngftprkI%2FHGPVne%2FS9c%2FCNgVohrMa9Q7iszfj1BE9mCBJvPE%2FtIV16r6O7myIthLaEAbyPJH8x2zQNU0pPA%3D%3D&listYN=Y&arrange=A&contentTypeId=&areaCode=39${state.area.code}&cat1=&cat2=&cat3=&_type=json`)

  return (
    <>
      <div className={styles.wrap}>
        <div className={`${styles.inner} inner`}>
          <h2 className={styles.title}>
            <em>대한민국 구석구석 지역 정보</em>
            <p>어디까지 알고있니?</p>
          </h2>
          <div className={styles.rightWrap}>
            <fieldset className={styles.iconWrap} onClick={() => {

              dispatch(changeName({ name: "제주시", code: "&sigunguCode=4" }))

            }}>
              <div className={styles.icon}>
              </div>
              <p className={styles.area}>제주시</p>
            </fieldset>
            <fieldset className={styles.iconWrap} onClick={() => {

              dispatch(changeName({ name: "서귀포시", code: "&sigunguCode=3" }))

            }}>
              <div className={styles.icon}>
              </div>
              <p className={styles.area}>서귀포시</p>
            </fieldset>
          </div>
          <Title />
          <div className={styles.imgWrap}>
            <div className={styles.imgBox}>

            </div>
            <div className={styles.imgBox}>

            </div>
            <div className={styles.imgBox}>

            </div>
          </div>
        </div>
      </div >
    </>
  );
}

