import React from 'react';
import styles from './styles.module.css'
export default function Search() {
  return (
    <div className={styles.wrap}>
      <div className={styles.container}>
        <div className={styles.leftBox}>
          <div className={styles.listTopMenu}>
          </div>
          <div className={styles.filter}></div>
          <div className={styles.searchResultBanner}></div>
        </div>
        <div className={styles.rightMenu}>
          <div className={styles.rightBox}>

          </div>
        </div>
        <div className={styles.float}></div>
      </div>
    </div>
  );
}

