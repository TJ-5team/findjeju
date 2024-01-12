import React, { useEffect, useRef, useState } from 'react';
import styles from './styles.module.css';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import UserBox from './userBox/UserBox';
import { getUser } from '../../utils/localStorage';
import ContentBox from './contentBox/ContentBox';

export default function MyPage() {

  const [member, setMember] = useState([]);
  const params = useParams();
  const wrapRef = useRef(null);
  const userInfo = getUser();

  useEffect(() => {

    if (userInfo.id !== '') {

      axios({

        method: "get",
        url: `http://127.0.0.1:8000/member/${userInfo.id}`,

      }).then((result) => {
        setMember(result.data);
      });

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
              <UserBox member={member} />
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

