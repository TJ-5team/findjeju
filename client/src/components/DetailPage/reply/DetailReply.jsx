import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { getUser } from '../../../utils/localStorage';
import { useNavigate } from 'react-router-dom';
import styles from "./styles.module.css";
import { PiTrashThin } from 'react-icons/pi';
import LikeButton from '../../main/rest/likebutton/LikeButton';
import ImageUpload from '../../imageUpload/ImageUpload';
import { useDispatch, useSelector } from 'react-redux';
import { UserData } from '../../../api/userApi';
import { userData } from '../../../reselector/userReselector.js';
import { BsCheckLg } from 'react-icons/bs';

export default function DetailReply({ contentid, contenttypeid }) {
  const userInfo = getUser();
  const navigate = useNavigate();
  const [reply, setReply] = useState("");
  const [replyList, setReplyList] = useState([]);
  const [replyReload, setReplyReload] = useState(false);
  const [replyRemove, setReplyRemove] = useState(false);
  const [replyImage, setReplyImage] = useState(null);
  const { user } = useSelector(userData);
  const state = useSelector((state) => state);

  // console.log(user);

  useEffect(() => {
    axios.get(`http://localhost:8000/review/${contentid}/${contenttypeid}`)
      .then(result => setReplyList(result.data));
  }, [replyReload, replyRemove])
  console.log(replyList);

  const getImage = (e) => {
    setReplyImage(e)
  }

  const handleClick = (e) => {
    if (reply !== "") {
      axios.post("http://localhost:8000/review", { contentid: contentid, contenttypeid: contenttypeid, reply: reply, replyImage: replyImage, id: userInfo.id })
        .then(result => {
          if (result.data === "ok") {
            setReplyReload(!replyReload);
            setReply("");
          }
        });
    }
  };




  const handleRemove = (rid) => {
    const confirmRemove = window.confirm("정말 삭제하시겠습니까?")
    if (confirmRemove) {
      axios.delete(`http://localhost:8000/review/remove/${rid}`)
        .then(result => {
          if (result.data === "ok") {
            alert("삭제되었습니다")
            setReplyRemove(!replyRemove);
          }
        })
    }
  };

  return (
    <>
      <h3 className={styles.reply}>
        여행톡
        {replyList && <span>{replyList.length}</span>}
      </h3>
      <div className={styles.replyWrap}>
        {/* 로그인 기능 완료되면 삼항식 구현하기 */}
        <textarea className={styles.replyText} type="text" placeholder={userInfo.id ? "소중한 댓글을 남겨주세요." : "로그인 후 소중한 댓글을 남겨주세요."}
          value={reply} onChange={(e) => setReply(e.target.value)} disabled={userInfo.id ? false : true} />
        <div className={styles.replyBtnWrap}>
          {userInfo.id && <ImageUpload getImage={getImage} />}
          {/* <button>
                <img src="http://localhost:3000/images\detailPage\btn_reply_file.gif" alt="" />
              </button> */}
          {userInfo.id
            ? <button type="button" onClick={handleClick}>등록</button>
            : <button type="button" onClick={() => navigate('/login')}>로그인</button>
          }
        </div>
        {replyImage &&
          <div className={styles.replyImageWrap}>
            <img src={`http://localhost:8000/${replyImage}`} alt="" />
            <p>이미지 첨부는 최대 1개까지 가능합니다. <br />변경을 원하시면 다시 등록해주세요.</p>
          </div>
        }
      </div>

      {replyList && replyList.map(reply =>
        <div className={styles.reviewList} key={reply.rid}>
          <div className={styles.userImg}>
            {!reply.user_img
              ? <img src="http://127.0.0.1:3000/images/mypage/user.png" alt="프로필이미지" />
              : <img src={"http://127.0.0.1:8000/" + reply.user_img} alt="유저이미지" />}
          </div>
          <div className={styles.reviewText}>
            {reply.review_img &&
              <div className={styles.reviewImage}>
                <img src={"http://127.0.0.1:8000/" + reply.review_img} alt="리뷰사진" />
              </div>}
            <div>{reply.review_text}</div>
            <span>{reply.id}</span>
            <span>|</span>
            <span>{reply.rdate}</span>
          </div>
          <div className={styles.likebtnWrap}>
            <LikeButton idx={0} />
            {userInfo.id && <PiTrashThin size="25" className={styles.replyDelete} onClick={() => handleRemove(reply.rid)}/*  data-id={reply.rid} */ />}
          </div>
        </div>
      )}
    </>
  );
}

