import React from 'react';
import DetailInformation from '../components/DetailPage/DetailInformation';
import { useParams } from 'react-router-dom';
import DetailPageCultural from './../components/DetailPage/DetailPageCultural';

export default function DetailPage() {
  // const {contenttypeid} = useParams();

  return (
    <>
    {/* {contenttypeid === '14' && <DetailPageCultural />}
    {contenttypeid !== '14' && <DetailInformation />} */}
    <DetailInformation />
    </>
  );
}

