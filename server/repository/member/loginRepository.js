import {db} from "../../db/database.js";

export async function userLogin(id){

  return db.execute("select count(password) as cnt, ANY_VALUE(password) as pass from fj_member  where id= ?",[id])
  .then((rows)=>rows[0][0]);

}// 회원 로그인

export async function removeUser(id){

  const sql = `delete from fj_member where id = ?`;

  return db.execute(sql,[id])
  .then((result) => 'ok');

}

export async function getUser(mid){

  const sql = `select name,id,password,nickname,email,phone,address,user_img as image,sms_check from fj_member where id = ?`;

  return db.execute(sql,[mid])
  .then((rows) => rows[0]);

}


