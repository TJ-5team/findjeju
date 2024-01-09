import React, { useEffect } from 'react';
import styles from '../styles.module.css';
import { useDispatch, useSelector } from 'react-redux';
import useGetList from '../../../../hooks/useGetList';
import { getAreaData } from '../../../../reselector/areaReselector';
import { changeName } from "../../../../reducer/areaReducer.js";


export default function AreaTitle({ getArea }) {

    let dispatch = useDispatch();
    let state = useSelector(getAreaData);

    /* 지역 데이터 */
    const [area] = useGetList(`http://apis.data.go.kr/B551011/KorService1/areaBasedList1?numOfRows=30&pageNo=1&MobileOS=ETC&MobileApp=AppTest&ServiceKey=niKngftprkI%2FHGPVne%2FS9c%2FCNgVohrMa9Q7iszfj1BE9mCBJvPE%2FtIV16r6O7myIthLaEAbyPJH8x2zQNU0pPA%3D%3D&listYN=Y&arrange=A&contentTypeId=&areaCode=39${state.area.code}&cat1=&cat2=&cat3=&_type=json`);

    useEffect(() => {

        getArea(area)

    }, [area])




    return (
        <>
            <div className={styles.titleWrap}>
                <h2 className={styles.title}>
                    <em>대한민국 구석구석 지역 정보</em>
                    <p>어디까지 알고있니?</p>
                </h2>
                <div className={styles.rightWrap}>
                    <fieldset className={styles.iconWrap} onClick={() => {

                        dispatch(changeName({ name: "제주시", code: "&sigunguCode=4", imgArea: 'jeju' }));

                    }}>
                        <div className={styles.icon}>
                        </div>
                        <p className={styles.area}>제주시</p>
                    </fieldset>
                    <fieldset className={styles.iconWrap} onClick={() => {

                        dispatch(changeName({ name: "서귀포시", code: "&sigunguCode=3", imgArea: 'seogwipo' }))

                    }}>
                        <div className={styles.icon}>
                        </div>
                        <p className={styles.area}>서귀포시</p>
                    </fieldset>
                </div>
            </div>
        </>
    );
}

