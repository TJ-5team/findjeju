import React, { useEffect, useState } from 'react';
import styles from './styles.module.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

export default function SwiperBox(props) {
    const [arr, setArr] = useState([]);

    let res = [];

    useEffect(() => {

        let tempArr = [];

        props.area.forEach((val, key) => {

            /* 
            개선 전 코드
            if (key === 0) {
                res = props.area.filter((v, i) => i === 0 || i === 1 || i === 2);
            } else if (key === 1) {
                res = props.area.filter((v, i) => i === 3 || i === 4 || i === 5);
            } else if (key === 2) {
                res = props.area.filter((v, i) => i === 6 || i === 7 || i === 8);
            } 
            */

            /* 개선 후 코드 */
            const startIndex = key * 3;
            const endIndex = startIndex + 3;

            res = props.area.filter((v, i) => i >= startIndex && i < endIndex);

            if (!tempArr.some(arr => arr === res) && res.length >= 1) {
                tempArr.push(res);
            }

        })

        setArr(tempArr);

    }, [props.area]);

    return (
        <>
            <Swiper
                slidesPerView={1}
                className={styles.swiper}
            >
                {arr.map((val, key) => {
                    return <SwiperSlide className={styles.slide}>
                        {val.map((lst, idx) => {
                            let random = Math.floor(Math.random() * (10 - 1 + 1) + 1);
                            return <fieldset className={styles.imgBox}>
                                <img src={lst.firstimage ? lst.firstimage : `./images/recommand/${props.state.imgArea}${random}.jpg`} alt="제주도이미지" />
                            </fieldset>
                        })}
                    </SwiperSlide>
                }
                )}
            </Swiper>
        </>
    );
}