import React from 'react';
import styles from "../../DetailPage/styles.module.css";
import DetailList from './DetailList';

export default function DetailCultural({ detailInfo, commonList }) {

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
          <DetailList name={"문의 및 안내"} list={detailList.infocenterculture} />
          <DetailList name={"주소"} list={commonList.addr1} />
          <DetailList name={"주차"} list={detailList.parkingculture} />
          <DetailList name={"주차요금"} list={detailList.parkingfee} />
          <DetailList name={"이용시간"} list={detailList.usetimeculture} />
          <DetailList name={"할인정보"} list={detailList.discountinfo} />
          <DetailList name={"휴일"} list={detailList.restdateculture} />
          <DetailList name={"수용인원"} list={detailList.accomcountculture} />
          <DetailList name={"규모"} list={detailList.scale} />
          <DetailList name={"관람소요시간"} list={detailList.spendtime} />
          <DetailList name={"신용카드 가능정보"} list={detailList.chkcreditcardculture} />
          <DetailList name={"애완동물 가능정보"} list={detailList.chkpetculture} />
          <DetailList name={"유모차대여정보"} list={detailList.chkbabycarriageculture} />
          {/* <li>
            <strong>문의 및 안내</strong>
            <span>{changeText(detailList.infocenterculture)}</span>
          </li> 
          <li>
            <strong>주소</strong>
            <span>{changeText(commonList.addr1)}</span>
          </li>
          <li>
            <strong>주차</strong>
            <span>{changeText(detailList.parkingculture)}</span>
          </li>
          <li>
            <strong>주차요금</strong>
            <span>{changeText(detailList.parkingfee)}</span>
          </li>
          <li>
            <strong>이용시간</strong>
            <span>{changeText(detailList.usetimeculture)}</span>
          </li>
          <li>
            <strong>할인정보</strong>
            <span>{changeText(detailList.discountinfo)}</span>
          </li>
          <li>
            <strong>휴일</strong>
            <span>{changeText(detailList.restdateculture)}</span>
          </li>
          <li>
            <strong>수용인원</strong>
            <span>{changeText(detailList.accomcountculture)}</span>
          </li>
          <li>
            <strong>규모</strong>
            <span>{changeText(detailList.scale)}</span>
          </li>
          <li>
            <strong>신용카드가능정보</strong>
            <span>{changeText(detailList.chkcreditcardculture)}</span>
          </li>
          <li>
            <strong>애완동물가능정보</strong>
            <span>{changeText(detailList.chkpetculture)}</span>
          </li>
          <li>
            <strong>유모차대여정보</strong>
            <span>{changeText(detailList.chkbabycarriageculture)}</span>
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

