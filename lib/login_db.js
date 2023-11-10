// lib/db.js
import mysql from 'mysql2/promise';

export const db = mysql.createPool({
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE,
});
export const query = async (sql, values) => {
  const connection = await db.getConnection((err) => {
    if (err) {
      console.error('Database connection failed:', err);
    } else {
      console.log('Connected to the database');
    }});
  const [results] = await connection.execute(sql, values);
  connection.release();
  return results;
};
