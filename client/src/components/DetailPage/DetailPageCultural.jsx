import React, { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import useGetList from "../../hooks/useGetList";
import styles from "./styles.module.css";
import { HiArrowSmallUp } from "react-icons/hi2";
import DetailSwiper from "./Swiper/DetailSwiper";
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

export default function DetailPageCultural() {
  const { contentid, contenttypeid } = useParams();

  /* 예시로!! 삭제하기 !!!! */
  /* const contenttypeid = 32;
  const contentid = 2819964; */

  /* api링크 가져오기 */
  const [comfortable] = useGetList(`http://apis.data.go.kr/B551011/KorWithService1/detailWithTour1?serviceKey=nyjoBggUlH0et5JY2fC9TW7%2BuSsx%2BIGHKWsgAuOWswMCtns64Y3M1Z%2BGROfg6L5ONigYQx6N%2BmqDCpABn3PmeQ%3D%3D&contentId=${contentid}&MobileOS=ETC&MobileApp=AppTest&_type=json`);

  const [commonInfo] = useGetList(`http://apis.data.go.kr/B551011/KorService1/detailCommon1?ServiceKey=nyjoBggUlH0et5JY2fC9TW7%2BuSsx%2BIGHKWsgAuOWswMCtns64Y3M1Z%2BGROfg6L5ONigYQx6N%2BmqDCpABn3PmeQ%3D%3D&contentTypeId=${contenttypeid}&contentId=${contentid}&MobileOS=ETC&MobileApp=AppTest&defaultYN=Y&firstImageYN=Y&areacodeYN=Y&catcodeYN=Y&addrinfoYN=Y&mapinfoYN=Y&overviewYN=Y&_type=json`);
  const [detailInfo] = useGetList(`http://apis.data.go.kr/B551011/KorService1/detailIntro1?ServiceKey=nyjoBggUlH0et5JY2fC9TW7%2BuSsx%2BIGHKWsgAuOWswMCtns64Y3M1Z%2BGROfg6L5ONigYQx6N%2BmqDCpABn3PmeQ%3D%3D&contentTypeId=${contenttypeid}&contentId=${contentid}&MobileOS=ETC&MobileApp=AppTest&_type=json`);
  const [course] = useGetList(`http://apis.data.go.kr/B551011/KorService1/detailIntro1?ServiceKey=nyjoBggUlH0et5JY2fC9TW7%2BuSsx%2BIGHKWsgAuOWswMCtns64Y3M1Z%2BGROfg6L5ONigYQx6N%2BmqDCpABn3PmeQ%3D%3D&contentTypeId=${contenttypeid}&contentId=${contentid}&MobileOS=ETC&MobileApp=AppTest&_type=json`)

  /*  
  console.log(commonInfo);
  console.log(detailInfo);
  console.log(facility);
  console.log(comfortable);*/


  /* const commonInfo = []
  const detailInfo = []
  const facility = []
  const comfortable = [] */


  const tabMenulist = ["사진보기", "상세정보", "여행톡", "추천여행"]
  const [active, setActive] = useState(0);
  function ScrollMove(num) {
    window.scrollTo({
      top: num,
      behavior: "smooth"
    })
  }
  // console.log(window.scrollY)

  const contentRef1 = useRef(null);
  const contentRef2 = useRef(null);
  const contentRef3 = useRef(null);

  const handleActive = (e, idx) => {
    if (active !== idx) {
      console.log(idx);
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
    if (!window.scrollY) return
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    })
  }

  const [showTopBtn, SetShowTopBtn] = useState(false);
  const [fixed, setFixed] = useState(false);

  useEffect(() => {
    const handleShowBtn = (e) => {
      if (window.scrollY > 313 || window.scrollY < window.scroll.Height) {
        SetShowTopBtn(true)
      } else {
        SetShowTopBtn(false)
      }
    };

    const handleMenuFixed = (e) => {
      if (window.scrollY > 313) {
        setFixed(true)
      } else {
        setFixed(false)
      }
    };

    window.addEventListener('scroll', handleMenuFixed)
    window.addEventListener('scroll', handleShowBtn)
    return () => {
      window.removeEventListener('scroll', handleMenuFixed)
      window.removeEventListener('scroll', handleShowBtn)
    }
  }, [])

  // console.log(window.scrollY);

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

  /* const check = [
    "contentid",
    "parking",
    "publictransport",
    "wheelchair",
    "exit",
    "elevator",
    "restroom",
    "room",
    "braileblock",
    "helpdog",
    "guidehuman",
    "brailepromotion",
    "stroller",
    "lactationroom",
    "guidesystem"
  ] */


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
    return e.split('<br>').map(line => <>{line}<br /></>);
  }

  const ChangeText = array => {
    for (let index = 0; index < array.length; index++) {
      const targetObj = array[index];
      const values = Object.values(targetObj);
      values.forEach(val => {
        if (val.includes("<br>") || val.includes("<br/>") || val.includes("<br />")) {
          changeText(val)
        } else {
          console.log('false');
        }
      })
    }
  }

  ChangeText(detailInfo)

  return (
    <div className={styles.wrap}>
      <div className={`${styles.inner} inner`}>
        {commonInfo && commonInfo.map((commonList) =>
          <div key={commonList.contentid}>
            <DetailTitle commonList={commonList} infoList={course} />
            <ul className={fixed ? `${styles.tabMenuWrap} ${styles.active}` : styles.tabMenuWrap}>
              {tabMenulist && tabMenulist.map((list, idx) =>
                <li onClick={(e) => handleActive(e, idx)} className={active === idx ? `${styles.tabMenu} ${styles.active}` : styles.tabMenu} key={idx}>{list}</li>
              )}
            </ul>
            <DetailSwiper />
            <h3 ref={contentRef1} className={styles.titleSub}>상세정보</h3>
            <div className={styles.descriptionWrap}>
              <p className={styles.descriptionDetail}>
                {commonList.overview}
              </p>
            </div>
            <Mapimage x={commonList.mapx} y={commonList.mapy} title={commonList.title} />
            {/* {contenttypeid === '32' && <DetailLodging commonList={commonList} detailInfo={detailInfo} />} */}
            {/* {contenttypeid === '39' && <DetailRestaurant commonList={commonList} detailInfo={detailInfo} />} */}
            {/* {contenttypeid === '12' && <DetailTourist commonList={commonList} detailInfo={detailInfo} />} */}
            {/* {contenttypeid === '14' && <DetailCultural commonList={commonList} detailInfo={detailInfo} />} */}
            {/* {contenttypeid === '28' && <DetailSports commonList={commonList} detailInfo={detailInfo} />} */}
            {/* {contenttypeid === '38' && <DetailShopping commonList={commonList} detailInfo={detailInfo} />} */}
            {detailInfo && detailInfo.map((detailList) =>
              <ul className={`${styles.detailInfo} ${styles.firstSection}`} key={detailList.contentid}>
                <li>
                  <strong>문의 및 안내</strong>
                  <span>{detailList.infocenterculture}</span>
                </li>
                {/* {commonList.homepage && 
                <li>
                  <strong>홈페이지</strong>
                  <span><Link to={changeText(commonList.homepage)}>{changeText(commonList.homepage)}</Link></span>
                </li>} */}
                <li>
                  <strong>주소</strong>
                  <span>{commonList.addr1}</span>
                </li>
                <li>
                  <strong>주차</strong>
                  <span>{detailList.parkingculture}</span>
                </li>
                <li>
                  <strong>주차요금</strong>
                  <span>{detailList.parkingfee}</span>
                </li>
                <li>
                  <strong>이용시간</strong>
                  <span>{detailList.usetimeculture}</span>
                </li>
                <li>
                  <strong>할인정보</strong>
                  <span>{detailList.discountinfo}</span>
                </li>
                <li>
                  <strong>휴일</strong>
                  <span>{detailList.restdateculture}</span>
                </li>
                <li>
                  <strong>수용인원</strong>
                  <span>{detailList.accomcountculture}</span>
                </li>
                <li>
                  <strong>규모</strong>
                  <span>{detailList.scale}</span>
                </li>
                <li>
                  <strong>신용카드가능정보</strong>
                  <span>{detailList.chkcreditcardculture}</span>
                </li>
                <li>
                  <strong>애완동물가능정보</strong>
                  <span>{detailList.chkpetculture}</span>
                </li>
                <li>
                  <strong>유모차대여정보</strong>
                  <span>{detailList.chkbabycarriageculture}</span>
                </li>
                {comfortable && comfortable.map(info =>
                  <>
                    <li>
                      <strong>장애인 주차 안내</strong>
                      <span>{info.parking}</span>
                    </li>
                    <li>
                      <strong>접근로</strong>
                      <span>{info.publictransport}</span>
                    </li>
                    <li>
                      <strong>휠체어</strong>
                      <span>{info.wheelchair}</span>
                    </li>
                    <li>
                      <strong>출입통로</strong>
                      <span>{info.exit}</span>
                    </li>
                    <li>
                      <strong>엘리베이터</strong>
                      <span>{info.elevator}</span>
                    </li>
                    <li>
                      <strong>화장실</strong>
                      <span>{info.restroom}</span>
                    </li>
                    <li>
                      <strong>객실</strong>
                      <span>{info.room}</span>
                    </li>
                    <li>
                      <strong>점자블록</strong>
                      <span>{info.braileblock}</span>
                    </li>
                    <li>
                      <strong>보조견동반</strong>
                      <span>{info.helpdog}</span>
                    </li>
                    <li>
                      <strong>안내요원</strong>
                      <span>{info.guidehuman}</span>
                    </li>
                    <li>
                      <strong>점자홍보물 및 점자표지판</strong>
                      <span>{info.brailepromotion}</span>
                    </li>
                    <li>
                      <strong>유모차</strong>
                      <span>{info.stroller}</span>
                    </li>
                    <li>
                      <strong>수유실</strong>
                      <span>{info.lactationroom}</span>
                    </li>
                  </>
                )}
              </ul >
            )}

            {/* <DetailComfortable contentid={contentid} /> */}
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
        <HiArrowSmallUp size="40" className={showTopBtn ? `${styles.scrollTopBtn} ${styles.active}` : styles.scrollTopBtn} onClick={handleScrolltoTop} />
      </div >
    </div >
  )
}