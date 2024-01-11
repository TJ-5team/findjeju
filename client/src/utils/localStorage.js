import React from "react";
// 세션은 요청정보 브라우저에서 실행되어지는 처리를 하다가 브라우저가 종료가되면 세션에 저장한건 사라짐
// 로컬스토리지에 저장이되어있는것은 브라우저요청이 끝나고 브라우저가 아예 종료가돼도 살아있음
import {getCookie,removeCookie} from "./cookie.js";

/* export const getUser = () =>{

  let userInfo = localStorage.getItem('userInfo') && getCookie("x-auth-jwt")
                  ? JSON.parse(localStorage.getItem('userInfo'))
                  : null;
  // 로컬스토리지 userInfo값과 쿠키안에 x-auth-jwt 가 둘다 있으면
  // 로컬스토리지에서 userInfo의 값 가져온다.

  return userInfo;

}; */

export const getUser = () =>{

  const allData = localStorage.getItem('persist:root');
  const changeData = JSON.parse(allData)
  const login = JSON.parse(changeData.login);
  const member = JSON.parse(JSON.stringify(login));
  const userInfo = JSON.parse(member.member)
  // const userInfo = JSON.parse(login.member)
  // const changeData = JSON.parse(JSON.stringify(allData));
  // const login = JSON.parse(JSON.stringify(changeData).login);

  return userInfo;



}

export const removeUser = () =>{

  //로그아웃하면 로컬스토리지 사라짐
  removeCookie('x-auth-jwt');
  //로컬스토리지 삭제할 때 쿠키도 같이 삭제
  localStorage.clear('userInfo')

};





