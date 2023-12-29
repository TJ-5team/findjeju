import React, { useReducer } from 'react';
import styles from './styles.module.css';
import Title from '../title/Title';
import useTitle from '../../../hooks/useTitle';

export default function Recommand() {

  const [state, dispatch] = useReducer(useTitle, '제주')



  return (
    <>
      <div className={styles.wrap}>
        <div className={`${styles.inner} inner`}>
          <ul>
            {/* <li onClick={dispatch({ name: value })}></li> */}
          </ul>
          <Title />
        </div>
      </div>
    </>
  );
}

