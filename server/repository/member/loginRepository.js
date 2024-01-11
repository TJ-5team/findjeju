import {db} from "../../db/database.js";

export async function userLogin(id){

  return db.execute("select count(password) as cnt, ANY_VALUE(password) as pass from fj_member  where id= ?",[id])
  .then((rows)=>rows[0][0]);

}// 회원 로그인

