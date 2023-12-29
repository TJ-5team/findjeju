import React, { useReducer } from 'react';
import styles from './styles.module.css';
import useTitle from '../../../hooks/useTitle';

export default function Title() {

  const [state, dispatch] = useReducer(useTitle, '제주')



  return (
    <>
      <div className={styles.wrap}>
        {state.name}
      </div>
    </>
  );
}

