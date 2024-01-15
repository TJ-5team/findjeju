import React from 'react';
import styles from "../../DetailPage/styles.module.css";
import DetailList from './DetailList';

export default function DetailSports({ detailInfo, commonList }) {

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
          <DetailList name={"문의 및 안내"} list={detailList.infocenterleports} />
          <DetailList name={"주소"} list={commonList.addr1} />
          <DetailList name={"주차"} list={detailList.parkingleports} />
          <DetailList name={"주차요금"} list={detailList.parkingfeeleports} />
          <DetailList name={"이용시간"} list={detailList.usetimeleports} />
          <DetailList name={"예약안내"} list={detailList.reservation} />
          <DetailList name={"휴일"} list={detailList.restdateleports} />
          <DetailList name={"수용인원"} list={detailList.accomcountleports} />
          <DetailList name={"체험가능연령"} list={detailList.expagerangeleports} />
          <DetailList name={"신용카드가능정보"} list={detailList.chkcreditcardleports} />
          <DetailList name={"유모차대여정보"} list={detailList.chkbabycarriageleports} />
          {/* <li>
            <strong>문의 및 안내</strong>
            <span>{changeText(detailList.infocenterleports)}</span>
          </li>
          <li>
            <strong>주소</strong>
            <span>{changeText(commonList.addr1)}</span>
          </li>
          <li>
            <strong>주차</strong>
            <span>{changeText(detailList.parkingleports)}</span>
          </li>
          <li>
            <strong>주차요금</strong>
            <span>{changeText(detailList.parkingfeeleports)}</span>
          </li>
          <li>
            <strong>이용시간</strong>
            <span>{changeText(detailList.usetimeleports)}</span>
          </li>
          <li>
            <strong>예약안내</strong>
            <span>{changeText(detailList.reservation)}</span>
          </li>
          <li>
            <strong>휴일</strong>
            <span>{changeText(detailList.restdateleports)}</span>
          </li>
          <li>
            <strong>수용인원</strong>
            <span>{changeText(detailList.accomcountleports)}</span>
          </li>
          <li>
            <strong>체험가능연령</strong>
            <span>{changeText(detailList.expagerangeleports)}</span>
          </li>
          <li>
            <strong>신용카드가능정보</strong>
            <span>{changeText(detailList.chkcreditcardleports)}</span>
          </li>
          <li>
            <strong>유모차대여정보</strong>
            <span>{changeText(detailList.chkbabycarriageleports)}</span>
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

