import React from 'react';
import styles from '../styles.module.css'
export default function NotFound({keyword}) {
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

