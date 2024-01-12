import React, { useEffect, useState } from "react";
import styles from './styles.module.css';
import useGetDate from "../../../hooks/useGetDate";
import useGetList from "../../../hooks/useGetList";

import { WiDaySunny } from "react-icons/wi"; // 맑음
import { WiCloud } from "react-icons/wi"; // 구름많음
import { WiRain } from "react-icons/wi"; // 비
import { WiSnow } from "react-icons/wi"; // 눈
import { WiRainMix } from "react-icons/wi"; //비/눈
import { WiDayRain } from "react-icons/wi"; //소나기
import { WiUmbrella } from "react-icons/wi"; // 강수확률용


//https://react-icons.github.io/react-icons/icons/wi/

export default function WeatherWeek (){
  const date = useGetDate(false, false, true);
  const week = useGetDate(false);
  const arr = [3,4,5,6];
  /* const [weatherWeek] = useGetList(`http://apis.data.go.kr/1360000/MidFcstInfoService/getMidLandFcst?serviceKey=H4pEvj%2FnHLi4pMfSQvy0lqYgV7Wv1sdyTEBMecAG8%2Be%2FRh%2BjKs4mFAoT3D4cRrjVoEQQEyzLzSzrDjBCeYT9ng%3D%3D&numOfRows=10&pageNo=1&dataType=JSON&regId=11G00000&tmFc=${date.date}`) */
  const [weatherWeek] = useGetList(`http://apis.data.go.kr/1360000/MidFcstInfoService/getMidLandFcst?serviceKey=H4pEvj%2FnHLi4pMfSQvy0lqYgV7Wv1sdyTEBMecAG8%2Be%2FRh%2BjKs4mFAoT3D4cRrjVoEQQEyzLzSzrDjBCeYT9ng%3D%3D&numOfRows=10&pageNo=1&regId=11G00000&tmFc=${date.date}&dataType=JSON
  `)
  const [weatherWeekTem] = useGetList(`http://apis.data.go.kr/1360000/MidFcstInfoService/getMidTa?serviceKey=H4pEvj%2FnHLi4pMfSQvy0lqYgV7Wv1sdyTEBMecAG8%2Be%2FRh%2BjKs4mFAoT3D4cRrjVoEQQEyzLzSzrDjBCeYT9ng%3D%3D&numOfRows=40&pageNo=1&regId=11G00201&tmFc=${date.date}&dataType=JSON`);

  console.log(weatherWeek);
  console.log(weatherWeekTem);

  let today = new Date();   
  let month = today.getMonth() + 1;  // 월
  let weekDate = today.getDate();  // 날짜
  
  const getDayOfWeek = (day) => {
    const days = ['일', '월', '화', '수', '목', '금', '토'];
    return days[day];
  }
  const getWeatherIcon = (weatherStatus) => {
    if (weatherStatus === '맑음') {
      return <WiDaySunny />;
    } else if (weatherStatus === '구름많음' || weatherStatus === '흐림') {
      return <WiCloud />;
    } else if (weatherStatus === '구름많고 비' || weatherStatus === '흐리고 비') {
      return <WiRain />;
    } else if (weatherStatus === '구름많고 눈' || weatherStatus === '흐리고 눈') {
      return <WiSnow />;
    } else if (weatherStatus === '구름많고 비/눈' || weatherStatus === '흐리고 비/눈') {
      return <WiRainMix />;
    } else if (weatherStatus === '소나기' || weatherStatus === '구름많고 소나기' || weatherStatus === '흐리고 소나기') {
      return <WiDayRain />;
    } else {
      return <WiDaySunny />;
    }
  };

  return(
    <>
      <ul>
          {weatherWeekTem.map((val,idx)=>{
            return <li key={idx}> {
              weatherWeek.map((value,index)=>{
                const weekDay = getDayOfWeek((today.getDay() + 3) % 7);
                const weatherIcon = getWeatherIcon(value.wf3Am);
                return <div key={index}>
                <p>{month}. {weekDate+3} {weekDay}</p>
                <div className={styles.weatherIconBox}>
                  {weatherIcon}
                </div>
                <p>{value.wf3Am}</p>
                <p>
                  {val.taMin3} <span>&#8451;</span>
                  {val.taMax3} <span>&#8451;</span>
                </p>
                <span><WiUmbrella /> {value.rnSt3Am}&#37;</span>
              </div>
              })
            }
          </li>
          })}
          {weatherWeekTem.map((val,idx)=>{
            return <li key={idx}> {
              weatherWeek.map((value,index)=>{
                const weekDay = getDayOfWeek((today.getDay() + 4) % 7);
                const weatherIcon = getWeatherIcon(value.wf4Am);
                return <div key={index}>
                  {month}. {weekDate+4} {weekDay}
                <div className={styles.weatherIconBox}>
                  {weatherIcon}
                </div>
                <p>{value.wf4Am}</p>
                <p>
                  {val.taMin4} <span>&#8451;</span>
                  {val.taMax4} <span>&#8451;</span>
                </p>
                <span><WiUmbrella /> {value.rnSt4Am}&#37;</span>
              </div>
              }) 
            }
          </li>
          })}
          {weatherWeekTem.map((val,idx)=>{
            return <li key={idx}> {
              weatherWeek.map((value,index)=>{
                const weekDay = getDayOfWeek((today.getDay() + 5) % 7);
                const weatherIcon = getWeatherIcon(value.wf5Am);
                return <div key={index}>
                  {month}. {weekDate+5} {weekDay}
                  <div className={styles.weatherIconBox}>
                    {weatherIcon}
                  </div>
                  <p>{value.wf5Am}</p>
                  <p>
                    {val.taMin5} <span>&#8451;</span>
                    {val.taMax5} <span>&#8451;</span>
                  </p>
                  <span><WiUmbrella /> {value.rnSt5Am}&#37;</span>
                </div>
              }) 
            }
          </li>
          })}
          {weatherWeekTem.map((val,idx)=>{
            return <li key={idx}> {
              weatherWeek.map((value,index)=>{
                const weekDay = getDayOfWeek((today.getDay() + 6) % 7);
                const weatherIcon = getWeatherIcon(value.wf6Am);
                return <div key={index}>
                    {month}. {weekDate+6} {weekDay}
                    <div className={styles.weatherIconBox}>
                    {weatherIcon}
                  </div>
                  <p>{value.wf6Am}</p>
                  <p>
                    {val.taMin6} <span>&#8451;</span>
                    {val.taMax6} <span>&#8451;</span>
                  </p>
                  <span><WiUmbrella /> {value.rnSt6Am}&#37;</span>
                </div>
              }) 
            }
          </li>
          })}
      </ul>
    </>
  );
}