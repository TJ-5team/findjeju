import React from "react";
import { useParams } from "react-router-dom";
import useGetList from "../../hooks/useGetList";

export default function FestivalDetail(){
  const {contentid} = useParams();
  //const [list] = useGetList(`http://apis.data.go.kr/B551011/KorService1/detailCommon1?ServiceKey=CJ%2FlY8Dc3dAVFPdMOF6t%2FHXVFUUjp5iNiBLNNPkrq7ROViBwSkb6oMVC4s5NZjEztVJWKm0beaKYDWMn7suxaQ%3D%3D&contentTypeId=15&contentId=${contentid}&MobileOS=ETC&MobileApp=AppTest&defaultYN=Y&firstImageYN=Y&areacodeYN=Y&catcodeYN=Y&addrinfoYN=Y&mapinfoYN=Y&overviewYN=Y&_type=json`);
  //console.log(list);
  
  return(
    <div>
      
    </div>
  )
}