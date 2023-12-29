import React from "react";
import styles from "./styles.module.css";
import useGetList from "../../../hooks/useGetList";

export default function Rest(){

  //const [list] = useGetList(url);
  //console.log(list);

  return(
    <>
      <div className={styles.wrap}>
        <div className="inner">
          <div>
            <ul className={styles.tab}>
              <li className={styles.menuList}>숙소</li>
              <li className={styles.menuList}>맛집</li>
            </ul>
          </div>
          <div>
            {/* {list.map((item)=>)} */}
            <>
            <div>
              <img src="http://tong.visitkorea.or.kr/cms/resource/75/2837175_image2_1.jpg" alt="" />
            </div>
            <div>가시어멍김밥</div>
            <div>제주시 월랑로 36 </div>
            </>
          </div>
        </div>
      </div>
    </>
  );
}