import React from 'react';
import styles from './styles.module.css';
import { useSelector } from 'react-redux';
import { getAreaData } from '../../../reselector/areaReselector';
import { useNavigate } from 'react-router';

export default function Title(props) {

  let state = useSelector(getAreaData);
  let navigate = useNavigate();

  return (
    <>
      <div className={styles.wrap}>
        <h3 className={props.style ? styles.subTitle : props.newStyle ? styles.newStyle : styles.title}>
          <em>{state.area.name} </em>
          <span>{props.info ? props.info : null}</span>
        </h3>
        {props.more ? <span className={styles.more} onClick={()=>{navigate('tourist')}}>{props.more}</span> : null}
      </div>
    </>
  );
}

