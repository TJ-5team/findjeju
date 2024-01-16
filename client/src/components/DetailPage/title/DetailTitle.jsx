import React, { useState } from 'react';
import { PiEyeThin } from "react-icons/pi";
import { PiBookmarkSimpleThin } from "react-icons/pi";
import { PiBookmarkSimpleFill } from "react-icons/pi";
import { PiShareNetworkThin } from "react-icons/pi";
import styles from "./styles.module.css";
import { useLocation } from 'react-router';
import LikeButton from '../../main/rest/likebutton/LikeButton';

export default function DetailTitle({ commonList, detailInfo }) {
  const [scrap, setScrap] = useState(false);
  const location = useLocation();

  console.log(commonList);

  console.log(detailInfo);

  
  const handleScrap = (e, idx) => {
    if (scrap === false) {
      setScrap(true);
      alert('즐겨찾기에 추가되었습니다!');
    } else {
      setScrap(false);
      alert('즐겨찾기를 취소하였습니다.');
    }
  };

  const handleCopyClipBoard = async (text) => {
    try {
      await navigator.clipboard.writeText(text);
      alert("클립보드에 링크가 복사되었어요.");
    } catch (err) {
      console.log(err);
    }
  };

  /* const userInfo = getUser();
  const navigate = useNavigate();

  const [reply, setReply] = useState("");
  const [replyList, setReplyList] = useState([]);
  const [replyReload, setReplyReload] = useState(false);
  const [replyRemove, setReplyRemove] = useState(false);

  const handleClick = (e) => {
    if (reply !== "") {
      axios.post("http://192.168.50.31:8000/review", { contentid: contentid, contenttypeid: contenttypeid, reply: reply, id: "try226" })
        .then(result => {
          if (result.data === "ok") {
            setReplyReload(!replyReload);
            setReply("");
          }
        });
    }
  };

  useEffect(() => {
    axios.get(`http://192.168.50.31:8000/review/${contentid}/${contenttypeid}`)
      .then(result => setReplyList(result.data));
  }, [replyReload, replyRemove])


  const handleRemove = (rid) => {
    const confirmRemove = window.confirm("정말 삭제하시겠습니까?")
    if(confirmRemove){
    axios.delete(`http://192.168.50.31:8000/review/remove/${rid}`)
      .then(result => {
        if (result.data === "ok") {
          alert("삭제되었습니다")
          setReplyRemove(!replyRemove);
        }
      })
    }
  }; */


  return (
    <>
      <h2 className={styles.title} key={commonList.contentid}>{commonList.title}</h2>
      <div className={styles.descriptionWrap}>
        <p className={styles.description}>{commonList.addr1.substring(0, 2)}</p>
        {detailInfo &&
          <>
            {detailInfo.map((l, idx) =>
              <p key={idx}>코스 총거리 : {l.distance}</p>
            )}
          </> 
        }
      </div>
      <div className={styles.iconMenuWrap}>
        <div className={styles.iconMenuLeft}>
          <LikeButton idx={0} />
          <span>1</span>
          <PiEyeThin size="28" />
          <span>1</span>
        </div>
        <div className={styles.iconMenuRight}>
          {scrap === true
            ? <PiBookmarkSimpleFill size="28" onClick={handleScrap} className={styles.iconScrapOn} />
            : <PiBookmarkSimpleThin size="28" onClick={handleScrap} />}
          <PiShareNetworkThin size="28" onClick={() => handleCopyClipBoard(`http://192.168.50.31:3000${location.pathname}`)} className={styles.iconShare} />
        </div>
      </div>
    </>
  );
}

