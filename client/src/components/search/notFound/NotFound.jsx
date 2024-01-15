import React, { useEffect, useState } from 'react';
import styles from '../styles.module.css'
export default function NotFound({keyword}) {
  const [isLoading,setIsLoading] = useState(false);
  useEffect(()=>{
    setIsLoading(false)
    setTimeout(() => {
      setIsLoading(true)
    }, 3000);
  },[])
  if(!isLoading){
    return (
      <div className={styles.noResultWrap}>
        <p className={styles.noResult}>
          <strong>“{keyword}”</strong>
          을/를 찾고 있습니다.
          <br />
          잠시만 기다려 주세요.
        </p>
      </div>
    );
  }else{
    return (
      <div className={styles.noResultWrap}>
        <p className={styles.noResult}>
          <strong>“{keyword}”</strong>
          에 대한 검색결과가 없습니다.
          <br />
          다른 검색어를 입력하시거나 철자와 띄어쓰기를 확인해 보세요.
        </p>
      </div>
    );
  }
}

