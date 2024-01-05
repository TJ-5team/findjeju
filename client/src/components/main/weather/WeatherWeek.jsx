import React, { useEffect } from "react";
import styles from './styles.module.css';
import useGetDate from "../../../hooks/useGetDate";
import useGetList from "../../../hooks/useGetList";

import { WiCloud } from "react-icons/wi"; // 흐림
// import { WiDaySunny } from "react-icons/wi"; // 맑음
// import { WiRain } from "react-icons/wi"; // 비
// import { WiSnow } from "react-icons/wi"; // 눈
// import { WiUmbrella } from "react-icons/wi"; // 강수확률용
//https://react-icons.github.io/react-icons/icons/wi/

export default function WeatherWeek (){
  const date = useGetDate(false, false, true);
  const arr = [3,4,5,6];
  const [weatherWeek] = useGetList(`http://apis.data.go.kr/1360000/MidFcstInfoService/getMidLandFcst?serviceKey=H4pEvj%2FnHLi4pMfSQvy0lqYgV7Wv1sdyTEBMecAG8%2Be%2FRh%2BjKs4mFAoT3D4cRrjVoEQQEyzLzSzrDjBCeYT9ng%3D%3D&numOfRows=10&pageNo=1&dataType=JSON&regId=11G00000&tmFc=${date}`)
  const [weatherWeekTem] = useGetList(`http://apis.data.go.kr/1360000/MidFcstInfoService/getMidTa?serviceKey=H4pEvj%2FnHLi4pMfSQvy0lqYgV7Wv1sdyTEBMecAG8%2Be%2FRh%2BjKs4mFAoT3D4cRrjVoEQQEyzLzSzrDjBCeYT9ng%3D%3D&numOfRows=40&pageNo=1&regId=11G00201&tmFc=${date}&dataType=JSON`);

  //console.log(weatherWeek);
  //console.log(weatherWeekTem);


console.log(weatherWeekTem[0]);

  return(
    <>
      <ul>
          {weatherWeekTem.map((val,idx)=>{
            return <> {
              weatherWeek.map((value,index)=>{
                return <li>
                <div>
                  <WiCloud className={styles.WeatherIcon}/>
                </div>
                <p>{value.wf3Am}</p>
                <p>
                  {val.taMin3} <span>&#8451;</span>
                  {val.taMax3} <span>&#8451;</span>
                </p>
                <span>강수확률 16&#37;</span>
              </li> 
              }) 
            }
          </>
          })}
          {weatherWeekTem.map((val,idx)=>{
            return <> {
              weatherWeek.map((value,index)=>{
                return <li>
                <div>
                  <WiCloud className={styles.WeatherIcon}/>
                </div>
                <p>{value.wf4Am}</p>
                <p>
                  {val.taMin4} <span>&#8451;</span>
                  {val.taMax4} <span>&#8451;</span>
                </p>
                <span>강수확률 16&#37;</span>
              </li> 
              }) 
            }
          </>
          })}
          {weatherWeekTem.map((val,idx)=>{
            return <> {
              weatherWeek.map((value,index)=>{

                return <li>
                <div>
                  <WiCloud className={styles.WeatherIcon}/>
                </div>
                <p>{value.wf5Am}</p>
                <p>
                  {val.taMin5} <span>&#8451;</span>
                  {val.taMax5} <span>&#8451;</span>
                </p>
                <span>강수확률 16&#37;</span>
              </li> 
              }) 
            }
          </>
          })}
          {weatherWeekTem.map((val,idx)=>{
            return <> {
              weatherWeek.map((value,index)=>{

                return <li>
                <div>
                  <WiCloud className={styles.WeatherIcon}/>
                </div>
                <p>{value.wf6Am}</p>
                <p>
                  {val.taMin6} <span>&#8451;</span>
                  {val.taMax6} <span>&#8451;</span>
                </p>
                <span>강수확률 16&#37;</span>
              </li> 
              }) 
            }
          </>
          })}
      </ul>
    </>
  );
}