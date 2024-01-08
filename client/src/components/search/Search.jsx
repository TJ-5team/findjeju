import React, { useEffect, useState } from "react";
import styles from "./styles.module.css"
import { Link } from "react-router-dom";
import useGetList from "../../hooks/useGetList";
import SearchCommon from "./searchCommon/SearchCommon";
import SearchCourse from "./searchCourse/SearchCourse";
export default function Search() {
  const [active, setActive] = useState("전체")
  const [filter, setFilter] = useState("제목")
  const [subfilter, setSubFilter] = useState("전체")
  const [list] = useGetList("http://apis.data.go.kr/B551011/KorService1/areaBasedList1?numOfRows=12&pageNo=1&MobileOS=ETC&MobileApp=AppTest&ServiceKey=CU%2BXIQukCNW8VDOOJDU8QzHHPgrsOso%2FEiDhpWTlD8Lb9q1SYmll5Qp9YK4UsjFNOYVQoLCrMi2s0mfnEPr0iA%3D%3D&listYN=Y&arrange=Q&contentTypeId=&areaCode=39&sigunguCode=&cat1=&cat2=&cat3=&_type=json")
  useEffect(() => {
    setSubFilter("전체")
  }, [active])
  return (
    <div className={styles.wrap}>
      <div className={styles.container}>
        <div className={styles.leftBox}>
          <div className={styles.listTopMenu}>
            <div className={styles.topMenuContainer}>
              <div className={styles.topMenuBox}>
                <div className={styles.topMenuItem}>
                  <button className={active === "전체" ? styles.active : ""} onClick={() => { setActive("전체") }}>
                    전체
                  </button>
                </div>
                <div className={styles.topMenuItem}>
                  <button className={active === "여행정보" ? styles.active : ""} onClick={() => { setActive("여행정보") }}>
                    여행정보
                  </button>
                </div>
                <div className={styles.topMenuItem}>
                  <button className={active === "축제" ? styles.active : ""} onClick={() => { setActive("축제") }}>
                    축제
                  </button>
                </div>
                <div className={styles.topMenuItem}>
                  <button className={active === "공연/행사" ? styles.active : ""} onClick={() => { setActive("공연/행사") }}>
                    공연/행사
                  </button>
                </div>
                <div className={styles.topMenuItem}>
                  <button className={active === "여행코스" ? styles.active : ""} onClick={() => { setActive("여행코스") }}>
                    여행코스
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className={`${styles.listMidMenu}`} style={active === "여행정보" ? { display: "block" } : { display: "none" }}>
            <ul>
              <li><button className={subfilter === "전체" ? styles.active : ""} onClick={() => { setSubFilter("전체") }} >전체</button></li>
              <li><button className={subfilter === "여행지" ? styles.active : ""} onClick={() => { setSubFilter("여행지") }} >여행지</button></li>
              <li><button className={subfilter === "음식점" ? styles.active : ""} onClick={() => { setSubFilter("음식점") }} >음식점</button></li>
              <li><button className={subfilter === "숙박" ? styles.active : ""} onClick={() => { setSubFilter("숙박") }} >숙박</button></li>
              <li><button className={subfilter === "문화시설" ? styles.active : ""} onClick={() => { setSubFilter("문화시설") }} >문화시설</button></li>
              <li><button className={subfilter === "레포츠" ? styles.active : ""} onClick={() => { setSubFilter("레포츠") }} >레포츠</button></li>
              <li><button className={subfilter === "쇼핑" ? styles.active : ""} onClick={() => { setSubFilter("쇼핑") }} >쇼핑</button></li>
            </ul>
          </div>
          <div className={styles.filterWrap}>
            <div className={styles.filter}>
              <button className={filter === "제목" ? styles.active : ""} onClick={() => { setFilter("제목") }}>제목순</button>
              <button className={filter === "최신" ? styles.active : ""} onClick={() => { setFilter("최신") }}>최신순</button>
            </div>
          </div>
          <div className={styles.searchResultBanner}></div>
          <div className={styles.searchAllWrap} style={active === "전체" ? { display: "block" } : { display: "none" }}>
            <div className={`${styles.section}`}>
              <div className={styles.searchInfo}>
                <h3 className={`${styles.scTitle} ${styles.infoIcon}`}>
                  여행정보
                </h3>
                <SearchCommon></SearchCommon>
              </div>

            </div>
            <div className={`${styles.section}`}>
              <div className={styles.searchFestival}>
                <h3 className={`${styles.scTitle} ${styles.festivalIcon}`}>
                  축제
                </h3>
                <SearchCommon></SearchCommon>
              </div>
            </div>
            <div className={`${styles.section}`}>
              <div className={styles.searchShow}>
                <h3 className={`${styles.scTitle} ${styles.showIcon}`}>
                  공연 / 행사
                </h3>
                <SearchCommon></SearchCommon>
              </div>
            </div>
            <div className={`${styles.section}`}>
              <div className={styles.searchCourse}>
                <h3 className={`${styles.scTitle} ${styles.courseIcon}`}>
                  여행 코스
                </h3>
                <SearchCourse></SearchCourse>
              </div>
            </div>
          </div>
          <div className={styles.searchResultWrap} style={active === "전체" ? { display: "none" } : { display: "block" }}>
            <SearchCommon></SearchCommon>
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

