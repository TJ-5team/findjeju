import React, { useEffect, useRef } from 'react';
import styles from './styles.module.css';
import { useParams } from 'react-router-dom';
import UserBox from './userBox/UserBox';
import { getUser } from '../../utils/localStorage';
import ContentBox from './contentBox/ContentBox';
import { useDispatch, useSelector } from 'react-redux';
import { UserData } from '../../api/userApi';
import { userData } from '../../reselector/userReselector';

export default function MyPage() {

  const dispatch = useDispatch();
  const params = useParams();
  const wrapRef = useRef(null);
  const userInfo = getUser();
  const {user} = useSelector(userData);

  useEffect(() => {

    console.log(user);
    if (userInfo.id !== '') {

      dispatch(UserData(userInfo));

    }

  }, []);

  return (
    <>
      {userInfo.id && params.list === 'main' ?
        <div className={styles.wrap} ref={wrapRef}>
          <div className={styles.titleWrap}>
            <h2 className={`${styles.title} inner`}>
              마이페이지
            </h2>
          </div>
          <div className={styles.contentWrap}>
            <div className={`${styles.contentInner} inner`}>
              <UserBox member={user} />
              <ContentBox />
            </div>
          </div>
        </div >
        : <div>
          없습니다.
        </div>
      }
    </>
  );
}

