import React, { useState } from 'react';
import styles from './styles.module.css';
import Title from '../title/Title';
import SwiperBox from './swiper/SwiperBox';
import AreaTitle from './title/AreaTitle';

export default function Recommand() {

  const [area, setArea] = useState([]);
  const [state, setState] = useState([]);

  const getState = (e) => {
    setState(e.state);
    setArea(e.area)
  }

  return (
    <>
      <div className={styles.wrap}>
        <div className={`${styles.inner} inner`}>
          <AreaTitle getState={getState} />
          <Title info={'추천 여행지'} more={'+'} />
          <SwiperBox area={area} state={state.area} />
        </div>
      </div >
    </>
  );
}
