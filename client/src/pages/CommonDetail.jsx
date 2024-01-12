import React from 'react';
import DetailPage from './DetailPage';
import { useParams } from 'react-router-dom';
import TripCourse from '../components/tripCourse/TripCourse';

export default function CommonDetail() {
  let params = useParams()
  console.log(params);
  if(params.contenttypeid === "25"){
    return(
      <TripCourse/>
    );
  }
  return (
      <DetailPage/>  
  );
}

