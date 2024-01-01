import { db } from "../../db/database.js";


export async function getMember() {

    const sql = `select name,id,password,nickname,email,phone,address,user_img,sms_check from fj_member`;

    return db.execute(sql)
        .then((rows) => rows[0]);

}