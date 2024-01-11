import {Cookies} from "react-cookie";


const cookies = new Cookies();

export const setCookie = (name,value,option) =>{
  // 쿠키이름, 쿠키값, 쿠키옵션
  console.log(cookies);
  
  return cookies.set(name,value,option)
  
}

export const getCookie = (name) =>{

  return cookies.get(name);
  //쿠키 이름 가져옴
  //쿠키가 필요한 곳에서 이 메소드 호출

}

export const removeCookie = (name) =>{

  console.log(cookies);
  return cookies.remove(name);
  //로그아웃하면 쿠키사라짐

}