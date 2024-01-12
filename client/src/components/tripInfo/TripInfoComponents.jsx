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
          <img className={styles.img} src={list.firstimage ? list.firstimage : "https://a.cdn-hotels.com/gdcs/production123/d1230/d3ed36fc-c77c-4843-9b5e-7a5bfe80151d.jpg?impolicy=fcrop&w=800&h=533&q=medium"} alt="추천사진" />
          <h4 className={styles.text}>{list.title}</h4>
        </div>
      </Link>
      )}
    </div>
    </>
  );
}
