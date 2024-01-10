import { db } from "../../db/database.js";


export async function getMember() {

    const sql = `select name,id,password,nickname,email,phone,address,user_img,sms_check from fj_member`;

    return db.execute(sql)
        .then((rows) => rows[0]);

}

export async function mailCheck(id) {

    const sql = `select name,id,password,nickname,email,phone,address,user_img,sms_check from fj_member`;

    return db.execute(sql)
        .then((rows) => rows[0]);

}

export async function signUp({name,id,hpass,nickname,email,phone,totalAddr,image,checked}){

    const sql = `insert into fj_member(name,id,password,nickname,email,phone,address,user_img,sms_check) values(?,?,?,?,?,?,?,?,?)`;

    return db.execute(sql,[name,id,hpass,nickname,email,phone,totalAddr,image,checked])
        .then((result)=>'ok');

}



