import React, { useEffect } from "react";
import styles from './styles.module.css';
import WeatherWeek from "./WeatherWeek";
import useGetDate from "../../../hooks/useGetDate";
import useGetList from "../../../hooks/useGetList";

export default function Weather(){
  const dateDay = useGetDate(false);

  const [weatherNow] = useGetList(`http://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getUltraSrtNcst?serviceKey=H4pEvj%2FnHLi4pMfSQvy0lqYgV7Wv1sdyTEBMecAG8%2Be%2FRh%2BjKs4mFAoT3D4cRrjVoEQQEyzLzSzrDjBCeYT9ng%3D%3D&numOfRows=10&pageNo=1&base_date=${dateDay}&base_time=0600&nx=52&ny=38&dataType=JSON`);
  const [weatherDay] = useGetList(`http://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getVilageFcst?serviceKey=H4pEvj%2FnHLi4pMfSQvy0lqYgV7Wv1sdyTEBMecAG8%2Be%2FRh%2BjKs4mFAoT3D4cRrjVoEQQEyzLzSzrDjBCeYT9ng%3D%3D&numOfRows=200&pageNo=1&base_date=${dateDay}&base_time=0200&nx=52&ny=38&dataType=JSON`);
  
  const weatherNowFilter = weatherNow.filter((data) => data.category === "T1H");
  const weatherDayMinFilter = weatherDay.filter((data) => data.category === "TMN" || data.category === "TMX");
  
  console.log(weatherNowFilter);
  console.log(weatherDayMinFilter);

  return(
    <>
      <div className={styles.wrap}>
        <div className={`${styles.inner} inner ${styles.weather}`}>
          {weatherNowFilter.map((weather, index)=>(
            <div key={index} className={styles.weatherDaily}>
              <p>{weather.baseDate}</p>
              <p>{weather.obsrValue}&#8451;</p>
              <b>
                최고 <span>&#8451;</span>
                최저 <span>&#8451;</span>
              </b>
              <p>풍속 </p>
            </div>
          ))}
          <WeatherWeek/>
        </div>
      </div>
    </>
  );
}


