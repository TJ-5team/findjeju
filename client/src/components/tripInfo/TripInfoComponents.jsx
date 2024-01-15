import React from "react";
import styles from './styles.module.css';
import { Link } from 'react-router-dom';

export default function TripInfoComponents({title, lists}){
  return(
    <>
    <h3 className={styles.title}>{title}</h3>
    <div className={styles.info}>
      {lists && lists.map((list,i) => 
      <Link to={list.contenttypeid === "25" ? `/course/${list.contentid}`: `/detail/${list.contentid}/${list.contenttypeid}`} key={i}>
        <div className={styles.box}>
          <img className={styles.img} src={list.firstimage ? list.firstimage : "http://localhost:3000/images/jeju_island.png"} alt="추천사진" />
          <h4 className={styles.text}>{list.title}</h4>
        </div>
      </Link>
      )}
    </div>
    </>
  );
}
