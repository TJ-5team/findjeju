import { db } from "../db/database.js";

export async function insertReview({contentid, contenttypeid, reply, id}) {
  const sql = `insert into fj_review(id, contentid, contenttypeid, review_text, rdate) values(?,?,?,?, curdate())`;
  return db.execute(sql, [id, contentid, contenttypeid, reply])
    .then(result=>("ok"));
}

export async function getReview({contentid, contenttypeid}) {
  const sql = `select id, contentid, contenttypeid, review_text, review_img, left(rdate,10) rdate from fj_review where contentid=? and contenttypeid=?`;
  return db.execute(sql, [contentid, contenttypeid])
    .then(rows => rows[0]);
}