import React, { useEffect } from "react";
import styles from './styles.module.css';
import WeatherWeek from "./WeatherWeek";
import useGetDate from "../../../hooks/useGetDate";
import useGetList from "../../../hooks/useGetList";

export default function Weather(){
  const dateDay = useGetDate(false);

  const [weatherNow] = useGetList(`http://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getUltraSrtNcst?serviceKey=H4pEvj%2FnHLi4pMfSQvy0lqYgV7Wv1sdyTEBMecAG8%2Be%2FRh%2BjKs4mFAoT3D4cRrjVoEQQEyzLzSzrDjBCeYT9ng%3D%3D&numOfRows=10&pageNo=1&base_date=${dateDay.date}&base_time=0600&nx=52&ny=38&dataType=JSON`);
  const [weatherDay] = useGetList(`http://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getVilageFcst?serviceKey=H4pEvj%2FnHLi4pMfSQvy0lqYgV7Wv1sdyTEBMecAG8%2Be%2FRh%2BjKs4mFAoT3D4cRrjVoEQQEyzLzSzrDjBCeYT9ng%3D%3D&numOfRows=200&pageNo=1&base_date=${dateDay.date}&base_time=0200&nx=52&ny=38&dataType=JSON`);
  
  const weatherNowFilter = weatherNow.filter((data) => data.category === "T1H");
  const weatherDayMinFilter = weatherDay.filter((data) => data.category === "TMN" || data.category === "TMX");
  const weatherSkyFilter = weatherDay.filter((data) => data.category === "PTY");
  
  const getWeatherBg = (skyValue) => {
      if (skyValue === '0') {
        return styles.sunny;
      } else if (skyValue === '1') {
        return styles.rain;
      } else if (skyValue === '2') {
        return styles.rainSnow;
      } else if (skyValue === '3') {
        return styles.snow;
      } else if (skyValue === '4') {
        return styles.shower;
      }
  };

  return(
    <>
      {<div className={styles.wrap}>
        <div className={`inner ${styles.weather}`}>
          {weatherSkyFilter.slice(0,1).map((sky, skyId)=>(
            <div key={skyId} className={`${styles.weatherDaily} ${getWeatherBg(sky.fcstValue)}`}>
              {weatherNowFilter.map((weath, index)=>(
                <div key={index}>
                  <p>{weath.baseDate}</p>
                  <p>{weath.obsrValue}<span>&#8451;</span></p>
                </div>
              ))}
              <div>
                {weatherDayMinFilter.map((weather, idx)=>(
                  <b key={idx}>
                    {weather.fcstValue} <span>&#8451;</span>
                  </b>
                ))}
              </div>
            </div>
            ))}
          <WeatherWeek/>
        </div>
      </div>}
    </>
  );
}


