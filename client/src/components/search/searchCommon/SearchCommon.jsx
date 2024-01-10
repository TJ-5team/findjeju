import React from 'react';
import styles from '../styles.module.css'
import { Link } from 'react-router-dom';
export default function SearchCommon({list}) {
  if(!list){
    return (
      <div> loding </div>
    );
  }else{
  return (
      <ul className={styles.commonList}>
        <li>
          <Link to={list.contentid} className={styles.searchImg}>
            <img src={list.firstimage} alt="" />
            <span className={styles.distance}>
              <span></span>
            </span>
          </Link>
          <div className={styles.commonContents}>
            <div className={styles.contentsTitle}>
              <Link to={list.contentid}>
                {list.title}
              </Link>
            </div>
            <span className={styles.contentsArea}>{list.addr1.split(" ")[0]} {list.addr1.split(" ")[1]}</span>
            <div className={styles.contentsTag}>
              <span>
              </span>
            </div>
          </div>
          <button></button>
        </li>
      </ul>
  );
  }
}

