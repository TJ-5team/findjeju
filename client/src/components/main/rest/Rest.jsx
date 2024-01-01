import React, { useState } from "react";
import useGetList from "../../../hooks/useGetList";
import styles from "./styles.module.css";
import { PiAirplaneTiltLight } from "react-icons/pi";

export default function Rest() {

  // const [list] = useGetList('http://apis.data.go.kr/B551011/KorService1/areaBasedList1?numOfRows=4&pageNo=1&MobileOS=ETC&MobileApp=AppTest&ServiceKey=nyjoBggUlH0et5JY2fC9TW7%2BuSsx%2BIGHKWsgAuOWswMCtns64Y3M1Z%2BGROfg6L5ONigYQx6N%2BmqDCpABn3PmeQ%3D%3D&listYN=Y&arrange=A&contentTypeId=39&areaCode=39&sigunguCode=4&cat1=A05&cat2=A0502&cat3=&_type=json');
  // console.log(list);

  const [active, setActive] = useState("stay");
  const handleClick = (e) => {
    if (!e.target.className.includes("active")) {
      if (active === "stay") {
        setActive("restaurant");
      } else {
        setActive("stay");
      }
    }
  };

  return (
    <>
      <div className={styles.wrap}>
        <div className="inner">
          <div className={styles.restTitle}>
            <PiAirplaneTiltLight style={{ verticalAlign: "top" }} />제주시 여행콕콕
          </div>
          <div>
            <ul className={styles.tab}>
              {/* <li onClick={handleClick} className={active ? styles.menuList.active : styles.menuList}>숙소</li> */}
              <li className={styles.menuList}>
                <span onClick={(e) => handleClick(e)} className={active === "stay" ? styles.active : ""}>숙소</span>
              </li>
              <li className={styles.menuList}>
                <span onClick={(e) => handleClick(e)} className={active === "restaurant" ? styles.active : ""}>맛집</span>
              </li>
            </ul>
          </div>
          <div className={styles.recommandSection}>
            {list.map((item) =>
              <div className={styles.recommandItem} >
                <div className={styles.imageWrap} key={item.contentid}>
                  <img src={item.firstimage} alt="장소추천" className={styles.placeimage} />
                </div>
                <div className={styles.placeName}>{item.title}</div>
                <div className={styles.address}>{item.addr1.substring(8)}</div>
              </div>
            )}

            {/* {list.map((item) =>
              <div className={styles.recommandSection}>
                <div className={styles.imageWrap}>
                  <img src="http://tong.visitkorea.or.kr/cms/resource/75/2837175_image2_1.jpg" alt="장소추천" className={styles.placeimage} />
                </div>
                <div className={styles.placeName}>가시어멍김밥</div>
                <div className={styles.address}>제주시 월랑로 36 </div>
              </div>
            )} */}
          </div>
        </div>
      </div>
    </>
  );
}