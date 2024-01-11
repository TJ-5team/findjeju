import React, { useEffect, useState } from "react";
import useGetList from "../../../hooks/useGetList";
import styles from "./styles.module.css";
import { PiAirplaneTiltLight, PiCarLight } from "react-icons/pi";
import { PiHeartLight } from "react-icons/pi";
import { PiHeartFill } from "react-icons/pi";
import { Link } from "react-router-dom";
import Title from './../title/Title';
import { useDispatch, useSelector } from 'react-redux';
import { getAreaData, getListData } from './../../../reselector/areaReselector';
import { changeList } from "../../../reducer/areaReducer";

export default function Rest() {
  const dispatch = useDispatch();

  //const [num, setNum] = useState(Math.floor(Math.random() * 3));
  /* useEffect(()=>{
    setNum(Math.floor(Math.random()*9))
    console.log(num);
  },[]) */
  //console.log(num);

  const data = useSelector(getListData);
  const [list] = useGetList(`http://apis.data.go.kr/B551011/KorService1/areaBasedList1?numOfRows=4&pageNo=${data.list.num}&MobileOS=ETC&MobileApp=AppTest&ServiceKey=nyjoBggUlH0et5JY2fC9TW7%2BuSsx%2BIGHKWsgAuOWswMCtns64Y3M1Z%2BGROfg6L5ONigYQx6N%2BmqDCpABn3PmeQ%3D%3D&listYN=Y&arrange=Q&contentTypeId=${data.list.contentTypeId}&areaCode=39${data.area.code}&${data.list.category}&cat3=&_type=json`);

  // console.log(state);
  // console.log(list);

  // const [url, setUrl] = useState(`http://apis.data.go.kr/B551011/KorService1/areaBasedList1?numOfRows=4&pageNo=${num}&MobileOS=ETC&MobileApp=AppTest&ServiceKey=nyjoBggUlH0et5JY2fC9TW7%2BuSsx%2BIGHKWsgAuOWswMCtns64Y3M1Z%2BGROfg6L5ONigYQx6N%2BmqDCpABn3PmeQ%3D%3D&listYN=Y&arrange=Q&contentTypeId=32&areaCode=39${state.area.code}&cat1=B02&cat2=B0201&cat3=&_type=json`);
  // console.log(url);

  /* 
  맛집API
  http://apis.data.go.kr/B551011/KorService1/areaBasedList1?numOfRows=4&pageNo=${num}1&MobileOS=ETC&MobileApp=AppTest&ServiceKey=nyjoBggUlH0et5JY2fC9TW7%2BuSsx%2BIGHKWsgAuOWswMCtns64Y3M1Z%2BGROfg6L5ONigYQx6N%2BmqDCpABn3PmeQ%3D%3D&listYN=Y&arrange=Q&contentTypeId=39&areaCode=39${state.area.code}&cat1=A05&cat2=A0502&cat3=&_type=json
  
  숙소API
  http://apis.data.go.kr/B551011/KorService1/areaBasedList1?numOfRows=4&pageNo=${num}&MobileOS=ETC&MobileApp=AppTest&ServiceKey=nyjoBggUlH0et5JY2fC9TW7%2BuSsx%2BIGHKWsgAuOWswMCtns64Y3M1Z%2BGROfg6L5ONigYQx6N%2BmqDCpABn3PmeQ%3D%3D&listYN=Y&arrange=Q&contentTypeId=32&areaCode=39${state.area.code}&cat1=B02&cat2=B0201&cat3=&_type=json
  */

  /* const [list, setList] = useState([]);
  useEffect(() => {
    fetch('./data/restData.json')
      .then(res => res.json())
      .then((result) => {
        setList(result)
      })
      .catch(console.error)
  }, []) */

  const [active, setActive] = useState("stay");
  const [width, setWidth] = useState(undefined);

  const handleClick = (e) => {
    //console.log(e.target.dataset.id);
    setWidth(undefined)
    if (!e.target.className.includes("active")) {
      if (active === "stay") {
        setActive("restaurant");
        // setUrl(`http://apis.data.go.kr/B551011/KorService1/areaBasedList1?numOfRows=4&pageNo=${num}1&MobileOS=ETC&MobileApp=AppTest&ServiceKey=nyjoBggUlH0et5JY2fC9TW7%2BuSsx%2BIGHKWsgAuOWswMCtns64Y3M1Z%2BGROfg6L5ONigYQx6N%2BmqDCpABn3PmeQ%3D%3D&listYN=Y&arrange=Q&contentTypeId=39&areaCode=39${state.area.code}&cat1=A05&cat2=A0502&cat3=&_type=json`)
        // dispatch(changeName({ name: "제주시", code: "&sigunguCode=4", imgArea: 'jeju' }));
        dispatch(changeList({ num: Math.floor(Math.random() * 10), contentTypeId: 39, category: 'cat1=A05&cat2=A0502' }))
      } else {
        setActive("stay");
        // setUrl(`http://apis.data.go.kr/B551011/KorService1/areaBasedList1?numOfRows=4&pageNo=${num}&MobileOS=ETC&MobileApp=AppTest&ServiceKey=nyjoBggUlH0et5JY2fC9TW7%2BuSsx%2BIGHKWsgAuOWswMCtns64Y3M1Z%2BGROfg6L5ONigYQx6N%2BmqDCpABn3PmeQ%3D%3D&listYN=Y&arrange=Q&contentTypeId=32&areaCode=39${state.area.code}&cat1=B02&cat2=B0201&cat3=&_type=json`)
        dispatch(changeList({ num: Math.floor(Math.random() * 3), contentTypeId: 32, category: 'cat1=B02&cat2=B0201' }))
      }
    }
  };

  //console.log(url);

  const [like, setLike] = useState(undefined);

  const handleLike = (e, idx) => {
    //console.log(e.target);
    if (like != idx) {
      setLike(idx)
      alert('좋아요를 누르셨습니다!')
    } else {
      setLike(!idx)
      alert('좋아요를 취소하였습니다.')
    }
  }

  const handleMouseEnter = (e, idx) => {
    //console.log(e.currentTarget.parentNode.childNodes);
    width !== idx ? setWidth(idx) : setWidth(!idx)
  }

  return (
    <>
      <div className={styles.wrap}>
        <div className="inner">
          <div className={styles.restTitle}>
            <PiAirplaneTiltLight style={{ verticalAlign: "top" }} />
            <Title info={'여행콕콕'} newStyle={true} />
          </div>
          <div>
            <ul className={styles.tab}>
              {/* <li onClick={handleClick} className={active ? styles.menuList.active : styles.menuList}>숙소</li> */}
              <li className={styles.menuList}>
                <span onClick={handleClick} className={active === "stay" ? styles.active : ""}>숙소</span>
              </li>
              <li className={styles.menuList}>
                <span onClick={handleClick} className={active === "restaurant" ? styles.active : ""}>맛집</span>
              </li>
            </ul>
          </div>

          <div className={styles.recommandSection}>
            {/* {list.map((item) =>
              <div className={styles.recommandItem} >
                <div className={styles.imageWrap} key={item.contentid}>
                  <img src={item.firstimage} alt="장소추천" className={styles.placeimage} />
                </div>
                <div className={styles.placeName}>{item.title}</div>
                <div className={styles.address}>{item.addr1.substring(8)}</div>
              </div>
            )} */}
            {list.map((item, idx) =>
              <div className={width === idx ? `${styles.recommandItem} ${styles.active}` : styles.recommandItem} key={item.contentid} onMouseEnter={(e) => handleMouseEnter(e, idx)}>
                <Link to="/" className={styles.imageWrap}>
                  <span onClick={(e) => handleLike(e, idx)}>
                    {like === idx
                      ? <PiHeartFill className={styles.active} />
                      : <PiHeartLight className={styles.likebtn} />
                    }
                  </span>
                  <img src={item.firstimage} alt="장소추천" className={styles.placeimage} />
                  <span className={styles.decriptionWrap}>
                    <p className={styles.description}>{item.title}</p>
                    <p className={styles.description}>{item.addr1}</p>
                  </span>
                </Link>
              </div>
            )}

          </div>
        </div>
      </div>
    </>
  );
}