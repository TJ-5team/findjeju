import React, { useEffect, useState } from "react";
import styles from "./styles.module.css"
import { Link, useParams } from "react-router-dom";
import SearchCommon from "./searchCommon/SearchCommon";
import SearchCourse from "./searchCourse/SearchCourse";
import { useDispatch, useSelector } from "react-redux";
import { getKeyword, getSearchListData } from "../../reselector/searchReselector";
import { SearchApiData } from "../../api/searchAPI";
export default function Search() {
  const [active, setActive] = useState("전체")
  const [filter, setFilter] = useState("제목")
  const [subfilter, setSubFilter] = useState("전체")
  let keyword = useParams().keyword;
  const dispatch = useDispatch();
  const { firstList, secondList, thirdList, forthList } = useSelector(getSearchListData)
  const { key } = useSelector(getKeyword);
  useEffect(() => {
    setSubFilter("전체")
  }, [active])

  useEffect(() => {
    if (filter === "최신") {
      let filter = "Q"
      dispatch(SearchApiData({ keyword, filter }))
    } else {

      dispatch(SearchApiData({ keyword }))
    }
  }, [filter, key, keyword])


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
            {firstList && <div className={`${styles.section}`}>
              <div className={styles.searchInfo}>
                <h3 className={`${styles.scTitle} ${styles.infoIcon}`}>
                  여행정보
                </h3>
                {
                  firstList && firstList.map((list, idx) => {
                    if (idx > 2) {
                      return
                    }
                    return <SearchCommon
                      list={list}
                      key={idx}
                    ></SearchCommon>
                  })
                }
              </div>
            </div>}
            {secondList && <div className={`${styles.section}`}>
              <div className={styles.searchFestival}>
                <h3 className={`${styles.scTitle} ${styles.festivalIcon}`}>
                  축제
                </h3>
                {
                  secondList && secondList.map((list, idx) => {
                    if (idx > 2) {
                      return
                    }
                    return <SearchCommon
                      list={list}
                      key={idx}
                    ></SearchCommon>
                  })
                }
              </div>
            </div>}
            {thirdList && <div className={`${styles.section}`}>
              <div className={styles.searchShow}>
                <h3 className={`${styles.scTitle} ${styles.showIcon}`}>
                  공연 / 행사
                </h3>
                {
                  thirdList && thirdList.map((list, idx) => {
                    if (idx > 2) {
                      return
                    }
                    return <SearchCommon
                      list={list}
                      key={idx}
                    ></SearchCommon>
                  })
                }
              </div>
            </div>}
            {forthList && <div className={`${styles.section}`}>
              <div className={styles.searchCourse}>
                <h3 className={`${styles.scTitle} ${styles.courseIcon}`}>
                  여행 코스
                </h3>
                {
                  forthList && forthList.map((list, idx)=>{
                    if (idx > 2) {
                      return
                    }
                    return <SearchCourse
                    cosList={list}
                      key={idx}
                    ></SearchCourse>
                  })
                }
              </div>
            </div>}
            {!firstList && !secondList && !thirdList && !forthList && <div className={styles.noResultWrap}>
              <p className={styles.noResult}>
                <strong>“{keyword}”</strong>
                에 대한 검색결과가 없습니다.
                <br />
                다른 검색어를 입력하시거나 철자와 띄어쓰기를 확인해 보세요.
              </p>
            </div>}
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
                      <Link to={"/search/제주"}>
                        <span>1</span>
                        <em>제주</em>
                      </Link>
                    </li>
                    <li>
                      <Link to={"/search/서귀포"}>
                        <span>2</span>
                        <em>서귀포</em>
                      </Link>
                    </li>
                    <li>
                      <Link to={"/search/올레"}>
                        <span>3</span>
                        <em>올레</em>
                      </Link>
                    </li>
                    <li>
                      <Link to={"/search/한라산"}>
                        <span>4</span>
                        <em>한라산</em>
                      </Link>
                    </li>
                    <li>
                      <Link to={"/search/우도"}>
                        <span>5</span>
                        <em>우도</em>
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

