import React from 'react';
import styles from "../../DetailPage/styles.module.css";
import DetailList from './DetailList';

export default function DetailRestaurant({ detailInfo, commonList }) {

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
          <DetailList name={"문의 및 안내"} list={detailList.infocenterfood} />
          <DetailList name={"주소"} list={commonList.addr1} />
          <DetailList name={"주차"} list={detailList.parkingfood} />
          <DetailList name={"영업시간"} list={detailList.opentimefood} />
          <DetailList name={"예약안내"} list={detailList.reservationfood} />
          <DetailList name={"휴일"} list={detailList.restdatefood} />
          <DetailList name={"규모"} list={detailList.scalefood} />
          <DetailList name={"좌석수"} list={detailList.seat} />
          <DetailList name={"대표메뉴"} list={detailList.firstmenu} />
          <DetailList name={"취급메뉴"} list={detailList.treatmenu} />
          <DetailList name={"포장가능"} list={detailList.packing} />
          {/* <li>
            <strong>문의 및 안내</strong>
            <span>{changeText(detailList.infocenterfood)}</span>
          </li>
          <li>
            <strong>주소</strong>
            <span>{changeText(commonList.addr1)}</span>
          </li>
          <li>
            <strong>주차</strong>
            <span>{changeText(detailList.parkingfood)}</span>
          </li>
          <li>
            <strong>영업시간</strong>
            <span>{changeText(detailList.opentimefood)}</span>
          </li>
          <li>
            <strong>예약안내</strong>
            <span>{changeText(detailList.reservationfood)}</span>
          </li>
          <li>
            <strong>휴일</strong>
            <span>{changeText(detailList.restdatefood)}</span>
          </li>
          <li>
            <strong>규모</strong>
            <span>{changeText(detailList.scalefood)}</span>
          </li>
          <li>
            <strong>좌석수</strong>
            <span>{changeText(detailList.seat)}</span>
          </li>
          <li>
            <strong>대표메뉴</strong>
            <span>{changeText(detailList.firstmenu)}</span>
          </li>
          <li>
            <strong>취급메뉴</strong>
            <span>{changeText(detailList.treatmenu)}</span>
          </li>
          <li>
            <strong>포장가능</strong>
            <span>{changeText(detailList.packing)}</span>
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

