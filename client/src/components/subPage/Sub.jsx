import React, { useEffect, useState } from "react";
import Pagination from 'rc-pagination';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'rc-pagination/assets/index.css'
import { useDispatch, useSelector } from "react-redux";
import { subListData } from './../../reselector/subReselector';
import { SubData } from "../../api/subApi";
import { useLocation } from "react-router-dom";
import TripInfoComponents from "../tripInfo/TripInfoComponents";
import styles from './styles.module.css';

export default function Sub() {
  const path = useLocation().pathname;
  const [ContentTypeId, setContentTypeId] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [title, setTitle] = useState("");
  const dispatch = useDispatch();
  const { list, totalCount, pageSize } = useSelector(subListData);

  const contentTypes = {
    "/lodging": { id: 32, title: "숙소 추천" },
    "/restaurant": { id: 39, title: "음식점 추천" },
    "/tourist": { id: 12, title: "여행지 추천" },
    "/cultural": { id: 14, title: "문화시설 추천" },
    "/sports": { id: 28, title: "레포츠 추천" },
    "/shopping": { id: 38, title: "쇼핑 추천" },
    "/course": { id: 25, title: "여행코스" }
  };

  useEffect(() => {
    const contentType = contentTypes[path];
    if (contentType) {
      setContentTypeId(contentType.id);
      setTitle(contentType.title);
      setCurrentPage(1)
    }
  }, [path]);

  useEffect(() => {
    dispatch(SubData(currentPage, ContentTypeId));
  }, [currentPage, ContentTypeId]);

  return (
    <div style={{ marginTop: "130px" }}>
      <div className="inner">
        <TripInfoComponents title={title} lists={list} addr={true} />
        {<Pagination className="d-flex justify-content-center" current={currentPage} total={totalCount}
          pageSize={pageSize} onChange={(page) => setCurrentPage(page)} />}
      </div>
    </div>
  );
}