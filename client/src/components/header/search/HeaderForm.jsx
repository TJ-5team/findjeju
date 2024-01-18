import React, { useEffect, useState } from "react";
import styles from "./styles.module.css";
import { Link, useParams } from "react-router-dom";
import {useDispatch} from "react-redux"
import { clickSearch } from "../../../reducer/searchReducer";
import { getUser } from "../../../utils/localStorage";
export default function HeaderForm() {
  const params = useParams();
  const dispatch = useDispatch();
  const [keyword, setKeyword] = useState("");
  const userInfo = getUser();
  useEffect(()=>{
    if(params.keyword){
      setKeyword(params.keyword)
    }else{
      setKeyword("")
    }
  },[params.keyword])
  return (
    <>
      <div className={styles.formWrap}>
        <div className={styles.input}>
          {/* 크롬 아이디 자동완성 기능방지용 */}
          <input style={{"display":"none"}} type="text" />
          <input style={{"display":"none"}} type="password" />
          {/* 크롬 아이디 자동완성 기능방지용 */}
          <input type="text" readOnly placeholder="어디로, 어떤 여행을 떠날 예정인가요?" value={keyword} title="검색" id="search" autoComplete="off" onFocus={()=>dispatch(clickSearch())}/>
          <button onClick={()=>dispatch(clickSearch())} className={styles.btnSearch}></button>
        </div>
        <div className={styles.profile}>

          {userInfo ? userInfo.id ? <Link to={"/mypage/main"} className={styles.btnProfile}></Link> : <Link to={"/login"} className={styles.btnProfile}></Link> : <Link to={"/login"} className={styles.btnProfile}></Link>}
          {/* {userInfo.id ? <Link to={"/mypage/main"} className={styles.btnProfile}></Link> : <Link to={"/login"} className={styles.btnProfile}></Link>} */}

        </div>
      </div>
    </>
  );
}