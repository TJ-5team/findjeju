import WeatherWeek from "./WeatherWeek";
import useGetDate from "../../../hooks/useGetDate";
import useGetList from "../../../hooks/useGetList";

export default function Weather (){
  const date = useGetDate(false, false, true);
  const [weather] = useGetList(`http://apis.data.go.kr/1360000/MidFcstInfoService/getMidTa?serviceKey=H4pEvj%2FnHLi4pMfSQvy0lqYgV7Wv1sdyTEBMecAG8%2Be%2FRh%2BjKs4mFAoT3D4cRrjVoEQQEyzLzSzrDjBCeYT9ng%3D%3D&numOfRows=10&pageNo=1&regId=11D20501&tmFc=${date}&dataType=JSON`);
  console.log(weather);
  return(
    <>
      <div>

      </div>
    </>
  );
}


