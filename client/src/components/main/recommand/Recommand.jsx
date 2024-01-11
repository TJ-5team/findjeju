import React, { useState } from 'react';
import styles from './styles.module.css';
import Title from '../title/Title';
import SwiperBox from './swiper/SwiperBox';
import AreaTitle from './title/AreaTitle';
import { useSelector } from 'react-redux';
import { getUserData } from '../../../reselector/memberReselector';
import { getId, getUser } from '../../../utils/localStorage';

export default function Recommand() {

  const [area, setArea] = useState([]);
  const getArea = (e) => {

    setArea(e);

  };

  const state = useSelector(getUserData);
  const userInfo = getUser();

  return (
    <>
      <div className={styles.wrap}>
        <div className={`${styles.inner} inner`}>
          <AreaTitle getArea={getArea} />
          <Title info={'추천 여행지'} more={'+'} />
          {<SwiperBox area={area} />}
        </div>
      </div >
    </>
  );
}
