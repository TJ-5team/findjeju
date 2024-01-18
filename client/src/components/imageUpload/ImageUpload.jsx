import React from 'react';
import axios from 'axios';
export default function ImageUpload({ getImage }) {

  const formData = new FormData();
  // FormData 객체를 생성하고 변수에 데이터를 저장한다.

  const FileUpload = (e) => {
    formData.append("file", e.target.files[0])

    //선택한 파일을 서버로 전송
    axios.post('http://localhost:8000/upload', formData)
      .then((result) => {
        getImage(result.data);
      });

  }

  return (
    <>
      <input type="file" name="upload" id="upload" onChange={(e) => { FileUpload(e) }} />
    </>
  );
}

