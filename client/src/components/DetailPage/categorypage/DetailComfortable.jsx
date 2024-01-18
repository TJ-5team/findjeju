import React from 'react';
import styles from "../../DetailPage/styles.module.css";
import DetailList from './DetailList';

export default function DetailComfortable({ comfortableInfo }) {
  // const [comfortable] = useGetList(`http://apis.data.go.kr/B551011/KorWithService1/detailWithTour1?serviceKey=nyjoBggUlH0et5JY2fC9TW7%2BuSsx%2BIGHKWsgAuOWswMCtns64Y3M1Z%2BGROfg6L5ONigYQx6N%2BmqDCpABn3PmeQ%3D%3D&contentId=${contentid}&MobileOS=ETC&MobileApp=AppTest&_type=json`);

  return (
    <>
      {comfortableInfo && comfortableInfo.map(info =>
        <ul className={styles.detailInfo} key={contentid}>
          <DetailList name={"장애인 주차 안내"} list={info.parking} />
          <DetailList name={"접근로"} list={info.publictransport} />
          <DetailList name={"휠체어"} list={info.wheelchair} />
          <DetailList name={"출입통로"} list={info.exit} />
          <DetailList name={"엘리베이터"} list={info.elevator} />
          <DetailList name={"화장실"} list={info.restroom} />
          <DetailList name={"객실"} list={info.room} />
          <DetailList name={"점자블록"} list={info.braileblock} />
          <DetailList name={"보조견동반"} list={info.helpdog} />
          <DetailList name={"안내요원"} list={info.guidehuman} />
          <DetailList name={"점자홍보물 및 점자표지판"} list={info.brailepromotion} />
          <DetailList name={"유모차"} list={info.stroller} />
          <DetailList name={"수유실"} list={info.lactationroom} />
          {/* <li>
            <strong>장애인 주차 안내</strong>
            <span>{info.parking}</span>
          </li>
          <li>
            <strong>접근로</strong>
            <span>{info.publictransport}</span>
          </li>
          <li>
            <strong>휠체어</strong>
            <span>{info.wheelchair}</span>
          </li>
          <li>
            <strong>출입통로</strong>
            <span>{info.exit}</span>
          </li>
          <li>
            <strong>엘리베이터</strong>
            <span>{info.elevator}</span>
          </li>
          <li>
            <strong>화장실</strong>
            <span>{info.restroom}</span>
          </li>
          <li>
            <strong>객실</strong>
            <span>{info.room}</span>
          </li>
          <li>
            <strong>점자블록</strong>
            <span>{info.braileblock}</span>
          </li>
          <li>
            <strong>보조견동반</strong>
            <span>{info.helpdog}</span>
          </li>
          <li>
            <strong>안내요원</strong>
            <span>{info.guidehuman}</span>
          </li>
          <li>
            <strong>점자홍보물 및 점자표지판</strong>
            <span>{info.brailepromotion}</span>
          </li>
          <li>
            <strong>유모차</strong>
            <span>{info.stroller}</span>
          </li>
          <li>
            <strong>수유실</strong>
            <span>{info.lactationroom}</span>
          </li> */}
        </ul>
      )}
    </>
  );
}

