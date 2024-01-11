import React, { useEffect, useState } from "react";
import Pagination from 'rc-pagination';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'rc-pagination/assets/index.css'
import { useDispatch, useSelector } from "react-redux";
import { subListData } from './../../reselector/subReselector';
import { SubData } from "../../api/subApi";
import { useLocation } from "react-router-dom";

export default function Sub(){
  const path = useLocation().pathname;
  const [ContentTypeId, setContentTypeId] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const dispatch = useDispatch();

  useEffect(() => {
    switch (path) {
      case "/lodging":
        setContentTypeId(32);
        break;
      case "/restaurant":
        setContentTypeId(39);
        break;
      case "/tourist":
        setContentTypeId(12);
        break;
      case "/cultural":
        setContentTypeId(14);
        break;
      case "/sports":
        setContentTypeId(28);
        break;
      case "/shopping":
        setContentTypeId(38);
        break;
      default:
        break;
    }
  }, [path]);

  const {list, totalCount, pageSize} = useSelector(subListData);

  useEffect(() => {
    dispatch(SubData(currentPage, ContentTypeId,));
  },[currentPage, ContentTypeId])

  console.log(list);
/*   const totalCount = 0
  const pageSize = 0 */

  return(
    <div style={{marginTop: "200px"}}>
      {<Pagination className="d-flex justify-content-center" current={currentPage} total={totalCount} pageSize={pageSize} onChange={(page) => setCurrentPage(page)}/>}
    </div>
  );
}