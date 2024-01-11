import React, { useEffect } from 'react';
import styles from '../styles.module.css'
import { Link } from 'react-router-dom';
import useGetList from '../../../hooks/useGetList';
export default function SearchCourse({cosList}) {
  const [list] = useGetList(`http://apis.data.go.kr/B551011/KorService1/detailIntro1?ServiceKey=CU%2BXIQukCNW8VDOOJDU8QzHHPgrsOso%2FEiDhpWTlD8Lb9q1SYmll5Qp9YK4UsjFNOYVQoLCrMi2s0mfnEPr0iA%3D%3D&contentTypeId=${cosList.contenttypeid}&contentId=${cosList.contentid}&MobileOS=ETC&MobileApp=AppTest&_type=json`)
  if(!cosList){
    return (
      <div> loding </div>
      );
    }else{
  return (
      <ul className={styles.courseList}>
        <li>
          <Link className={styles.searchImg} to={`/detail/${cosList.contentid}/${cosList.contenttypeid}`}>
            <img src={cosList.firstimage} alt="" />
            <span className={styles.distance}>
              <span>
                <strong>코스 총거리</strong>
                {list && list.map(item=>item.distance)}
              </span>
            </span>
          </Link>
          <div className={styles.commonContents}>
            <div className={styles.contentsTitle}>
              <Link to={`/detail/${cosList.contentid}/${cosList.contenttypeid}`}>
                {cosList.title}
              </Link>
            </div>
            <span className={styles.contentsArea}>제주특별자치도</span>
            <div className={styles.courseTag}>
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

