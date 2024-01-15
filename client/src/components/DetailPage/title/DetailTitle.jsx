import React, { useState } from 'react';
import { PiEyeThin } from "react-icons/pi";
import { PiBookmarkSimpleThin } from "react-icons/pi";
import { PiBookmarkSimpleFill } from "react-icons/pi";
import { PiShareNetworkThin } from "react-icons/pi";
import styles from "./styles.module.css";
import { useLocation } from 'react-router';
import LikeButton from '../../main/rest/likebutton/LikeButton';

export default function DetailTitle({ commonList, infoList }) {
  const [scrap, setScrap] = useState(false);
  const location = useLocation();

  console.log(commonList);

  console.log(infoList);
  
  const handleScrap = (e, idx) => {
    if (scrap === false) {
      setScrap(true);
      alert('즐겨찾기에 추가되었습니다!');
    } else {
      setScrap(false);
      alert('즐겨찾기를 취소하였습니다.');
    }
  };

  const handleCopyClipBoard = async (text) => {
    try {
      await navigator.clipboard.writeText(text);
      alert("클립보드에 링크가 복사되었어요.");
    } catch (err) {
      console.log(err);
    }
  };


  return (
    <>
      <h2 className={styles.title} key={commonList.contentid}>{commonList.title}</h2>
      <div className={styles.descriptionWrap}>
        <p className={styles.description}>{commonList.addr1.substring(0, 2)}</p>
        {infoList.distance && <p className={styles.decription2}>코스 총거리 : {infoList.distance}</p>}
      </div>
      <div className={styles.iconMenuWrap}>
        <div className={styles.iconMenuLeft}>
          <LikeButton idx={0} />
          <span>1</span>
          <PiEyeThin size="28" />
          <span>1</span>
        </div>
        <div className={styles.iconMenuRight}>
          {scrap === true
            ? <PiBookmarkSimpleFill size="28" onClick={handleScrap} className={styles.iconScrapOn} />
            : <PiBookmarkSimpleThin size="28" onClick={handleScrap} />}
          <PiShareNetworkThin size="28" onClick={() => handleCopyClipBoard(`http://localhost:3000${location.pathname}`)} className={styles.iconShare} />
        </div>
      </div>
    </>
  );
}

