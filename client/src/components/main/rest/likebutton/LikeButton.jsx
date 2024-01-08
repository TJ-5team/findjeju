import React, { useState } from 'react';
import { PiHeartLight } from "react-icons/pi";
import { PiHeartThin } from "react-icons/pi";
import { PiHeartFill } from "react-icons/pi";
import styles from "./styles.module.css";

export default function LikeButton({ idx }) {
  const [like, setLike] = useState(undefined);

  const handleLike = (e, idx) => {
    console.log(e.target);
    if (like != idx) {
      setLike(idx)
      alert('좋아요를 누르셨습니다!')
    } else {
      setLike(!idx)
      alert('좋아요를 취소하였습니다.')
    }
  }

  return (
    <>
      {like === idx
        ? <PiHeartFill className={styles.active} onClick={(e) => handleLike(e, idx)} />
        : <PiHeartLight className={styles.likebtn} onClick={(e) => handleLike(e, idx)} />
      }
    </>
  );
}

