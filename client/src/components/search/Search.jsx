import React, { useEffect, useState } from "react";
import styles from "./styles.module.css"
import { Link, useParams } from "react-router-dom";
import SearchCommonItem from "./searchCommon/SearchCommonItem";
import { useDispatch, useSelector } from "react-redux";
import { getKeyword, getSearchListData, getSeviceListData } from "../../reselector/searchReselector";
import { SearchApiData, serviceApiData } from "../../api/searchAPI";
import Pagination from 'rc-pagination';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'rc-pagination/assets/index.css'
import NotFound from "./notFound/NotFound";
export default function Search() {
  const [active, setActive] = useState("전체")
  const [filter, setFilter] = useState("제목")
  const [subfilter, setSubFilter] = useState("전체")
  let keyword = useParams().keyword;
  const dispatch = useDispatch();
  const { firstList, secondList, thirdList, forthList } = useSelector(getSearchListData)
  const { key } = useSelector(getKeyword);
  const [currentPage, setCurrentPage] = useState(1);
  const {serviceList, totalCount} = useSelector(getSeviceListData)
  useEffect(() => {
    setSubFilter("전체")
    setCurrentPage(1)
  }, [active])

  useEffect(() => {
    if(active !== "전체"){
      return
    }
    if (filter === "최신") {
      let filter = "Q"
      dispatch(SearchApiData({ keyword, filter }))
      console.log(firstList, secondList, thirdList, forthList);
    } else {
      dispatch(SearchApiData({ keyword }))
      console.log(firstList, secondList, thirdList, forthList);
    }
  }, [filter, key, keyword])

  useEffect(()=> {
    if(active === "전체"){
      return
    }
      dispatch(serviceApiData({currentPage, subfilter, filter, keyword, active}))
  },[currentPage,subfilter,filter,keyword,active])
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
                  <button className={active === "공연행사" ? styles.active : ""} onClick={() => { setActive("공연행사") }}>
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
              <li><button className={subfilter === "자연" ? styles.active : ""} onClick={() => { setSubFilter("자연") }} >자연</button></li>
              <li><button className={subfilter === "음식점" ? styles.active : ""} onClick={() => { setSubFilter("음식점") }} >음식점</button></li>
              <li><button className={subfilter === "숙박" ? styles.active : ""} onClick={() => { setSubFilter("숙박") }} >숙박</button></li>
              <li><button className={subfilter === "문화시설" ? styles.active : ""} onClick={() => { setSubFilter("문화시설") }} >문화시설</button></li>
              <li><button className={subfilter === "레포츠" ? styles.active : ""} onClick={() => { setSubFilter("레포츠") }} >레포츠</button></li>
              <li><button className={subfilter === "쇼핑" ? styles.active : ""} onClick={() => { setSubFilter("쇼핑") }} >쇼핑</button></li>
            </ul>
          </div>
          <div className={styles.filterWrap}>
            {active !== "전체" && totalCount ? <p>{`총 ${totalCount} 건`}</p> : ""}
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
                    return <SearchCommonItem
                      list={list}
                      key={idx}
                    ></SearchCommonItem>
                  })
                }
              </div>
              <div className={styles.moreView}>
                <button type="button" onClick={()=>{setActive("여행정보");window.scrollTo({top:0})}}>더보기</button>
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
                    return <SearchCommonItem
                      list={list}
                      key={idx}
                    ></SearchCommonItem>
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
                    return <SearchCommonItem
                      list={list}
                      key={idx}
                    ></SearchCommonItem>
                  })
                }
              </div>
            </div>}
            {forthList && <div className={`${styles.section}`}>
              <div className={styles.courseList}>
                <h3 className={`${styles.scTitle} ${styles.courseIcon}`}>
                  여행 코스
                </h3>
                {
                  forthList && forthList.map((list, idx)=>{
                    if (idx > 2) {
                      return
                    }
                    return <SearchCommonItem
                    list={list}
                      key={idx}
                    ></SearchCommonItem>
                  })
                }
              </div>
            </div>}
            {!firstList && !secondList && !thirdList && !forthList && <NotFound keyword={keyword}/>}
          </div>

          {active !== "전체" && <div className={styles.searchResultWrap} style={active === "전체" ? { display: "none" } : { display: "block" }}>
            { 
              serviceList ? serviceList.map((list,idx)=>{
                return <SearchCommonItem
                  list={list}
                  key={idx}
                ></SearchCommonItem>
              }) 
              : <NotFound keyword={keyword}/>
            }
            { serviceList && <Pagination className="d-flex justify-content-center" current={currentPage} total={totalCount} pageSize={10} onChange={(page) => setCurrentPage(page)}/>}
          </div>}
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

