import React from 'react';
import styles from './styles.module.css';
import { useSelector } from 'react-redux';

export default function Title() {

  let state = useSelector((state) => state);


  return (
    <>
      <div className={styles.wrap}>
        <h3 className={styles.title}>
          {state.area.name}
        </h3>
        <span className={styles.more}>
          +
        </span>
      </div>
    </>
  );
}

