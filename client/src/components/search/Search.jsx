import React, { useState } from "react";
import styles from "./styles.module.css"
import { Link } from "react-router-dom";
import useGetList from "../../hooks/useGetList";
export default function Search() {
  const [active,setActive] = useState("전체")
  const [filter,setFilter] = useState("제목")
  const [list] = useGetList("http://apis.data.go.kr/B551011/KorService1/areaBasedList1?numOfRows=12&pageNo=1&MobileOS=ETC&MobileApp=AppTest&ServiceKey=CU%2BXIQukCNW8VDOOJDU8QzHHPgrsOso%2FEiDhpWTlD8Lb9q1SYmll5Qp9YK4UsjFNOYVQoLCrMi2s0mfnEPr0iA%3D%3D&listYN=Y&arrange=Q&contentTypeId=&areaCode=39&sigunguCode=&cat1=&cat2=&cat3=&_type=json")
  console.log(list);
  return (
    <div className={styles.wrap}>
      <div className={styles.container}>
        <div className={styles.leftBox}>
          <div className={styles.listTopMenu}>
            <div className={styles.topMenuContainer}>
              <div className={styles.topMenuBox}>
                <div className={styles.topMenuItem}>
                  <button className={active === "전체" ? styles.active : ""} onClick={()=>{setActive("전체")}}>
                    전체
                  </button>
                </div>
                <div className={styles.topMenuItem}>
                  <button className={active === "여행정보" ? styles.active : ""} onClick={()=>{setActive("여행정보")}}>
                    여행정보
                  </button>
                </div>
                <div className={styles.topMenuItem}>
                  <button className={active === "축제" ? styles.active : ""} onClick={()=>{setActive("축제")}}>
                    축제
                  </button>
                </div>
                <div className={styles.topMenuItem}>
                  <button className={active === "공연/행사" ? styles.active : ""} onClick={()=>{setActive("공연/행사")}}>
                    공연/행사
                  </button>
                </div>
                <div className={styles.topMenuItem}>
                  <button className={active === "여행코스" ? styles.active : ""} onClick={()=>{setActive("여행코스")}}>
                    여행코스
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.filterWrap}>
            <div className={styles.filter}>
              <button className={filter === "제목" ? styles.active : ""} onClick={()=>{setFilter("제목")}}>제목순</button>
              <button className={filter === "최신" ? styles.active : ""} onClick={()=>{setFilter("최신")}}>최신순</button>
            </div>
          </div>
          <h2 className={styles.searchType}>
            {`${active} - ${filter}순`}
          </h2>
          <div className={styles.searchResultBanner}></div>
          <div className={styles.searchAllWrap}>
            <div className={styles.area}>

            </div>
            <div className={styles.festival}></div>
          </div>
        </div>
        <div className={styles.rightMenu}>
          <div className={styles.rightWrap}>
            <div className={styles.rightContainer}>
              <div className={styles.rightBox}>
                <div className={styles.popularKeyword}>
                  <h3>최근 인기 검색어</h3>
                  <ul>
                    <li>
                      <Link>
                        <span>1</span>
                        <em>부산</em>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.float}></div>
      </div>
    </div>
  );
}

