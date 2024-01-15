import React from 'react';
import styles from "../../DetailPage/styles.module.css";
import DetailList from './DetailList';

export default function DetailLodging({ detailInfo, commonList }) {

  const changeText = (e) => {
    if (!e) {
      return
    }

    if (e.includes("<br>")) {
      return e.split('<br>').map(line => <>{line}<br /></>);
    } else if (e.includes("<br/>")) {
      return e.split('<br/>').map(line => <>{line}<br /></>);
    } else if (e.includes("<br />")) {
      return e.split('<br />').map(line => <>{line}<br /></>);
    }
  }

  return (
    <>
      {detailInfo && detailInfo.map((detailList) =>
        <ul className={`${styles.detailInfo} ${styles.firstSection}`} key={detailList.contentid}>
          <DetailList name={"문의 및 안내"} list={detailList.infocenterlodging} />
          <DetailList name={"주소"} list={commonList.addr1} />
          <DetailList name={"주차"} list={detailList.parkinglodging} />
          <DetailList name={"입실시간"} list={detailList.checkintime} />
          <DetailList name={"퇴실시간"} list={detailList.checkouttime} />
          <DetailList name={"객실내 취사 여부"} list={detailList.chkcooking} />
          <DetailList name={"식음료장"} list={detailList.foodplace} />
          <DetailList name={"픽업서비스"} list={detailList.pickup} />
          <DetailList name={"객실수"} list={detailList.roomcount} />
          <DetailList name={"객실유형"} list={detailList.roomtype} />
          <DetailList name={"부대시설"} list={detailList.subfacility} />
          {/* <li>
            <strong>문의 및 안내</strong>
            <span>{changeText(detailList.infocenterlodging)}</span>
          </li>
          <li>
            <strong>주소</strong>
            <span>{changeText(commonList.addr1)}</span>
          </li>
          <li>
            <strong>주차</strong>
            <span>{changeText(detailList.parkinglodging)}</span>
          </li>
          <li>
            <strong>입실시간</strong>
            <span>{changeText(detailList.checkintime)}</span>
          </li>
          <li>
            <strong>퇴실시간</strong>
            <span>{changeText(detailList.checkouttime)}</span>
          </li>
          <li>
            <strong>객실내 취사 여부</strong>
            <span>{changeText(detailList.chkcooking)}</span>
          </li>
          <li>
            <strong>식음료장</strong>
            <span>{changeText(detailList.foodplace)}</span>
          </li>
          <li>
            <strong>픽업서비스</strong>
            <span>{changeText(detailList.pickup)}</span>
          </li>
          <li>
            <strong>객실수</strong>
            <span>{changeText(detailList.roomcount)}</span>
          </li>
          <li>
            <strong>객실유형</strong>
            <span>{changeText(detailList.roomtype)}</span>
          </li>
          <li>
            <strong>부대시설</strong>
            <span>{changeText(detailList.subfacility)}</span>
          </li> */}
          {/* {comfortable && comfortable.map(info =>
            <>
              <li>
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
              </li>
            </>
          )} */}
        </ul >
      )}
    </>
  );
}

