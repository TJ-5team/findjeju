import mysql from "mysql2";

const pool = mysql.createPool({
  host: '192.168.50.31',
  user: 'root',
  password : '1234',
  port : '3306',
  database : 'findjeju'
})

export const db = pool.promise();

