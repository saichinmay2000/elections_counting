import db from "../../lib/db";

export default async function handler(req, res) {
  if (req.method === "POST") {
    let message;
    const {
      one,
      two,
      three,
      four,
      five,
      six,
      seven,
      eight,
      nine,
      ten,
      eleven,
      twelve,
      username,
      userType,
    } = req.body;

    let results_election = [
      one,
      two,
      three,
      four,
      five,
      six,
      seven,
      eight,
      nine,
      ten,
      eleven,
      twelve,
    ];

    let array = [
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    ];
    var c = 0;
    results_election.forEach((element) => {
      if (element === "" || parseInt(element) === 0) {
        c += 1;
      }
      array[parseInt(element) - 1] = parseInt(element);
    });

    var status = "valid";
    if (c === 0) {
      status = "in-valid";
    }
    let result = "";
    if (userType === "Committee") {
      result = await db
        .promise()
        .query(
          `INSERT INTO com_elec (col1, col2, col3, col4, col5, col6, col7, col8, col9, col10, col11, col12, col13, col14, col15, col16, col17, col18, col19, col20, col21, col22, col23, col24,userid,status) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,'${username}','${status}')`,
          array
        );
    } else {
      result = await db
        .promise()
        .query(
          `INSERT INTO com_elec_presidents (col1, col2, userid, status) VALUES (?,?,'${username}','${status}')`,
          array
        );
    }
    if (result[0]["insertId"] != undefined) {
      res
        .status(200)
        .json({ status: true, message: "Registration successful" });
    } else {
      res
        .status(200)
        .json({ status: false, message: "Registration un-successful" });
    }
  } else if (req.method === "GET") {
    const userType = req.query.userType;
    const data = await db
      .promise()
      .query(
        `select count(*) from ${
          userType === "Committee" ? "com_elec" : "com_elec_presidents"
        } where userid = '${req.query.user}'`
      );
    res.status(200).json({ count: data[0][0]["count(*)"] });
  }
}
