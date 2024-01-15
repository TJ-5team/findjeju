import React from 'react';
import styles from "../../DetailPage/styles.module.css";
import DetailList from './DetailList';

export default function DetailShopping({ detailInfo, commonList }) {

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

  const changeHomepage = (e) => {
    const regex = /<a href="(.*?)" target="_blank"/;
    console.log(e);
    return e.match(regex)[1]
  }


  return (
    <>
      {detailInfo && detailInfo.map((detailList) =>
        <ul className={`${styles.detailInfo} ${styles.firstSection}`} key={detailList.contentid}>
          <DetailList name={"문의 및 안내"} list={detailList.infocentershopping} />
          <DetailList name={"주소"} list={commonList.addr1} />
          <DetailList name={"주차"} list={detailList.parkingshopping} />
          <DetailList name={"영업시간"} list={detailList.opentime} />
          <DetailList name={"개장일"} list={detailList.opendateshopping} />
          <DetailList name={"휴일"} list={detailList.restdateshopping} />
          <DetailList name={"규모"} list={detailList.scaleshopping} />
          <DetailList name={"매장안내"} list={detailList.shopguide} />
          <DetailList name={"판매품목"} list={detailList.saleitem} />
          <DetailList name={"신용카드가능정보"} list={detailList.chkcreditcardshopping} />
          <DetailList name={"유모차대여정보"} list={detailList.chkbabycarriageshopping} />
          {/* <li>
            <strong>문의 및 안내</strong>
            <span>{changeText(detailList.infocentershopping)}</span>
          </li>
          <li>
            <strong>주소</strong>
            <span>{changeText(commonList.addr1)}</span>
          </li>
          <li>
            <strong>주차</strong>
            <span>{changeText(detailList.parkingshopping)}</span>
          </li>
          <li>
            <strong>영업시간</strong>
            <span>{changeText(detailList.opentime)}</span>
          </li>
          <li>
            <strong>개장일</strong>
            <span>{changeText(detailList.opendateshopping)}</span>
          </li>
          <li>
            <strong>휴일</strong>
            <span>{changeText(detailList.restdateshopping)}</span>
          </li>
          <li>
            <strong>규모</strong>
            <span>{changeText(detailList.scaleshopping)}</span>
          </li>
          <li>
            <strong>체험가능연령</strong>
            <span>{changeText(detailList.expagerange)}</span>
          </li>
          <li>
            <strong>매장안내</strong>
            <span>{changeText(detailList.shopguide)}</span>
          </li>
          <li>
            <strong>판매품목</strong>
            <span>{changeText(detailList.saleitem)}</span>
          </li>
          <li>
            <strong>신용카드가능정보</strong>
            <span>{changeText(detailList.chkcreditcardshopping)}</span>
          </li>
          <li>
            <strong>유모차대여정보</strong>
            <span>{changeText(detailList.chkbabycarriageshopping)}</span>
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

