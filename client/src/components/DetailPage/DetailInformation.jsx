import React, { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import styles from "./styles.module.css";
import { HiArrowSmallUp } from "react-icons/hi2";
import Mapimage from "../Map/Mapimage";
import TripInfo from "../tripInfo/TripInfo";
import DetailTitle from "./title/DetailTitle";
import DetailReply from "./reply/DetailReply";
import DetailComfortable from "./categorypage/DetailComfortable";
import DetailRestaurant from "./categorypage/DetailRestaurant";
import DetailLodging from "./categorypage/DetailLodging";
import DetailTourist from './categorypage/DetailTourist';
import DetailCultural from './categorypage/DetailCultural';
import DetailSports from './categorypage/DetailSports';
import DetailShopping from "./categorypage/DetailShopping";
import { useDispatch, useSelector } from "react-redux";
import useScroll from "../../hooks/useScroll";
import { DetailData } from "../../api/detailApi";
import { getDetailData } from "../../reselector/detailReselector";
import DetailSwiper from "./imgswiper/DetailSwiper";

export default function DetailInformation() {
  const { y } = useScroll();
  const dispatch = useDispatch();
  const { contenttypeid, contentid } = useParams();
  const { commonInfo, detailInfo, comfortableInfo } = useSelector(getDetailData);

  useEffect(() => {
    dispatch(DetailData({ contenttypeid, contentid }))
  }, [contenttypeid, contentid])

  /* api링크 가져오기 */
  // const [commonInfo] = useGetList(`http://apis.data.go.kr/B551011/KorService1/detailCommon1?ServiceKey=nyjoBggUlH0et5JY2fC9TW7%2BuSsx%2BIGHKWsgAuOWswMCtns64Y3M1Z%2BGROfg6L5ONigYQx6N%2BmqDCpABn3PmeQ%3D%3D&contentTypeId=${contenttypeid}&contentId=${contentid}&MobileOS=ETC&MobileApp=AppTest&defaultYN=Y&firstImageYN=Y&areacodeYN=Y&catcodeYN=Y&addrinfoYN=Y&mapinfoYN=Y&overviewYN=Y&_type=json`);
  // const [detailInfo] = useGetList(`http://apis.data.go.kr/B551011/KorService1/detailIntro1?ServiceKey=nyjoBggUlH0et5JY2fC9TW7%2BuSsx%2BIGHKWsgAuOWswMCtns64Y3M1Z%2BGROfg6L5ONigYQx6N%2BmqDCpABn3PmeQ%3D%3D&contentTypeId=${contenttypeid}&contentId=${contentid}&MobileOS=ETC&MobileApp=AppTest&_type=json`);

  const tabMenulist = ["사진보기", "상세정보", "여행톡", "추천여행"]
  const [active, setActive] = useState(0);

  /* useScroll 로 구현 */
  // const [showTopBtn, SetShowTopBtn] = useState(false);
  // const [fixed, setFixed] = useState(false);

  const contentRef1 = useRef(null);
  const contentRef2 = useRef(null);
  const contentRef3 = useRef(null);

  const handleActive = (e, idx) => {
    if (active !== idx) {
      setActive(idx)
    }
    if (idx === 0) {
      contentRef1.current?.scrollIntoView({ behavior: 'smooth', block: "end" });
    } else if (idx === 1) {
      contentRef1.current?.scrollIntoView({ behavior: 'smooth', block: "start" });
    } else if (idx === 2) {
      contentRef2.current?.scrollIntoView({ behavior: 'smooth', block: "start" });
    } else if (idx === 3) {
      contentRef3.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }

  const handleScrolltoTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    })
  }

  /* const changeText = (e) => {
    const regex = /<a href="(.*?)" target="_blank"/;
    console.log(e);
    return e.match(regex)[1]
  }
 */
  {/* {commonList.homepage && 
  <li>
    <strong>홈페이지</strong>
    <span><Link to={changeText(commonList.homepage)}>{changeText(commonList.homepage)}</Link></span>
  </li>} */}

  /* const imgUrl = []
  const imgList = () => {
    const result = [];
    for (let index = 1; index < 12; index++) {
      if (index < 10) {
        index = '0' + index
        result.push(<img key={index} src={`http://localhost:3000/images/detailPage/icon_bfreesvc_${index}.png`} alt=""></img>);
      } else {
        result.push(<img key={index} src={`http://localhost:3000/images/detailPage/icon_bfreesvc_${index}.png`} alt=""></img>);
      }
    }
    return result;
  } */

  /* useEffect(()=>{
    if(comfortable[0]){
      console.log(comfortable[0]);
      const targetObj = comfortable[0]
      check.map((checkList)=>{
        if(Object.keys(targetObj).find(key => targetObj[key] !== "")){}
        else console.log('false')
      })
    }
  },[]) */

  const changeText = (e) => {
    if (!e) {
      return
    }

    if (e.includes("<br>")) {
      return e.split('<br>').map(line => <>{line}<br /></>);
    } else if (e.includes("<br/>")) {
      return e.split('<br/>').map(line => <>{line}<br /></>);
    } else if (e.includes("<br />")) {
      return e.split('<br />').map(line => <>{line}<br /></>);
    }
  }

  return (
    <div className={styles.wrap}>
      <div className={`${styles.inner} inner`}>
        {commonInfo && commonInfo.map((commonList) =>
          <div key={commonList.contentid}>
            <DetailTitle commonList={commonList} />
            <ul className={y > 313 ? `${styles.tabMenuWrap} ${styles.active}` : styles.tabMenuWrap}>
              {tabMenulist && tabMenulist.map((list, idx) =>
                <li onClick={(e) => handleActive(e, idx)} className={active === idx ? `${styles.tabMenu} ${styles.active}` : styles.tabMenu} key={idx}>{list}</li>
              )}
            </ul>
            <DetailSwiper />
            <h3 ref={contentRef1} className={styles.titleSub}>상세정보</h3>
            <div className={styles.descriptionWrap}>
              <p className={styles.descriptionDetail}>
                {changeText(commonList.overview)}
              </p>
            </div>
            <Mapimage x={commonList.mapx} y={commonList.mapy} title={commonList.title} />
            {contenttypeid === '32' && <DetailLodging commonList={commonList} detailInfo={detailInfo} key={commonList.contentid} />}
            {contenttypeid === '39' && <DetailRestaurant commonList={commonList} detailInfo={detailInfo} />}
            {contenttypeid === '12' && <DetailTourist commonList={commonList} detailInfo={detailInfo} />}
            {contenttypeid === '14' && <DetailCultural commonList={commonList} detailInfo={detailInfo} />}
            {contenttypeid === '28' && <DetailSports commonList={commonList} detailInfo={detailInfo} />}
            {contenttypeid === '38' && <DetailShopping commonList={commonList} detailInfo={detailInfo} />}
            <DetailComfortable contentid={contentid} comfortableInfo={comfortableInfo} />
          </div>
        )}

        {/* <div>
          <h4 className={styles.titleInfo}>
            <div>
              <img src="http://localhost:3000/images/detailPage/ico_info.png" alt="" />
              모두의 여행 '무장애여행'
            </div>
          </h4>
          <div className={styles.comfortableImgWrap}>
            {imgList()}
          </div>
        </div> */}
        <div ref={contentRef2}>
          <DetailReply contentid={contentid} contenttypeid={contenttypeid} />
        </div>
        <div ref={contentRef3}>
          <TripInfo />
        </div>
        <HiArrowSmallUp size="40" className={y > 313 ? `${styles.scrollTopBtn} ${styles.active}` : styles.scrollTopBtn} onClick={handleScrolltoTop} />
      </div >
    </div >
  )
}