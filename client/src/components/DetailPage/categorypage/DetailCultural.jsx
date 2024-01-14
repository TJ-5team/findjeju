import React from 'react';
import useGetList from '../../../hooks/useGetList';
import styles from "../../DetailPage/styles.module.css";

export default function DetailCultural({ detailInfo, commonList }) {

  const changeText = (e) => {
    return e.split('<br>').map(line => <>{line}<br/></>);
  }

  const ChangeText = array => {
    for (let index = 0; index < array.length; index++) {
      const targetObj = array[index];
      const values = Object.values(targetObj);
      values.forEach(val => {
        if (val.includes("<br>")||val.includes("<br/>")||val.includes("<br />")) {
          changeText(val)
        }else{
          console.log('false');
        }
      })
    }
  }

  ChangeText(detailInfo)

  return (
    <>
      {detailInfo && detailInfo.map((detailList) =>
        <ul className={`${styles.detailInfo} ${styles.firstSection}`} key={detailList.contentid}>
          <li>
            <strong>문의 및 안내</strong>
            <span>{detailList.infocenterculture}</span>
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
            <span>{detailList.parkingculture}</span>
          </li>
          <li>
            <strong>주차요금</strong>
            <span>{detailList.parkingfee}</span>
          </li>
          <li>
            <strong>이용시간</strong>
            <span>{detailList.usetimeculture}</span>
          </li>
          <li>
            <strong>할인정보</strong>
            <span>{detailList.discountinfo}</span>
          </li>
          <li>
            <strong>휴일</strong>
            <span>{detailList.restdateculture}</span>
          </li>
          <li>
            <strong>수용인원</strong>
            <span>{detailList.accomcountculture}</span>
          </li>
          <li>
            <strong>규모</strong>
            <span>{detailList.scale}</span>
          </li>
          <li>
            <strong>신용카드가능정보</strong>
            <span>{detailList.chkcreditcardculture}</span>
          </li>
          <li>
            <strong>애완동물가능정보</strong>
            <span>{detailList.chkpetculture}</span>
          </li>
          <li>
            <strong>유모차대여정보</strong>
            <span>{detailList.chkbabycarriageculture}</span>
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

