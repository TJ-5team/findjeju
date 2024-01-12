import React from 'react';
import { Map, MapMarker } from 'react-kakao-maps-sdk';

export default  function Mapimage ({x,y,title}){
  return (
    <Map 
    center={{ lat: y, lng: x}} 
    style={{ width: '940px', height: '500px' }}
    level={3} 
    >
    <MapMarker position={{ lat: y, lng: x }}>{title}</MapMarker>
  </Map>
  );
}