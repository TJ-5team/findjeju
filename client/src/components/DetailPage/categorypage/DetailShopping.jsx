import React from 'react';
import useGetList from '../../../hooks/useGetList';
import styles from "../../DetailPage/styles.module.css";

export default function DetailShopping({ detailInfo, commonList }) {

  return (
    <>
      {detailInfo && detailInfo.map((detailList) =>
        <ul className={`${styles.detailInfo} ${styles.firstSection}`} key={detailList.contentid}>
          <li>
            <strong>문의 및 안내</strong>
            <span>{detailList.infocentershopping}</span>
          </li>
          {/* {commonList.homepage && 
                <li>
                  <strong>홈페이지</strong>
                  <span><Link to={changeText(commonList.homepage)}>{changeText(commonList.homepage)}</Link></span>
                </li>} */}
          <li>
            <strong>주소</strong>
            <span>{commonList.addr1}</span>
          </li>
          <li>
            <strong>주차</strong>
            <span>{detailList.parkingshopping}</span>
          </li>
          <li>
            <strong>영업시간</strong>
            <span>{detailList.opentime}</span>
          </li>
          <li>
            <strong>개장일</strong>
            <span>{detailList.opendateshopping}</span>
          </li>
          <li>
            <strong>휴일</strong>
            <span>{detailList.restdateshopping}</span>
          </li>
          <li>
            <strong>규모</strong>
            <span>{detailList.scaleshopping}</span>
          </li>
          <li>
            <strong>체험가능연령</strong>
            <span>{detailList.expagerange}</span>
          </li>
          <li>
            <strong>매장안내</strong>
            <span>{detailList.shopguide}</span>
          </li>
          <li>
            <strong>판매품목</strong>
            <span>{detailList.saleitem}</span>
          </li>
          <li>
            <strong>신용카드가능정보</strong>
            <span>{detailList.chkcreditcardshopping}</span>
          </li>
          <li>
            <strong>유모차대여정보</strong>
            <span>{detailList.chkbabycarriageshopping}</span>
          </li>
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

