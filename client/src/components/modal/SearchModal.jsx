import React, { useRef, useState } from 'react';
import styles from './styles.module.css'
import {Link} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import { getSearch } from '../../reselector/searchReselector';
import { clickOthers } from '../../reducer/searchReducer';

export default function SearchModal() {
  const [isFocus,setIsFocus] = useState(false);
  const [length,setLength] = useState(false);
  const {searchFlag} = useSelector(getSearch)
  const dispatch = useDispatch();
  const wrapTarget = useRef(null);
  console.log(searchFlag);
  function handleChange(e){
    if(e.target.value.length > 0){
      setLength(true)
    }else{
      setLength(false)
    }
  }
  function handleClick(e){
    console.log(e.currentTarget);
    console.log(e);
    console.log(wrapTarget);
    if(e.target === wrapTarget.current){
      dispatch(clickOthers())
    }else{
      return
    }
  }
  return (
      <div className={styles.wrap} style={searchFlag ? { "display": "block" } :{ "display": "none" }} onClick={(e)=>handleClick(e)} ref={wrapTarget}>
        <div className={styles.container}>
          <div className={styles.box}>
            <span className={styles.logo}>
              <Link to="/">
                <img src="data:image/png;base64,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" alt=""></img>
              </Link>
            </span>
            <div className={styles.searchWrap}>
              <div className={`${styles.form} ${isFocus ? styles.on : ''}`}>
                <input className={styles.searchInput} onChange={(e)=>handleChange(e)} onFocus={()=>setIsFocus(true)} onBlur={()=>setIsFocus(false)} type="text" placeholder="어디로, 어떤 여행을 떠날 예정인가요?" />
                <button className={styles.deleteBtn} style={length ? {"display":"block"} : {"display":"none"}}></button>
                <button className={styles.searchBtn}></button>
                <span className={styles.widthCheck}></span>
              </div>
              <div className={styles.recentSearch}>
                <h2>최근 검색어</h2>
                <ul>
                  <li>
                    <Link to={"/"}>온천</Link>
                    <button type="button" className={styles.deleteRSbtn}>삭제</button>
                  </li>
                </ul>
                <button type="button" className={styles.deleteAllBtn}>전체삭제</button>
                <p className={styles.noData} style={{"display":"none"}}>최근 검색어 내역이 없습니다.</p>
              </div>
              <div className={styles.popularSearch}>
                <h2>최근 인기 검색어</h2>
                <em>조회일 직전 7일간의 인기 검색어</em>
                <div className={styles.popularKeyword}>
                  <ul>
                    <li>
                      <span className={styles.spanNum}>1</span>
                      <Link to={"/"}>제주지역</Link>
                    </li>
                  </ul>
                  <ul>
                    <li>
                      <span className={styles.spanNum}>2</span>
                      <Link to={"/"}>제주지역</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <button className={styles.searchClose} type="button" onClick={()=>dispatch(clickOthers())}>닫기</button>
            </div>
          </div>
        </div>
      </div>
  );
}

