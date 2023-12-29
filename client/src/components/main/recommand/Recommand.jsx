import React, { useReducer } from 'react';
import styles from './styles.module.css';
import Title from '../title/Title';

export default function Recommand() {



  return (
    <>
      <div className={styles.wrap}>
        <div className={`${styles.inner} inner`}>
          <Title />
        </div>
      </div>
    </>
  );
}

