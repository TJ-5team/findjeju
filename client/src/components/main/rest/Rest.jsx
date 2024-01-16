import React, { useEffect, useState } from "react";
import useGetList from "../../../hooks/useGetList";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { getListData } from './../../../reselector/areaReselector';
import { changeList } from "../../../reducer/areaReducer";
import { FaPlus } from "react-icons/fa6";
import { PiAirplaneTiltLight } from "react-icons/pi";
import LikeButton from "./likebutton/LikeButton";
import Title from './../title/Title';
import styles from "./styles.module.css";

export default function Rest() {
  const dispatch = useDispatch();
  const data = useSelector(getListData);
  const [list] = useGetList(`http://apis.data.go.kr/B551011/KorService1/areaBasedList1?numOfRows=4&pageNo=${data.list.num}&MobileOS=ETC&MobileApp=AppTest&ServiceKey=nyjoBggUlH0et5JY2fC9TW7%2BuSsx%2BIGHKWsgAuOWswMCtns64Y3M1Z%2BGROfg6L5ONigYQx6N%2BmqDCpABn3PmeQ%3D%3D&listYN=Y&arrange=Q&contentTypeId=${data.list.contentTypeId}&areaCode=39${data.area.code}&${data.list.category}&cat3=&_type=json`);

  const [active, setActive] = useState("stay");
  const [width, setWidth] = useState(undefined);

  const handleClick = (e) => {
    setWidth(undefined)
    if (!e.target.className.includes("active")) {
      if (active === "stay") {
        setActive("restaurant");
        dispatch(changeList({ num: Math.floor(Math.random() * 10), contentTypeId: 39, category: 'cat1=A05&cat2=A0502' }))
      } else {
        setActive("stay");
        dispatch(changeList({ num: Math.floor(Math.random() * 3), contentTypeId: 32, category: 'cat1=B02&cat2=B0201' }));
      }
    }
  };

  const handleMouseEnter = (e, idx) => {
    width !== idx ? setWidth(idx) : setWidth(!idx)
  }

  return (
    <>
      <div className={styles.wrap}>
        <div className={`inner`}>
          <div className={styles.restTitle}>
            <PiAirplaneTiltLight style={{ verticalAlign: "top" }} />
            <Title info={'여행콕콕'} newStyle={true} />
          </div>
          <div>
            <ul className={styles.tab}>
              <li className={styles.menuList}>
                <span onClick={handleClick} className={active === "stay" ? styles.active : ""}>숙소</span>
              </li>
              <li className={styles.menuList}>
                <span onClick={handleClick} className={active === "restaurant" ? styles.active : ""}>맛집</span>
              </li>
            </ul>
          </div>

          <div className={styles.recommandSection}>
            {list.map((item, idx) =>
              <div className={width === idx ? `${styles.recommandItem} ${styles.active}` : styles.recommandItem} key={item.contentid} onMouseEnter={(e) => handleMouseEnter(e, idx)}>
                <Link to={`/detail/${item.contentid}/${item.contenttypeid}`} className={styles.imageWrap}>
                  <img src={item.firstimage} alt="장소추천" className={styles.placeimage} />
                  <span className={styles.decriptionWrap}>
                    <p className={styles.description}>{item.title}</p>
                    <p className={styles.description}>{item.addr1}</p>
                  </span>
                </Link>
                <LikeButton idx={idx} />
              </div>
            )}
          </div>
          <Link to={data.list.contentTypeId === 32 ? "/lodging" : "/restaurant"} className={styles.recommendMore}>더보기<FaPlus /></Link>
        </div>
      </div>
    </>
  );
}