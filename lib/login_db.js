// lib/db.js
import mysql from 'mysql2/promise';

export const db = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'csc_elections',
});
export const query = async (sql, values) => {
  const connection = await db.getConnection();
  const [results] = await connection.execute(sql, values);
  connection.release();
  return results;
};
