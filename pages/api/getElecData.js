import mysql from "mysql2/promise";

export default async (req, res) => {
  const connection = await mysql.createConnection({
    host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE,
  });
  if (req.method === "GET") {
    if (req.query.valid) {
      const array = [];
      for (var i = 1; i <= 24; i++) {
        const [rows] = await connection.execute(
          `SELECT COUNT(col${i}) AS count FROM com_elec WHERE col${i} <> 0 and status = 'valid'`
        );
        const count = rows[0].count;
        array.push(count);
      }
      const valid = await connection.execute(
        `SELECT COUNT(status) AS count FROM com_elec WHERE status = 'valid'`
      );
      await connection.end();
      res.status(200).json({ array, validCount: valid[0][0]["count"] });
    } else if (req.query.invalid) {
      const array = [];
      for (var i = 1; i <= 24; i++) {
        const [rows] = await connection.execute(
          `SELECT COUNT(col${i}) AS count FROM com_elec WHERE col${i} <> 0 and status = 'in-valid'`
        );
        const count = rows[0].count;
        array.push(count);
      }
      const invalid = await connection.execute(
        `SELECT COUNT(status) AS count FROM com_elec WHERE status = 'in-valid'`
      );
      await connection.end();
      res.status(200).json({ array, invalidCount: invalid[0][0]["count"] });
    }
  }
};
