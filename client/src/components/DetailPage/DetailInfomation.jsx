import React, { useEffect, useRef, useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import useGetList from "../../hooks/useGetList";
import styles from "./styles.module.css";
import LikeButton from "../main/rest/likebutton/LikeButton";
import { PiEyeThin } from "react-icons/pi";
import { PiBookmarkSimpleThin } from "react-icons/pi";
import { PiBookmarkSimpleFill } from "react-icons/pi";
import { PiShareNetworkThin } from "react-icons/pi";
import { HiArrowSmallUp } from "react-icons/hi2";
import DetailSwiper from "./Swiper/DetailSwiper";
import Mapimage from "../Map/Mapimage";
import axios from "axios";
import ImageUpload from './../imageUpload/ImageUpload';
import TripInfo from "../tripInfo/TripInfo";
import { getUser } from "../../utils/localStorage";
import DetailTitle from "./title/DetailTitle";


export default function DetailInformation() {

  const userInfo = getUser();
  // console.log(userInfo);

  const [reply, setReply] = useState("");
  const [replyList, setReplyList] = useState([]);
  const { contentid, contenttypeid } = useParams();

  /* 예시로!! 삭제하기 !!!! */
  /* const contenttypeid = 32;
  const contentid = 2819964; */

  /* api링크 가져오기 */
  const [commonInfo] = useGetList(`http://apis.data.go.kr/B551011/KorService1/detailCommon1?ServiceKey=nyjoBggUlH0et5JY2fC9TW7%2BuSsx%2BIGHKWsgAuOWswMCtns64Y3M1Z%2BGROfg6L5ONigYQx6N%2BmqDCpABn3PmeQ%3D%3D&contentTypeId=${contenttypeid}&contentId=${contentid}&MobileOS=ETC&MobileApp=AppTest&defaultYN=Y&firstImageYN=Y&areacodeYN=Y&catcodeYN=Y&addrinfoYN=Y&mapinfoYN=Y&overviewYN=Y&_type=json`);
  const [detailInfo] = useGetList(`http://apis.data.go.kr/B551011/KorService1/detailIntro1?ServiceKey=nyjoBggUlH0et5JY2fC9TW7%2BuSsx%2BIGHKWsgAuOWswMCtns64Y3M1Z%2BGROfg6L5ONigYQx6N%2BmqDCpABn3PmeQ%3D%3D&contentTypeId=${contenttypeid}&contentId=${contentid}&MobileOS=ETC&MobileApp=AppTest&_type=json`);
  const [comfortable] = useGetList(`http://apis.data.go.kr/B551011/KorWithService1/detailWithTour1?serviceKey=nyjoBggUlH0et5JY2fC9TW7%2BuSsx%2BIGHKWsgAuOWswMCtns64Y3M1Z%2BGROfg6L5ONigYQx6N%2BmqDCpABn3PmeQ%3D%3D&contentId=${contentid}&MobileOS=ETC&MobileApp=AppTest&_type=json`);
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

  /*  const onClickRef1 = () => {
     contentRef1.current?.scrollIntoView({ behavior: 'smooth' });
   }
   const onClickRef2 = () => {
     contentRef2.current?.scrollIntoView({ behavior: 'smooth' });
   }
   const onClickRef3 = () => {
     contentRef3.current?.scrollIntoView({ behavior: 'smooth' });
   } */

  const handleActive = (e, idx) => {
    if (active !== idx) {
      console.log(idx);
      setActive(idx)
    }
    if (idx === 0) {
      contentRef1.current?.scrollIntoView({ behavior: 'smooth', block: "end" });
    } else if (idx === 1) {
      contentRef1.current?.scrollIntoView({ behavior: 'smooth' });
    } else if (idx === 2) {
      contentRef2.current?.scrollIntoView({ behavior: 'smooth' });
    } else if (idx === 3) {
      contentRef3.current?.scrollIntoView({ behavior: 'smooth' });
    }

  }

  const handleScrolltoTop = () => {
    if (!window.scrollY) return
    ScrollMove(0)
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

  const changeText = (e) => {
    const regex = /<a href="(.*?)" target="_blank"/;
    console.log(e);
    return e.match(regex)[1]
  }

  const imgUrl = []
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
  }

  const check = [
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
  ]


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

  const [replyReload, setReplyReload] = useState(false);

  const handleClick = (e) => {
    if (reply !== "") {
      axios.post("http://localhost:8000/review", { contentid: contentid, contenttypeid: contenttypeid, reply: reply, id: "try226" })
        .then(result => {
          if (result.data === "ok") {
            setReplyReload(!replyReload)
            setReply("")
          }
        });
    }
  };

  useEffect(() => {
    axios.get(`http://localhost:8000/review/${contentid}/${contenttypeid}`)
      .then(result => setReplyList(result.data));
  }, [replyReload])

  return (
    <div className={styles.wrap}>
      <div className={`${styles.inner} inner`}>
        {commonInfo && commonInfo.map((commonList) =>
          <>
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
            {detailInfo && detailInfo.map(detailList =>
              <ul className={styles.detailInfo}>
                <li>
                  <strong>문의 및 안내</strong>
                  <span>{detailList.infocenterlodging}</span>
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
                  <span>{detailList.parkinglodging}</span>
                </li>
                <li>
                  <strong>입실시간</strong>
                  <span>{detailList.checkintime}</span>
                </li>
                <li>
                  <strong>퇴실시간</strong>
                  <span>{detailList.checkouttime}</span>
                </li>
                <li>
                  <strong>객실내 취사 여부</strong>
                  <span>{detailList.chkcooking}</span>
                </li>
                <li>
                  <strong>식음료장</strong>
                  <span>{detailList.foodplace}</span>
                </li>
                <li>
                  <strong>픽업서비스</strong>
                  <span>{detailList.pickup}</span>
                </li>
                <li>
                  <strong>객실수</strong>
                  <span>{detailList.roomcount}</span>
                </li>
                <li>
                  <strong>객실유형</strong>
                  <span>{detailList.roomtype}</span>
                </li>
                <li>
                  <strong>부대시설</strong>
                  <span>{detailList.subfacility}</span>
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
          </>
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

        <div>
          <h3 ref={contentRef2} className={`${styles.titleSub} ${styles.reply}`}>
            여행톡
            {replyList && <span>{replyList.length}</span>}
          </h3>
          <div className={styles.replyWrap}>
            {/* 로그인 기능 완료되면 삼항식 구현하기 */}
            <textarea className={styles.replyText} type="text" placeholder={userInfo.id ? "소중한 댓글을 남겨주세요." : "로그인 후 소중한 댓글을 남겨주세요."}
              value={reply} onChange={(e) => setReply(e.target.value)} disabled={userInfo.id ? false : true} />
            <div className={styles.replyBtnWrap}>
              <ImageUpload />
              {/* <button>
                <img src="http://localhost:3000/images\detailPage\btn_reply_file.gif" alt="" />
              </button> */}
              <button type="button" onClick={handleClick}>{userInfo.id ? "등록" : "로그인"}</button>
            </div>
          </div>

          {replyList && replyList.map(reply =>
            <div className={styles.reviewList}>
              <div className={styles.userImg}>
                <img src="https://item.kakaocdn.net/do/07e48e95accef30a19f445de4a857bce7154249a3890514a43687a85e6b6cc82" alt="프로필이미지" />
              </div>
              <div className={styles.reviewText}>
                <div>{reply.review_text}</div>
                <span>{reply.id}</span>
                <span>|</span>
                <span>{reply.rdate}</span>
              </div>
              <div className={styles.likebtnWrap}>
                <LikeButton idx={0} />
              </div>
            </div>
          )}
        </div>

        {/* <div className={styles.replyWrap}>
          <input className={styles.replyText} type="text" placeholder="소중한 댓글을 남겨주세요." />
          <div className={styles.replyBtnWrap}>
            <button>
              <img src="http://localhost:3000/images\detailPage\btn_reply_file.gif" alt="" />
            </button>
            <button>로그인</button>
          </div>
        </div>
        <div className={styles.replyMore}>+ 댓글 더보기</div> */}

        <div ref={contentRef3}>
          <TripInfo />
        </div>
        <HiArrowSmallUp size="40" className={showTopBtn ? `${styles.scrollTopBtn} ${styles.active}` : styles.scrollTopBtn} onClick={handleScrolltoTop} />
      </div >
    </div >
  )
}